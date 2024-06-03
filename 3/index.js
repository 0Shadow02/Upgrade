const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const jwtPassword = "123"

app.use(express.json())

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];
  function userExist(username){
    let userExists= false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username==username) {
            userExists= true;
        }

    }
    return userExists;



  }

  app.post('/signup', function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username)){
        res.status(400).json({
            'msg': "user doesn't exist"
        })
    }
    const token= jwt.sign({username: username}, jwtPassword)
    res.send(token)




  })

app.get('/users',function(req,res){
 const token = req.headers.authorization;

 let check =jwt.verify(token, jwtPassword);
 if (!check) {
    res.json("unauthorized access permition denied")
 }
 res.send(ALL_USERS)




})


app.listen(3000)