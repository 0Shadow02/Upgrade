const express = require('express')
const router=  express.Router()
const userRoute = require('./userroute')
router.use('/user',userRoute )
module.exports= router;