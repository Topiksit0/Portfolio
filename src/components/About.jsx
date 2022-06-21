import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-slate-50 text-[#2B2727]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2B2727]'>
                        About.
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-2xl font-bold '>
                        <p className=''>Hi, I'm Marcus, 20-year-old spanish restless guy, currently studying Software Engineering at UB (Universitat de Barcelona).</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae dui mi. Nullam venenatis commodo quam vel vestibulum. 
                            Vivamus sit amet purus imperdiet, gravida sem a, scelerisque nisi. Phasellus at metus justo. 
                            Morbi eget nisl sem. Quisque ac tincidunt nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam enim lectus, 
                            feugiat sit amet diam et, efficitur faucibus lacus. Pellentesque faucibus nisi ex, id faucibus ipsum pharetra in. Ut eleifend ipsu
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About