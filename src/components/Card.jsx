import React from 'react';
import { IoSpeedometerOutline } from "react-icons/io5";
import Car from '../assets/Car.png'
import {CarData} from '../Data/CarData'
const Card = ({ onAdd }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
            {CarData.map((car) => (
                <div className='relative border border-gray-100 w-80 h-100 rounded-3xl overflow-hidden bg-white shadow-sm' id='Card'>
                <div className='h-[55%] w-full overflow-hidden'>
                    <img 
                        className='w-full h-full object-cover hover:transition-transform duration-500 hover:scale-110' 
                        src={car.image} 
                    />
                </div>
                <div className='h-[45%] p-4 flex flex-col justify-between bg-white'>
                    <div>
                        <div className='flex justify-between items-start'>
                            <h3 className='text-xl font-bold text-gray-900 tracking-tight'>{car.name}</h3>
                            <span className='text-[10px] bg-gray-100 px-2 py-2 rounded-full uppercase font-bold text-gray-500'>{`${car.country} edition`}</span>
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
    );
};

export default Card;