/*
  Warnings:

  - You are about to drop the column `archived` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "archived";

-- CreateTable
CREATE TABLE "ArchivedGame" (
    "id" TEXT NOT NULL,
    "team1" TEXT NOT NULL,
    "team2" TEXT NOT NULL,
    "team1Logo" TEXT NOT NULL DEFAULT 'https://example.com/default-logo.png',
    "team2Logo" TEXT NOT NULL DEFAULT 'https://example.com/default-logo.png',
    "gameType" TEXT NOT NULL DEFAULT 'Friendly Match',
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArchivedGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArchivedPrediction" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "predictionType" TEXT,
    "predictedTeam" TEXT,
    "losingTeam" TEXT,
    "goalDifference" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullTimePoints" INTEGER NOT NULL DEFAULT 0,
    "halfTimePoints" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ArchivedPrediction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ArchivedPrediction" ADD CONSTRAINT "ArchivedPrediction_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "ArchivedGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
