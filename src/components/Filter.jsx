import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

const DropdownItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='mt-4 border-b border-gray-700 pb-2'>
            <div 
                className='flex justify-between items-center cursor-pointer' 
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className='text-white font-medium hover:text-gray-300 transition-colors'>
                    {title}
                </h1>
                <IoIosArrowDown className={`text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
                <div className='mt-2 text-gray-400 text-sm flex flex-col gap-2 pl-2'>
                    {children}
                </div>
            )}
        </div>
    );
};

const Filter = ({ isMobileOpen, onClose }) => {
    return (
        <>
            {/* MOBILE OVERLAY */}
            {isMobileOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-[6000] md:hidden" 
                    onClick={onClose}
                ></div>
            )}

            {/* FILTER CONTAINER */}
            <div className={`
                /* Mobile*/
                fixed inset-y-0 left-0 z-[6001] w-72 bg-gray-900 p-6 transform transition-transform duration-300 ease-in-out
                /* Desktop*/
                md:relative md:translate-x-0 md:flex md:flex-col md:z-0 md:w-64 md:p-6 md:rounded-3xl md:shadow-xl md:min-h-[900px] 
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-2'>
                        <CiFilter className='text-3xl text-white' />
                        <p className='text-white font-semibold text-xl'>Filter</p>
                    </div>
                    {/* Close button only for mobile */}
                    <button onClick={onClose} className='md:hidden text-white text-2xl'>
                        <IoMdClose />
                    </button>
                </div>

                <div className="overflow-y-auto flex-grow pr-2 custom-scrollbar">
                    <DropdownItem title="Browse by Category">
                        <p className='hover:text-white cursor-pointer'>SUV</p>
                        <p className='hover:text-white cursor-pointer'>Electric</p>
                        <p className='hover:text-white cursor-pointer'>Sports</p>
                    </DropdownItem>

                    <DropdownItem title="Brand">
                        <p className='hover:text-white cursor-pointer'>Tesla</p>
                        <p className='hover:text-white cursor-pointer'>BMW</p>
                        <p className='hover:text-white cursor-pointer'>Mercedes</p>
                        <p className='hover:text-white cursor-pointer'>Ford</p>
                        <p className='hover:text-white cursor-pointer'>Porsche</p>
                        <p className='hover:text-white cursor-pointer'>Audi</p>
                        <p className='hover:text-white cursor-pointer'>Nissan</p>
                        <p className='hover:text-white cursor-pointer'>Toyota</p>
                        <p className='hover:text-white cursor-pointer'>Honda</p>
                        <p className='hover:text-white cursor-pointer'>Mazda</p>
                        <p className='hover:text-white cursor-pointer'>Lexus</p>
                        <p className='hover:text-white cursor-pointer'>Ferrari</p>
                    </DropdownItem>

                    <DropdownItem title="Country">
                        <p className='hover:text-white cursor-pointer'>Germany</p>
                        <p className='hover:text-white cursor-pointer'>USA</p>
                        <p className='hover:text-white cursor-pointer'>Japan</p>
                        <p className='hover:text-white cursor-pointer'>Italy</p>
                    </DropdownItem>
                </div>
            </div>
        </>
    );
};

export default Filter;