import { useEffect, useMemo, useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const [time, settime]=useState(0)
 
  useEffect(()=>{
    console.log("Hi there mounted")
   
   return ()=>{
    console.log("hi there unmounted")
   }
  },[count])

const Sum = useMemo(()=>{
  return 100*100+100
},[])
console.log("hi")
  
  return <div> 
    <button onClick={()=>{ setCount((c)=>c+1)}} >Count {count}</button>
    <h1> {Sum}</h1>
  </div>
  
}

export default App
