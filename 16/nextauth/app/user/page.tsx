import  { getServerSession } from "next-auth"
import { Next_Auth } from "../lib/auth";

async function getUser() {
  const session = await getServerSession(Next_Auth);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}