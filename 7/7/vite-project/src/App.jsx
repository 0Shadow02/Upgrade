import React, { Suspense, startTransition, useContext, useState } from 'react'
import { CountContex } from './components/Context'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// const Dashboard = React.lazy(()=> import('./components/Dashboard') ) 
// const Landing = React.lazy(()=> import('./components/Landing') 
//  ) 

function App(){
  const [count,setcount] = useState(0)
  return (
    <div>
      <CountContex.Provider value={{count:count,setcount:setcount}} >

      <Count> </Count>
      </CountContex.Provider>
     
    </div>
  )
}

function Count(){
  return <div> 
    <CountRender></CountRender>
   <Buttons ></Buttons>
  </div>
}
function CountRender(){
  const count = useContext(CountContex)
  return <div> {count}</div>
}
function Buttons(){
  const {count,setcount} = useContext(CountContex)
    return <div>
    <button onClick={()=>{
      setcount(count +1)
    }} >Increment</button>
    <button onClick={()=>{
      setcount(count -1)
    } }>Decrement</button>
    
    </div>

}

















// function App() {
//   const [count, setCount] = useState(0)
 
//   return (
   
//    <>
   
//    <BrowserRouter>
//       <Appbar></Appbar>
//       <Routes>
//        <Route path='/dashboard' element={<Suspense fallback={"loading..."}> <Dashboard></Dashboard></Suspense>  } ></Route>
//       <Route path='/' element={<Suspense fallback={"loading..."}> <Landing></Landing></Suspense> } > 
//       </Route>
//       </Routes>    
//    </BrowserRouter>
//    </>
//   )
// }
// function Appbar(){
//   const navigate = useNavigate();

//     return <>
//         <div  > 
//         <button onClick={()=>{
//         navigate("/dashboard")
//         }} >Dashboard</button>
//         <button onClick={()=>{
//           navigate("/")
//         }} >Landing</button>
//       </div>
// </>


  
// }





export default App
