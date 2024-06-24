import { NextResponse } from 'next/server';
import db from '@/libs/db'

export async function POST(request: { json: () => any }) {
    const data = await request.json()


    const userFound = await db.moto.findUnique({
        where: {
            placa: data.placa
        }
    })

    if (userFound) {
        return NextResponse.json({
            message: "El numero de placa ya fue registrado"
        },{
            status: 400
        })
    }

    const newMoto = await db.moto.create({
        data: {
            marca: data.marca,
            placa: data.placa,
            modelo: data.modelo,
            kilometraje: data.kilometraje,
            usuarioId: data.cedula
        }
    })

    return NextResponse.json(newMoto)
}