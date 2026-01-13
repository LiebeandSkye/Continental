import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiHandshake } from "react-icons/pi";
import { SiBetfair } from "react-icons/si";
import Counter from "./Counter.jsx";
import '../global.css'
const About = () => {
    return (
        <div>
            <div className='w-full h-400 px-17 flex flex-row font'>
                
                <div className='pt-2 h-400'>

                    <div className='h-90 mt-2'>

                        <div className='w-full h-full flex flex-col justify-center items-center gap-6  bg-white'>

                            <h1 className='text-7xl text-shadow-lg'>About Continental</h1>

                            <p className=''>We bring premium cars to the digital world, combining quality vehicles, transparent pricing, and a smooth online buying experience.</p>

                        </div>

                    </div>

                    <div className='w-full h-100 mt-12 flex justify-between'>

                        <div className='w-[48%] h-full'>

                            <div className='w-full h-full float-start flex flex-col justify-around gap-2 bg-white'>

                                <h1 className='text-5xl text-shadow-md'>Our Adventure</h1>

                                <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis amet quis placeat distinctio expedita, modi, veniam aliquam unde nulla impedit doloremque fugit quod aut maiores illo est soluta provident voluptate.</p>

                                <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis amet quis placeat distinctio expedita, modi, veniam aliquam unde nulla impedit doloremque fugit quod aut maiores illo est soluta provident voluptate.</p>

                            </div>

                        </div>

                        <div className='w-[48%] h-full shadow rounded-2xl'>

                            <div className='w-full h-full rounded-2xl flex justify-center items-center bg-gray-200'>
                                    <img src='https://imgs.search.brave.com/1hyrJ6kSrjpP-VB4dyQlo7Psy8K6snIaOPgYbcSj6JY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy90bnMt/aGVyby0xLTY3MGZl/ZWM5MTgxYzAuanBn/P2Nyb3A9MXh3OjF4/aDtjZW50ZXIsdG9w' className="w-full h-full overflow-hidden object-cover rounded-2xl"></img>
                            </div>

                        </div>

                    </div>

                    <div className='w-full h-60 mt-14 '>

                        <div className='w-full h-full flex gap-4 '>

                            <div className='w-[25%] h-full flex flex-col shadow-lg rounded-2xl '>

                                <div className='w-full h-[50%] flex justify-center items-center'>

                                    <div className='w-24 h-24 flex justify-center items-center bg-gray-800 rounded-full'>
                                        <a className='text-6xl mt-1 text-white'><IoIosHeartEmpty /></a>
                                    </div>
                                </div>

                                <div className='w-full h-[50%] gap-2 flex flex-col items-center p-2'>

                                    <h1 className='font-bold text-2xl'>Passion</h1>

                                    <p className='text-center'>Lorem ipsum dolor sit amet consect adipisicing elit.</p>

                                </div>

                            </div>

                            <div className='w-[25%] h-full shadow-lg rounded-2xl'>

                                <div className='w-full h-[50%] flex justify-center items-center'>

                                    <div className='w-24 h-24 flex justify-center items-center bg-gray-800 rounded-full'>
                                        <a className='text-6xl mt-1 text-white'><VscWorkspaceTrusted /></a>
                                    </div>
                                </div>

                                <div className='w-full h-[50%] gap-2 flex flex-col items-center p-2'>

                                    <h1 className='font-bold text-2xl'>TrustWorthy</h1>

                                    <p className='text-center'>Lorem ipsum dolor sit amet consect adipisicing elit.</p>

                                </div>
                            </div>
                            <div className='w-[25%] h-full shadow-lg rounded-2xl'>

                                <div className='w-full h-[50%] flex justify-center items-center'>

                                    <div className='w-24 h-24 flex justify-center items-center bg-gray-800 rounded-full'>
                                        <a className='text-6xl mt-1 text-white'><SiBetfair /></a>
                                    </div>
                                </div>

                                <div className='w-full h-[50%] gap-2 flex flex-col items-center p-2'>

                                    <h1 className='font-bold text-2xl'>Fair</h1>

                                    <p className='text-center'>Lorem ipsum dolor sit amet consect adipisicing elit.</p>

                                </div>

                            </div>

                            <div className='w-[25%] h-full shadow-lg rounded-2xl'>

                                <div className='w-full h-[50%] flex justify-center items-center'>

                                    <div className='w-24 h-24 flex justify-center items-center bg-gray-800 rounded-full'>
                                        <a className='text-6xl mt-1 text-white'><PiHandshake /></a>
                                    </div>
                                </div>

                                <div className='w-full h-[50%] gap-2 flex flex-col items-center p-2'>

                                    <h1 className='font-bold text-2xl'>Transparent</h1>

                                    <p className='text-center'>Lorem ipsum dolor sit amet consect adipisicing elit.</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='w-full h-70 mt-14'>

                        <div className='w-full h-full flex rounded-2xl bg-black'>

                            <div className='w-[33.33%] h-full gap-2 flex flex-col justify-center items-center '>

                                <h1 className='text-6xl text-white'>15</h1>
                                <p className='text-2xl text-white'>Years of experience</p>

                            </div>

                            <div className='w-[33.33%] h-full gap-2 flex flex-col justify-center items-center '>

                                <Counter target={2200} />
                                <h1 className='text-2xl text-white'>Vehicles Sold</h1>

                            </div>

                            <div className='w-[33.33%] h-full flex flex-col justify-center items-center'>

                                <h1 className='text-6xl text-white'>90%</h1>

                                <p className='text-2xl text-white'>Customer Satisfaction</p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
