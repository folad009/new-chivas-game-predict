import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 403 });
  }

  // Static prize data
  const staticPrizes = {
    "user1@example.com": "🏆 1st Place - Box 1",
    "user2@example.com": "🥈 2nd Place - Box 2",
    "user3@example.com": "🥉 3rd Place - Box 3",
  };

  const prize = staticPrizes[session.user.email] || null;

  return NextResponse.json({ prize });
}
