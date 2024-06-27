import { NextApiRequest, NextApiResponse } from 'next';
import db from "@/libs/db"
import { NextResponse } from 'next/server';

export async function GET(request: { json: () => any }) {
const data = await request.json()

  const newUser = db.usuario.findUnique({
    where: {email: data.email}
  }

  )
    return newUSer
 }
