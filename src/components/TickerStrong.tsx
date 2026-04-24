import { motion } from 'motion/react';

const phrases = [
  "VETERINARY PROFESSIONALS GROWING ONLINE",
  "MORE PET OWNERS EVERY DAY",
  "DIGITAL AUTHORITY",
  "REAL RESULTS",
];

export default function TickerStrong() {
  return (
    <div className="relative py-8 bg-remy-sand overflow-hidden border-y border-black/10 shadow-[0_0_30px_rgba(206,193,171,0.15)]">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center space-x-16 px-8"
        >
          {[...phrases, ...phrases].map((phrase, idx) => (
            <div key={idx} className="flex items-center space-x-16">
              <span className="text-2xl md:text-4xl font-cinzel font-black text-black tracking-[0.1em]">
                {phrase}
              </span>
              <div className="w-2 h-2 rounded-full bg-black/80" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Edge Blur */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-remy-sand to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-remy-sand to-transparent z-10" />
    </div>
  );
}
