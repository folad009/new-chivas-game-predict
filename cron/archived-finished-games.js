import prisma from "../lib/prisma.js";

export async function archiveFinishedGames() {
    try {
      const gamesToArchive = await prisma.game.findMany({
        where: {
          date: { lt: new Date() },
        },
        include: {
          predictions: { include: { user: true } },
        },
      });
  
      console.log(`[ARCHIVE] Found ${gamesToArchive.length} games to archive`);
  
      for (const game of gamesToArchive) {
        await prisma.archivedGame.create({
          data: {
            id: game.id,
            team1: game.team1,
            team2: game.team2,
            team1Logo: game.team1Logo,
            team2Logo: game.team2Logo,
            gameType: game.gameType,
            date: game.date,
            predictions: {
              createMany: {
                data: game.predictions.map(p => ({
                  id: p.id,
                  userId: p.userId,
                  predictionType: p.predictionType,
                  predictedTeam: p.predictedTeam,
                  losingTeam: p.losingTeam,
                  goalDifference: p.goalDifference,
                  fullTimePoints: p.fullTimePoints || 0,
                  halfTimePoints: p.halfTimePoints || 0,
                })),
              },
            },
          },
        });
  
        await prisma.prediction.deleteMany({ where: { gameId: game.id } });
        await prisma.game.delete({ where: { id: game.id } });
  
        console.log(`[ARCHIVE] Done archiving and deleting game ${game.id}`);
      }
    } catch (err) {
      console.error("[ARCHIVE ERROR]", err);
    }
  }
  
