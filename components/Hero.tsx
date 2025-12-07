import React from 'react';
import { ArrowRight, Zap, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenMemeGen: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenMemeGen }) => {
  return (
    <div className="w-full relative z-10 py-10 md:py-20">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* LEFT COLUMN: LOGO VISUAL */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-center relative order-1 md:order-1 animate-float">
                 {/* Decorative Rings */}
                 <div className="absolute inset-0 m-auto w-[120%] h-[120%] border-2 border-white/20 rounded-full animate-spin-slow"></div>
                 <div className="absolute inset-0 m-auto w-[140%] h-[140%] border border-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                 
                 {/* Main Logo Container */}
                 <div className="relative group cursor-pointer perspective-1000">
                    <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                    <img 
                        src="https://pbs.twimg.com/media/G7l7fKlX0AAQTAB?format=jpg&name=medium" 
                        alt="BONK GPT Logo" 
                        className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full border-[12px] border-white shadow-glow shadow-bonk-orange transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 object-cover z-20"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white text-bonk-black px-4 py-2 rounded-xl font-black shadow-lg z-30 transform rotate-[-5deg] animate-bounce">
                        v1.0 LIVE
                    </div>
                 </div>
            </div>

            {/* RIGHT COLUMN: TEXT CONTENT */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2 space-y-8 animate-slide-up">
                
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Zap size={14} className="fill-current text-yellow-300" />
                    <span className="opacity-90">Next Gen Meme AI</span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-sm">
                    CODE WITH <br/>
                    <span className="text-bonk-black relative inline-block">
                        VIBES
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-white fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                           <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" />
                        </svg>
                    </span>
                </h1>

                <p className="text-xl font-bold text-gray-900/80 max-w-lg leading-relaxed">
                    The world's first AI agent that runs purely on Solana momentum. 
                    Generate apps, memes, and smart contracts instantly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                    <button 
                        onClick={onOpenTerminal}
                        className="group relative px-8 py-5 bg-bonk-black text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all w-full sm:w-auto overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            OPEN TERMINAL <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    
                    <button 
                        onClick={onOpenMemeGen}
                        className="px-8 py-5 bg-white text-bonk-black font-bold text-lg rounded-2xl shadow-lg border-2 border-white hover:bg-transparent hover:border-black transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                        <ImageIcon size={20} /> CREATE MEME
                    </button>
                </div>

                <div className="pt-2 flex items-center gap-4 text-sm font-bold text-gray-800 opacity-60">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Systems Online</span>
                    <span>•</span>
                    <span>Solana Mainnet</span>
                </div>

            </div>

        </div>
    </div>
  );
};