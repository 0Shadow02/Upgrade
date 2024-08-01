import NextAuth from "next-auth"
import { Next_Auth } from "@/app/lib/auth"


const handler = NextAuth(Next_Auth)

export { handler as GET, handler as POST }