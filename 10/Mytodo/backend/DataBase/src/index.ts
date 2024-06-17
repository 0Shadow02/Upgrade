import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create User
export async function CreateUser(username:string,firstName:string,lastName:string,password:string ){
    const res = await prisma.userData.create({
        data:{
            username,
            firstName,
            lastName,
            password,
        }
    })
   return res
}
// CreateUser("Hinata@gmail.com","Hinata","chan","password@12")

// Update Uesr


interface UpdateParams {
    firstName :string,
    lastName : string
}
export async function UpdateUser(username:string ,{
    firstName, 
    lastName
}:UpdateParams){

    const res = await prisma.userData.update({
        where : { username},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res)

}
// UpdateUser("Shadow@gmail.com",{firstName:"Shadow",lastName:"Sama"})

// Get UserData 

export async function GetUserData(username:string){
    const res = await prisma.userData.findMany({
        where : {username},

    })
    console.log(res)
}
// GetUserData("Shadow33@gmail.com")

export async function GetAllUserData(){
    const res = await prisma.userData.findMany({
        where : {},

    })
    return res
}
// GetAllUserData()


export async function CreatTodo(title:string,description:string,userId:number){
    const res = await prisma.mytodo.create({
        data:{
            title,
            description,
            userId
        }
    })
    console.log(res)
}
// CreatTodo("Go to Gym","timings from 3pm to 5pm",2)

export async function OnclickDone(id:number){
    await prisma.mytodo.update({
        where : {id},
        data : {
            done:true
        }
    })
}
// OnclickDone(1)


export async function GetTodos(){
   const res =  await prisma.mytodo.findMany({
        where : {},
        
    })
    console.log(res)
}
// GetTodos()