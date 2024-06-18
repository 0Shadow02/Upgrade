
import './App.css'
import { useEffect, useState } from 'react';

const useIsonline =()=>{
  const [online,setonline]= useState(window.navigator.onLine)
    useEffect(()=>{
      window.addEventListener('online',()=>{ setonline(true)})
      window.addEventListener('offline',()=>{setonline(false)})
    },[])
   return online
}
const SearchBar=()=>{
  const isonline= useIsonline()
  console.log(isonline)
  return<>
  {isonline? <OnButton/>:"you are offline"}
  </>
}
function OnButton(){
  return <div>
    <button className="relative inline-flex items-center px-6 py-3 overflow-hidden font-medium text-cyan-500 border-2 border-cyan-500 rounded-full shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-cyan-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button</span>
      <span className="relative invisible">Button</span>
    </button>
  </div>
}
// const SearchBar=()=>{
//   const [time,settime]= useState(0)
//   const [subcription,setsubscription]=useState(true)
//   useEffect(()=>{
//    const timer = setTimeout(() => {
//       setsubscription(false)
//     }, 5000);
//     const clock =setInterval(()=>{
//       settime(c=>c+1)
//     },1000)

//     return ()=>{
//       clearTimeout(timer)
//       clearInterval(clock)
//     }
//   },[])
//   return<> 
//   <div>Time until your subscription expires: {time < 6?time:"opps!"}</div>
//   {subcription? <ViewSubs></ViewSubs> : <div>Your Subsciption has expired</div>} 
//   </>
// }
// function ViewSubs(){
//   useEffect(()=>{
//         console.log("hi there rerender")
    
//     return ()=>console.log("bye there rerender")
//   },[])
//   return <> 
//   Your subscription is active right now
//   </>
// }

// const SearchBar = ()=>{
//   const [count ,setcount] = useState(0)
//   useEffect(()=>{

    
//     console.log("hi there rerender")
    
//     return ()=>console.log("bye there rerender")
//   },[count])

//   return <div> 
//   <button onClick={()=>setcount(c=>c+1)}> Count {count}</button>
//   </div>
// }

// function useDebounce(inputValue,n){
//   const [val,setval]=useState(0)
//   useEffect(()=>{
//    const time= setTimeout(() => {
//       setval(inputValue)
//     }, n)
//     return ()=>{ clearTimeout(val)}
//   },[inputValue])
//   return val
// }

// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState('');
//   const debouncedValue = useDebounce(inputValue, 800); // milliseconds debounce delay
//   // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
//   return (
//     <div>

//     <input
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       />
//     <div> {debouncedValue}</div>
//       </div>
//   );
// };
export default SearchBar;





























// Custom Hooks
// function useIncCount(){
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//    const value= setInterval(() => {
//     setCount(c=>c+1)
//   }, 2000); 
//   return ()=> clearInterval(value)
//   },[count])
 
//   return count
// }



// function App() {
//   const count = useIncCount()

//   return (
    
//     <div>
//       {count}
//       </div>
//   );


// }





















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

// export default App;





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
