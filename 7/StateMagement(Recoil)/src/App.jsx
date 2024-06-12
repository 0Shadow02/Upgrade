import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Increment } from './store/atoms/Increment'
import { useRecoilValue } from 'recoil'

function App() {
 const count = useRecoilValue(Atomics)
 return <> 
 <div>{count}</div>
 <Increment></Increment>
 </>
}

export default App
