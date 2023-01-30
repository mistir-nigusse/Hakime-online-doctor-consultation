import React from 'react';
import logo from '../../../assets/logo.png';
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [nav,setNav]=useState(false)
    return (  
        <nav className='relative fixed '>
            <div className='flex justify-between items-center bg-green w-full p-2'>
                 <img src={logo} alt="logo" className='w-[60px] mx-2 z-10'/>
                 <div className='hidden lg:flex '>
                     <a href="#" className='px-4 text-slate '>Home</a>
                     <a href="#" className='px-4 text-slate'>Find doctors</a>
                     <a href="#" className='px-4 text-slate'>About us</a>
                     <a href="#" className='px-4 text-slate'>Blog</a>
                     <a href="#" className='px-4 text-slate'>Contact us</a>
                 </div>

                 <div className='hidden lg:flex '>
                    <button className='p-2 bg-lightgreen rounded-r text-slate hover:bg-lime hover:text-black cursor-pointer text-white'>Login as a doctor</button>
                    <button className='p-2 mx-4 bg-lightgreen rounded-r text-slate hover:bg-lime hover:text-black cursor-pointer text-white'>Login as a patient</button>
                 </div>
                 {/* mobile menu */}
                <div onClick={()=>setNav(!nav)}  className='cursor-pointer pr-4 text-slate lg:hidden z-10'>
                        {nav? <FaTimes size={27}/>: <FaBars size={27}/>}
                </div>
                 {nav && (
                  <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-[400px] bg-green  lg:hidden '>
                     <a href="#" className='py-2 text-slate'>Home</a>
                     <a href="#" className='py-2 text-slate'>Find doctors</a>
                     <a href="#" className='py-2 text-slate'>About us</a>
                     <a href="#" className='py-2 text-slate'>Blog</a>
                     <a href="#" className='py-2 text-slate'>Contact us</a>

                <div className='flex flex-column justify-center mt-8 lg:hidden '>
                    <button className='p-2 bg-lightgreen rounded-r text-slate hover:bg-lime hover:text-black cursor-pointer text-white'>Login as a doctor</button>
                    <button className='p-2 mx-4 bg-lightgreen rounded-r text-slate hover:bg-lime hover:text-black cursor-pointer text-white'>Login as a patient</button>
                 </div>
                     
                 </div>   
                 )}
               
                 
                 
            </div>
        </nav>
    );
}
 
export default Navbar;