

// const GetUserData = require("../../DataBase/src/index")

// async function signupmiddlware(req,res,next){
//     const username = req.body.username
//     const check = await GetUserData(username)
//     if (check.length == 0) {
//         next()
//     }
//     else{
//         res.status(401).json({msg:"User Already exist"})
//     }
// }
//  async function signinmiddlware(req,res,next){
//     const username = req.body.username
//     const check = await GetUserData(username)
//     if (check.length > 0) {
//         next()
//     }
//     else{
//         res.status(401).json({msg:"User does not exist"})
//     }
// }
// module.exports={signinmiddlware,signupmiddlware}