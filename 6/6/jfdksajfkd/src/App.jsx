import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Mycard> { <>
     <h1>shadow</h1>
     <h2> hwllo there </h2>
     
     </>} </Mycard>
    </>
  )
}
function Mycard({children}){
  return <div style={ {border:"2px solid black", height:200, width:200 , borderRadius:5}}>
    {children}
  </div>
}

export default App
