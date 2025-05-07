import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAdminGames() {
    return await prisma.game.findMany({
        where: {isArchived: false},
    });
}

export async function addAdminGames(game) {
    const { team1, team2, date, team1Logo, team2Logo, gameType } = game;

    if (!team1 || !team2 || !date || !team1Logo || !team2Logo || !gameType) {
        throw new Error("All fields (team1, team2, date, team1Logo, team2Logo, gameType) are required.");
    }

    await prisma.game.updateMany({
        where: {isArchived: false},
        data: {isArchived: true}
    })

    return await prisma.game.create({
        data: { team1, team2, date: new Date(date), team1Logo, team2Logo, gameType, isArchived: false },
    });
}

export async function clearAdminGames() {
    return await prisma.game.deleteMany();
}