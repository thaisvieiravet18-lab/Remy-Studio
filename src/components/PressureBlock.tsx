import { motion } from 'motion/react';

export default function PressureBlock() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Vignette and Spotlight effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.95)_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-remy-sand/5 rounded-full blur-[150px] opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <h3 className="text-3xl md:text-5xl font-cinzel text-white/80 leading-[1.1] tracking-tighter uppercase">
            While you are reading this, <br />
            your next client <br className="md:hidden" />
            is searching.
          </h3>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-cinzel text-white">
              The question is simple:
            </p>
            <p className="text-3xl md:text-5xl font-cinzel text-white leading-tight">
              will they find you… <br />
              or your <span className="text-remy-sand italic underline underline-offset-8 decoration-remy-sand/30">competitor?</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <a
              href="#contato"
              className="shimmer-btn inline-block bg-remy-sand text-black px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold rounded-[2px] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(206,193,171,0.5)]"
            >
              I WANT TO BE THE FIRST THEY FIND
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
