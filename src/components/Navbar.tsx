import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { name: 'HOME', href: '#hero' },
  { name: 'SERVICES', href: '#servicos' },
  { name: 'ABOUT', href: '#sobre' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'CONTACT', href: '#contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-[1000] transition-all duration-500 py-2 px-0 md:px-4 ${
        scrolled ? 'bg-[#0b0b0b]/95 backdrop-blur-xl py-1 border-b border-remy-sand/10' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex items-center justify-between px-2 md:px-6">
        <a href="#hero" className="flex items-center gap-1 group -ml-2 md:-ml-4">
          <Logo className="w-20 h-20 md:w-24 md:h-24 -my-6 md:-my-8 group-hover:scale-110 transition-transform duration-500" />
          <span className="text-[14px] md:text-[18px] font-cinzel font-bold text-white tracking-[0.25em]">
            REMY STUDIO
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] tracking-[0.2em] text-[#666] hover:text-remy-sand transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="text-[14px] tracking-[0.2em] text-remy-sand border border-remy-sand/30 px-6 py-3 rounded-[1px] hover:bg-remy-sand hover:text-black transition-all duration-300 leading-none"
          >
            TALK TO REMY
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-remy-sand p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 bg-black/95 backdrop-blur-2xl z-[999] flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-remy-sand"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-cinzel text-white hover:text-remy-sand transition-colors tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-[0.2em] text-remy-sand border border-remy-sand px-8 py-4 rounded-[2px]"
            >
              TALK TO US
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
