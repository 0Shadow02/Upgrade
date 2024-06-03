// write a program to greet a person based on their gender

let gender;

gender =prompt("Enter your gender");

let a; 
if (gender=== "male") {
    a = "Hello sir"
    
    }
else if (gender=== "female") {
    a= "Hello ma'am"
} 
else {
  a= "Error 404 not found "
}
document.getElementById("demo").innerHTML=a;