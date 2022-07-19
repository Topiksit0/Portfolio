import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-slate-50 text-[#2B2727]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right  pb-8 sm:pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2B2727]'>
                        About.
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-2xl font-bold '>
                        <p className=''>Hi, I'm Marcus, a highly motivated 21 year-old, currently studying Software Engineering at UB (Universitat de Barcelona).</p>
                    </div>
                    <div>
                        <p>Since I was a kid, I've been interested in computers and video games, now that I'm a bit older, I'm studying what I always dreamed about, Computer Science. There are many fields that I'm interested in, but the ones that I enjoy the most are web development and UI/UX design. 
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About