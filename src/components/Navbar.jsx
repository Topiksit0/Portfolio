import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from "../assets/logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-7 text-[#b0b2c3]">
            <div>
                {/* Logo */}
                <img src={logo} className="h-5 w-5 sm:h-8 sm:w-8 sm:ml-11" alt="my logo" />

            </div>

                {/* Menú */}
                <ul className="hidden md:flex space-x-8">
                    <li className="underL font-semibold">Home</li>
                    <li className="underL font-semibold">About</li>
                    <li className="underL font-semibold ">Education</li>
                    <li className="underL font-semibold">Skills</li>
                    <li className="underL font-semibold">Contact</li>
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
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

        </div>
    )
}

export default Navbar