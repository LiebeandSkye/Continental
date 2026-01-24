import React, { useState, useEffect } from 'react';
import { CarData } from '../Data/CarData';
import Pagination from '../Utilities/Pagination';

const Card = ({ onAdd, searchTerm, filters }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

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
            <div className='flex flex-wrap md:pl-8 gap-12 mt-6'>
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

                                <div className='flex justify-between items-center pt-3 border-t border-gray-50'>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-400 text-sm font-medium'>Price: </span>
                                        <span className='font-bold text-xl text-black'>{`$${car.price.toLocaleString()}`}</span>
                                    </div>

                                    <button
                                        onClick={() => onAdd(car)}
                                        className="bg-black text-white px-5 py-2.5 rounded-2xl font-semibold text-sm hover:bg-gray-800 active:scale-95 transition-all shadow-lg shadow-gray-200 cursor-pointer"
                                    >
                                        Add to Cart
                                    </button>
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

            {/* Pagination numbers*/}
            {totalPages > 1 && (
                <div className="w-full px-[6%] flex justify-end">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
};

export default Card;