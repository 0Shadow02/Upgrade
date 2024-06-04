
import './App.css'
import { RevenueCard } from './components/Revenuecard'

function App() {


// Responsive
return <div className='grid grid-cols-4 ' >
  <RevenueCard title={"Amount pending"} amount={"12,33,595"} 
  orderCount={13}></RevenueCard>

    {/* <div className='bg-red-500  ' >Hi there1</div>
    <div className='bg-green-500' >Hi there2</div>
    <div className='bg-blue-500'>Hi there2</div>
  */}
</div>














}
//  Grid
//    return <div className='grid grid-cols-8'>

//     <div className='bg-red-500 col-span-5' >Hi there1</div>
//     <div className='bg-green-500 col-span-3' >Hi there2</div>
//     <div className='bg-blue-500'>Hi there2</div>
//     <div className='bg-pink-500'>Hi there2</div>
//     <div className='bg-yellow-500'>Hi there2</div>
//     <div className='bg-orange-500'>Hi there2</div>
//     <div className='bg-blue-500'>Hi there2</div>
//    </div>
// }







// Flex
//  return <div className='flex justify-between' >

  //   <div className='bg-red-500' >Hi there1</div>
  //   <div className='bg-green-500' >Hi there2</div>
  //   <div className='bg-blue-500'>Hi there2</div>
  //  </div>
// }
export default App
