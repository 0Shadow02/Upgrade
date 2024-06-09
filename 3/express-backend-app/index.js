// const express = require("express");
// const app = express();
// const port = 3000
// let numofrequest = 0;
// function usermiddleware(req,res,next){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if (username!="dragon"|| password!=123) {
//         res.status(400).json("wrong username or password")
//     }else{
//         next()
//     }


// }
// function chekmiddleware(req, res, next){
//     const check = req.query.check
//     if (check!=1) {
//         res.status(400).json("Error check query")
//     }
//     else{ next() }
// }
// function calculaterequest(req,res,next){
//     numofrequest ++
//     console.log(numofrequest);
//     next();
// }

// app.get( "/check",usermiddleware, calculaterequest,chekmiddleware ,function(req, res){

//  res.status(200).send("welcome player!....") 

// });
// app.use(express.json())
// app.use(calculaterequest)
// app.post( "/check",usermiddleware, calculaterequest ,chekmiddleware,function(req, res){

//      console.log(req.body)
//      res.json({"msg":"hi there"})

//    });

// app.listen(port, function(req, res){
// console.log("initating process....")


// })


// Input validation

// const express = require('express')
// const app = express()
// app.use(express.json())
// app.post('/health-checkup', function (req, res, next) {
//     const kidneys = req.body.kidneys;
//     const kidneylength = kidneys.length;
//     res.send("Your kidney length is " + kidneylength)

// })
// app.use(function(err,req,res,next){
//     res.json({msg:"500 SERVER WENT DOWN"})
// })
// app.listen(3000, function () {
//     console.log("intiating..")
// })

// using zod for input validation
// const express = require('express')
// const zod = require('zod')
// const app = express()

// const schema = zod.array(zod.number());
// app.use(express.json())

// app.post('/health-checkup', function (req, res, next) {
//         const kidneys = req.body.kidneys;
//         // const kidneylength = kidneys.length;
//         const response= schema.safeParse(kidneys)

//         res.send(response)
    
//     })
// app.listen(3000)









const express = require('express')
const app = express()
function checkmiddleware(req,res,next){
    const username= req.headers.username;
    if(username!= 'dragon'){
        res.status(400).json({
            msg:'Something went wrong'
        })
    }else{

        next()
    }
}
app.get('/',checkmiddleware,function(req,res,next){

    res.send("Everything is working all right")




})
app.listen(3000)






































