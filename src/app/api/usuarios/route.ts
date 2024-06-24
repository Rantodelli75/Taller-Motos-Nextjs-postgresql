import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/libs/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const usuarios = await prisma.usuario.findMany({
      select: {
        Id: true,
        nombre: true,
        cedula: true,
        n_telefono: true,
        email: true,
        rol: true,
      },
    });
    return res.json(usuarios);
  } else if (req.method === 'GET' && req.query.cedula) {
    const cedula = parseInt(req.query.cedula, 10);
    if (isNaN(cedula)) {
      return res.status(400).json({ error: 'Invalid cedula' });
    }
    const user = await prisma.usuario.findFirst({
      where: {
        cedula: String(cedula), // Convert cedula to string since it's a string field in the model
      },
      select: {
        Id: true,
        nombre: true,
        cedula: true,
        n_telefono: true,
        email: true,
        rol: true,
      },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}