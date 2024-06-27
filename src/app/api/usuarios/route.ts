import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/db';

export async function GET(request: NextApiRequest, res:NextApiResponse) {
  // Handle GET requests (e.g., user lookup)
  const data = request.query.email?.toString();
  try {
    const user = await prisma.usuario.findUnique({
      where: {
        email:data,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving user' });
  }
}
