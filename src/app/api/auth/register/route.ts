import { NextResponse } from 'next/server';
import db from '@/libs/db'
import bcrypt from 'bcrypt'

export async function POST(request: { json: () => any }) {
    const data = await request.json()


    const userFound = await db.usuario.findUnique({
        where: {
            email: data.email
        }
    })

    if (userFound) {
        return NextResponse.json({
            message: "El email ya existe"
        },{
            status: 400
        })
    }

    const cedulaFound = await db.usuario.findUnique({
        where: {
            cedula: data.cedula
        }
    })

    if (cedulaFound) {
        return NextResponse.json({
            message: "El numero de cedula ya existe"
        },{
            status: 400
        })
    }


  
    const clavesegura = await bcrypt.hash(data.clave, 10)
    const newUser = await db.usuario.create({
        data: {
            nombre: data.nombre,
            cedula: data.cedula,
            n_telefono: data.n_telefono,
            email: data.email,
            clave: clavesegura
        }
    })

    return NextResponse.json(newUser)
}