import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2B2727]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p>--- Hello world, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#D5A82C]'> Marcus Vivar</h1>
            <p>Frontend developer</p>

            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#D5A82C] hover:border-[#D5A82C] hover:text-black '> 
                Contact me  
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                </span>
                
                </button>
            </div>

        </div>

    </div>
  )
}

export default Home