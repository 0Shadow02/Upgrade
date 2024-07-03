import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// async function insertUser(username:string, password:string,firstName:string,lastName:string){
//      await prisma.users.create({
//     data: {
//         username,
//         password ,
//         firstName ,
//         lastName ,
//     }
// })

// }
// // insertUser("dark@gmail.com","Pass123","dark","sama")

// interface updatedata {
//     firstName?:string
//     lastName?: string
// }
// async function updateUser(id:number,updatedata:updatedata){
//  const response= await prisma.users.update({
//     where: {
//       id : id
//     },
//     data: {
//       lastName:updatedata.lastName
//     }
//   })
//   console.log(response)
  
// }

// updateUser(1,{lastName:"san"})


async function createTodo(user_id: number, title: string, description: string) {
    await prisma.todo.create({
        data: {
            user_id,
            title,
            description,   
        }
    })

}

// createTodo(1, "study DSA", "timings from 2pm to 4pm");

async function gettodo(user_id:number){
  const response=  await prisma.todo.findMany({
        where: {
            user_id
        },
        select:{
            title:true,
            description:true,
            done:true,
            user:true,

        }
    })
    console.log(response)
}
async function button(id:number){
    await prisma.todo.update({
        where: {
            id
        },
        data:{
            done: true
        }
    })
}
gettodo(1)
// button(1)