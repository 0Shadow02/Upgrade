"use client"

import axios from "axios";
import { useState } from "react";
interface userdata{
    username:string,
    password:string
}
export function Button({username,password}:userdata){
     
    
    return <div>
        <button onClick={()=>{}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Login</button>
    </div>
}

