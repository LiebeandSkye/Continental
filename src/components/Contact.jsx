import React from "react";
import { CoData } from "../Data/ContactData.jsx";
import Image from "../assets/Image.png";
import Car3 from "../assets/Car3.mp4";

const Contact = () => {
    const address = "ETEC Center II, Phnom Penh";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <section className="w-full min-h-screen bg-white text-[#1a1a1a] font-sans overflow-x-hidden">
            
            {/* background video */}
            <div className="fixed top-0 left-0 w-full h-[60vh] z-0">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={Car3} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white" />
            </div>

            {/* relative position for the floating container and background to stick at same place */}
            <div className="relative z-10 pt-[45vh]">
                
                {/* The parent container (floating when hover) */}
                <div className="max-w-7xl mx-auto px-4 pb-20 sm:px-6">
                    <div className="bg-white w-full rounded-[3rem] lg:rounded-[4rem] 
                        /* High Depth Shadow & Subtle Border */
                        shadow-[0_20px_50px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.02)] 
                        border border-gray-100
                        /* Hover Animation */
                        hover:-translate-y-2 transition-all duration-700 ease-in-out
                        overflow-hidden"
                    >
                        <div className="px-6 py-20 lg:p-24">
                            
                            {/* Top area */}
                            <div className="mb-24 text-center flex flex-col justify-center items-center">
                                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 uppercase italic">
                                    Contact us
                                </h1>
                                <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                                    We specialize in the acquisition and sale of premium German and Italian automobiles. 
                                    How may we assist your journey today?
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                                
                                {/* Form area */}
                                <div className="space-y-12">
                                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-gray-900">67 Form</h3>
                                    <form className="space-y-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="border-b-2 border-gray-300 focus-within:border-black transition-all py-2">
                                                <input type="text" placeholder="First Name" className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400" />
                                            </div>
                                            <div className="border-b-2 border-gray-300 focus-within:border-black transition-all py-2">
                                                <input type="text" placeholder="Last Name" className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400" />
                                            </div>
                                        </div>
                                        <div className="border-b-2 border-gray-300 focus-within:border-black transition-all py-2">
                                            <input type="email" placeholder="Email Address" className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400" />
                                        </div>
                                        <div className="border-b-2 border-gray-300 focus-within:border-black transition-all py-2">
                                            <textarea rows="4" placeholder="Your Message" className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400 resize-none" />
                                        </div>
                                        <button className="px-14 py-5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-500 hover:bg-gray-800 hover:shadow-2xl active:scale-95">
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/* Info Area */}
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

                                    {/* Map area */}
                                    <div className="relative overflow-hidden rounded-[2.5rem] aspect-video group cursor-pointer shadow-inner border border-gray-100" 
                                    onClick={() => window.open(mapsUrl, '_blank')}>
                                        <img src={Image} alt="Showroom Location" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            <span className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-xl border border-white">
                                                Open in Maps
                                            </span>
                                        </div>
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