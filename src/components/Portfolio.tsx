import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Heart, Share2, ChevronLeft, ChevronRight, Volume2, VolumeX, Volume } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "CATLIFE",
    context: "Clinic specializing in felines. Need to convey safety and specialization.",
    developed: "A livelier and more welcoming site with a focus on specific structure and exams.",
    result: "Premium positioning and increased value perception.",
    video: "https://www.youtube.com/watch?v=w0jfYyOi3jo",
  },
  {
    id: 2,
    name: "DOGTRAINER",
    context: "Sale of training plans with extreme customization needs.",
    developed: "Intelligent post-purchase questionnaire that generates a tailored plan for the pet.",
    result: "Process 70% more efficient and higher owner satisfaction.",
    video: "youtu.be/swb_jtMajKk",
  },
  {
    id: 3,
    name: "KAHUCARE",
    context: "Dog daycare management that suffered from lack of control and poor communication.",
    developed: "Website with full history, dietary check-up and real-time chat.",
    result: "Total operational control and much more relaxed owners.",
    video: "https://www.youtube.com/watch?v=ebqOwdaf1uU",
  }
];

function getYoutubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length >= 7) ? match[2] : null;
}

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };
  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };


  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[18px] uppercase tracking-[0.4em] text-remy-sand font-bold mb-4 block"
          >
            Selected Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-cinzel text-white mb-6"
          >
            Projects that <span className="text-remy-sand italic">generate value.</span>
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_4fr_1.2fr] gap-8 xl:gap-16 items-center">
          {/* Left Side: Context */}
          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${currentIndex}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <h3 className="text-4xl font-cinzel font-bold text-remy-sand tracking-tighter uppercase">{projects[currentIndex].name}</h3>
                  <div className="w-16 h-[1px] bg-remy-sand/30" />
                </div>
                <div className="space-y-4">
                  <span className="text-[16px] uppercase tracking-[0.3em] text-remy-sand/70 font-bold block">Context & Need</span>
                  <p className="text-xl text-white/80 leading-relaxed font-light font-poppins">{projects[currentIndex].context}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center: Large Notebook (Min 60% width) */}
          <div className="flex flex-col items-center z-10">
            <div className="relative w-full group">
              {/* Notebook Lid */}
              <div className="relative aspect-[16/10] bg-[#1c1c1e] rounded-t-[2.5rem] border-[4px] border-[#2e2e2e] overflow-hidden shadow-[0_0_120px_rgba(214,195,163,0.1)]">
                {/* Camera */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#2a2a2a] rounded-full z-20 shadow-inner" />
                
                {/* Screen Content */}
                <div className="absolute inset-[14px] bottom-0 bg-black rounded-t-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex} // RECARREGA APENAS NA TROCA DE PROJETO
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="w-full h-full relative"
                    >
                      {getYoutubeId(projects[currentIndex].video) ? (
                        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                          <iframe
                            src={`https://www.youtube.com/embed/${getYoutubeId(projects[currentIndex].video)}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${getYoutubeId(projects[currentIndex].video)}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1`}
                            frameBorder="0"
                            allow="autoplay"
                            sandbox="allow-forms allow-scripts allow-same-origin allow-presentation"
                            className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] pointer-events-none"
                            title="Project Video"
                          />
                          {/* Transparent Overlay to block any remaining interactions */}
                          <div className="absolute inset-0 z-10 bg-transparent" />
                        </div>
                      ) : (
                      <video
                        key={currentIndex}
                        autoPlay
                        muted={isMuted}
                        loop
                        playsInline
                        crossOrigin="anonymous"
                        className="w-full h-full object-cover opacity-90"
                      >
                        <source src={projects[currentIndex].video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                    {/* Notebook Volume Control */}
                    <div className="absolute top-6 right-6 z-40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={toggleSound}
                        className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-remy-sand hover:text-black transition-all"
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={prevProject}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-remy-sand hover:text-black z-30"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextProject}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-remy-sand hover:text-black z-30"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Notebook Base */}
              <div className="w-[108%] -ml-[4%] h-6 bg-[#1e1e1e] rounded-b-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-x border-b border-[#2e2e2e]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#2a2a2a] rounded-b-lg" />
              </div>
            </div>

            {/* Mobile Info */}
            <div className="lg:hidden mt-16 space-y-10 text-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-4xl font-cinzel font-bold text-remy-sand">{projects[currentIndex].name}</h3>
                  <div className="grid grid-cols-1 gap-6 text-left">
                    <div className="bg-white/[0.02] p-8 rounded-sm border border-white/5">
                      <span className="text-[16px] uppercase tracking-[0.2em] text-remy-sand/70 font-bold block mb-4">Context</span>
                      <p className="text-lg text-white/70 font-light">{projects[currentIndex].context}</p>
                    </div>
                    <div className="bg-remy-sand/5 p-8 rounded-sm border border-remy-sand/10">
                      <span className="text-[16px] uppercase tracking-[0.2em] text-remy-sand font-bold block mb-4">Development & Results</span>
                      <p className="text-lg text-white/90 font-medium mb-2">{projects[currentIndex].developed}</p>
                      <p className="text-xl text-remy-sand font-cinzel italic">{projects[currentIndex].result}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Developed & Result */}
          <div className="hidden lg:block text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${currentIndex}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-12"
              >
                <div className="space-y-3">
                  <span className="text-[16px] uppercase tracking-[0.2em] text-remy-sand/70 font-bold block">What was developed</span>
                  <p className="text-lg text-white/80 leading-relaxed font-light">{projects[currentIndex].developed}</p>
                </div>
                <div className="space-y-3">
                  <span className="text-[16px] uppercase tracking-[0.2em] text-remy-sand font-bold block">Results & Transformation</span>
                  <p className="text-2xl font-cinzel text-remy-sand leading-tight italic">{projects[currentIndex].result}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-4 mt-20">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-500 rounded-full ${
                currentIndex === idx ? 'w-16 bg-remy-sand' : 'w-8 bg-remy-sand/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
