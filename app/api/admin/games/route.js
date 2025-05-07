import { addAdminGames, getAdminGames } from "@/libs/adminGames";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"; // ✅ Import NextResponse

export async function GET() {
  try {
    const games = await getAdminGames();
    return new Response(JSON.stringify({ games }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch games" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions); // ✅ Pass req to getServerSession

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  try {
    const body = await req.json();

    // ✅ Validate input data
    if (!body.team1 || !body.team2 || !body.date || !body.team1Logo || !body.team2Logo || !body.gameType) {
      return NextResponse.json({ error: "Invalid game data" }, { status: 400 });
    }

    const newGame = await addAdminGames(body);

    return new Response(
      JSON.stringify({ message: "Game added successfully", game: newGame }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Failed to add game" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
