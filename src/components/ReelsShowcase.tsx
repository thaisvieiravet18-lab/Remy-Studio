import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Heart, Share2, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

const REELS_DATA = [
  {
    id: 1,
    bg: '#1a0a2e',
    youtubeId: 'ayz5ZfcZ8mk',
    duration: 155
  },
  {
    id: 2,
    bg: '#0a1a0a',
    youtubeId: 'zI8fmoLBxzg',
    duration: 187
  }
];

export default function ReelsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const nextReel = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REELS_DATA.length);
  }, []);

  const prevReel = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REELS_DATA.length) % REELS_DATA.length);
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    setHasInteracted(true);
  };

  const handleInitialInteraction = () => {
    setIsMuted(false);
    setHasInteracted(true);
  };

  // Sync YouTube Player state
  useEffect(() => {
    if (hasInteracted && iframeRef.current?.contentWindow) {
      const targetMute = isMuted;
      
      const sendCommand = () => {
        if (!iframeRef.current?.contentWindow) return;
        
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ 
            event: "command", 
            func: targetMute ? "mute" : "unMute",
            args: []
          }), 
          "*"
        );
        
        if (!targetMute) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ 
              event: "command", 
              func: "setVolume",
              args: [100]
            }), 
            "*"
          );
        }
      };

      sendCommand();
      const timeout = setTimeout(sendCommand, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isMuted, hasInteracted]);

  useEffect(() => {
    const timer = setInterval(nextReel, (REELS_DATA[currentIndex].duration || 30) * 1000);
    return () => clearInterval(timer);
  }, [currentIndex, nextReel]);

  return (
    <section className="py-24 px-8 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="light-beam-gold top-0 right-0 opacity-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* COLUNA ESQUERDA — TEXTO */}
        <div className="space-y-10 text-balance">
          <div className="space-y-4">
            <span className="text-[10px] text-remy-sand uppercase tracking-[0.2em] font-bold">
              Remy Studio · Reels
            </span>
            <h2 className="text-5xl md:text-7xl text-white font-cinzel leading-[1.1] tracking-tighter">
              Reels that <br />
              <span className="text-remy-sand italic">stop the scroll.</span>
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-white/50 leading-[1.8] max-w-lg font-poppins">
            Strategic visual content scripted with mental triggers and persuasive copy — made to attract pet owners every day.
          </p>

          <ul className="space-y-4">
            {[
              "Script + editing + captions included",
              "Persuasive copy in every reel",
              "Organic reach strategy",
              "Visual identity preserved"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-base md:text-lg text-white/80">
                <span className="w-4 h-[1px] bg-remy-sand shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA DIREITA — CELULAR (Aumentado para máxima imersão) */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-[360px] h-[720px] bg-[#0a0a0a] rounded-[60px] border-[6px] border-[#1e1e1e] relative p-4 shadow-[0_0_180px_rgba(214,195,163,0.3)] flex flex-col group">
            
            {/* Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[18px] bg-[#111] rounded-[9px] z-20 shadow-inner" />

            {/* Controles — Visíveis no Hover */}
            <div className="absolute inset-x-8 top-16 flex justify-between items-center z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button 
                onClick={(e) => { e.stopPropagation(); prevReel(); }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white hover:text-remy-sand transition-all active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={toggleSound}
                className="px-6 py-3 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white hover:text-remy-sand transition-all active:scale-95"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                <span className="text-[12px] uppercase tracking-[0.2em] font-bold">
                  {isMuted ? 'Mute' : 'Sound'}
                </span>
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); nextReel(); }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white hover:text-remy-sand transition-all active:scale-95"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Tela */}
            <div className="flex-1 bg-black rounded-[42px] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black"
                >
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <iframe
                      ref={iframeRef}
                      src={`https://www.youtube.com/embed/${REELS_DATA[currentIndex].youtubeId}?autoplay=1&mute=0&controls=0&loop=1&playlist=${REELS_DATA[currentIndex].youtubeId}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`}
                      frameBorder="0"
                      allow="autoplay"
                      className="absolute w-[130%] h-[130%] -left-[15%] -top-[15%]"
                      title="YouTube Reels"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-40 opacity-40">
              {REELS_DATA.map((_, idx) => (
                <div 
                  key={idx} 
                  className="w-[1.5px] h-8 bg-white/20 rounded-full overflow-hidden"
                >
                  {currentIndex === idx && (
                    <motion.div 
                      className="w-full bg-remy-sand origin-top"
                      initial={{ height: 0 }}
                      animate={{ height: '100%' }}
                      transition={{ duration: REELS_DATA[currentIndex].duration || 30, ease: "linear" }}
                    />
                  )}
                  {currentIndex > idx && <div className="w-full h-full bg-remy-sand" />}
                </div>
              ))}
            </div>

            {/* Home Bar */}
            <div className="h-8 flex items-center justify-center">
              <div className="w-[48px] h-[5px] bg-[#1a1a1a] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
