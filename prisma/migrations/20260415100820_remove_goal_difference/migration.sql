/*
  Warnings:

  - You are about to drop the column `goalDifference` on the `ArchivedPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `goalDifference` on the `Prediction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ArchivedPrediction" DROP COLUMN "goalDifference";

-- AlterTable
ALTER TABLE "Prediction" DROP COLUMN "goalDifference";
