/*
  Warnings:

  - You are about to drop the column `winningTeam` on the `Prediction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Prediction" DROP COLUMN "winningTeam",
ADD COLUMN     "predictedTeam" TEXT,
ADD COLUMN     "predictionType" TEXT;
