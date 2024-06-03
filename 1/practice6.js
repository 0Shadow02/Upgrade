//write a program which print male people first name given a complex object
const names= { male: { first_name: ["joe", "berry", "john", "carl"] }, female: { first_name: ["anna", "smantha", "amelia", "kristin"] } }

const arr =[]
for (let i = 0; i < names.male.first_name.length; i++) {
    
    arr.push(names.male.first_name[i]);
}
document.getElementById("demo").innerHTML= arr;