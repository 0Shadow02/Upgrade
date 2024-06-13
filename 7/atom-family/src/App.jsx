import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todosAtom } from './atom'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <RecoilRoot>

  <Todo id={1}> </Todo> <br />
  <Todo id={1}> </Todo> <br />
  <Todo id={2}> </Todo><br /> 
 
    </RecoilRoot>
  
  </>
  )
}
function Todo({id}){
  const currenttodo = useRecoilValue(todosAtom(id))
  return <>
<h1> {currenttodo.title}</h1>
<h3>{currenttodo.description} </h3>
  
  
 
  </>
}

export default App
