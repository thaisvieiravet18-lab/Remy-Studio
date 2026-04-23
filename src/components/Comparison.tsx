import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const comparisonData = [
  { feature: 'Strategy', common: 'No prior planning', remy: 'Real conversion strategy' },
  { feature: 'Conversion', common: 'Focus only on visuals', remy: 'Total focus on sales' },
  { feature: 'Copywriting', common: 'Basic or non-existent', remy: 'Persuasive and specialized copy' },
  { feature: 'SEO', common: 'Weak setup', remy: 'Optimized from the start' },
  { feature: 'Support', common: 'Slow response time', remy: 'Partnership and dedicated follow-up' },
];

export default function Comparison() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="light-beam-bottom-left opacity-5" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[14px] uppercase tracking-[0.4em] text-remy-sand font-bold mb-4 block"
          >
            Competitive Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-cinzel text-white tracking-tighter uppercase"
          >
            Why <span className="text-remy-sand italic">Remy Studio</span>?
          </motion.h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden border border-remy-sand/10 rounded-sm bg-white/[0.02] backdrop-blur-sm">
          <div className="grid grid-cols-3 bg-remy-sand/5 border-b border-remy-sand/10">
            <div className="p-8 font-cinzel text-white/60 uppercase tracking-[0.3em] text-[14px] font-bold">Criteria</div>
            <div className="p-8 font-cinzel text-white/60 uppercase tracking-[0.3em] text-[14px] font-bold text-center">Common Studios</div>
            <div className="p-8 font-cinzel text-remy-sand uppercase tracking-[0.3em] text-[14px] font-bold text-center bg-remy-sand/10">Remy Studio</div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div 
              key={item.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-3 border-b border-remy-sand/5 hover:bg-remy-offwhite/5 transition-colors"
            >
              <div className="p-8 text-lg font-bold text-remy-offwhite/90 border-r border-remy-sand/5">{item.feature}</div>
              <div className="p-8 text-lg text-remy-offwhite/60 text-center flex items-center justify-center space-x-2 border-r border-remy-sand/5">
                <X size={14} className="text-red-500/70" />
                <span>{item.common}</span>
              </div>
              <div className="p-8 text-lg text-remy-black font-bold text-center flex items-center justify-center space-x-2 bg-remy-sand">
                <Check size={16} />
                <span>{item.remy}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((item) => (
            <div key={item.feature} className="border border-remy-sand/10 rounded-sm overflow-hidden">
              <div className="bg-remy-chumbo/40 p-4 text-center font-cinzel text-remy-sand border-b border-remy-sand/10">
                {item.feature}
              </div>
              <div className="grid grid-cols-2">
                <div className="p-6 text-center border-r border-remy-sand/10">
                  <span className="block text-[10px] uppercase tracking-widest text-remy-offwhite/40 mb-2">Common</span>
                  <p className="text-xs text-remy-offwhite/60">{item.common}</p>
                </div>
                <div className="p-6 text-center bg-remy-sand text-remy-black">
                  <span className="block text-[10px] uppercase tracking-widest text-remy-black/60 mb-2">Remy</span>
                  <p className="text-xs font-bold">{item.remy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
