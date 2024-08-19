"use client"
import Image from "next/image";
import {signIn , signOut} from "next-auth/react"
export default function Home() {
  return <div>
    <button onClick={()=>signIn()} >Signin</button>
    <button onClick={()=>signOut()} >Signout</button>
  </div>
}
