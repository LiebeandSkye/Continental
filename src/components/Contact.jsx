import React, { useState } from "react";
import { CoData } from "../Data/ContactData.jsx";
import Car3 from "../assets/Car3.mp4";

const Contact = () => {
    const [isSent, setIsSent] = useState(false);

    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8715891787114!2d104.8884612!3d11.5620074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951601e309fbd%3A0x2bbb7a5f2162e106!2sETEC%20Center%20II!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh";

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
        setTimeout(() => {
            setIsSent(false);
        }, 4000);
    };

    return (
        <section className="w-full min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden">
            {/* Background Video */}
            <div className="fixed top-0 left-0 w-full h-[60vh] z-0">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={Car3} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white" />
            </div>

            <div className="relative z-10 pt-[45vh]">
                <div className="max-w-7xl mx-auto px-4 pb-20 sm:px-6">
                    <div className="bg-white w-full rounded-[3rem] lg:rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden">
                        
                        <div className="px-6 py-20 lg:p-24">
                            <div className="mb-24 text-center flex flex-col justify-center items-center">
                                <h1 className="uppercase text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
                                    Contact Us
                                </h1>
                                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                                    We specialize in the acquisition and sale of premium German and Italian automobiles. 
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                                
                                {/* Form Area */}
                                <div className="space-y-12 relative min-h-[400px]">
                                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-gray-900">67 form</h3>
                                    <div className={`absolute inset-0 bg-white z-20 flex flex-col items-center justify-center transition-all duration-500 ${isSent ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-bold">Message Sent!</h2>
                                        <p className="text-gray-500 mt-2">We'll get back to you shortly.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className={`space-y-10 transition-opacity duration-500 ${isSent ? 'opacity-0' : 'opacity-100'}`}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="border-b-2 border-gray-300 focus-within:border-black transition-all py-2">
                                                <input required type="text" placeholder="First Name" className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400" />
                                            </div>
                                            <div className="border-b-2 border-gray-300 focus-within:border-black transition-all py-2">
                                                <input required type="text" placeholder="Last Name" className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400" />
                                            </div>
                                        </div>
                                        <div className="border-b-2 border-gray-300 focus-within:border-black transition-all py-2">
                                            <input required type="email" placeholder="Email Address" className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400" />
                                        </div>
                                        <div className="border-b-2 border-gray-300 focus-within:border-black transition-all py-2">
                                            <textarea required rows="4" placeholder="Your Message" className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400 resize-none" />
                                        </div>
                                        <button type="submit" className="px-14 py-5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-500 hover:bg-gray-800 hover:shadow-2xl active:scale-95">
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/* Info Area & Interactive Map */}
                                <div className="lg:pl-10 space-y-16">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                        {CoData.map((item, index) => (
                                            <div key={index} className="space-y-4 group">
                                                <div className="text-gray-400 text-2xl group-hover:text-black transition-colors duration-300">
                                                    {item.icon}
                                                </div>
                                                <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">
                                                    {item.name}
                                                </h4>
                                                <p className="text-xl font-medium leading-snug">
                                                    {item.info1}
                                                </p>
                                                {item.info2 && <p className="text-gray-400 text-sm">{item.info2}</p>}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Map Area */}
                                    <div className="relative overflow-hidden rounded-[2.5rem] aspect-video group">
                                        <iframe 
                                            src={mapEmbedUrl}
                                            className="w-full h-full border-0"
                                            allowFullScreen="" 
                                            loading="lazy" 
                                            referrerPolicy="no-referrer-when-downgrade">
                                            
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;