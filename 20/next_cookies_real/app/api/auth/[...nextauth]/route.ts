
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

 const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentails",
            credentials:{
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                 password: { label: "Password", type: "password" }
            },
            async authorize (credentails:any){
                const email =await credentails.username
                const password =await credentails.password
                return {
                    id:"userid",
                    email,
                    password
                }
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
 })

export {handler as GET , handler as POST}