import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { archiveOldGamesAndPredictions } from "@/libs/archiveServices";



export async function POST(req) {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "admin") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    try {
       const result = await archiveOldGamesAndPredictions() 

       return NextResponse.json(
        {message: "Archived successfully", ...result},
        {status: 200}
       )
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Archiving failed" },
            { status: 500 }
          );
    }
}