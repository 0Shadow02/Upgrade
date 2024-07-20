import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient()
export function GET(){
    return Response.json({
        email:"shadow@gmailcom",
        name : "shadow"
    })
}
export async function POST(req: NextRequest){
    const body = await req.json()
    console.log(body)
    await prisma.User.create({
       data:{
        username : body.username,
        password : body.password
     }})

    return Response.json({
        message:"You are logged in successfully",
        body:body
    })
}