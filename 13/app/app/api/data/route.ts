import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import { any } from "zod";
const prisma = new PrismaClient()

export async function GET(){
      const res = await prisma.user.findFirst({
        select:{
            des:true
        }
      })
      console.log(res)
      return NextResponse.json("hello " + res?.des)
}
export async function POST(req:NextRequest){
    const body = await req.json()
    await prisma.user.create({
        data:{
            FirstName:body.FirstName,
            des:body.des
        }
    })
    return NextResponse.json("Server is working fine!!")
}