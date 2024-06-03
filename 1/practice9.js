// Write another function that takes this sum and print in a passive tense
let num1=parseInt(prompt("Enter the first number "));
let num2= parseInt(prompt("Enter the second number"));

function funcsum(a,b){
    return a + b;
}
function multiply(mine){
 return mine * 10;

}

document.getElementById("demo").innerHTML=multiply(funcsum(num1,num2));
// another method
// document.getElementById("demo").innerHTML=multiply(function(){return funcsum(num1, num2)})
// another method
  