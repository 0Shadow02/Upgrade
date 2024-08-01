
"use client";
import { signIn, signOut } from "next-auth/react"

export const Appbar = () => {
    return <div className="border-b-2 py-3 px-2 flex items-center content-center justify-between">
    <button className="rounded-xl py-2 px-2 mx-4 bg-blue-800 hover:bg-blue-950" onClick={() => signIn()}>Signin</button>
    <button className="rounded-xl py-2 px-2 mx-4 bg-blue-800 hover:bg-blue-950" onClick={() => signOut()}>Sign out</button>
  </div>
}