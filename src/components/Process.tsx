import { motion } from 'motion/react';

const steps = [
  { number: '01', title: 'Strategic Briefing', description: 'Total immersion in your business to understand your goals and audience.' },
  { number: '02', title: 'Creation and Approval', description: 'Exclusive design focused on authority and user experience.' },
  { number: '03', title: 'Development', description: 'We transform design into a powerful conversion tool.' },
  { number: '04', title: 'Launch', description: 'Continuous monitoring to ensure that the results appear.' },
];

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12 bg-remy-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-remy-sand font-bold mb-4 block">Methodology</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-remy-offwhite">How <span className="italic">We Work</span></h2>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-[1px] bg-remy-sand/20 origin-left hidden md:block"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pt-12"
              >
                {/* Dot on line */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="absolute top-[-4px] left-0 w-2 h-2 rounded-full bg-remy-sand hidden md:block"
                />
                
                <span className="text-5xl font-cinzel font-black text-remy-sand/10 absolute top-0 left-0 -translate-y-1/2 md:translate-y-0">
                  {step.number}
                </span>
                
                <h3 className="text-xl font-cinzel text-remy-offwhite mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-remy-offwhite/60 leading-relaxed font-poppins">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
