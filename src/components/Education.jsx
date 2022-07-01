import React from 'react'
import {HiCalendar} from 'react-icons/hi'

const Education = () => {
  return (
    <div name="education" className='bg-slate-50 flex justify-center items-center p-4 pb-36'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div>
                 <p className='text-4xl font-bold inline border-b-4 border-[#2B2727] text-[#2B2727]'>Education.</p>
            </div>

            <div>
                <div className='flex flex-col '>
                    <div className='grid grid-cols-3'>
                        <div></div>
                        <div className='mt-20 grid justify-center'>
                            <span className='education_rounder'></span>
                            <span className='education_line'></span>
                        </div>
                        <div className='mt-16 block'>
                            <h1 className='font-bold text-lg grid justify-center'> Mandatory Studies</h1>
                            <p className='grid justify-center'> Maristes Igualada</p>
                            <div className='mt-5'>
                                 <span className='flex sm:justify-center font-bold'> <HiCalendar className='mt-1'/> 2013 - 2017</span>
                            </div>
                          
                        </div>
                    </div>

                    <div className=' grid grid-cols-3'>
                         <div className='block'>
                            <h1 className='font-bold  text-lg'> Science Baccalaureate</h1>
                            <p className='grid justify-center'> Institut Montbui</p>
                            <div className='mt-5'>
                                 <span className='flex sm:justify-center font-bold'> <HiCalendar className='mt-1'/> 2017 - 2019</span>
                            </div>
                          
                        </div>
                        <div className=' grid justify-center'>
                            <span className='education_rounder '></span>
                            <span className='education_line '></span>
                        </div>
                        <div></div>

                    </div>

                    <div className='grid grid-cols-3'>
                        <div></div>
                        <div className='grid justify-center'>
                            <span className='education_rounder'></span>
                            <span className='education_line'></span>
                        </div>
                        <div className='block'>
                            <h1 className='font-bold text-lg grid justify-center'> Computer Engineering </h1>
                            <p className='grid justify-center'> Universitat de Barcelona</p>
                            <div className='mt-5'>
                                 <span className='flex sm:justify-center font-bold'> <HiCalendar className='mt-1'/> 2019 - 2023</span>
                            </div>
                          
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Education