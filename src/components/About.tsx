import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 md:px-12 relative overflow-hidden border-t border-remy-sand/5">
      <div className="light-beam-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[18px] uppercase tracking-[0.4em] text-remy-sand font-bold mb-6 block"
        >
          WHAT IS REMY STUDIO
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-cinzel text-white mb-10 leading-[1.1] uppercase tracking-tighter"
        >
          Focused on <br />
          <span className="text-remy-sand italic">those who care.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-white/60 font-poppins text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            We believe that Veterinary professionals should not waste time with technical complexities. While you dedicate yourself to saving and transforming lives, we build the infrastructure that sustains your growth.
          </p>
          <p>
            We unite high-end design, persuasive copywriting, and cutting-edge technology to create a digital presence that doesn't just exist but dominates the market.
          </p>
        </motion.div>

        {/* Pillars Footer */}
        <div className="mt-24 pt-12 border-t border-remy-sand/10 flex flex-wrap justify-center gap-8 md:gap-24">
          {['SOPHISTICATION', 'TECHNOLOGY', 'RESULTS'].map((pillar, idx) => (
            <motion.div
              key={pillar}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className="flex items-center space-x-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-remy-sand" />
              <span className="text-[14px] md:text-[16px] uppercase tracking-[0.3em] text-remy-sand font-bold">
                {pillar}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
