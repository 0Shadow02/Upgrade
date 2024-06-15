import { useEffect, useState } from "react";

export function Render(){
   const [count,setCount]=useState(0)
   useEffect(()=>{

       setTimeout(() => {
           setCount(C=>C+1)
        
    }, 1000);
},[count])
  
  
   
   
   return <> <h2>{count}</h2></>
}