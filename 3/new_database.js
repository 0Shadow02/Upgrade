const express = require('express')
const mongoose = require('mongoose')
const { string } = require('zod')
const app = express()
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/New_user";
mongoose.connect(MONGODB_URI)
// mongoose.create('Users',{ usename: string , password: string})
const User = mongoose.model('Users', { username: String, password: String, name: String })
app.use(express.json())
app.post('/signup', async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const userExist = await User.findOne({ username: username })
    if (userExist) {
       return res.status(400).json({ msg: " user already exist " })
    }
    const user = new User({
        username: username,
        password: password,
        name: name

    })
     user.save()
     res.status(200).json({
        'msg': "User created successfully"
    })
})




app.listen(3000)
