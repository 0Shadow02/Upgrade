import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";

const JWT_SECRET ="secret"
const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.post("/signin",(req, res)=>{
    const email = req.body.email;
    const password = req.body.password
    const token = jwt.sign({
        id:1,
    },JWT_SECRET);
    res.cookie("token",token);
    res.send("logged in!")
})

app.get("/user",(req,res)=>{
    const token = req.cookies.token
    
    if(token){
        const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload
    res.send({
        userId:decoded.id
    })}
    res.send("unauthorized access")
})

app.listen(5173,()=>{
    console.log("listening to the port 5173")
})
app.post("/logout",(req,res)=>{
    res.clearCookie("token")
    res.json({
        message:"logged out!"
    })
})