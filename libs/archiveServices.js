import prisma from "@/lib/prisma";
import dayjs from "dayjs";

export async function archiveOldGamesAndPredictions() {
    const today = dayjs().startOf("day").toDate();

    const oldGames = await prisma.game.findMany({
        where: {
            // date: { lt: today },
            archived: false
        },
        orderBy: { date: "asc" },
    })

    const archive = await prisma.game.updateMany({
        where: {
            id: { in: oldGames.map((game) => game.id) },
          },
          data: {
            archived: true,
          },
    })

    return {
        totalArchived: archive.count,
    }
}