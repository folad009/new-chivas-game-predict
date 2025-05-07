/*
  Warnings:

  - You are about to drop the column `points` on the `Prediction` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Prediction" DROP COLUMN "points",
ADD COLUMN     "fullTimePoints" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "points";
