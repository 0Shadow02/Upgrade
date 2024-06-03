import { Flow_Rounded } from "next/font/google"
import { VideoCard } from "./VideoCard"

const Video = [
    {
    title :"Best japanese song" ,
    image:"/sddefault.jpg" ,
    thumnail: "/channels4_profile.jpg",
    author: "yuna chan",
    views : "79M views",
    timestamp: "2 years ago",
},
    {
    title :"Best japanese song" ,
    image:"/sddefault.jpg" ,
    thumnail: "/channels4_profile.jpg",
    author: "yuna chan",
    views : "79M views",
    timestamp: "2 years ago",
},
    {
    title :"Best japanese song" ,
    image:"/sddefault.jpg" ,
    thumnail: "/channels4_profile.jpg",
    author: "yuna chan",
    views : "79M views",
    timestamp: "2 years ago",
},
    {
    title :"Best japanese song" ,
    image:"/sddefault.jpg" ,
    thumnail: "/channels4_profile.jpg",
    author: "yuna chan",
    views : "79M views",
    timestamp: "2 years ago",
},
    {
    title :"Best japanese song" ,
    image:"/sddefault.jpg" ,
    thumnail: "/channels4_profile.jpg",
    author: "yuna chan",
    views : "79M views",
    timestamp: "2 years ago",
},
    {
    title :"Best japanese song" ,
    image:"/sddefault.jpg" ,
    thumnail: "/channels4_profile.jpg",
    author: "yuna chan",
    views : "79M views",
    timestamp: "2 years ago",
},

]

export const VideoGrid= ()=>{
 return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2"> 
        {Video.map(Videos=>  <div>
            <VideoCard
          title ={Videos.title} 
          image={Videos.image} 
          thumnail= {Videos.thumnail}
          author= {Videos.author}
          views = {Videos.views}
          timestamp= {Videos.timestamp}> </VideoCard>   
        </div> )}



        </div>
    
 
}