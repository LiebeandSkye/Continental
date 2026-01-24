import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
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

const Filter = ({ isMobileOpen, onClose, filters, onFilterChange, searchTerm }) => {
    const categories = ['SUV', 'Electric', 'Sports'];
    const brands = ['Tesla', 'BMW', 'Mercedes', 'Ford', 'Porsche', 'Audi', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Lexus', 'Ferrari'];
    const countries = ['Germany', 'USA', 'Japan', 'Italy'];
    const FilterOption = ({ type, value }) => (
        <p
            onClick={() => onFilterChange(type, value)}
            className={`cursor-pointer transition-colors ${filters[type] === value ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
                }`}
        >
            {value}
        </p>
    );
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
                        {categories.map(cat => <FilterOption key={cat} type="category" value={cat} />)}
                    </DropdownItem>

                    <DropdownItem title="Brand">
                        {brands.map(brand => <FilterOption key={brand} type="brand" value={brand} />)}
                    </DropdownItem>

                    <DropdownItem title="Country">
                        {countries.map(c => <FilterOption key={c} type="country" value={c} />)}
                    </DropdownItem>
                    {(filters.category || filters.brand || filters.country || searchTerm) && (
                        <button
                            onClick={() => onFilterChange('reset', '')}
                            className="mt-10 text-sm text-red-400 hover:text-red-300 underline flex gap-1 justify-center items-center"
                        >
                            <RiDeleteBin6Line  /> Clear All
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Filter;