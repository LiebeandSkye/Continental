import React from 'react';
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import LogoDeer from '../assets/LogoDeer.png'
const Footer = () => {
    const footerSections = [
        {
            title: "Resource",
            links: ["Pricing", "Status", "Blog", "Videos", "67 Events"]
        },
        {
            title: "Company",
            links: ["About Us", "Careers", "Press", "News", "Contact"]
        },
        {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"]
        }
    ];

    return (
        <footer className='bg-[#0a0a0a] text-white pt-24 pb-12 px-6 relative overflow-hidden'>
            {/* Subtle Gradient Glow for a Premium Feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-12 mb-20'>
                    
                    {/* Brand / Logo Section */}
                    <div className='md:col-span-4 space-y-8'>
                        <div className="flex items-center gap-3">
                            {/* Replace this div with your actual <img> tag */}
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                <img src={LogoDeer}></img>
                            </div>
                            <h2 className="text-2xl font-bold tracking-tighter uppercase">
                                Continental
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Selling the best cars for yall to buy, you should buy from us because. because we are the best and you should buy from. yes, Did I mention we are the best?
                        </p>
                        
                        {/* made by */}
                        <div className="pt-4">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                                Crafted by <span className="text-gray-300">Sak, Tuna, Gemini & Chatgpt</span>
                            </p>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {footerSections.map((section, index) => (
                            <div key={index} className='flex flex-col'>
                                <h3 className='font-bold text-white uppercase tracking-widest text-xs mb-8'>
                                    {section.title}
                                </h3>
                                <div className='flex flex-col gap-4'>
                                    {section.links.map((link) => (
                                        <a 
                                            key={link} 
                                            href={`#${link.toLowerCase()}`}
                                            className='text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block'
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* copyright stuff */}
                <div className='border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='text-gray-500 text-xs tracking-widest uppercase'>
                        © {new Date().getFullYear()} Continental Inc. All rights reserved.
                    </div>

                    {/* media area */}
                    <div className='flex items-center gap-4'>
                        {[
                            { icon: <FaFacebook />, color: "hover:bg-blue-600", link: "#" },
                            { icon: <FaYoutube />, color: "hover:bg-red-600", link: "#" },
                            { icon: <FaTiktok />, color: "hover:bg-gray-800", link: "#" }
                        ].map((social, i) => (
                            <a 
                                key={i}
                                href={social.link} 
                                className={`w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;