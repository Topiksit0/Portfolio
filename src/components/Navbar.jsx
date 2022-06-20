import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2B2727] text-gray-300">
            <div>
                {/* Logo */}
            </div>

                {/* Menú */}
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
            
            {/* Movil */}
            <div onClick={handleClick}  className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Movil menú */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2B2727] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Education</li>
                <li className="py-6 text-4xl">Experience</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

        </div>
    )
}

export default Navbar