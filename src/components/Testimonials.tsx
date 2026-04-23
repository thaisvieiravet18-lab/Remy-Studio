import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Beatriz Silva',
    role: 'Dermatologist',
    text: 'Remy Studio completely transformed my online presence. The new site isn\'t just beautiful, it actually converts. I saw a 40% increase in WhatsApp bookings in the first month.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Dr. Marcos Oliveira',
    role: 'Plastic Surgeon',
    text: 'The management system Remy developed for my clinic saved my team hours of manual work. Sophistication and efficiency I haven\'t found anywhere else.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Dr. Helena Costa',
    role: 'Aesthetic Dentistry',
    text: 'The reels produced by Remy elevated my Instagram level. Now I attract the right audience, which values my work and not just the price. An indispensable partnership.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-remy-sand/10 mb-12"
        >
          <Quote className="text-remy-sand" size={32} />
        </motion.div>

        <div className="relative h-[300px] md:h-[250px]">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : -20,
                pointerEvents: activeIndex === index ? 'auto' : 'none'
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <p className="text-xl md:text-2xl font-poppins font-light italic text-remy-offwhite/90 leading-relaxed mb-10">
                "{t.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border border-remy-sand/30"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="text-sm font-cinzel font-bold text-remy-sand tracking-wider">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-remy-offwhite/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-[2px] transition-all duration-500 ${
                activeIndex === index ? 'bg-remy-sand' : 'bg-remy-sand/20'
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-remy-sand/10"
        >
          <h3 className="text-xl md:text-2xl font-cinzel text-white mb-8">
            If they grew, you can too.
          </h3>
          <a
            href="#contato"
            className="shimmer-btn inline-block bg-remy-sand text-black px-12 py-4 text-xs uppercase tracking-[0.2em] font-bold rounded-[2px] transition-transform hover:scale-105"
          >
            I WANT RESULTS LIKE THIS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
