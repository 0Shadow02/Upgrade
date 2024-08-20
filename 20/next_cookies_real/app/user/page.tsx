// import { getServerSession } from "next-auth";
// import { authoptions } from "../lib/authoptions/page";
// import { redirect } from 'next/navigation'
// import { NextResponse } from "next/server";
// import { useRouter } from "next/navigation";

// async function userDetails(){
//     const session  = await getServerSession(authoptions)
//     console.log(session)
//     return session
// }

// export default async function Home(){
//     const session = await userDetails()
  
//     if (session) {
//        return <div>
//         {JSON.stringify(session)}
//     </div>  
//     }
//     redirect('api/auth/signin')
// }

"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      // Optionally, you can show a loading spinner here
      return;
    }

    if (status === "unauthenticated") {
      router.push('api/auth/signin');
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (
      <div>
        {JSON.stringify(session)}
      </div>
    );
  }

  return null; // Render nothing while loading or redirecting
}
