import { motion } from 'motion/react';
import { Globe, Layout, Video, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Website Creation',
    description: 'Custom websites that sell 24/7. Design that converts and conveys immediate authority.',
    icon: Globe,
  },
  {
    title: 'Systems Development',
    description: 'Digital solutions that automate, organize and scale your business. Intelligent management for clinics.',
    icon: Layout,
  },
  {
    title: 'Engaging Reels',
    description: 'Strategic visual content that increases reach and attracts pet owners every day with editorial aesthetics.',
    icon: Video,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 px-6 md:px-12 bg-remy-black relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 right-0 text-[15vw] font-cinzel font-black text-remy-chumbo/5 pointer-events-none select-none -translate-y-1/4 translate-x-1/4">
        PREMIUM
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-remy-sand font-bold mb-4 block"
            >
              What we deliver
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-cinzel text-remy-offwhite leading-tight"
            >
              High-End <span className="italic">Digital Solutions</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 bg-remy-chumbo/30 border border-remy-sand/20 px-6 py-4 rounded-sm"
          >
            <CheckCircle2 className="text-remy-sand" size={20} />
            <p className="text-sm font-poppins text-remy-offwhite/80">
              <span className="font-bold text-remy-sand">Copywriting included</span> in all projects.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-10 bg-remy-chumbo/20 border border-remy-sand/10 hover:border-remy-sand/40 transition-all duration-500 relative"
            >
              <div className="w-16 h-16 flex items-center justify-center border border-remy-sand/20 mb-8 group-hover:bg-remy-sand group-hover:text-remy-black transition-colors duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-cinzel text-remy-offwhite mb-4 group-hover:text-remy-sand transition-colors">
                {service.title}
              </h3>
              <p className="text-remy-offwhite/60 leading-relaxed font-poppins text-sm">
                {service.description}
              </p>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-remy-sand/0 group-hover:border-r-remy-sand/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-[1px] bg-remy-sand/20 mt-24 origin-left"
        />
      </div>
    </section>
  );
}
