import { NextApiRequest, NextApiResponse } from 'next';

const usuarios = [
  { cedula: '12345678', nombre: 'John Doe', apellido: 'Doe', email: 'johndoe@example.com', telefono: '0412123456' },
  { cedula: '23456789', nombre: 'Jane Doe', apellido: 'Doe', email: 'janedoe@example.com', telefono: '0423123456' },
  // Add more users here
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(usuarios);
  } else if (req.method === 'GET' && req.query.cedula) {
    const cedula = req.query.cedula;
    const user = usuarios.find((user) => user.cedula === cedula);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}