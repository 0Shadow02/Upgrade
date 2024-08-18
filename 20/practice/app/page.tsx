"use client"
import axios from "axios"

async function fetchUserData(){
   const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
   return response.data
}
export default async function Home() {
  const userdata= await fetchUserData()
  return (
        <div>
          {userdata.name}<br/>
          {userdata.email}<br/>
          {userdata.address.city}
        </div>
  );
}
