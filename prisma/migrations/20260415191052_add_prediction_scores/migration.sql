-- AlterTable
ALTER TABLE "ArchivedPrediction" ADD COLUMN     "predictedTeam1Score" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "predictedTeam2Score" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Prediction" ADD COLUMN     "predictedTeam1Score" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "predictedTeam2Score" INTEGER NOT NULL DEFAULT 0;
