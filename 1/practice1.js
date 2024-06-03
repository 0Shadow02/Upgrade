// write a program to greet a person given their first name and last name?
let first_name;
let last_name;
first_name=prompt("Enter your first name");
last_name= prompt("Enter your last name");
let a; 
let d = new Date()
if (d.getHours()>0&&d.getHours()<=12) {
    a = "Good morning "+ first_name +" "+ last_name;}
if (d.getHours()>12&&d.getHours()<=5) {
   a= "Good afternoon "+ first_name +" "+ last_name;
}
else {
  a= "Good night "+ first_name +" "+ last_name;
}
document.getElementById("demo").innerHTML=a;


