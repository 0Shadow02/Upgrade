import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest , { params }: {params:{
    authroutes: String[]
}}){
    const val = params.authroutes[0]
    console.log(val)
    
    return NextResponse.json("hey")
}