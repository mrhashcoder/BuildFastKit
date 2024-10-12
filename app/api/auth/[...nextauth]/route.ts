import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const prisma = new PrismaClient();

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text', placeholder: '' },
                password: {label: 'password', type: 'password', placeholder: ""}
            },
            async authorize(credentials: any) {
                console.log(credentials)
                const email = credentials.email
                const password = credentials.password

                const userData= await prisma.user.findUnique({
                    where: {
                        email,
                        password
                    }
                })

                if(!userData) {
                    return {
                        id: "",
                        msg: "user Not found"
                    }
                }
                console.log(userData)

                const {password: userPassword, ...data} = userData
                return {
                    id: "",
                    data: data
                }
            },   
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin"
    }

})

interface UserInfo {
    id: number,
    name: string,
    username: string,
    password: string
}


export { handler as GET, handler as POST }