import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import '../global.css'
import LogoDeer from '../assets/LogoDeer.png'
import Chisa from '../assets/Chisa.jpg'
import { IoCart } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

const Nav = () => {
    return (
        <div>
            <div className='flex items-center justify-between py-[1%] px-12 shadow-md relative gap-3'>
                <div className='z-10'>
                    <ul className="flex gap-7">
                        <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center pointer-events-none'>
                    <img src={LogoDeer} alt="Logo" className="w-18 h-18" />
                    <div className=''>
                        <h1 className=' font-semibold text-3xl'>Continental</h1>
                        <p className=' -mt-1 text-gray-600 text-xs'>We Deliver Unparalled Experience</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='bg-gray-900 py-3 flex items-center justify-center rounded-xl px-4 mr-1'>
                        <BsCart3 className='text-xl cursor-pointer text-white font-semibold'/>
                    </div>
                    <div className='bg-gray-900 py-/2.5 pr-5 pl-2 flex items-center rounded-xl'>
                        <div className='profile'>
                            <img src={Chisa}></img>
                        </div>
                        <div>
                            <p className='text-white ml-2.5'>Chisa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Nav
