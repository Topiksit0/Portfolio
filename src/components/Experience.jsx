import React from 'react'
import docker from "../assets/docker.png"
import java from "../assets/java.png"
import javas from "../assets/javascript.png"
import python from "../assets/python.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import react from "../assets/react.png"
import vue from "../assets/vue.png"

const Experience = () => {
  return (
    <div name="skills" className=' bg-slate-50 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#2B2727] text-[#2B2727]'>Skills.</p>
                <p className='py-4'> &lt;  These are some technologies I've worked with &gt;</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                <div className='shadow-md shadow-[#2B2727] hover:scale-110 duration-500 bg-[#2B2727] text-white'>
                    <img className='w-20 mx-auto my-7' src={html} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#2B2727] hover:scale-110 duration-500 bg-[#2B2727] text-white'>
                    <img className='w-16 mx-auto my-7' src={css} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#2B2727] hover:scale-110 duration-500 bg-[#2B2727] text-white '>
                    <img className='w-20 mx-auto my-7' src={react} alt="React icon"/>
                    <p className='my-4'>ReactJS</p>
                </div>
  
                <div className='shadow-md shadow-[#2B2727] hover:scale-110 duration-500 bg-[#2B2727] text-white'>
                    <img className='w-20 mx-auto my-7' src={javas} alt="JavaScript icon"/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#2B2727] hover:scale-110 duration-500 bg-[#2B2727] text-white'>
                    <img className='w-20 mx-auto my-7' src={docker} alt="Docker icon"/>
                    <p className='my-4'>Docker</p>
                </div>
                <div className='shadow-md shadow-[#2B2727] hover:scale-110 duration-500 bg-[#2B2727] text-white'>
                    <img className='w-20 mx-auto my-7' src={python} alt="Python icon"/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#2B2727] hover:scale-110 duration-500 bg-[#2B2727] text-white'>
                    <img className='w-20 mx-auto my-7' src={vue} alt="Vue icon"/>
                    <p className='my-4'>Vue</p>
                </div>
                <div className='shadow-md shadow-[#2B2727] hover:scale-110 duration-500 bg-[#2B2727] text-white'>
                    <img className='w-20 mx-auto my-7' src={java} alt="Java icon"/>
                    <p className='my-4'>Java</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience