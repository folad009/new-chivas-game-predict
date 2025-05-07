import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const { gameId, predictionType, winningTeam, losingTeam, goalDifference, userId } = body;

    if (!gameId || !predictionType || goalDifference === undefined || !userId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Validate predictionType
    const validPredictionTypes = ['win', 'lose', 'draw'];
    if (!validPredictionTypes.includes(predictionType)) {
      return NextResponse.json({ error: "Invalid prediction type" }, { status: 400 });
    }

    // Handle missing team information for win/lose predictions
    let predictedTeam = null;
    let predictedLosingTeam = null;

    if (predictionType === 'win') {
      if (!winningTeam) {
        return NextResponse.json({ error: "Predicted winning team is required for win predictions" }, { status: 400 });
      }
      predictedTeam = winningTeam;
    } else if (predictionType === 'lose') {
      if (!losingTeam) {
        return NextResponse.json({ error: "Predicted losing team is required for lose predictions" }, { status: 400 });
      }
      predictedTeam = winningTeam;
      predictedLosingTeam = losingTeam;
    } else if (predictionType === 'draw') {
      predictedTeam = null;
      predictedLosingTeam = null;
    }

    const prediction = await prisma.prediction.create({
      data: {
        gameId,
        predictionType,
        predictedTeam, // Store the predicted winning or losing team
        losingTeam: predictedLosingTeam, // Store the predicted losing team (for "lose" type predictions)
        goalDifference: parseInt(goalDifference, 10),
        userId,
      },
    });

    return NextResponse.json({ message: "Prediction saved!", prediction });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
