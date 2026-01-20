import React, { useState } from 'react';
import { CarData } from '../Data/CarData';
import Pagination from '../Utilities/Pagination';

const Card = ({ onAdd }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = CarData.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(CarData.length / cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='flex flex-col' id='shop'>
            <div className='flex flex-wrap justify-center gap-12 mt-6'>
                {currentCards.map((car) => (
                    <div key={car.id} className='relative border w-89 h-100 rounded-3xl overflow-hidden bg-white shadow-sm'>
                        <div className='h-[55%] w-full overflow-hidden'>
                            <img
                                className='w-full h-full object-cover hover:transition-transform duration-500 hover:scale-110'
                                src={car.image}
                                alt={car.name}
                            />
                        </div>


                        <div className='h-[45%] p-4 flex flex-col justify-between bg-white'>
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
                                    <span className='font-bold text-xl text-black'>{`$${car.price}`}</span>
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
                ))}
            </div>

            {/* page number */}
            {totalPages > 1 && (
                <div className="w-full px-[6%] pb-12 flex justify-end">
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