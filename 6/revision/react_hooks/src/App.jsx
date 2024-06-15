import { useEffect, useMemo, useState } from 'react'
import { Render } from './useEffect'
import { Memo } from './useMemo'



function App() {
//   const [count, setCount] = useState(0)
//   const [time, settime]=useState(0)
 
//   useEffect(()=>{
//     console.log("Hi there mounted")
   
//    return ()=>{
//     console.log("hi there unmounted")
//    }
//   },[count])

// const Sum = useMemo(()=>{
//   return 100*100+100
// },[])
// console.log("hi")
  
  return <div> 
    <Render></Render>
    <Memo></Memo>
  </div>
  
}

export default App
