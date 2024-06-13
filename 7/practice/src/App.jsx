
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing, Lbutton } from './landing'
import { Dbutton } from './Dbutton'
const Dashboard = React.lazy( ()=> import("./dashboard"))

function App() {
  return <div>
<BrowserRouter>
<Routes>
  
  <Route path='/'  element={<Suspense fallback={<div>Loading... </div>} ><Landing/> </Suspense> } ></Route>
  <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
</Routes>
<Lbutton></Lbutton>
<Dbutton/>

</BrowserRouter>
  
  </div>


}


 

export default App
