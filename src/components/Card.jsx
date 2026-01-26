import React, { useState, useEffect } from 'react';
import { CarData } from '../Data/CarData';
import Pagination from '../Utilities/Pagination';
import { IoClose } from "react-icons/io5";
import { GiSpeedometer } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";

const Card = ({ onAdd, searchTerm, filters }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;
    const [selectedCar, setSelectedCar] = useState(null); //modal

    // resets back to firwst page when there empty container
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    /* search and filter */
    const filteredCars = CarData.filter((car) => {
        const searchLower = searchTerm.toLowerCase().trim();
        // 1. Search Logic
        const matchesSearch = car.name.toLowerCase().includes(searchLower) ||
        car.id.toString() === searchLower;
        // 2. Filter Logic
        const matchesCategory = filters.category === '' || car.category === filters.category;
        const matchesBrand = filters.brand === '' || car.brand === filters.brand;
        const matchesCountry = filters.country === '' || car.country === filters.country;

        return matchesSearch && matchesCategory && matchesBrand && matchesCountry;
    });

    /* page num */
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCars.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(filteredCars.length / cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='flex flex-col' id='shop'>
            <div className='flex flex-wrap md:pl-8 gap-12 mt-6 justify-center md:justify-start'>
                {currentCards.length > 0 ? (
                    currentCards.map((car) => (
                        <div key={car.id} className='relative w-89 h-100 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300'>
                            <div className='h-[55%] w-full rounded-b-2xl overflow-hidden'>
                                <img
                                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                                    src={car.image}
                                    alt={car.name}
                                />
                            </div>

                            <div className='h-[45%] p-4 flex flex-col justify-between bg-white rounded-lg'>
                                <div>
                                    <div className='flex justify-between items-start'>
                                        <h3 className='text-xl font-bold text-gray-900 tracking-tight'>{car.name}</h3>
                                        <span className='text-[10px] bg-gray-100 px-2 py-2 rounded-full uppercase font-bold text-gray-500'>
                                            {`${car.country} edition`}
                                        </span>
                                    </div>
                                    <p className='text-gray-500 text-sm mt-1 line-clamp-2 leading-relaxed'>
                                        {car.description}
                                    </p>
                                </div>

                                <div className='flex justify-between items-end pt-3 border-t border-gray-50'>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-400 text-sm font-medium'>Price: </span>
                                        <span className='font-bold text-xl text-black'>{`$${car.price.toLocaleString()}`}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button
                                            onClick={() => setSelectedCar(car)}
                                            className="bg-black text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-gray-800 transition-all cursor-pointer"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => onAdd(car)}
                                            className="bg-black text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-gray-800 transition-all cursor-pointer"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-20 text-center w-full flex flex-col justify-center items-center gap-5">
                        <p className="text-gray-400 text-lg italic">No cars found matching "{searchTerm}"</p>
                        <img className='w-56 h-48 rounded-xl' src='https://i.pinimg.com/736x/d1/53/f5/d153f5263c498b154206ca778dcd30d7.jpg'></img>
                    </div>
                )}
            </div>

            {/* Page numbers*/}
            {totalPages > 1 && (
                <div className="w-full px-[6%] flex justify-end">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
            {/* Modal */}
            {selectedCar && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedCar(null)}></div>               
                    {/* info */}
                    <div className="relative bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                        <button 
                            onClick={() => setSelectedCar(null)}
                            className="absolute top-5 right-5 z-10 bg-white/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white hover:text-black transition-all md:text-black md:bg-gray-100"
                        >
                            <IoClose size={24} />
                        </button>

                        {/* Left content */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto">
                            <img src={selectedCar.image} className="w-full h-full object-cover" alt={selectedCar.name} />
                        </div>

                        {/* Right content for info */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                            <div className="mb-6">
                                <span className="text-xs font-black uppercase text-gray-800">{selectedCar.brand} • {selectedCar.category}</span>
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">{selectedCar.name}</h2>
                                <p className="text-gray-500 mt-4 leading-relaxed">{selectedCar.description}</p>
                            </div>
                            {/* Specs of car */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
                                    <PiEngineFill className="text-2xl text-gray-900" />
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-gray-400">Engine</p>
                                        <p className="text-sm font-bold">{selectedCar.specs?.engine || "Electric"}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
                                    <GiSpeedometer className="text-2xl text-gray-900" />
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-gray-400">Top Speed</p>
                                        <p className="text-sm font-bold">{selectedCar.specs?.topSpeed || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-end justify-between gap-6">
                                <div>
                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-wider">MSRP Starting at</p>
                                    <p className="text-3xl font-black text-black">${selectedCar.price.toLocaleString()}</p>
                                </div>
                                <button 
                                    onClick={() => { onAdd(selectedCar); setSelectedCar(null); }}
                                    className="bg-black text-white px-5 py-3 md:px-8 md:py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-gray-200"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Card;