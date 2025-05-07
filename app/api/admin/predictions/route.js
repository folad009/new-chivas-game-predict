import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Ensure prisma is correctly configured

export async function GET() {
  try {
    const predictions = await prisma.prediction.findMany({
      include: {
        user: true,
        game: true,
      },
    });

    return NextResponse.json({ predictions });
  } catch (error) {
    console.error("Error fetching predictions:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
