import { motion } from 'motion/react';

export default function Atmosphere() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[-40] overflow-hidden">
      {/* Lateral Light Beam (Main Spotlight) */}
      <div className="light-beam-lateral" />

      {/* Secondary Light (Central Halo) */}
      <div className="central-halo" />
      
      {/* Floating Particles (Illuminated Dust) */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            backgroundColor: i % 3 === 0 ? '#d6c2a3' : '#ffffff',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 110}%`,
          }}
          initial={{ 
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: ['0vh', '-110vh'],
            x: ['0px', `${(Math.random() - 0.5) * 60}px`],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{ 
            duration: Math.random() * 10 + 15, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 20
          }}
        />
      ))}

      {/* Depth / Haze Layer */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(214,194,163,0.03),transparent_60%)] backdrop-blur-[1px]" />
    </div>
  );
}
