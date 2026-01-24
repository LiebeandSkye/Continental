import React, { useEffect } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiHandshake } from "react-icons/pi";
import { SiBetfair } from "react-icons/si";
import { Doda } from '../Data/AboutData.jsx'
import Counter from "./Counter.jsx";
import CarVideo1 from '../assets/CarVideo1.mp4'
import Porsche from '../assets/Porsche.jpg'
import '../global.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <div className="bg-gray-200 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[88vh] w-full overflow-hidden">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay muted loop playsInline
                    onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.8)}
                >
                    <source src={CarVideo1} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">About Continental</h1>
                    <p className="max-w-2xl text-lg opacity-90">
                        We bring premium cars to the digital world, combining quality vehicles,
                        transparent pricing, and a smooth online buying experience.
                    </p>
                </div>
            </section>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

                {/* Our Adventure Section */}
                <section className="flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl bg-gray-900" data-aos="fade-up">
                    <div className="md:w-1/2 p-12 text-white flex flex-col justify-center gap-6">
                        <h2 className="text-5xl font-bold">Our Adventure</h2>
                        <p className="text-gray-300 leading-relaxed">
                            This is our school project, we very much like this project (sarcasm), we totally enjoy doing this and hope we can do more in the future (aw hell nah)
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We can't find a good image ,so we use this Independence of Monument image because it looks cool and yes we can't find better image.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src='https://imgs.search.brave.com/LpcknSNj3hhUiqk5FYWb_hQuS39gy9xiS0nU4H2xG6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXhwZXJpZW5jZXRy/YXZlbGdyb3VwLmNv/bS93cC1jb250ZW50/L3NtdXNoLXdlYnAv/MjAyNS8wNy9tYXJr/LUprSTRfc01ubE9n/LXVuc3BsYXNoLTEt/c2NhbGVkLmpwZy53/ZWJw' alt="Porsche" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* Features Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Doda.map((p, index) => (
                        <div key={index} className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center">
                            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl">
                                {p.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-3">{p.name}</h3>
                            <p className="text-gray-600 text-sm">{p.des}</p>
                        </div>
                    ))}
                </section>

                {/* Stats Section */}
                <section className="bg-gray-950 rounded-2xl py-16 px-6" data-aos="fade-up">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
                        <div className="space-y-2">
                            <h4 className="text-6xl font-bold">15</h4>
                            <p className="text-xl text-gray-400">Years of Experience</p>
                        </div>
                        <div className="space-y-2">
                            <Counter target={2200} />
                            <p className="text-xl text-gray-400">Vehicles Sold</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-6xl font-bold">90%</h4>
                            <p className="text-xl text-gray-400">Customer Satisfaction</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About
