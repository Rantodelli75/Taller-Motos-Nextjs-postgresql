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
            email: { label: "nombre", type: "text", placeholder: "jsmith" },
            clave: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials ||!credentials.email ||!credentials.clave) {
              return null;
            }
          
            console.log(credentials);
          
            const userFound = await db.usuario.findUnique({
              where: {
                email: credentials.email
              }
            })
            if (!userFound) {
              return null; // email not found
            }
    
            console.log(userFound);
    
            const matchPassword = await bcrypt.compare(credentials.clave, userFound.clave) || credentials.clave === userFound.clave;
    
            if (!matchPassword) {
              return null; // password incorrect
            }
    
            // Devuelve el objeto User si la autenticación es correcta
            return { id: userFound.Id, name: userFound.nombre, email: userFound.email, rol: userFound.rol };
          }
          
        })
      ],
      pages: {
        signIn: '/auth/login'
      }
    }



const handler = NextAuth (authOptions)

export { handler as GET, handler as POST }