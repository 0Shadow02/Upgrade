import { NextRequest } from "next/server"

export async function GET(){
    return Response.json({name:"shadow",email:"shadow@gmail.com"})
}
export async function POST(req:NextRequest){
     const body = await req.json()
    return Response.json({msg:"done",body:body})
}