import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create User
async function CreateUser(username:string,firstName:string,lastName:string,password:string ){
    const res = await prisma.userData.create({
        data:{
            username,
            firstName,
            lastName,
            password,
        }
    })
    console.log(res)
}
// CreateUser("Hinata@gmail.com","Hinata","chan","password@12")

// Update Uesr


interface UpdateParams {
    firstName :string,
    lastName : string
}
async function UpdateUser(username:string ,{
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

async function GetUserData(username:string){
    const res = await prisma.userData.findMany({
        where : {username},

    })
    console.log(res)
}
GetUserData("Shadow@gmail.com")

async function GetAllUserData(){
    const res = await prisma.userData.findMany({
        where : {},

    })
    console.log(res)
}
// GetAllUserData()
