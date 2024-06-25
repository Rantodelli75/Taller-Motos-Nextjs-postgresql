import { NextResponse } from 'next/server';
import db from '@/libs/db'

export async function POST(request: { json: () => any }) {
    const data = await request.json()

    const propietario = db.usuario.findFirst ()


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

    const newmoto = await db.moto.create({
        data: {
            placa: data.placa,
            marca: data.marca,
            kilometraje: data.kilometraje,
            modelo: data.modelo,
            usuarioId: propietario
        }
    })

    console.log(propietario)

    return NextResponse.json(newmoto)
}