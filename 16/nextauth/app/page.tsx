"use client"

import { useSession } from "next-auth/react";
import { Next_Auth } from "./lib/auth";

export default function Home() {
  const session = useSession(Next_Auth);
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}


