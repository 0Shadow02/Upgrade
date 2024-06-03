import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos , settodos] = useState([])

  useEffect( ()=>{
    setInterval(()=>{ fetch("https://sum-server.100xdevs.com/todos")
  .then(async (res)=>{
    const json = await res.json()
    settodos(json.todos)
  })},10000)
 
}, [ ])
  

return <>  {todos.map((todo)=>{ return  <Mytodo key={todo.id} title= {todo.title} description ={todo.description}  completed ={todo.completed}> </Mytodo> })}  </>

}

function Mytodo({title ,description,completed}){

  return <> 
  

     <h1> {title}</h1>
  <h2> {description}</h2>
  <button>{completed ? "completed" :"Mark as Done" }</button>

 


 
  </>
}


export default App