import { addAdminGames, getAdminGames } from "@/libs/adminGames";

export async function GET() {
  const games = await getAdminGames();
  return new Response(JSON.stringify({games}), {
    status: 200,
    headers: {"Content-Type": "application/json"},
  })
}

export async function POST(req) {
  try {
    const body = await req.json();
    const newGame = await addAdminGames(body);

    return new Response(JSON.stringify({message: "Game added successfully", game: newGame}), {
      status: 201,
      headers: {"Content-Type": "application/json"},
    })
  } catch (error) {
    return new Response(
      JSON.stringify({error: error.message || "Failed to add game"}),
      {
        status: 400,
        headers: {"Content-Type": "application/json"},
      }
    )
  }
}
