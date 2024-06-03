import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
const [count, setCount] = useState(0)
const [value , setValue] = useState(0)

function AddCount(){

  setCount( count + 1)
}
let counter = useMemo(()=>{
let sum = 0;
for (let i = parseInt(value); i > 0; i--) {
        sum = sum+ i;
    }
return sum

} , [ value])


  return <> 
  
  <input type="text" placeholder='Type something (^_^)' onChange={(e) => {
     setValue(e.target.value)
  
  }} /> <br />
  <p>The sum is {counter} </p>
  <button onClick={AddCount} >Counter {count}</button>
</>


}

// function App() {
//   const [idd , setid] = useState(1)

//   return ( <>
//    <button onClick={()=>{ setid(1)}}>1</button>
//    <button onClick={()=>{ setid(2)}}>2</button>
//    <button onClick={()=>{ setid(3)}}>3</button>
//    <button onClick={()=>{ setid(4)}}>4</button>
//    <h1>My todos</h1>
//    <Mytodo id={idd} > </Mytodo>

   
   
//   </>
//   )
// }
// function Mytodo({id}){
//  const [todos ,settodo] = useState([])
//  useEffect(()=>{ 
  
//   fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
//   .then(async (res)=>{
//     const json = await res.json()
//     settodo(json.todo)
//   })
//  },[todos])
 
// return<>
//     id :{id}
//     <h1> {todos.title}</h1> <h2>{todos.description}</h2>  

  
// </>

// }
// function Mybutton({val}){
//   return <>
//    <button onClick={()=>{ return <Mytodo  id = {1}> </Mytodo>}} style={{fontSize:20}} >{val} </button>
//    </>
// }


export default App
