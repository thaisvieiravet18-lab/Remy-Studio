import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { Clock, TrendingUp, Layers, Monitor, CheckCircle2, Star, Send } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/src/lib/utils';

const deliverables = [
  {
    id: '01',
    title: 'WEBSITES THAT SELL',
    icon: Monitor,
    description: 'Strategic structure with premium design and total focus on converting visitors into patients.',
    metric: 3,
    prefix: '+',
    suffix: 'x',
    label: 'more leads on average',
    tag: 'Conversion',
    delay: 0.1,
  },
  {
    id: '02',
    title: 'INTELLIGENT SYSTEMS',
    icon: Layers,
    description: 'Process automation, efficient management and full integration with your service flow.',
    metric: 40,
    suffix: '%',
    label: 'reduction in manual work',
    tag: 'Technology',
    delay: 0.2,
  },
  {
    id: '03',
    title: 'ENGAGING REELS',
    icon: Star,
    description: 'Strategic visual content with script, editing and persuasive copy to attract patients every day.',
    metric: 120,
    prefix: '+',
    label: 'delivered projects',
    tag: 'Content',
    delay: 0.3,
  },
  {
    id: '04',
    title: 'VISUAL IDENTITY',
    icon: CheckCircle2,
    description: 'Brand positioning with aesthetic sophistication to differentiate your clinic in the market.',
    metric: 100,
    suffix: '%',
    label: 'focus on authority',
    tag: 'Premium Design',
    delay: 0.45,
  },
];

function MetricCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [count, value, rounded, isInView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-[22px] font-cinzel text-remy-sand block"
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
}

export default function Deliverables() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="light-beam-top-right opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[18px] uppercase tracking-[0.2em] text-remy-sand font-bold mb-4 block"
          >
            WHAT REMY DELIVERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-cinzel text-white mb-6 leading-[1.1] tracking-tighter uppercase"
          >
            Everything your business needs <br className="hidden md:block" />
            to <span className="text-remy-sand italic">dominate the market.</span>
          </motion.h2>
          <div className="relative w-full h-[1px] bg-[#111] mb-6 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-remy-sand"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base text-white/70 max-w-2xl"
          >
            We unite high-end design, technology, and strategy to transform your digital presence into a results machine.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#111] bg-[#111]">
          {deliverables.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.7 }}
              className="group relative bg-[#0a0a0a] p-10 flex flex-col h-full transition-all duration-400 hover:bg-[#0f0f0f] hover:-translate-y-1 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-remy-sand/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </div>
              </div>

              {/* Top Border Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-remy-sand to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              <div className="flex justify-between items-start mb-8">
                <span className="text-[15px] tracking-[0.1em] text-[#2a2a2a] group-hover:text-remy-sand transition-colors duration-300 font-bold">
                  {item.id}
                </span>
                <div className="text-[14px] border border-[#1e1e1e] px-3 py-1 text-remy-sand uppercase tracking-wider group-hover:bg-remy-sand group-hover:text-black transition-all duration-300 leading-none">
                  {item.tag}
                </div>
              </div>

              <div className="mb-8 relative">
                <div className="w-[52px] h-[52px] rounded-full border border-[#1e1e1e] flex items-center justify-center text-remy-sand group-hover:animate-glow transition-all duration-300">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-[20px] font-cinzel text-[#e8e8e8] mb-4">
                {item.title}
              </h3>
              
              <p className="text-[16px] text-white/60 line-height-[1.7] mb-10 flex-grow">
                {item.description}
              </p>

              <div className="mt-auto pt-6 border-t border-[#1e1e1e]/30">
                <MetricCounter value={item.metric} prefix={item.prefix} suffix={item.suffix} />
                <span className="text-[16px] text-white/40 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-full border-t border-l border-transparent group-hover:border-remy-sand/30 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 bg-[#0d0d0d] border border-[#111] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg text-white/70 max-w-xl text-center md:text-left">
            Everything in a <span className="text-remy-sand font-bold">single partner</span> — without outsourcing, without wasting time, without giving up quality.
          </p>
          <a
            href="#contato"
            className="shimmer-btn text-black px-10 py-4 rounded-[30px] text-xs uppercase tracking-[0.2em] font-bold leading-none"
          >
            I want my project
          </a>
        </div>
      </div>
    </section>
  );
}

