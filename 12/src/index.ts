// Pick 

interface User{
    name:string,
    age:number,
    email:string,
    passwrod:string,
    id:string
}
type updatedata = Pick<User, 'age'|'name'|'passwrod'>
// Partial
type UpdatepropsOptoinal = Partial<updatedata>
function updateUser(updatedata:updatedata){

}
// Readonly




// interface User {
//     name: string,
//     age: number
// }

// function sumOfAge(user1:User,user2:User){
//     return user1.age+ user2.age
// }

// const age =  sumOfAge({name:"shadow",age:20},{name:"dragon",age:22})
// console.log(age)