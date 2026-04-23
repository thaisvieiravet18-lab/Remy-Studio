import { motion } from 'motion/react';

export default function AnimatedDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-[1px] bg-remy-sand/20 origin-left"
      />
    </div>
  );
}
