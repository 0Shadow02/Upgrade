import { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { avatarselector, notifications } from './Atoms'
import axios from 'axios'

function App() {
  return <>

  <RecoilRoot>
  <MainApp></MainApp>
  <Myavatar></Myavatar>
  </RecoilRoot>
  </>
}

function MainApp(){
  const [notificationcount , setnotificationcount] = useRecoilState(notifications) 

  
    
  return (
    <>
    

      <button>Home</button>
      <button>My network({notificationcount.network > 100 ? "99+" : notificationcount.network})</button>
      <button>Jobs({notificationcount.jobs})</button>
      <button>Messaging({notificationcount.messaging})</button>
      <button>Notification({notificationcount.notifications})</button>
     
    
    </>
  )
}
function Myavatar(){
  const totalcount = useRecoilValue(avatarselector)
  return <> 
    <button>Avatar({totalcount})</button>
  
  </>
}

export default App
