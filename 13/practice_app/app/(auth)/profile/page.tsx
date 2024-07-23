"use client"

import { useState } from "react"

export default function Signin() {
    const [likes,setlikes] = useState(0)

    const handler = ()=>{
        setlikes(likes=>likes+1)
    }

    return <div className="h-screen flex justify-center flex-col bg-gray-700">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-gray-600 border border-gray-200 rounded-lg shadow hover:bg-gray-500 ">
                <div>
                    <div className="text-center text-white font-bold text-md">
                        {likes}
                    </div>
                    <div className="pt-2">
                        <button onClick={handler} type="button" className="mt-8 w-full text-white bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">likes</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}