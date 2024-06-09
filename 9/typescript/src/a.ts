import { number, string } from "zod"

interface User{
    firstName:string ,
    lastName:string,
    email: string,
    age:number
}
function islegel(user:User):boolean{
if (user.age>=18) {
    return true
}
else{
    return false
}
}
const user= {
    firstName:"shadow" ,
    lastName:"san",
    email: "shadow@gmail.com",
    age:21

}
const val = islegel(user)
console.log(val)

// function time(timeout:()=> number                                                                                                                                                                                                                                                                                                         ){
//     setTimeout(() => {
//         console.log("hello")
//     }, timeout());
// }

// function timeout():number {
//     return 1000   
// }
// time(timeout)




// function sum(a: number , b:number)  {
//     return a+ b;

// }
// const value = sum(1,2);
// console.log(value);

// function greetings(arg:string){
//  console.log("Hello "+ arg)
// }

// greetings('shadow')

// let x: number =1 ;

// console.log(x)