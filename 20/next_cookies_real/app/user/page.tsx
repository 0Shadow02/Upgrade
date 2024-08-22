import { getServerSession } from "next-auth";
import { authoptions } from "../lib/authoptions"
import { redirect } from 'next/navigation'


async function userDetails(){
    const session  = await getServerSession(authoptions)
    console.log(session)
    return session
}

export default async function Home(){
    const session = await userDetails()
  
    if (session) {
       return <div>
        {JSON.stringify(session)}
    </div>  
    }
    redirect('api/auth/signin')
}

// "use client"

// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

// export default function Home() {
//   const session = useSession();
//   if(!session){
//     return <div>
//         ...loading
//     </div>
//   }
//   else{
//   if (session.status=="authenticated") {
//     return (
//     <div>
//       {JSON.stringify(session)}
//     </div>
//   );
//   }
//   else {
//   redirect('api/auth/signin')
// }
// }
// }