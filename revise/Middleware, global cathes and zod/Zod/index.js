const express = require('express')
const app = express()
const z = require('zod')
app.use(express.json())

app.use((req,res,next)=>{
    const myschema =z.object({
        username: z.string().email({message:"invalid email address"}),
        password: z.string().min(8).regex(/[!@#$%^&*(),.?":{}|<>]/, {
            message: 'Password must contain at least one special symbol'
          })
    })
    const username = req.body.username
    const password = req.body.password
    const check = myschema.safeParse({username:username , password:password})
    if(check.success){
        next()
    }
    else{
        res.status(403).json("wrong input credentials")
    }
})

app.post('/signup', (req,res)=>{
    res.json("user created successfully")

})
app.listen(3000, ()=>{
    console.log("listing to the port 3000")
})