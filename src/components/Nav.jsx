import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext'
import { BsCart3 } from "react-icons/bs";
import LogoDeer from '../assets/LogoDeer.png'
import Chisa from '../assets/Chisa.jpg'

const Nav = () => {
    const { toggleCart, cartItems } = useCart();

    return (
        <div className='flex items-center justify-between py-[1%] px-12 shadow-md relative gap-3 bg-white'>
            <div className='z-10'>
                <ul className="flex gap-7">
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            
            <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center pointer-events-none'>
                <img src={LogoDeer} alt="Logo" className="w-18 h-18" />
                <div className='hidden md:block'>
                    <h1 className='font-semibold text-3xl'>Continental</h1>
                    <p className='-mt-1 -ml-1.5 text-gray-600 text-xs leading-relaxed'>We Deliver Unparralled Experience</p>
                </div>
            </div>

            <div className='flex gap-3'>
                <div 
                    onClick={toggleCart} 
                    className='bg-gray-900 py-3 flex items-center justify-center border border-gray-900 rounded-xl px-4 mr-1 hover:bg-white hover:text-gray-900 text-white transition-all duration-200 cursor-pointer relative'
                >
                    <BsCart3 className='text-xl font-semibold' />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                            {cartItems.length}
                        </span>
                    )}
                </div>
                <div className='bg-gray-900 pr-5 pl-2 flex items-center rounded-xl'>
                    <img src={Chisa} className="w-8 h-8 rounded-full object-cover" alt="Profile" />
                    <p className='text-white ml-2.5 text-sm'>Chisa</p>
                </div>
            </div>
        </div>
    )
}

export default Nav