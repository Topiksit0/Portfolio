import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='bg-[#2B2727] flex flex-col justify-center items-center w-full h-full top'>
        <div>
         <img src={logo} className="sm:max-w-[120px] max-w-[90px] mt-24"   />
        </div>
        
        <div className='max-w-[500px]  w-full px-4 grid grid-cols-3 mt-8 justify-center'>
            <div className='flex justify-center items-center'>
                <a href='https://twitter.com/topiksit0' className='text-white font-extrabold underL text-center'>Twitter</a>
            </div>
            <div className='flex justify-center items-center'>
                <a href='https://www.linkedin.com/in/marcospalominovivar/' className='text-white font-extrabold underL text-center'>LinkedIn</a>
            </div>
            <div className='flex justify-center items-center'>   
                <a href='https://github.com/Topiksit0' className='text-white font-extrabold underL text-center'>Github</a>
            </div>
        </div>

        <div className='mt-24 text-white mb-6 text-xs font-extralight'>
            <p>© 2022 Marcus Vivar - Designed and built by <strong> Marcus.</strong></p>
        </div>
        
    </div>
  )
}

export default Footer