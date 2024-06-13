
// import React, { Suspense } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Landing, Lbutton } from './landing'
// import { Dbutton } from './Dbutton'
// const Dashboard = React.lazy( ()=> import("./dashboard"))




import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { NotificationAtom, Totalnotification } from './Store/Atoms/notification'
import { Suspense, useEffect } from 'react'
import { todoatom } from './Store/Atoms/todoatom'




function App(){


  return <div>
    <RecoilRoot>
      <Suspense fallback={"Loading..."}>

      <Notifications/>
      <Mytodo id={1}></Mytodo>
      <Mytodo id={2}></Mytodo>
      <Mytodo id={2}></Mytodo>
      </Suspense>
    </RecoilRoot>
  </div>
}
function Notifications(){
  const notification =useRecoilValue(NotificationAtom)
  const totalnotification= useRecoilValue(Totalnotification)


     
    return <div> 
      <button>network({notification.network})</button>
      <button>jobs({notification.jobs})</button>
      <button>messaging({notification.messaging})</button>
      <button>notifications({notification.notifications})</button>
      <button>Me({totalnotification})</button>
    </div>
}
function Mytodo({id}){
  const todo= useRecoilValue(todoatom(id))
  
  return <div>
    <div>Title: {todo.title}</div>
    <div>Description: {todo.description}</div>
   
   
  </div>
}





























// function App() {
//   return <div>
// <BrowserRouter>
// <Routes>
  
//   <Route path='/'  element={<Suspense fallback={<div>Loading... </div>} ><Landing/> </Suspense> } ></Route>
//   <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
// </Routes>
// <Lbutton></Lbutton>
// <Dbutton/>

// </BrowserRouter>
  
//   </div>


// }


 

export default App
