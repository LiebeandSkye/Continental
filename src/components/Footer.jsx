import React from 'react';
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
    const footerSections = [
        {
            title: "Resource",
            links: ["Pricing", "Status", "Blog", "Videos", "Events"]
        },
        {
            title: "Company",
            links: ["About Us", "Careers", "Press", "News", "Contact"]
        },
        {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"]
        },
        {
            title: "Support",
            links: ["Help Center", "Community", "Safety", "Status", "FAQ"]
        }
    ];

    return (
        <footer className='bg-black text-white pt-16 pb-8 px-6'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-12 mb-16'>
                    {footerSections.map((section, index) => (
                        <div key={index} className='flex flex-col'>
                            <h1 className='font-bold text-gray-100 uppercase tracking-widest text-sm mb-6'>
                                {section.title}
                            </h1>
                            <div className='flex flex-col gap-4'>
                                {section.links.map((link) => (
                                    <a 
                                        key={link} 
                                        href={`#${link.toLowerCase()}`}
                                        className='text-lg font-medium text-gray-400 hover:text-white transition-colors duration-200'
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div className='text-gray-500 text-sm'>
                        © {new Date().getFullYear()} Continental Inc. All rights reserved.
                    </div>

                    <div className='flex items-center gap-6'>
                        <a href="#" className='text-2xl text-gray-400 hover:text-blue-500 transition-all transform hover:scale-110'>
                            <FaFacebook />
                        </a>
                        <a href="#" className='text-2xl text-gray-400 hover:text-red-600 transition-all transform hover:scale-110'>
                            <FaYoutube />
                        </a>
                        <a href="#" className='text-2xl text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110'>
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;