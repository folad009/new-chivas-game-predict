-- Step 1: Add points column and make userId nullable
ALTER TABLE "Prediction" 
ADD COLUMN "points" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "userId" TEXT;

-- Step 2: Create User table
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- Step 3: Create unique index on email
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Step 4: Add foreign key constraint for userId in Prediction table
ALTER TABLE "Prediction" 
ADD CONSTRAINT "Prediction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Step 5: Add foreign key constraint for gameId in Prediction table
ALTER TABLE "Prediction" 
ADD CONSTRAINT "Prediction_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Step 6: Update existing rows with a default userId
UPDATE "Prediction"
SET "userId" = 'default-user-id' -- Replace with actual userId
WHERE "userId" IS NULL;

-- Step 7: Alter userId column to be NOT NULL
ALTER TABLE "Prediction" 
ALTER COLUMN "userId" SET NOT NULL;
