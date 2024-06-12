
import './App.css'

import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

function App() {

 return <>
 <RecoilRoot>
  <Count></Count>
  </RecoilRoot> 
 </>
}
function Count(){
  return <div>
    <CountRender></CountRender>
    <Buttons/>

  </div>
}
function CountRender(){
  const count = useRecoilValue(countAtom)
  return <> {count}</>
}
function Buttons(){
  const setcount= useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{setcount(c=>c+1)}}>Increment</button>
    <button onClick={()=>{setcount(c=>c-1)}}>Decrement</button>
  </div>
}
export default App
