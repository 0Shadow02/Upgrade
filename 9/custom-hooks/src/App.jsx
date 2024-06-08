import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 return <>
    <Apprender />
 </>
}
function Apprender(){
  const [count , setCount] = useState(0)
  useEffect(()=>{
    console.log("component mounted")
    return ()=> console.log("component unmounted")

  },[count])
  return<>
  <h3>{count}</h3>
  <button onClick={()=>{setCount(c=>c+1)}}> useEffect....  </button>
   </>
}
export default App
