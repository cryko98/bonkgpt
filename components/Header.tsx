import React, { useState } from 'react';
import { Copy, Check, Menu, X as XIcon } from 'lucide-react';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contractAddress = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md text-bonk-black border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
             <div className="relative">
                <div className="absolute inset-0 bg-bonk-orange rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src="https://pbs.twimg.com/media/G7l7fKlX0AAQTAB?format=jpg&name=medium" 
                  alt="BONK GPT Logo" 
                  className="relative w-12 h-12 rounded-full border-2 border-white shadow-lg shadow-orange-200 transform group-hover:rotate-12 transition-transform duration-300 object-cover"
                />
             </div>
             <span className="font-black text-2xl tracking-tighter text-gray-900 group-hover:text-bonk-orange transition-colors">BONK GPT</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleCopy}
              className="group flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-bonk-orange hover:bg-white transition-all text-sm font-mono text-gray-600 hover:text-bonk-orange hover:shadow-md"
            >
              <span>{contractAddress.substring(0, 6)}...{contractAddress.substring(contractAddress.length - 4)}</span>
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="opacity-50 group-hover:opacity-100" />}
            </button>
            
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors">
              {/* X.com Logo SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>

            <a href="https://bonk.fun" className="ml-4 bg-bonk-orange text-white font-bold px-6 py-2.5 rounded-full hover:bg-bonk-dark hover:scale-105 transition-all shadow-lg shadow-orange-200">
              Buy Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 hover:text-bonk-orange p-2">
              {mobileMenuOpen ? <XIcon size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 space-y-4 shadow-xl absolute w-full left-0">
           <button 
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 active:border-bonk-orange text-sm font-mono text-gray-600"
            >
              <span className="truncate">{contractAddress}</span>
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
            </button>
            <div className="flex justify-center space-x-8 py-2">
               <a href="https://x.com" className="text-gray-600 hover:text-bonk-orange">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
               </a>
            </div>
            <a href="https://bonk.fun" className="block w-full text-center bg-bonk-orange text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-orange-200">
              Buy on bonk.fun
            </a>
        </div>
      )}
    </header>
  );
};