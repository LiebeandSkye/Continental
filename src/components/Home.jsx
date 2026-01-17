import React, { useState } from 'react' // Import useState here!
import Filter from './Filter'
import Input from './Input'
import Banner from './Banner'
import Card from './Card'
import Added_Card from '../Utilities/Added_Card'
import '../global.css'
import {CarData} from '../Data/CarData'

const Home = () => {
    const [showToast, setShowToast] = useState(false);
    const [activeProduct, setActiveProduct] = useState({ name: '', price: '' });

    const handleAddToCart = (car) => {
        setActiveProduct({ name: car.name, price: `$${car.price}` });
        setShowToast(true);
    };

    return (
        <div className="relative min-h-screen">
            <div className='flex mx-5 pt-8'>
                <Filter className='w-[25%]' />

                <div className='gap-10 mx-10 grow'>
                    <div className='flex justify-between'>
                        <Input />
                        <button className='px-4 py-2 border border-gray-900 rounded-xl cursor-pointer'>Sort By</button>
                    </div>

                    <Banner />

                    {/* Pass the toggle function to the Card */}
                    <Card onAdd={handleAddToCart} />
                </div>
            </div>
            <Added_Card
                isVisible={showToast} 
                onClose={() => setShowToast(false)} 
                productName={activeProduct.name}
                productPrice={activeProduct.price}
            />
        </div>
    )
}

export default Home