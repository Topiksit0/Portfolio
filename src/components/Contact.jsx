import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='flex justify-center items-center p-4 bg-slate-50 w-full h-screen'>
        <form method='POST' action="https://getform.io/f/af6ce196-7d90-49df-ae8f-ef0a81e14c96" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#2B2727] text-[#2B2727]'>Contact.</p>
                <p className='py-4'> &lt; Submit the form or send me an email marcospalominovivar@gmail.com &gt;</p>
            </div>
            <input type="text" placeholder='Name' name="name" className=' p-2 bg-[#2B2727] text-white'  />
            <input type="email" placeholder='Email' name="email" className='my-4 p-2 bg-[#2B2727] text-white' />
            <textarea name="message" rows="10" className='bg-[#2B2727] p-2 text-white' placeholder='Message '></textarea>
            <button className='text-[#2B2727] border-4 border-[#2B2727] hover:bg-[#2B2727] hover:border-[#2B2727] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact