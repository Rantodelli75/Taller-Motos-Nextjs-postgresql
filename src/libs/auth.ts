import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import prisma from "./db"
import { compare } from "bcrypt"
export const AuthOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {strategy: "jwt"},
    pages: {
        signIn: '/auth/login'
      },
    
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text", placeholder: "email@email.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if (!credentials?.email || !credentials?.password) {
              return null
            }
            const existingUser = await prisma.usuario.findUnique({
              where: {email: credentials?.email}
            })
            if (!existingUser) {
              return null;
            }

            const passwordMatch = await compare(credentials.password, existingUser.clave)
            if (!passwordMatch) {
              return null;
            }
            return {
              id: existingUser.Id + "",
              username: existingUser.nombre,
              email: existingUser.email,
              rol: existingUser.rol
            }
          }
         
        })
      ]
}