"use strict";
// const greet = (name) => `Hello, ${name}!`;
Object.defineProperty(exports, "__esModule", { value: true });
function filteredUsers(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filteredUsers([{
        firstName: "harkirat",
        lastName: "Singh",
        age: 21
    }, {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    },]));
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
