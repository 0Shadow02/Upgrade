// write a function that finds the sum of two number\
let num1=parseInt(prompt("Enter the first number "));
let num2= parseInt(prompt("Enter the second number"));

function funcsum(a,b){
    return a + b;
}
// console.log(funcsum(num1,num2));
document.getElementById("demo").innerHTML= funcsum(num1,num2);
