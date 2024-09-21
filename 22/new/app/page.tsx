

export default function Home() {
  return (
    <div className="h-full">
      
        <div className=" fixed z-50  w-full flex justify-between items-center py-2 px-4 border-b border-gray-700 h-16">
          
          <div className=" flex items-center">
            <div  className=" hidden md:block text-xl  font-bold md:text-3xl">
            hello
            </div>
            
          <div className=" block md:hidden ">
          <svg h- xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          </div>
          </div>


          <div className=" flex  items-center space-x-3 pr-2 md:space-x-10 md:pr-6">

            <div className=" font-bold text-xl">
              <button className=" bg-slate-600  px-2 py-1 rounded hover:bg-slate-700 transition " >
              home
              
              </button>
            </div>
            <div className=" font-bold text-xl">
              upgrade
            </div>
            <div className=" font-bold text-xl">
              content
            </div>
          </div>
          </div>
       
        
        <div className="pt-16 h-screen flex items-center justify-center  ">
          <div className=" flex flex-col items-center h-60 w-auto bg-zinc-700  border-double border-gray-300 rounded-2xl ">
            <div className="mx-12 my-6 space-y-5">

              <div className="font-semibold text-lg">
                Name : <input type="text" placeholder="name..." className="border border-gray-700 rounded px-2 py-1  text-black" />
              </div>
              <div className="font-semibold text-lg">
                Email : <input type="text" placeholder="email..." className="border border-gray-700 rounded px-2 py-1 text-black" />
              </div>
            </div>
            <button  className=" px-7 py-3 bg-gray-900 rounded-lg text-xl hover:bg-gray-800 transition">Login</button>

        </div>
    
        </div>

        
    </div>
  )
}
