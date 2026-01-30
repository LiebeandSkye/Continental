import React, { useEffect } from 'react'
import { Doda } from '../Data/AboutData.jsx'
import Counter from "./Counter.jsx"
import CarVideo1 from '../assets/CarVideo1.mp4'
import '../global.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lokapop from '../assets/Lokapop.jpg'

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])
    const handleTilt = (e) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
        `
    }

    const resetTilt = (e) => {
        e.currentTarget.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    }

    return (
        <div className="bg-gray-200 min-h-screen">
            <section className="relative h-[88vh] w-full overflow-hidden">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.8)}
                >
                    <source src={CarVideo1} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        About Continental
                    </h1>
                    <p className="max-w-2xl text-lg opacity-90">
                        We bring premium cars to the digital world, combining quality vehicles,
                        transparent pricing, and a smooth online buying experience.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-30 space-y-32">
                <section
                    className="flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl bg-gray-900"
                    data-aos="fade-up"
                >
                    <div className="md:w-1/2 p-12 text-white flex flex-col justify-center gap-6">
                        <h2 className="text-5xl font-bold">Our Adventure</h2>
                        <p className="text-gray-300 leading-relaxed">
                            This is our school project, we very much like this project (sarcasm),
                            we totally enjoy doing this and hope we can do more in the future (aw hell nah)
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We can't find a good image, so we use this Independence Monument image
                            because it looks cool and yes we can't find better image.
                        </p>
                    </div>
                    {/* 🌀 TILT IMAGE */}
                    <div className="md:w-1/2 p-6 flex items-center justify-center">
                        <div
                            onMouseMove={handleTilt}
                            onMouseLeave={resetTilt}
                            className="w-full h-full rounded-xl overflow-hidden transition-transform duration-200 ease-out"
                            style={{ transformStyle: "preserve-3d" }}>
                            <img
                                src="https://imgs.search.brave.com/LpcknSNj3hhUiqk5FYWb_hQuS39gy9xiS0nU4H2xG6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXhwZXJpZW5jZXRy/YXZlbGdyb3VwLmNv/bS93cC1jb250ZW50/L3NtdXNoLXdlYnAv/MjAyNS8wNy9tYXJr/LUprSTRfc01ubE9n/LXVuc3BsYXNoLTEt/c2NhbGVkLmpwZy53/ZWJw"
                                alt="Independence Monument"
                                className="w-full h-full object-cover"
                                style={{ transform: "translateZ(40px)" }}
                            />
                        </div>
                    </div>
                </section>
                {/* 🌀 TILT IMAGE 2 */}
                <section
                    className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl min-h-[400px] lg:h-[450px]"
                    data-aos="fade-up">
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <div
                            onMouseMove={handleTilt}
                            onMouseLeave={resetTilt}
                            className="w-full max-w-md aspect-video md:aspect-square lg:h-90 rounded-xl overflow-hidden transition-transform duration-200 ease-out"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <img
                                src={Lokapop}
                                alt="Our group picture"
                                className="w-full h-full object-cover"
                                style={{ transform: "translateZ(40px)" }}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold">Our Picture</h2>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            Only two dudes (dude at the very front and dude at the very back) from
                            the pic worked on this web, but we wanted to put everyone because
                            we think it's a good idea. Maybe not, but we do think it's a good idea.
                        </p>
                    </div>
                </section>
                {/* Features Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Doda.map((p, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center"
                        >
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
                            <Counter target={15} suffix="+" />
                            <p className="text-xl text-gray-400">Years of Experience</p>
                        </div>
                        <div className="space-y-2">
                            <Counter target={2200} suffix="+" />
                            <p className="text-xl text-gray-400">Vehicles Sold</p>
                        </div>
                        <div className="space-y-2">
                            <Counter target={90} suffix="%" />
                            <p className="text-xl text-gray-400">Customer Satisfaction</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default About