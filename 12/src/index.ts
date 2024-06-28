import z from 'zod'
// {Pick}

interface User{
    name:string,
    age:number,
    email:string,
    passwrod:string,
    id:string
}
type updatedata = Pick<User, 'age'|'name'|'passwrod'>
// {Partial}
type UpdatepropsOptoinal = Partial<updatedata>
function updateUser(updatedata:updatedata){

}

// {Exclude}

type eventtype = 'click'|'scroll'|'mousemove'
type ExcludeEvent = Exclude<eventtype , "scroll">
function handler(event:ExcludeEvent){
    return 1
}
// handler("scroll") gives error

// Readonly
// {Key value pairs} //
// Record && Map ////

const uesrdataschema = z.object({
    name:z.string(),
    emial:z.string().email().optional()
})
type finaluserdata = z.infer<typeof uesrdataschema>
  

// interface User {
//     name: string,
//     age: number
// }

// function sumOfAge(user1:User,user2:User){
//     return user1.age+ user2.age
// }

// const age =  sumOfAge({name:"shadow",age:20},{name:"dragon",age:22})
// console.log(age)