import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE() {
  try {
    await prisma.prediction.deleteMany(); // Deletes ALL predictions
    return NextResponse.json({ message: "All predictions cleared successfully" });
  } catch (error) {
    console.error("Error clearing predictions:", error);
    return NextResponse.json({ error: "Failed to clear predictions" }, { status: 500 });
  }
}
