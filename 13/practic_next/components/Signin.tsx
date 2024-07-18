"use client"
import { useState } from "react";
import { Button } from "./Button";

export const SigninComponent = ()=>{

    const [username,setusername]= useState("")
    const [password,setpassword]= useState("")

    return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Sign in
                    </div>
                </div>
                <div className="pt-2">
                    <LabelledInput onchange={(e)=>setusername(e.target.value)} label="Username" placeholder="harkirat@gmail.com"  />
                    <LabelledInput onchange={(e)=>setpassword(e.target.value)} label="Password" type={"password"} placeholder="123456" />
                    <Button username={username} password={password}></Button>
                </div>
            </div>
        </a>
    </div>
</div>
}

interface LabelledInputType {
label: string;
placeholder: string;
type?: string;
onchange:React.ChangeEventHandler<HTMLInputElement>
}

function LabelledInput({ label, placeholder, type,onchange }: LabelledInputType) {
return <div>
    <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
    <input onChange={onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}