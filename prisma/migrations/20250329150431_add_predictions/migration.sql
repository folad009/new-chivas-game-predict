-- CreateTable
CREATE TABLE "Prediction" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "winningTeam" TEXT NOT NULL,
    "goalDifference" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prediction_pkey" PRIMARY KEY ("id")
);
