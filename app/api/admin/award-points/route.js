import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const { gameId, actualTeam1Score, actualTeam2Score, period } = await req.json();

    if (
      !gameId ||
      actualTeam1Score === undefined ||
      actualTeam2Score === undefined ||
      !period
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const game = await prisma.game.findUnique({ where: { id: gameId } });
    if (!game) return NextResponse.json({ error: "Game not found" }, { status: 404 });

    const parsedActualTeam1Score = parseInt(actualTeam1Score, 10);
    const parsedActualTeam2Score = parseInt(actualTeam2Score, 10);
    if (
      Number.isNaN(parsedActualTeam1Score) ||
      Number.isNaN(parsedActualTeam2Score) ||
      parsedActualTeam1Score < 0 ||
      parsedActualTeam2Score < 0
    ) {
      return NextResponse.json({ error: "Invalid actual score values" }, { status: 400 });
    }

    const actualWinningTeam =
      parsedActualTeam1Score === parsedActualTeam2Score
        ? "draw"
        : parsedActualTeam1Score > parsedActualTeam2Score
          ? game.team1
          : game.team2;

    const predictions = await prisma.prediction.findMany({ where: { gameId } });
    if (!predictions.length) return NextResponse.json({ message: "No predictions found." });

    const updatedResults = await Promise.all(
      predictions.map((p) =>
        updatePrediction(
          p,
          actualWinningTeam,
          parsedActualTeam1Score,
          parsedActualTeam2Score,
          period
        )
      )
    );

    const affectedUserIds = [...new Set(updatedResults.filter(Boolean).map(p => p.userId))];
    const usersWithTotalPoints = await Promise.all(
      affectedUserIds.map(async userId => ({
        userId,
        totalPoints: await calculateUserTotalPoints(userId),
      }))
    );

    return NextResponse.json({
      message: "Points awarded successfully",
      updatedPredictions: updatedResults.filter(Boolean),
      usersWithTotalPoints,
    });

  } catch (error) {
    console.error("Error awarding points:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

async function updatePrediction(
  prediction,
  actualWinningTeam,
  actualTeam1Score,
  actualTeam2Score,
  period
) {
  const { points, halfTimePoints } = calculatePoints(
    prediction,
    actualWinningTeam,
    actualTeam1Score,
    actualTeam2Score,
    period
  );
  if (points === 0 && halfTimePoints === 0) return null;

  const updateData = {};
  if (period === "full-time") {
    updateData.fullTimePoints = (prediction.fullTimePoints || 0) + points + (prediction.halfTimePoints || 0);
  }
  if (period === "half-time") {
    updateData.halfTimePoints = (prediction.halfTimePoints || 0) + halfTimePoints;
  }

  await prisma.prediction.update({ where: { id: prediction.id }, data: updateData });
  return {
    userId: prediction.userId,
    predictionId: prediction.id,
    pointsAwarded: points,
    halfTimePointsAwarded: halfTimePoints,
    period,
  };
}

function calculatePoints(
  prediction,
  actualWinningTeam,
  actualTeam1Score,
  actualTeam2Score,
  period
) {
    let points = 0;
   let halfTimePoints = 0;
  const normalizedActualWinner = actualWinningTeam.toLowerCase();
  const isDraw = normalizedActualWinner === "draw";
  const exactScoreMatch =
    prediction.predictedTeam1Score === actualTeam1Score &&
    prediction.predictedTeam2Score === actualTeam2Score;

  if (period === "half-time") {
    if (isDraw && prediction.predictionType === "draw") halfTimePoints += 20;
    if (!isDraw && prediction.predictedTeam === actualWinningTeam) halfTimePoints += 20;
    if (exactScoreMatch) halfTimePoints += 20;
  }

  if (period === "full-time") {
    const correctWinner = prediction.predictedTeam === actualWinningTeam;
    const correctDraw = prediction.predictionType === "draw" && isDraw;

    if (correctWinner || correctDraw) points += 60;
    if (exactScoreMatch) points += 60;
  }

  const totalpoints = points + halfTimePoints;

  return { points, halfTimePoints, totalpoints };
}

async function calculateUserTotalPoints(userId) {
  const result = await prisma.prediction.aggregate({
    where: { userId },
    _sum: {
      fullTimePoints: true,
      halfTimePoints: true,
    },
  });
  return (result._sum.fullTimePoints || 0) + (result._sum.halfTimePoints || 0);
}
