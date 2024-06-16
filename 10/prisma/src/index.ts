import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function intertUser(email:string,password:string,firstName:string , lastName:string){
    prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        }
    })
}