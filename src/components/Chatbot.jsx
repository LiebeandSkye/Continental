import React, { useState, useEffect, useRef } from 'react';
import { IoChatbubbleEllipses, IoClose } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import Nav from './Nav'
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('userData');
        const userData = saved ? JSON.parse(saved) : { name: "Guest" };
        return [
            { role: 'bot', text: `Hello ${userData.name} ! Welcome to Continental. How can I help you today? :)` }
        ];
    });
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);

    // Auto-scroll to bottom when new message are sent
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const newMessages = [...messages, { role: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        // bot responses
        setTimeout(() => {
            let botReply = "I dont really understand what ur saying bro but you can type keywords like 'price', 'location', 'brand' (type only that keyword you can add more stuff to ur sentence but sometimes wont work well cuz idk how to make proper bot sorry)";
            const lowInput = input.toLowerCase();

            if (lowInput.includes('price') || lowInput.includes('cost')) {
                botReply = "Our premium vehicles range from $40,000 to over $5,000,000. You can see specific pricing in our Shop section.";
            } else if (lowInput.includes('location') || lowInput.includes('where')) {
                botReply = "it is located at ETEC Center II, Phnom Penh. Visit our Contact page for more info. can send us a message too if u want we will try to get back as soon as possible (maybe)";
            } else if (lowInput.includes('brand') || lowInput.includes('porsche') || lowInput.includes('ferrari')) {
                botReply = "We specialize in German, Italian, and British luxury brands. Which one are you interested in?";
            } else if (lowInput.includes('hi') || lowInput.includes('hello') || lowInput.includes('hey')) {
                botReply = "Hi! How can I help u today gng";
            } else if (lowInput.includes('bye') || lowInput.includes('goodbye') || lowInput.includes('cya')) {
                botReply = "Goodbye! Have a nice day!";
            } else if (lowInput.includes('thanks') || lowInput.includes('thank you') || lowInput.includes('thx')) {
                botReply = "You're welcome gng! anytime."
            } else if (lowInput.includes('german') || lowInput.includes('ferrari') || lowInput.includes('porsche') || lowInput.includes('italian') || lowInput.includes('british') || lowInput.includes('tesla') || lowInput.includes('audi') || lowInput.includes('bmw') || lowInput.includes('mercedes') || lowInput.includes('volvo') || lowInput.includes('ford') || lowInput.includes('toyota') || lowInput.includes('nissan') || lowInput.includes('honda') || lowInput.includes('mazda') || lowInput.includes('lexus') || lowInput.includes('japan') || lowInput.includes('lamborghini') || lowInput.includes('aston martin') || lowInput.includes('porsche') || lowInput.includes('usa') || lowInput.includes('mercedes') || lowInput.includes('luxury')) {
                botReply = "Ye we have those, go check them in the homepage, we plan to add more cars using api as well but the image suck so bad so we had to create our own data for quality images";
            } else if (lowInput.includes('ok') || lowInput.includes('yes') || lowInput.includes('no') || lowInput.includes('maybe')) {
                botReply = "aight sure anything else?";
            } else if (lowInput.includes('what') || lowInput.includes('wat') || lowInput.includes('wut')) {
                botReply = 'what?';
            } else if (lowInput.includes('about')) {
                botReply = 'its about... meh am lazy to explain just go check the about page bro also dont forget to rate my service a solid 5 stars out of 5';
            }
            setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
        }, 800);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-black p-6 text-white flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg leading-tight">Continental Assistant</h3>
                            <div className='flex items-center pt-1'>
                            <div className='bg-green-500 w-2 h-2 rounded-full mr-2'></div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">
                            <IoClose size={24} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-black text-white rounded-tr-none' 
                                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-gray-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
                        />
                        <button type="submit" className="bg-black text-white p-2 rounded-xl hover:bg-gray-800 transition-colors">
                            <IoMdSend size={20} />
                        </button>
                    </form>
                </div>
            )}

            {/* message icon */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 active:scale-90 cursor-pointer ${
                    isOpen ? 'bg-white text-black rotate-90' : 'bg-black text-white'
                }`}
            >
                {isOpen ? <IoClose size={30} /> : <IoChatbubbleEllipses size={30} />}
            </button>
        </div>
    );
};

export default Chatbot;