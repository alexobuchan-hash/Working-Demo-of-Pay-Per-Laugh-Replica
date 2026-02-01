
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-8 relative inline-block">
        <span className="absolute -top-6 -right-6 bg-pink-500 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest animate-bounce">
          Must See
        </span>
        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
          Ready to <br /> Laugh?
        </h2>
      </div>
      
      <p className="max-w-md mx-auto text-neutral-400 text-lg mb-10 font-light leading-relaxed">
        Our proprietary AI monitors your face. Every genuine laugh costs you <span className="text-white font-bold">€0.30</span>. 
        Capped at <span className="text-white font-bold">€24.00</span> per show. No hiding, no faking.
      </p>

      <div className="flex flex-col gap-4 items-center">
        <button 
          onClick={onStart}
          className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span className="relative z-10">Enter Comedy Club</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
        </button>
        <p className="text-[10px] text-neutral-600 uppercase tracking-widest mt-4">
          Camera Access Required for Biometric Laugh Detection
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
