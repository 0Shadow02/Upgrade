import axios from "axios";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function Home() {
  const userData = await prisma.user.findFirst({
    where:{
      id:6
    }
  })
  console.log(userData)
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-500">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.username}
            </div>
        </div>
    </div>
  );
}
