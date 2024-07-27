import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Profile() {
    await new Promise(r=>setTimeout(r,2000))
    const response = await prisma.user.findFirst({
        select:{
            des:true
        }
    })
    return <div >
       {response?.des}
    </div>
}