import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Appbar } from './components/appbar'
import { Sidebar } from './components/sidebar'
import { Card } from './components/card'
import { Mycards } from './components/Mycards'

function App() {
  const [count, setCount] = useState(0)

  return <>
  <Appbar></Appbar>
  <div className='flex bg-daily justify-around'>

  <Sidebar></Sidebar>
  <Mycards></Mycards>
  </div>
  
  </>
   
    
  
}

export default App
