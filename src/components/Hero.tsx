import { motion } from 'motion/react';

export default function Hero() {
  const particles = Array.from({ length: 20 });

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 md:px-16 pt-20">
      {/* Background & Transition Wrapper */}
      <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 z-0 opacity-15 bg-fixed bg-cover bg-center grayscale scale-110"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop")',
          }}
        />
        
        {/* Dark Overlay with Sophisticated Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
        
        {/* Bottom Transition Fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent z-0" />

        {/* Spotlight Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(214,195,163,0.08)_0%,transparent_70%)] blur-[80px]" 
          />
        </div>

        {/* CSS Light Beams */}
        <div className="light-beam-top-right" />
        <div className="light-beam-bottom-left opacity-10" />
        
        <div 
          className="light-beam animate-[beam-pulse_6s_infinite]"
          style={{
            top: '-10%',
            left: '5%',
            width: '2px',
            height: '60vh',
            background: 'linear-gradient(to bottom, rgba(206,193,171,0.18), transparent)',
            transform: 'rotate(25deg)',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="light-beam animate-[beam-pulse_8s_infinite] delay-[2s]"
          style={{
            top: '-5%',
            right: '20%',
            width: '4px',
            height: '70vh',
            background: 'linear-gradient(to bottom, rgba(206,193,171,0.12), transparent)',
            transform: 'rotate(-15deg)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="light-beam animate-[beam-pulse_10s_infinite] delay-[4s]"
          style={{
            top: '0',
            right: '5%',
            width: '3px',
            height: '65vh',
            background: 'linear-gradient(to bottom, rgba(206,193,171,0.08), transparent)',
            transform: 'rotate(-30deg)',
            filter: 'blur(100px)',
          }}
        />

        {/* Background Radial Gradient */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(206,193,171,0.06) 0%, transparent 70%)'
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? '#d6c2a3' : '#ffffff',
              }}
              initial={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                opacity: 0
              }}
              animate={{ 
                y: ['0px', '-40px', '0px'],
                opacity: [0, 0.2, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center pb-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-white leading-[1.05] uppercase tracking-tighter mb-10"
          >
            WHILE YOU <br className="hidden md:block" />
            TAKE CARE OF <span className="text-remy-sand italic">LIVES</span>, <br className="hidden md:block" />
            REMY TAKES CARE <br className="hidden md:block" />
            OF YOUR <span className="text-remy-sand italic">BUSINESS.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-white/80 font-poppins font-normal max-w-[620px] mx-auto mb-12 leading-[1.75] tracking-[0.01em]"
        >
          Websites, systems, and strategies that grow healthcare professionals every day — without relying on referrals.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <a 
            href="#contato" 
            className="shimmer-btn bg-remy-sand text-black px-12 py-6 text-[16px] uppercase tracking-[0.15em] font-bold rounded-[2px] transition-all hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(214,195,163,0.6)] leading-none"
          >
            I WANT TO GROW NOW
          </a>
          <a 
            href="#portfolio" 
            className="shimmer-btn-outline px-12 py-[23px] text-[16px] uppercase tracking-[0.15em] font-bold rounded-[2px] leading-none"
          >
            VIEW PORTFOLIO
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[15px] uppercase tracking-[0.22em] text-remy-sand/50">Scroll</span>
        <div className="animate-bounce text-remy-sand/50">
          ↓
        </div>
      </motion.div>
    </section>
  );
}

