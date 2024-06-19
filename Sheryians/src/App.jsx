import './App.css'

function App() {
  
  return (
    <>
      <div className='bg--500 h-[100vh] flex justify-center'>
        <div className='w-[50vw] flex flex-col justify-center gap-6'>
          <div className='text-[#603809] text-6xl font-extrabold'>
          Discover the best coffee
          </div>
          <div className='text-[#707070] text-[20px]'>
          Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
          </div>
          <div>
          <button className=' bg-[#F9C06A] text-[#1E1E1E] rounded-[25px] px-4 py-[8px] font-bold'>Learn More</button>
          </div>
          </div>
        <div className='w-[40vw] h-[100vh] coffee-bottle'></div>        
      </div>



      
    </>
  )
}

export default App
