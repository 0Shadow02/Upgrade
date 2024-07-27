import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(){
      return NextResponse.json("hello")
}
export async function POST(req:NextRequest){
    const body = await req.json()
   
    return NextResponse.json("Server is working fine!!")
}