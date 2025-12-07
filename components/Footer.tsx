import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 mt-20 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-black text-bonk-orange tracking-tight">BONK GPT</h2>
        <p className="text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
            This is a memecoin project. Not financial advice. The AI is trained on vibes and may hallucinate moon missions. 
            Do Your Own Research (DYOR).
        </p>
        <div className="pt-8 text-sm text-gray-400 font-mono">
            © {new Date().getFullYear()} BONK GPT. All rights bonked.
        </div>
      </div>
    </footer>
  );
};