import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Not authenticated" }, { status: 403 });
  }

  // Static Prize History Data
  const history = [
    { id: 1, date: "Date: 2025-02-20", prize: "🏆 1st Place - Pack of Juices", claimed: false },
    { id: 2, date: "Date: 2025-01-15", prize: "🥈 2nd Place - Football", claimed: true },
  ];

  return Response.json({ history });
}
