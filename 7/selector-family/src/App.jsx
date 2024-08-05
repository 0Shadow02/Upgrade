
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todoatom } from './todoatom'

function App() {
 

  return (
    <>
    <RecoilRoot>

      <Todos id={1}> </Todos>
      <Todos id={2}> </Todos>
      <Todos id={3}> </Todos>
    </RecoilRoot>
    </>
  )
}

function Todos({id}){
  const todo = useRecoilValue(todoatom(id))

  return <> 
  {todo.title} <br />
  {todo.description} <br />
  </>
}


export default App
