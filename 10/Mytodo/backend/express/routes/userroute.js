const Router = require('express')
const { signupmiddlware, signinmiddlware } = require('../middleware/UserMiddlware')
const { CreateUser, UpdateUser, GetAllUserData } = require('../../DataBase/src')
const router = Router()


router.post('/signup',async(req,res)=>{
    const username = req.boby.username
    const password = req.boby.password
    const firstName = req.boby.firstName
    const lastName = req.boby.lastName 

    try {
       const check = await CreateUser(username,firstName,lastName.password)
    
        res.status(200).json("User Created Successfully")
    
     
    } catch (error) {
        res.status(401).json(error)
    }
    
})

router.post('/siginin',async(res,req)=>{
    res.json("login successfully")
})
router.post('/update',async(req,res)=>{
    const username= req.headers.username
    const firstName = req.boby.firstName
    const lastName = req.boby.lastName
    try {
         UpdateUser(username,{firstName,lastName})
    } catch (error) {
        res.status.json(error)
    }
})
router.get('/user',async (req,res)=>{
    const val =  GetAllUserData()
    res.json(val)
})


module.exports = router;