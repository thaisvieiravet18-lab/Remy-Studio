import { motion } from 'motion/react';
import { MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-remy-sand/10 rounded-full blur-[150px] pointer-events-none opacity-50" />
      <div className="light-beam-top-right opacity-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[18px] uppercase tracking-[0.5em] text-remy-sand font-bold mb-10 block"
        >
          Next Step
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-cinzel text-white mb-12 leading-[1.05] uppercase tracking-tighter"
        >
          While you decide, <br />
          your competitor <br className="md:hidden" />
          <span className="text-remy-sand italic">is already growing.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 font-poppins font-light mb-16 max-w-2xl mx-auto"
        >
          The difference? They didn't wait. Don't leave your Veterinary growth for later.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <a
            href="mailto:remystudio.web@gmail.com"
            className="shimmer-btn w-full md:w-auto bg-remy-sand text-black px-16 py-6 text-base uppercase tracking-[0.2em] font-bold rounded-[2px] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(206,193,171,0.4)] leading-none"
          >
            I WANT TO SEND AN EMAIL NOW
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-[16px] uppercase tracking-[0.2em] text-white/50"
        >
          Reply in less than 24 business hours
        </motion.p>
      </div>
    </section>
  );
}
