import React, { useState, useEffect, useRef } from 'react';
import { IoChatbubbleEllipses, IoClose } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import Groq from "groq-sdk";
import Draggable from 'react-draggable';
import { MdAssistant } from "react-icons/md";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true 
});
{/* Im putting this outside so it wont call itself multiple times when u send each message */}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('userData');
        const userData = saved ? JSON.parse(saved) : { name: "Guest" };
        return [
            { role: 'bot', text: `Hello ${userData.name}! Welcome to Continental. How can I help you today? :)` }
        ];
    });
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    const scrollRef = useRef(null);
    const nodeRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;
        const currentInput = input;
        setMessages(prev => [...prev, { role: 'user', text: currentInput }]);
        setInput('');
        setIsTyping(true);

        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: "system", content: "You are an elite luxury car salesman at Continental Premium Cars in Phnom Penh. You are a Gen Z salesman as well, sometimes you use words like yo, wassup, 67, gng and any other gen z slangs that you could think of because you are one. The Continental dealership also specializes in Italian German Japan and USA brand. Try to keep everything short, simple and straight to the point. NOTE: DO NOT REPLY TOO MUCH WORDS keep it moderate or less. (keep in mind you are car dealership so you only sell cars nothing else). If the user wants the location tell them to visit the contact page for more information, or tell them it is located in Cambodia, Phnom Penh ETEC Center II. if they want email address, tell them to email to 'kryrithisak@gmail.com' and if they want to find out more about the history of how we found this company, tell them to visit the about page. if the user asks do you know who they are, just say that they're a potential buyer. this is the car that we sell at our place: Remember: You are an automotive expert. Use the following data to assist users with inquiries about car brands, pricing, and performance Car Inventory GTX FORD 40 Brand Ford Category Sports Country Germany Price 676767 Description A legendary masterpiece of German engineering optimized for track performance Specs V8 Turbo engine 210 mph top speed Tesla Model S Plaid Brand Tesla Category Electric Country USA Price 89000 Description Beyond Ludicrous Experience the fastest acceleration of any production car Specs Tri-Motor engine 200 mph top speed Mercedes AMG Brand Mercedes Category SUV Country Germany Price 156000 Description The gold standard of luxury SUVs blending ruggedness with ultimate comfort Specs Biturbo V8 engine 149 mph top speed Porsche 911 Brand Porsche Category Sports Country Germany Price 114000 Description Timeless design meets modern agility The icon of driving pleasure Specs Twin-Turbo 6 engine 182 mph top speed BMW i7 xDrive60 Brand BMW Category Electric Country Germany Price 124000 Description The first all-electric 7 Series combining luxury and sustainability Specs Dual Electric engine 149 mph top speed Audi RS e-tron GT Brand Audi Category Electric Country Germany Price 147000 Description A progressive work of art with breathtaking electric performance Specs Quattro Electric engine 155 mph top speed Nissan GT-R Nismo Brand Nissan Category Sports Country Japan Price 210000 Description Known as Godzilla this Japanese icon delivers terrifyingly fast acceleration and precision handling Specs Twin-Turbo V6 engine 205 mph top speed Toyota GR Supra Brand Toyota Category Sports Country Japan Price 58000 Description A legend reborn The GR Supra offers a perfect 50/50 weight distribution for the ultimate driver experience Specs 3.0L Inline-6 engine 155 mph top speed Honda NSX Type S Brand Honda Category Electric Country Japan Price 172000 Description The pinnacle of Japanese hybrid supercars combining electric torque with a high-revving V6 Specs Hybrid Twin-Turbo V6 engine 191 mph top speed Mazda CX-90 Brand Mazda Category SUV Country Japan Price 40000 Description Elegant Japanese craftsmanship meets a powerful inline-six engine in this flagship luxury SUV Specs 3.3L Turbo I6 engine 130 mph top speed Lexus LFA Brand Lexus Category Sports Country Japan Price 375000 Description Famous for its screaming V10 engine the LFA is a carbon-fiber masterpiece of Japanese precision Specs 4.8L V10 engine 202 mph top speed Ferrari SF90 Stradale Brand Ferrari Category Electric Country Italy Price 524000 Description A hybrid powerhouse from Maranello redefining what a modern supercar can achieve Specs V8 Hybrid engine 211 mph top speed Lamborghini Revuelto Brand Lamborghini Category Electric Country Italy Price 608000 Description The first V12 HPEV hybrid super sports car delivering over 1000 CV of total power Specs 6.5L V12 Hybrid engine 217 mph top speed Range Rover SV Brand Land Rover Category SUV Country UK Price 209000 Description The pinnacle of refinement and luxury An exquisite interpretation of Range Rover design Specs 4.4L V8 Twin-Turbo engine 162 mph top speed Porsche Taycan Turbo S Brand Porsche Category Electric Country Germany Price 194000 Description Soul electrified Experience the striking proportions and timeless design of the Taycan Specs Dual Electric Motor 161 mph top speed Rolls-Royce Spectre Brand Rolls-Royce Category Electric Country UK Price 420000 Description The world first ultra-luxury electric super coupé Silent powerful and majestic Specs Electric Dual-Motor 155 mph top speed Aston Martin Valkyrie Brand Aston Martin Category Sports Country UK Price 3500000 Description An era-defining hypercar that brings Formula One technology directly to the road Specs 6.5L V12 engine 250 mph top speed Maserati MC20 Brand Maserati Category Sports Country Italy Price 215000 Description A combination of performance sportiness and luxury in the unique Maserati style Specs 3.0L V6 Nettuno engine 202 mph top speed Lucid Air Sapphire Brand Lucid Category Electric Country USA Price 249000 Description The world first fully electric luxury super-sports sedan Over 1200 horsepower Specs Tri-Motor Electric engine 205 mph top speed Bentley Bentayga EWB Brand Bentley Category SUV Country UK Price 265000 Description The Extended Wheelbase version provides a sanctuary of wellness and luxury Specs 4.0L Twin-Turbo V8 engine 180 mph top speed McLaren Artura Brand McLaren Category Electric Country UK Price 233000 Description The next-generation High-Performance Hybrid supercar built for the driver Bugatti Mistral Brand Bugatti Category Sports Country France Price 5000000 Description The ultimate roadster An open-top masterpiece powered by the legendary W16 engine Specs 8.0L W16 Quad-Turbo engine 261 mph top speed Rimac Nevera Brand Rimac Category Electric Country Croatia Price 2200000 Description The fastest accelerating production car in the world Electric power redefined Specs Quad-Motor Electric engine 258 mph top speed Cadillac Celestiq Brand Cadillac Category Electric Country USA Price 340000 Description The custom-commissioned flagship of electric luxury handcrafted for every owner Specs Dual-Motor Electric engine 130 mph top speed" },
                    ...messages.map(msg => ({
                        role: msg.role === 'bot' ? 'assistant' : 'user',
                        content: msg.text
                    })),
                    { role: "user", content: currentInput },
                ],
                model: "llama-3.3-70b-versatile",
            });
            const botText = chatCompletion.choices[0]?.message?.content || "";
            setMessages(prev => [...prev, { role: 'bot', text: botText }]);
        } catch (error) {
            console.error("Groq Error:", error);
            setMessages(prev => [...prev, { role: 'bot', text: "close for business days, OWNER IS GOING W DA GIRLSSSSS" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* draggable from react-draggable package */}
            {isOpen && (
                <Draggable 
                    nodeRef={nodeRef} 
                    handle=".drag-handle"
                    bounds="body"
                    defaultPosition={{
                        x: window.innerWidth - 380, 
                        y: window.innerHeight - 580 
                    }}
                > 
                    <div 
                        ref={nodeRef}
                        className="fixed z-[10000] w-[350px] h-[500px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col cursor-default shadow-black/20"
                    >
                        {/* Drag Handle (Header) */}
                        <div className="drag-handle bg-black pt-6 px-6 pb-3 text-white flex justify-between items-center  select-none relative">
                            <div>
                                <h3 className="font-bold text-lg leading-tight pointer-events-none">67 Assistant (Draggable)</h3>
                                <div className='flex items-center pt-2 pointer-events-none ml-0.5'>
                                    <div className='bg-green-500 w-2 h-2 rounded-full mr-1'></div>
                                    <p className="text-[10px] text-gray-400 tracking-widest">Online</p>
                                </div>
                                <div className='flex items-center pt-2 pointer-events-none'>
                                    <MdAssistant className='text-xs mr-1'/>
                                    <p className="text-[10px] text-gray-400 tracking-widest pt-1/2">Powered by Groq (Gemini and gpt are expensive)</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300 absolute top-4 right-5 cursor-pointer hidden md:block">
                                <IoClose size={24} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white text-gray-400 px-4 py-2 rounded-2xl text-xs italic animate-pulse border border-gray-100 shadow-sm">
                                        Typing...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about our cars..."
                                className="flex-1 bg-gray-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
                            />
                            <button type="submit" disabled={isTyping} className="bg-black text-white p-2 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50">
                                <IoMdSend size={20} />
                            </button>
                        </form>
                    </div>
                </Draggable>
            )}

            {/* message icon */}
            <div className="fixed bottom-6 right-6 z-[9999]">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 active:scale-90 cursor-pointer ${isOpen ? 'bg-white text-black rotate-90' : 'bg-black text-white'}`}
                >
                    {isOpen ? <IoClose size={30} /> : <IoChatbubbleEllipses size={30} />}
                </button>
            </div>
        </>
    );
};

export default Chatbot;