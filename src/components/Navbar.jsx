import React, {useState, useEffect} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from "../assets/logo.png"
import {Link} from 'react-scroll'
import {useScroll} from '../components/utilities/helpers'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const { y, x, scrollDirection } = useScroll();  

    const styles = {
      active: {
        visibility: "visible",
        transition: "all 0.5s", 
        
 
      },
      hidden: {
        visibility: "hidden",
        transition: "all 0.5s",
        transform: "translateY(-100%)"
      },
      active_bg: {
        visibility: "visible",
        transition: "all 0.5s", 
        background: "#2B2727"

      }
    }

    /*Change background */

     //navbar scroll when active state
    const [navbar, setNavbar] = useState(false)

    
    const changeBackground = () => {
        if (window.scrollY >= 1000) {
        console.log(navbar === true)

        } else {

        }
      }
    
      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })
    
    
    return (
        <div name="nave" className="fixed w-full h-[80px] flex justify-between items-center px-7 text-[#b0b2c3]" style={scrollDirection === "down" ? navbar === true ? styles.active_bg: styles.active: styles.hidden}>
            <div>
                {/* Logo */}
                <img src={logo} className="h-5 w-5 sm:h-8 sm:w-8 sm:ml-11" alt="my logo" />

            </div>

                {/* Menú */}
                <ul className="hidden md:flex space-x-8">
                    <li className="underL font-semibold">
                    <Link  to="home"  smooth={true}  duration={500} >Home </Link>
                    </li>
                    <li className="underL font-semibold">
                    <Link  to="about"  smooth={true}  duration={500} >About </Link>
                    </li>
                    <li className="underL font-semibold ">Education</li>
                    <li className="underL font-semibold">
                    <Link  to="skills"  smooth={true}  duration={500} >Skills </Link>
                    </li>
                    <li className="underL font-semibold">
                    <Link  to="contact"  smooth={true}  duration={500} >Contact </Link>
                    </li>
                </ul>
            
            {/* Movil */}
            <div onClick={handleClick}  className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Movil menú */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2B2727] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl"><Link  onClick={handleClick} to="home"  smooth={true}  duration={500} >Home </Link></li>
                <li className="py-6 text-4xl"> <Link  onClick={handleClick} to="about"  smooth={true}  duration={500} >About </Link></li>
                <li className="py-6 text-4xl">Education</li>
                <li className="py-6 text-4xl"><Link  onClick={handleClick} to="skills"  smooth={true}  duration={500} >Skills </Link></li>
                <li className="py-6 text-4xl"><Link  onClick={handleClick} to="contact"  smooth={true}  duration={500} >Contact </Link></li>
            </ul>

        </div>
    )
}

export default Navbar