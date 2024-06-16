import { PrismaClient } from '@prisma/client'
import { emit } from 'process'
const prisma = new PrismaClient()

// Get user:-->

async function getUser() {
  const res=  await prisma.user.findMany({
    where: {}
  }) 
  console.log({user:res})
}
getUser()





// Update User:-->

// interface UpdateParams {
//     firstName:string,
//     lastName:string
// }
// async function updateUser(username:string, {
//     firstName,
//     lastName
// }:UpdateParams){
//    const res = await prisma.user.update({
//         where: {email:username},
//         data:{
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }
// updateUser("shadow@gmail.com",{firstName:"dragon",lastName:"sama"})










// Create User:--->


// async function insertUser(email:string,password:string,firstName:string , lastName:string){
//    const res = await prisma.user.create({
//         data:{
//             email,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }
// insertUser("ryuji@gmail.com","password@32","ryuji","kun")

