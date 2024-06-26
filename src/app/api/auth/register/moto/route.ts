import { NextResponse } from 'next/server';
import db from '@/libs/db'
import { user } from '@nextui-org/react';

export async function POST(request: { json: () => any }) {
    const data = await request.json()

    async function getPrimeiroUsuarioId() {
        const usuario = await db.usuario.findFirst();
        return usuario?.Id;
      }


    const motoFound = await db.moto.findUnique({
        where: {
            placa: data.placa
        }
    })

    if (motoFound) {
        return NextResponse.json({
            message: "La placa ya esta registrada"
        },{
            status: 400
        })
    }

    const primeiroUsuarioId = await getPrimeiroUsuarioId();
  const newmoto = await db.moto.create({
    data: {
      usuarioId: primeiroUsuarioId,
      placa: data.placa,
      marca: data.marca,
      modelo: data.modelo,
      kilometraje: data.kilometraje,
    },
  });

    console.log(getPrimeiroUsuarioId)

    return NextResponse.json(newmoto)
}