import { PrismaClient } from '@prisma/client'
import { emit } from 'process'
const prisma = new PrismaClient()

// async function getUser(username: string) {
//   const res=  await prisma.user.findMany({
//     where: {email:username}
//   }) 
//   console.log({user:res})
// }
// getUser("shadow@gmail.com")

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
// insertUser("shadow@gmail.com","password@12","shadow","san")

