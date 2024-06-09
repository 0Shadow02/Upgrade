"use strict";
function islegel(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const val = islegel(20);
console.log(val);
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
