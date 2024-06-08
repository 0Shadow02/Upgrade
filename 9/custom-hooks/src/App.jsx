
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function useIncCount(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
   const value= setInterval(() => {
    setCount(c=>c+1)
  }, 2000); 
  return ()=> clearInterval(value)
  },[count])
 
  return count
}



function App() {
  const count = useIncCount()

  return (
    
    <div>
      {count}
      </div>
  );


}





















// function useTodos(n){
//   const [todos, setTodos] = useState([]);
//   const [loading ,setloading]=useState(true)
  
  
//   useEffect(() => {
  
//    const value = setInterval(() => {
//      axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setloading(false)
//       })
//   }, n * 1000)

   
//     return ()=>{
//     clearInterval(value)
//   }  
//   }, [n]);
//  return {todos ,loading}
 
// }

// function App() {
//   const {todos ,loading}= useTodos(5)
  
//  if (loading) {
//   return <> Loading....</>
//  }
//   return (
    
//     <div>
      
//       {todos.map(todo=> <Track todo={todo} ></Track>)}</div>
//   );

//   function Track({ todo }) {
//     return (
//       <div>
//         {todo.title}<br />
//         {todo.description}
//       </div>
//     );
//   }
// }

export default App;





// function App() {
//  return <>
//     <Apprender />
//  </>
// }
// function Apprender(){
//   const [count , setCount] = useState(0)
//   useEffect(()=>{
//     console.log("component mounted")
//     return ()=> console.log("component unmounted")

//   },[count])
//   return<>
//   <h3>{count}</h3>
//   <button onClick={()=>{setCount(c=>c+1)}}> useEffect....  </button>
//    </>
// }
// export default App;
