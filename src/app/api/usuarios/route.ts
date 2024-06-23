import { NextApiRequest, NextApiResponse } from 'next';
import  prisma from '@/libs/db';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const usuarios = await prisma.usuario.findMany({
      select: {
        cedula: true,
      },
    });
    return res.json(usuarios);
  } else if (req.method === 'GET' && req.query.cedula) {
    const cedula = req.query.cedula;
    const user = await prisma.usuario.findFirst({
      where: {
        cedula,
      },
    });
    return res.json(user);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}