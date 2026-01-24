import React, { useState, useEffect } from 'react';

const Banner = () => {
    const slides = [
        { url: 'https://i.pinimg.com/1200x/55/9c/61/559c6147ac7363568a65a6f044958d32.jpg', title: 'Luxury Sedan' },
        { url: 'https://i.pinimg.com/1200x/37/bc/48/37bc486f89bc4bc3fcc98d430b859f05.jpg    ', title: 'Sport SUV' },
        { url: 'https://i.pinimg.com/736x/71/24/16/71241654dc69ebf3d570c67aa6c04fba.jpg', title: 'Electric Future' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }, 6000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className='w-full h-75 md:h-105 md:w-[95%] py-4 relative group mx-auto'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-3xl bg-center bg-cover duration-500 shadow-xl relative'
            >
                <div className='absolute inset-0 bg-black/30 rounded-3xl'></div>  
                <div className='absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white'>
                    <h2 className='md:text-5xl text-3xl font-bold md:mb-7 mb-4 drop-shadow-lg'>
                        {slides[currentIndex].title}
                    </h2>
                    <a className='bg-white px-5 py-2 text-black md:px-8 md:py-3 rounded-xl font-bold hover:bg-transparent border border-white hover:text-white transition-all duration-200' href='#shop'>
                        Explore More
                    </a>
                </div>
            </div>

            <div className='flex justify-center pt-4 gap-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => setCurrentIndex(slideIndex)}
                        className={`cursor-pointer transition-all duration-300 rounded-full 
                            ${currentIndex === slideIndex ? 'bg-black w-8 h-2' : 'bg-gray-400 w-2 h-2'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Banner;