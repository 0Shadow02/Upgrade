
import { authoptions } from "@/app/lib/authoptions/page"
import NextAuth from "next-auth"


 const handler = NextAuth(authoptions)

export {handler as GET , handler as POST}