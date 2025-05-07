import prisma from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  if (req.method === 'POST') {
    const { gameId, actualScore } = req.body;
    await prisma.game.update({
      where: { id: gameId },
      data: { actualScore },
    });
    
    const predictions = await prisma.prediction.findMany({ where: { gameId } });
    for (let prediction of predictions) {
      let predicted = prediction.predictedScore.split('-').map(Number);
      let actual = actualScore.split('-').map(Number);
      let points = 0;

      if (prediction.predictedScore === actualScore) {
        points = 10;
      } else {
        const diffPredicted = predicted[0] - predicted[1];
        const diffActual = actual[0] - actual[1];
        if (diffPredicted === diffActual) {
          points = 5;
        }
        if (
          (predicted[0] > predicted[1] && actual[0] > actual[1]) ||
          (predicted[0] < predicted[1] && actual[0] < actual[1])
        ) {
          points += 3;
        }
      }
      await prisma.prediction.update({
        where: { id: prediction.id },
        data: { points },
      });
    }
    res.json({ message: 'Scores updated and points assigned' });
  }
}