const { json } = require("express");

const users = `
{
"name": "Dragon",
    "age": 2,
        "gender": "male"
}`;
const user= JSON.parse(users)
console.log(user.gender);
const car = '{ "name":"Audi", "model":"R8", "year":"2016"}'
const carob= JSON.parse(car);
console.log(carob.model);
const persons={
    firstname: "dragon",
    lastname:"sama",
    fullname: function(){
        console.log( this.firstname + " " + this.lastname)
        return 0;
    }
}
// person = JSON.stringify(persons)
console.log(persons.fullname())