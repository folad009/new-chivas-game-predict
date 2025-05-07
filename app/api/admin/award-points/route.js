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

    const { gameId, actualWinningTeam, actualGoalDifference, period } = await req.json();

    if (!gameId || !actualWinningTeam || actualGoalDifference === undefined || !period) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const game = await prisma.game.findUnique({ where: { id: gameId } });
    if (!game) return NextResponse.json({ error: "Game not found" }, { status: 404 });

    const predictions = await prisma.prediction.findMany({ where: { gameId } });
    if (!predictions.length) return NextResponse.json({ message: "No predictions found." });

    const updatedResults = await Promise.all(
      predictions.map(p => updatePrediction(p, actualWinningTeam, actualGoalDifference, period))
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

async function updatePrediction(prediction, actualWinningTeam, actualGoalDifference, period) {
  const { points, halfTimePoints } = calculatePoints(prediction, actualWinningTeam, actualGoalDifference, period);
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

function calculatePoints(prediction, actualWinningTeam, actualGoalDifference, period) {
  if (period === "half-time") {
    let halfTimePoints = 0;
    if (prediction.predictedTeam === actualWinningTeam) halfTimePoints += 50;
    if (prediction.goalDifference === actualGoalDifference) halfTimePoints += 40;
    return { points: 0, halfTimePoints };
  }

  if (period === "full-time") {
    let points = 0;
    const correctWinner = prediction.predictedTeam === actualWinningTeam;
    const correctDiff = prediction.goalDifference === actualGoalDifference;
    const isDraw = prediction.predictionType === "draw" && actualWinningTeam === "draw";

    if (correctWinner && correctDiff) points = 100;
    else if (correctWinner && !correctDiff) points = 75;
    else if (isDraw && actualGoalDifference === 0) points = 100;
    else if (correctWinner || isDraw) points = 50;
    else if (correctDiff) points = 25;

    return { points, halfTimePoints: 0 };
  }

  return { points: 0, halfTimePoints: 0 };
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
