import { motion } from 'motion/react';

export default function IntermediateCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#080808] border-y border-remy-sand/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-cinzel text-white mb-10 leading-tight"
        >
          Does your current site <span className="text-remy-sand italic">drive away</span> or <span className="text-remy-sand">attract</span> high-value patients?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#contato"
            className="shimmer-btn inline-block bg-remy-sand text-black px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold rounded-[2px] transition-transform hover:scale-105"
          >
            I WANT A WEBSITE THAT SELLS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
