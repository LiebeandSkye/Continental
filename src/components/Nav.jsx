import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext'
import { BsCart3 } from "react-icons/bs";
import { HiMenuAlt2, HiX } from "react-icons/hi"; // Icons for burger menu
import LogoDeer from '../assets/LogoDeer.png'
import Chisa from '../assets/Chisa.jpg'
import Input_Mobile from './Input_Mobile'
import Input from './Input'
import Burger from '../Utilities/Burger'
import '../global.css'

const Nav = () => {
    const { toggleCart, cartItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='flex items-center justify-between shadow-xl py-3 px-6 md:pl-12 md:pr-5 w-full bg-white z-[5000]'>
            <div className='flex items-center z-50'>
                <Burger
                    isOpen={isOpen}
                    onClick={toggleMenu}
                    className='md:hidden'
                />
                {/* menu for mobile */}
                <ul className="hidden md:flex gap-7">
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/contact">Contact</NavLink></li>
                </ul>
            </div>

            {/* logo */}
            <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center pointer-events-none'>
                <img src={LogoDeer} alt="Logo" className="w-16 h-16 md:w-16 md:h-16" />
                <div className='hidden lg:block'>
                    <h1 className='font-semibold text-2xl ml-2'>Continental</h1>
                    <p className='text-xs ml-1 text-center'>Premium Cars</p>
                </div>
            </div>

            {/* cart and account for laptop*/}
            <div className='flex items-center gap-2 md:gap-3 z-50'>
                <div
                    onClick={toggleCart}
                    className='bg-gray-900 p-3 flex items-center justify-center border border-gray-900 rounded-xl hover:bg-white hover:text-gray-900 text-white transition-all duration-200 cursor-pointer relative'
                >
                    <BsCart3 className='text-lg md:text-xl font-semibold' />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full border-2 border-white">
                            {cartItems.length}
                        </span>
                    )}
                </div>

                {/* Profile - Hidden on mobile */}
                <div className='hidden md:flex bg-gray-900 pr-5 pl-2 py-2 items-center rounded-xl'>
                    <img src={Chisa} className="w-7 h-7 rounded-full object-cover" alt="Profile" />
                    <p className='text-white ml-2 text-sm'>Chisa</p>
                </div>
            </div>

            {/* mobile menu */}
            <div className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[4999] p-6 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className='flex items-center mb-2'>
                    <div>
                        <img src={LogoDeer} alt="Logo" className="w-16 h-16 md:w-16 md:h-16" />
                    </div>
                    <div className=''>
                        <h1 className='font-semibold text-xl'>Continental</h1>
                        <p className='text-xs'>Premium Cars</p>
                    </div>
                </div>
                {/* EMPTY SPACE BELOW LOGO FOR FUTURE USES */}
                

                <ul className="flex flex-col gap-6 text-lg font-medium">
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : "link"} to="/">Home</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">About</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : "link"} to="/contact">Contact</NavLink></li>
                </ul>

                <hr className="my-8 border-gray-600" />

                {/* Profile in Mobile Menu */}
                <div className='gap-5 flex flex-col'>
                    <div className='flex items-center p-3 bg-gray-900 rounded-xl'>
                        <img src={Chisa} className="w-10 h-10 rounded-full object-cover" alt="Profile" />
                        <div className="ml-3">
                            <p className='font-semibold text-white'>Chisa</p>
                            <p className='text-xs text-gray-300'>View Account</p>
                        </div>
                    </div>
                    <div
                        onClick={toggleCart}
                        className='bg-gray-900 p-3 flex items-center justify-center border border-gray-900 rounded-xl text-white transition-all duration-200 cursor-pointer relative'>
                        <div className='flex items-center'>
                            <BsCart3 className='text-xl font-semibold -ml-23' />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[12px] w-6 h-6 md:w-5 md:h-5 flex items-center justify-center rounded-full border-2 border-white">
                                    {cartItems.length}
                                </span>
                            )}
                            <div className="ml-5">
                                <p className='font-semibold text-white'>Cart</p>
                                <p className='text-xs text-gray-300'>View Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay to close menu when clicking outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[4998] md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    )
}

export default Nav