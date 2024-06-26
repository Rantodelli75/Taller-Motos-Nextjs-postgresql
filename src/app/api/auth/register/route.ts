import { NextResponse } from 'next/server';
import db from '@/libs/db'
import bcrypt from 'bcrypt'
import { createClient } from '@/utils/supabase/server';

export async function POST(request: { json: () => any }) {
    const data = await request.json()
    console.log(data)

    const userFound = await db.usuario.findFirst({
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

    const cedulaFound = await db.usuario.findFirst({
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

    
    const datam =  {
        nombre: data.nombre,
        apellido: data.apellido,
        rol: data.rol,
        cedula: data.cedula,
        n_telefono: data.n_telefono,
        email: data.email,
        clave: clavesegura
    }
    const newUser = await db.usuario.create({
        data: {
            nombre: data.nombre,
            apellido: data.apellido,
            rol: data.rol,
            cedula: data.cedula,
            n_telefono: data.n_telefono,
            email: data.email,
            clave: clavesegura
        }
    })

    async function signup(datam: any) {
        const supabase = createClient()
      
        // type-casting here for convenience
        // in practice, you should validate your inputs
        const validation = {
          email: data.email,
          password: data.clave
        }
      
        const { error } = await supabase.auth.signUp(validation)
      
        if (error) {
          console.log(error)
        }
      }

    signup(datam)

    return NextResponse.json(newUser)
}