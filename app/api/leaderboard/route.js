import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req) {
  try {
    // Correct way to extract 'view' from query stringss
    const { searchParams } = new URL(req.url);
    const view = searchParams.get("view") || "full-time"; // Default to "full-time"

    // Fetch all predictions with user data
    const predictions = await prisma.prediction.findMany({
      include: {
        user: {
          select: { id: true, name: true },
        },
      },
    });

    if (!predictions.length) {
      return NextResponse.json({ leaderboard: [] });
    }

    // Helper to format time
    const formatTime = (date) => {
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    };

    // Sort manually by points
    const sortedPredictions = predictions.sort((a, b) => {
      const aPoints = view === "half-time" ? a.halfTimePoints || 0 : a.fullTimePoints || 0;
      const bPoints = view === "half-time" ? b.halfTimePoints || 0 : b.fullTimePoints || 0;

      if (bPoints === aPoints) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }

      return bPoints - aPoints;
    });

    // Map with ranks
    const leaderboard = sortedPredictions.map(({ user, halfTimePoints, fullTimePoints, createdAt }, index) => ({
      rank: index + 1,
      userId: user.id,
      userName: user.name,
      halfTimePoints: halfTimePoints || 0,
      fullTimePoints: fullTimePoints || 0,
      predictionTime: formatTime(new Date(createdAt)),
    }));

    return NextResponse.json({ leaderboard });
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard data" },
      { status: 500 }
    );
  }
}
