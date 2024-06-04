import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

import { countSelector } from './store/atoms/countselector'



function App() {

return <>
<RecoilRoot>

<Count  ></Count>
</RecoilRoot>

</>

}

function Count(){
 
  return <div> 
    <CountRender  ></CountRender>
   <Buttons ></Buttons>
   <Countlength></Countlength>
  </div>
}
function CountRender(){
  const count = useRecoilValue(countAtom)
  return <div> {count}</div>
}
function Buttons(){
  const setcount= useSetRecoilState(countAtom)
  console.log("re reneder")
    return <div>
    <button onClick={()=>{
      setcount(count => count +1)
    }} >Increment</button>
    <button onClick={()=>{
      setcount(count=> count -1)
    } }>Decrement</button>
    
    </div>

}

function Countlength(){
  const count = useRecoilValue(countSelector)
  return <>
  <h3> {count}</h3>
  </>
}
export default App
