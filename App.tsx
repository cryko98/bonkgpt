import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChatInterface } from './components/ChatInterface';
import { MemeGenerator } from './components/MemeGenerator';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Terminal, Image as ImageIcon, Cpu } from 'lucide-react';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'none' | 'terminal' | 'meme'>('none');

  return (
    <div className="min-h-screen bg-bonk-orange text-bonk-black flex flex-col font-sans selection:bg-white selection:text-bonk-orange overflow-x-hidden relative">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <Header />
      
      <main className="flex-grow flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <Hero 
          onOpenTerminal={() => setActiveModal('terminal')}
          onOpenMemeGen={() => setActiveModal('meme')}
        />
        
        {/* Features Grid - Professional Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-20 mb-20">
           <div 
             className="bg-white/95 backdrop-blur-sm p-8 rounded-[2rem] shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative overflow-hidden"
             onClick={() => setActiveModal('terminal')}
           >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Terminal size={120} />
              </div>
              <div className="w-16 h-16 bg-bonk-orange rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-orange-200">
                <Terminal size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Vibe Coder Agent</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Autonomous coding agent capable of generating full HTML5 games, DeFi dashboards, and UI components in seconds.
              </p>
           </div>

           <div 
             className="bg-white/95 backdrop-blur-sm p-8 rounded-[2rem] shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative overflow-hidden"
             onClick={() => setActiveModal('meme')}
           >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <ImageIcon size={120} />
              </div>
              <div className="w-16 h-16 bg-bonk-black rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-lg">
                <ImageIcon size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Image Factory</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Advanced image generation suite with multi-style support (3D, Pixel, Oil) and professional text overlay tools.
              </p>
           </div>

           <div className="bg-white/95 backdrop-blur-sm p-8 rounded-[2rem] shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Cpu size={120} />
              </div>
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-200">
                <Cpu size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Neural Core</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Powered by our proprietary Vibe-Linguistics Engine. Optimized for Solana development patterns and high-frequency meme propagation.
              </p>
           </div>
        </div>

      </main>
      <Footer />

      {/* MODALS */}
      <Modal 
        isOpen={activeModal === 'terminal'} 
        onClose={() => setActiveModal('none')}
        title="BONK GPT TERMINAL"
        icon={<Terminal className="text-bonk-orange" />}
      >
        <ChatInterface />
      </Modal>

      <Modal 
        isOpen={activeModal === 'meme'} 
        onClose={() => setActiveModal('none')}
        title="BONK IMAGE STUDIO"
        icon={<ImageIcon className="text-bonk-orange" />}
      >
        <MemeGenerator />
      </Modal>

    </div>
  );
};

export default App;