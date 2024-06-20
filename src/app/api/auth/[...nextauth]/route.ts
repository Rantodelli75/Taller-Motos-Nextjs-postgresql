import  CredentialsProvider  from 'next-auth/providers/credentials';
import { AuthOptions } from "@/libs/auth"
import NextAuth from "next-auth"
import db from '@/libs/db';
import bcrypt from 'bcrypt'

const authOptions = {
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Username", type: "text", placeholder: "jsmith" },
            clave: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if (!credentials ||!credentials.email ||!credentials.clave) {
              return null;
            }
          
            console.log(credentials);
          
            const userFound = await db.usuario.findUnique({
              where: {
                email: credentials.email
              }
            })
            //si el correo es incorrecto envia ese mensaje
            if (!userFound) throw new Error('Datos incorrectos')
          
            console.log(userFound);
          
            const matchPassword = bcrypt.compare(credentials.clave, userFound.clave);
          
            //si la clave es incorrecto envia ese mensaje
            if (!matchPassword) throw new Error('Datos incorrectos')
          
            // Devuelve el objeto User si la autenticación es correcta
            return { id: userFound.Id, name: userFound.nombre, email: userFound.email };
          }
          
        })
      ],
      pages: {
        signIn: '/auth/signIn'
      }
    }



const handler = NextAuth(
    AuthOptions
)

export { handler as GET, handler as POST }