import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  try {
    const archivedGames = await prisma.archivedGame.findMany({
      include: {
        predictions: true,
      },
      orderBy: { date: "desc" },
    });

    return NextResponse.json({ archivedGames }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch archived games:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch archived games" },
      { status: 500 }
    );
  }
}
