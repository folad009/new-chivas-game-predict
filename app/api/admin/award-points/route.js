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

    const { gameId, actualWinningTeam, period } = await req.json();

    if (!gameId || !actualWinningTeam || !period) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const game = await prisma.game.findUnique({ where: { id: gameId } });
    if (!game) return NextResponse.json({ error: "Game not found" }, { status: 404 });

    const predictions = await prisma.prediction.findMany({ where: { gameId } });
    if (!predictions.length) return NextResponse.json({ message: "No predictions found." });

    const updatedResults = await Promise.all(
      predictions.map((p) => updatePrediction(p, actualWinningTeam, period))
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

async function updatePrediction(prediction, actualWinningTeam, period) {
  const { points, halfTimePoints } = calculatePoints(
    prediction,
    actualWinningTeam,
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

function calculatePoints(prediction, actualWinningTeam, period) {
    let points = 0;
   let halfTimePoints = 0;
  const normalizedActualWinner = actualWinningTeam.toLowerCase();
  const isDraw = normalizedActualWinner === "draw";

  if (period === "half-time") {
    if (isDraw && prediction.predictionType === "draw") halfTimePoints += 50;
    if (!isDraw && prediction.predictedTeam === actualWinningTeam) halfTimePoints += 50;
  }

  if (period === "full-time") {
    const correctWinner = prediction.predictedTeam === actualWinningTeam;
    const correctDraw = prediction.predictionType === "draw" && isDraw;

    if (correctWinner || correctDraw) points = 100;
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
