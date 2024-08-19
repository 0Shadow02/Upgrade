import { getServerSession } from "next-auth";
import { authoptions } from "../lib/authoptions/page";

async function userDetails(){
    const session  = await getServerSession(authoptions)
    console.log(session)
    return session
}

export default async function Home(){
    const session = await userDetails()
    return <div>
        {JSON.stringify(session)}
    </div>
}