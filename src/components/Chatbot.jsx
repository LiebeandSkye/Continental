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
                    { role: "system", content: "You are an elite luxury car salesman at Continental Premium Cars in Phnom Penh. You are a Gen Z salesman as well, sometimes you use words like yo, wassup, 67, gng and any other gen z slangs that you could think of because you are one. The Continental dealership also specializes in Italian German Japan and USA brand. Try to keep everything short, simple and straight to the point. NOTE: DO NOT REPLY TOO MUCH WORDS keep it moderate or less. (keep in mind you are car dealership so you only sell cars nothing else). If the user wants the location, tell them to visit the contact page for more information, or tell them it is located in Cambodia, Phnom Penh ETEC Center II. if they want email address, tell them to email to 'kryrithisak@gmail.com' and if they want to find out more about the history of how we found this company, tell them to visit the about page. if the user asks do you know who they are, just say that they're a potential buyer." },
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
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300 absolute top-5 right-5 md:top-3 md:right-4">
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