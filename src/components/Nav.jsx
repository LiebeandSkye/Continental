import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext'
import { BsCart3, BsCamera } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import LogoDeer from '../assets/LogoDeer.png'
import Chisa from '../assets/Chisa.jpg'
import Burger from '../Utilities/Burger'
import '../global.css'

const Nav = (name) => {
    const { toggleCart, cartItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const fileInputRef = useRef(null);

    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('userData');
        return saved ? JSON.parse(saved) : { name: "Chisa", profilePic: Chisa };
    });
    const [tempName, setTempName] = useState(user.name);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(user));
    }, [user]);

    const handleSaveProfile = (e) => {
        e.preventDefault();
        setUser(prev => ({ ...prev, name: tempName }));
        setIsModalOpen(false);
        setShowProfileMenu(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser(prev => ({ ...prev, profilePic: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <nav className='flex items-center justify-between shadow-xl py-3 px-6 md:pl-12 md:pr-5 w-full bg-white z-[5000]'>
            <div className='flex items-center z-50'>
                <Burger isOpen={isOpen} onClick={toggleMenu} className='md:hidden' />
                <ul className="hidden md:flex gap-7">
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/contact">Contact</NavLink></li>
                </ul>
            </div>

            {/* Logo Section */}
            <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center pointer-events-none'>
                <img src={LogoDeer} alt="Logo" className="w-16 h-16" />
                <div className='hidden lg:block'>
                    <h1 className='font-semibold text-2xl ml-2'>Continental</h1>
                    <p className='text-xs ml-1 text-center'>Premium Cars</p>
                </div>
            </div>

            <div className='flex items-center gap-2 md:gap-3 z-50'>
                <div onClick={toggleCart} className='bg-gray-900 p-3 flex items-center justify-center border border-gray-900 rounded-xl hover:bg-white hover:text-gray-900 text-white transition-all duration-200 cursor-pointer relative'>
                    <BsCart3 className='text-lg md:text-xl font-semibold' />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full border-2 border-white">
                            {cartItems.length}
                        </span>
                    )}
                </div>

                {/* Desktop Profile */}
                <div className='relative hidden md:block'>
                    <div
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className='flex bg-gray-900 pr-5 pl-2.5 py-2 items-center rounded-xl cursor-pointer hover:bg-gray-800 transition-colors'
                    >
                        <img src={user.profilePic} className="w-7 h-7 rounded-full object-cover" alt="Profile" />
                        <p className='text-white ml-2 text-md'>{user.name}</p>
                    </div>

                    {showProfileMenu && (
                        <div className="absolute right-0 mt-2 w-48 text-white rounded-lg shadow-2xl py-2 z-[5001] bg-gray-900">
                            <button 
                                onClick={() => { setIsModalOpen(true); setTempName(user.name); }} 
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 cursor-pointer">
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-[6000] p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    {/* Modal Content */}
                    <form onSubmit={handleSaveProfile} className="relative bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl flex flex-col items-center">
                        <button type="button" onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-2xl">
                            <IoClose />
                        </button>

                        <h2 className="text-xl font-bold mb-6">Profile</h2>

                        {/* Image Circle */}
                        <div className="relative group cursor-pointer mb-6" onClick={() => fileInputRef.current.click()}>
                            <img src={user.profilePic} className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 group-hover:brightness-75 transition-all" alt="User" />
                            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <BsCamera size={24} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="w-full mb-6">
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Username</label>
                            <input 
                                type="text" 
                                value={tempName} 
                                onChange={(e) => setTempName(e.target.value)}
                                className="w-full mt-1 px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                                required
                            />
                        </div>

                        <button type="submit" className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all cursor-pointer">
                            Save Changes
                        </button>
                    </form>
                </div>
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-[75%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[4999] p-6 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className='flex items-center mb-2'>
                    <img src={LogoDeer} alt="Logo" className="w-16 h-16" />
                    <div>
                        <h1 className='font-semibold text-xl'>Continental</h1>
                        <p className='text-xs'>Premium Cars</p>
                    </div>
                </div>

                <ul className="flex flex-col gap-6 text-lg font-medium">
                    <li><NavLink onClick={toggleMenu} to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>Home</NavLink></li>
                    <li><NavLink onClick={toggleMenu} to="/about" className={({ isActive }) => isActive ? "active-link" : "link"}>About</NavLink></li>
                    <li><NavLink onClick={toggleMenu} to="/contact" className={({ isActive }) => isActive ? "active-link" : "link"}>Contact</NavLink></li>
                </ul>

                <hr className="my-8 border-gray-900" />

                <div className='flex flex-col gap-4'>
                    <div className='p-4 bg-gray-900 rounded-2xl'>
                        <div className='flex items-center mb-4'>
                            <img src={user.profilePic} className="w-12 h-12 rounded-full object-cover" alt="User"/>
                            <div className='ml-3'>
                                <p className='font-bold text-white'>{user.name}</p>
                                <p className='text-xs text-gray-400'>Personal Account</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => { setIsModalOpen(true); setIsOpen(false); setTempName(user.name); }} 
                            className='w-full py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm'>
                            Edit Profile
                        </button>
                    </div>
                    {/* Cart in mobile */}
                    <div onClick={toggleCart} className='bg-gray-900 p-3 flex items-center justify-center border border-gray-900 rounded-xl text-white cursor-pointer relative'>
                        <BsCart3 className='text-xl font-semibold -ml-20' />
                        <div className="ml-5">
                            <p className='font-semibold text-white'>Cart</p>
                            <p className='text-xs text-gray-300'>View Items ({cartItems.length})</p>
                        </div>
                    </div>
                </div>
            </div>

            <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
            {isOpen && <div className="fixed inset-0 bg-black/50 z-[4998] md:hidden" onClick={toggleMenu}></div>}
        </nav>
    );
}

export default Nav;