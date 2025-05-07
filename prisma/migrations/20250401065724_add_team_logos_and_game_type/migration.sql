-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "gameType" TEXT NOT NULL DEFAULT 'Friendly Match',
ADD COLUMN     "team1Logo" TEXT NOT NULL DEFAULT 'https://example.com/default-logo.png',
ADD COLUMN     "team2Logo" TEXT NOT NULL DEFAULT 'https://example.com/default-logo.png';
