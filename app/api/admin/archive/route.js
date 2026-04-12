import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { movePastGamesToArchive } from "@/libs/archiveServices";



export async function POST(req) {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "admin") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    try {
       const result = await movePastGamesToArchive();

       return NextResponse.json(
        { message: "Past games moved to archive", ...result },
        { status: 200 }
       );
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Archiving failed" },
            { status: 500 }
          );
    }
}