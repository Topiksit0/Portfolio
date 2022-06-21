import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2B2727]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-md sm:text-xl text-gray-300'>--- Hello world, I'm</p>
            <h1 className='text-5xl sm:text-8xl font-bold text-[#D5A82C] tracking-tight'> Marcus Vivar</h1>
            <p className='text-md sm:text-xl text-gray-300 italic'>Problem solver and Front-end Developer</p>
            <div className='pt-10'>
                <button className='text-white group border-2 px-6 py-3 my-2  flex items-center hover:bg-[#D5A82C] hover:border-[#D5A82C] hover:text-black'> 
                Contact Me  
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