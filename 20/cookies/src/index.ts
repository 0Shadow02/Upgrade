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
