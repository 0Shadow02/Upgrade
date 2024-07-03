"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function createTodo(user_id, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todo.create({
            data: {
                user_id,
                title,
                description,
            }
        });
    });
}
createTodo(3, "study DSA", "timings from 2pm to 4pm");
function gettodo(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                user_id
            },
            select: {
                title: true,
                description: true,
                done: true,
                user: true,
            }
        });
        console.log(response);
    });
}
function button(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todo.update({
            where: {
                id
            },
            data: {
                done: true
            }
        });
    });
}
// gettodo(1)
// button(1)
