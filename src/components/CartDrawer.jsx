import React, { useState } from 'react';
import { useCart } from './CartContext';
import { IoClose, IoTrashOutline } from "react-icons/io5";
import Loader from '../Utilities/Loader'
const CartDrawer = () => {
    const { isCartOpen, toggleCart, cartItems, removeFromCart } = useCart();
    const [modal, setModal] = useState(false);
    return (
        <>
            {/* Dark Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[10000] transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleCart}
            />

            {/* Sidebar Panel */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[10001] shadow-2xl transform transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b flex justify-between items-center">
                        <div>
                            <div className='flex items-center gap-5'>
                                <div>
                                <h2 className="text-2xl font-bold text-gray-900">My 67 Garage</h2>
                                <p className="text-gray-500 text-sm">{cartItems.length} items reserved</p>
                                </div>
                                <img className='w-15 h-full pb-1 rounded-md' src='https://imgs.search.brave.com/-Z1YBigK1wZez_WoXVGM8TW2uiNKEvsCLEs4reCxtQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/NkNPTXE2ejNsNW9B/QUFBTS9ib3Nub3Yt/NjcuZ2lm.gif'></img>
                            </div>
                        </div>
                        <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                            <IoClose size={28} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                                <Loader />
                                <p className="text-lg">Your garage is empty go buy sth :)</p>
                                <button onClick={toggleCart} className="text-black underline font-bold cursor-pointer">Start Shopping</button>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.cartId} className="flex gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-24 h-24 overflow-hidden rounded-xl">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-black font-semibold">${item.price}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.cartId)}
                                            className="text-red-500 flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:text-red-700 transition-colors"
                                        >
                                            <IoTrashOutline size={16} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <div className="p-6 border-t bg-gray-50">
                            <div className="flex justify-between mb-6">
                                <span className="text-gray-600 font-medium">Subtotal</span>
                                <span className="text-2xl font-black text-gray-900">
                                    ${cartItems.reduce((acc, item) => acc + Number(item.price.toString().replace(/[^0-9.-]+/g, "")), 0).toLocaleString()}
                                </span>
                            </div>
                            <button onClick={() => setModal(true)} className="w-full bg-black text-white py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 active:scale-[0.98] transition-all shadow-lg shadow-gray-300 cursor-pointer">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
                {modal && (
                    <div
                        className="fixed inset-0 w-full h-full bg-black/60 z-[1000000] flex items-center justify-center p-5">
                        <div className="relative max-w-3xl w-full">
                            <p className='text-white text-2xl text-center mb-2'>your bank is empty bro 💔</p>
                            <div className='relative'>
                                <img
                                    src="https://i.pinimg.com/736x/87/56/df/8756df2697eb06d56be8b91da25368c4.jpg"
                                    className="w-full h-auto rounded-2xl shadow-2xl animate-in zoom-in duration-300"/>

                                <button
                                    className="absolute top-1 right-1 text-white bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 cursor-pointer"
                                    onClick={() => setModal(false)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;