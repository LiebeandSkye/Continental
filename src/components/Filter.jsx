import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

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

const Filter = () => {
    return (
        <div>
            <div className='py-6 px-4 rounded-xl bg-gray-900 w-64 shadow-xl h-[97%]'>
                <div className='flex items-center gap-2 mb-6'>
                    <CiFilter className='text-3xl text-white' />
                    <p className='text-white font-semibold text-xl'>Filter</p>
                </div>

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
    );
};

export default Filter;