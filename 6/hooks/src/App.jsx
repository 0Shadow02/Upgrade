import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [income,setincome]= useState(20)
const def = useRef()

useEffect(()=>{
  setTimeout(() => {
    console.log(def.current.innerHTML)
      def.current.innerHTML="Your income is 100000"
  }, 2000);

},[])

return <div>
<h2 ref={def} >Your income is  {income}</h2>
{/* <h2>hello</h2> */}
</div>













//   const [ExchangeData, setExchangeData]= useState(200)
 
//   const def = useRef()
//   // useEffect(()=>{
     
//   //   setExchangeData({
      
//   //     returns:100
//   //   })

//   // },[])
 
    

//   useEffect(()=>{
    
//     setTimeout(() => {
//       console.log(def.current.innerHTML)
//       def.current.innerHTML=100
  
//   }, 2000);

//   },[])
 
 

//   return (
//     <>
//     {/* <h2>Your ExchangeData is {ExchangeData.returns}</h2>
//     <h2>Your ExchangeData2 is {ExchangeData2.returns}</h2> */}
    
//     <div > Your text return are <h2  ref={def}>{ExchangeData} </h2> </div>
  
//     </>
//   )
// }
}
export default App
