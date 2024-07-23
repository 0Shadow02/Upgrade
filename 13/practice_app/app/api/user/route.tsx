import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    const body = await req.json();
   
    const user = await prisma.user.create({
        data: {
            name:body.name,
            username: body.username,
            password: body.password
        }
    });

    return NextResponse.json({ message: "Signed up" });
}