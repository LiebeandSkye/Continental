import React from 'react'
import { CoData } from '../Data/ContactData.jsx'

const Contact = () => {
    const address = "St 160, Phnom Penh";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    return (
        <div>
            <div className='w-full h-400 px-17'>

                <div className='pt-2 h-400'>

                    <div className='h-90 mt-2'>

                        <div className='w-full h-full flex flex-col justify-center items-center rounded-2xl shadow-lg'>

                            <div className='w-[50%] h-full flex flex-col justify-center items-center gap-6'>

                                <h1 className='text-7xl text-shadow-lg text-center'>Reach Out</h1>

                                <p className='text-center'>We're here to help you find the right car with clarity and confidence. Reach out with any questions, and our team will guide you every step of the way.</p>

                            </div>

                        </div>

                        <div className='w-full h-250 mt-12 flex flex-row  justify-between'>

                            <div className='w-[60%] h-full p-10'>

                                <h1 className='text-4xl font-semibold text-shadow-lg'>Send us a Message</h1>

                                <div className='w-full h-full pb-10 mt-8 flex flex-col'>

                                    <div className='w-full h-[15%] flex'>

                                        <div className='w-[50%] h-full flex flex-col justify-center gap-2'>

                                            <h1 className='text-2xl font-semibold'>First Name</h1>

                                            <input type="text" placeholder='First Name' className='w-[75%] h-13 border-2 pl-3  rounded-2xl border-gray-300 bg-gray-200' />

                                        </div>

                                        <div className='w-[50%] h-full flex flex-col justify-center gap-2'>

                                            <h1 className='text-2xl font-semibold'>Last Name</h1>

                                            <input type="text" placeholder='Last Name' className='w-[75%] h-13 border-2 pl-3  rounded-2xl border-gray-300 bg-gray-200' />

                                        </div>

                                    </div>

                                    <div className='w-full h-[15%] gap-2 flex flex-col'>

                                        <h1 className='text-2xl font-semibold'>Email Address</h1>
                                        <input type="text" placeholder='Example@gmail.com' className='w-[87.5%] h-13 border-2 pl-3  rounded-2xl border-gray-300 bg-gray-200' />

                                    </div>

                                    <div className='w-full h-[15%] gap-2 flex flex-col'>

                                        <h1 className='text-2xl font-semibold'>Phone Number</h1>
                                        <input type="text" placeholder='+885 000-000' className='w-[87.5%] h-13 border-2 pl-3  rounded-2xl border-gray-300 bg-gray-200' />

                                    </div>

                                    <div className='w-full h-[15%] gap-2 flex flex-col'>

                                        <h1 className='text-2xl font-semibold'>Subject</h1>
                                        <input type="text" placeholder='Specific Vehicle' className='w-[87.5%] h-13 border-2 pl-3  rounded-2xl border-gray-300 bg-gray-200' />

                                    </div>

                                    <div className='w-full h-[15%] gap-2 flex flex-col'>

                                        <h1 className='text-2xl font-semibold'>Message</h1>
                                        <textarea
                                            className="w-[87.5%] h-32 px-3 pt-3 border rounded-lg
                                            focus:outline-none focus:ring-2 focus:ring-blue-500
                                            resize-none bg-gray-100"
                                            placeholder="Tell us how we can help you..."
                                        />


                                    </div>

                                    <button className='w-[87.5%] h-18 rounded-2xl text-2xl mt-7 bg-black text-white'>SEND MESSAGE</button>

                                </div>

                            </div>

                            <div className='w-[40%] h-full'>

                                <div className='w-full h-full flex flex-col gap-10 p-10'>

                                    <h1 className='text-4xl font-semibold text-shadow-lg'>Contact Information</h1>

                                    {CoData.map(Coda => {
                                        return (

                                            <div className='w-full h-25 flex items-center'>

                                                <div className='w-[20%] h-full flex justify-center'>

                                                    <div className='w-25 h-25 rounded-full flex justify-center items-center bg-black'>

                                                        <a className='text-5xl text-white'>{Coda.icon}</a>

                                                    </div>

                                                </div>

                                                <div className='w-[2%] h-[70%] rounded-2xl bg-gray-700 mr-5 ml-5 flex'>

                                                </div>

                                                <div className='w-[78%] h-full flex flex-col mt-3'>

                                                    <h1 className='text-2xl'>{Coda.name}</h1>
                                                    <p>{Coda.info1}</p>
                                                    <p>{Coda.info2}</p>

                                                </div>

                                            </div>

                                        );
                                    })}

                                    <a
                                        href={mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div
                                            className="w-full h-70 bg-gray-300 rounded-2xl
                                            flex items-center justify-center
                                            hover:opacity-90 transition"
                                        >
                                            <img src="../assets/Map.jpg" className='w-full h-full object-cover' alt="Location" />
                                        </div>
                                    </a>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact