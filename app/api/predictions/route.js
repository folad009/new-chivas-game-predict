import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      gameId,
      predictionType,
      winningTeam,
      losingTeam,
      predictedTeam1Score,
      predictedTeam2Score,
      userId,
    } = body;

    if (
      !gameId ||
      !userId ||
      !predictionType ||
      predictedTeam1Score === undefined ||
      predictedTeam2Score === undefined
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const gameExists = await prisma.game.findUnique({
      where: { id: gameId },
      select: { team1: true, team2: true },
    });

    if (!gameExists) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    const validPredictionTypes = ["win", "lose", "draw"];
    if (!validPredictionTypes.includes(predictionType)) {
      return NextResponse.json({ error: "Invalid prediction type" }, { status: 400 });
    }

    const team1Score = parseInt(predictedTeam1Score, 10);
    const team2Score = parseInt(predictedTeam2Score, 10);

    if (
      Number.isNaN(team1Score) ||
      Number.isNaN(team2Score) ||
      team1Score < 0 ||
      team2Score < 0
    ) {
      return NextResponse.json({ error: "Invalid score values" }, { status: 400 });
    }

    const scoreWinner =
      team1Score === team2Score
        ? "draw"
        : team1Score > team2Score
          ? gameExists.team1
          : gameExists.team2;
    const scoreLoser =
      team1Score === team2Score
        ? null
        : team1Score > team2Score
          ? gameExists.team2
          : gameExists.team1;

    if (predictionType === "draw") {
      if (scoreWinner !== "draw") {
        return NextResponse.json(
          { error: "Draw prediction requires equal scores" },
          { status: 400 }
        );
      }
    } else if (predictionType === "win") {
      if (!winningTeam || ![gameExists.team1, gameExists.team2].includes(winningTeam)) {
        return NextResponse.json(
          { error: "Valid winning team is required for win prediction" },
          { status: 400 }
        );
      }
      if (scoreWinner === "draw" || scoreWinner !== winningTeam) {
        return NextResponse.json(
          { error: "Winning team must match predicted score result" },
          { status: 400 }
        );
      }
    } else if (predictionType === "lose") {
      if (!losingTeam || ![gameExists.team1, gameExists.team2].includes(losingTeam)) {
        return NextResponse.json(
          { error: "Valid losing team is required for lose prediction" },
          { status: 400 }
        );
      }
      if (scoreWinner === "draw" || scoreLoser !== losingTeam) {
        return NextResponse.json(
          { error: "Losing team must match predicted score result" },
          { status: 400 }
        );
      }
    }

    const predictedTeam = predictionType === "draw" ? null : scoreWinner;
    const predictedLosingTeam = predictionType === "draw" ? null : scoreLoser;

    const prediction = await prisma.prediction.create({
      data: {
        gameId,
        predictionType,
        predictedTeam,
        losingTeam: predictedLosingTeam,
        predictedTeam1Score: team1Score,
        predictedTeam2Score: team2Score,
        userId,
      },
    });

    return NextResponse.json({ message: "Prediction saved!", prediction });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
