import prisma from "../lib/prisma.js";

/**
 * Moves games whose match date is in the past from `Game` into `ArchivedGame`,
 * copying predictions into `ArchivedPrediction`, then removes the live rows.
 * Idempotent: if a game id already exists in `ArchivedGame`, only the stale `Game` row is removed.
 */
export async function movePastGamesToArchive() {
  const now = new Date();

  const gamesToArchive = await prisma.game.findMany({
    where: { date: { lt: now } },
    include: { predictions: true },
  });

  let archivedCount = 0;

  for (const game of gamesToArchive) {
    try {
      await prisma.$transaction(async (tx) => {
        const alreadyArchived = await tx.archivedGame.findUnique({
          where: { id: game.id },
        });

        if (alreadyArchived) {
          await tx.prediction.deleteMany({ where: { gameId: game.id } });
          await tx.game.delete({ where: { id: game.id } });
          return;
        }

        const predictionRows = game.predictions.map((p) => ({
          id: p.id,
          userId: p.userId,
          predictionType: p.predictionType,
          predictedTeam: p.predictedTeam,
          losingTeam: p.losingTeam,
          goalDifference: p.goalDifference,
          fullTimePoints: p.fullTimePoints ?? 0,
          halfTimePoints: p.halfTimePoints ?? 0,
          createdAt: p.createdAt,
        }));

        await tx.archivedGame.create({
          data: {
            id: game.id,
            team1: game.team1,
            team2: game.team2,
            team1Logo: game.team1Logo,
            team2Logo: game.team2Logo,
            gameType: game.gameType,
            date: game.date,
            ...(predictionRows.length > 0
              ? {
                  predictions: {
                    createMany: { data: predictionRows },
                  },
                }
              : {}),
          },
        });

        await tx.prediction.deleteMany({ where: { gameId: game.id } });
        await tx.game.delete({ where: { id: game.id } });
      });
      archivedCount += 1;
    } catch (err) {
      console.error(`[ARCHIVE] Failed for game ${game.id}:`, err);
    }
  }

  return {
    totalFound: gamesToArchive.length,
    archivedCount,
  };
}

/** @deprecated Use movePastGamesToArchive — kept for existing imports */
export async function archiveOldGamesAndPredictions() {
  return movePastGamesToArchive();
}
