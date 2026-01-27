import React, { useState } from 'react'
import Filter from './Filter'
import Input from './Input'
import Banner from './Banner'
import Card from './Card'
import { useCart } from './CartContext'
import Added_Card from '../Utilities/Added_Card'
import ProCard from './ProCard'
import Footer from './Footer'
import { CiFilter } from "react-icons/ci";
import Chatbot from './Chatbot'

const Home = () => {
    const [showToast, setShowToast] = useState(false);
    const [activeProduct, setActiveProduct] = useState({ name: '', price: '' });
    const { addToCart } = useCart();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({ category: '', brand: '', country: '' });
    const handleAddToCart = (car) => {
        addToCart(car); 
        setActiveProduct({ name: car.name, price: `$${car.price}` });
        setShowToast(true);
    };
    const handleFilterChange = (type, value) => {
        if (type === 'reset') {
            setFilters({ category: '', brand: '', country: '' });
            setSearchTerm("");
            return;
        }

        setFilters(prev => ({
            ...prev,
            [type]: prev[type] === value ? '' : value 
        }));
    };
    return (
        <div className="relative min-h-screen bg-gray-50 mb-8 md:mb-12">
            <div className='flex flex-col md:flex-row mx-4 md:mx-5 pt-8 gap-6 items-stretch'>
                
                {/* Filter Sidebar / Drawer */}
                <Filter 
                    isMobileOpen={isFilterOpen} 
                    onClose={() => setIsFilterOpen(false)} 
                    filters={filters} 
                    onFilterChange={handleFilterChange}
                />

                <div className='grow flex flex-col gap-6 w-full'>
                    <div className='flex flex-col sm:flex-row justify-between gap-4'>
                        <div className="flex gap-2 grow">
                            {/* Mobile Filter Trigger Button */}
                            <button 
                                onClick={() => setIsFilterOpen(true)}
                                className='md:hidden p-3 bg-gray-900 text-white rounded-xl'
                            >
                                <CiFilter size={24} />
                            </button>
                            <Input setSearchTerm={setSearchTerm} />
                        </div>
                        
                        <button className='px-4 py-2 border border-gray-900 rounded-xl bg-white whitespace-nowrap'>
                            Sort By
                        </button>
                    </div>

                    <Banner />
                    <Card onAdd={handleAddToCart} searchTerm={searchTerm} filters={filters}/>
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