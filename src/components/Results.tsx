import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 85, suffix: '%', label: 'Engagement increase' },
  { value: 3, suffix: 'x', label: 'More leads on average' },
  { value: 100, suffix: '%', label: 'Veterinary focused' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden border-y border-remy-sand/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #CEC1AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="light-beam-bottom-left opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-[clamp(2.5rem,8vw,5rem)] font-cinzel text-remy-sand font-bold mb-2 leading-none transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(214,195,163,0.3)]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[14px] md:text-[16px] uppercase tracking-[0.4em] text-remy-sand/70 font-poppins font-bold group-hover:text-remy-sand transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
