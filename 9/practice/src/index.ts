// const greet = (name) => `Hello, ${name}!`;

import { types } from "pg";
import { number, string } from "zod";

// function time(fn:()=>void,t:number){
//     setTimeout(fn,t)
// }

// time(()=>{
//     console.log("hello")
// },3000)

// function isLegal(age: number) {
//     if (age > 18) {
//         return true;
//     } else {
//         return false
//     }
// }
// interface user {
//     firstName: string,
//     lastName: string,
//     password: string,
//     id: number,
//     age:number
// }

// const User = {
//     firstName:"shadow",
//     lastName: "sama",
//     password: "32kfjd",
//     id: 234234,
//     age:23
// }
// // console.log(User)
// function isLegal(user:user){
//     if(user.age <18){
//         return "User is under 18"
//     }
//     else{
//         return "User is over 18"
//     }
// }

// console.log(isLegal(User))


// type User ={
//     firstName:string
//     lastName: string
//     age: number
// }

type stringornumber = string|number
const num:stringornumber= 34
console.log(num)

















// function sum(a:number,b:number):number{
//    return a + b
// }
// console.log(sum(10,5))

// function greeting(props:string){
// console.log("HELLO " + props)
// }
// greeting("shadow")

// let num = 3
// num = 4
// console.log(num)






















