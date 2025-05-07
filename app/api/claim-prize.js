import prisma from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }

  const { id } = req.body;

  await prisma.prizeHistory.update({
    where: { id },
    data: { claimed: true },
  });

  res.json({ message: 'Prize claimed successfully' });
}