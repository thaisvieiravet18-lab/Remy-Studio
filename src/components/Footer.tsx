import { Instagram, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-remy-sand/10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-6 group -ml-4">
            <Logo className="w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl font-cinzel text-remy-sand">REMY STUDIO</h2>
          </div>
          <p className="text-remy-offwhite/60 max-w-sm mb-8 leading-relaxed">
            Design that sells. Results that stay. We transform the digital presence of Veterinary professionals with sophistication and strategy.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/remystudio.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-remy-sand hover:text-remy-offwhite transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a href="#" className="text-remy-sand hover:text-remy-offwhite transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[14px] uppercase tracking-[0.2em] text-remy-sand font-bold mb-6">Navigation</h3>
          <ul className="space-y-4">
            <li><a href="#hero" className="text-base text-remy-offwhite/60 hover:text-remy-sand transition-colors">Home</a></li>
            <li><a href="#servicos" className="text-base text-remy-offwhite/60 hover:text-remy-sand transition-colors">Services</a></li>
            <li><a href="#portfolio" className="text-base text-remy-offwhite/60 hover:text-remy-sand transition-colors">Portfolio</a></li>
            <li><a href="#contato" className="text-base text-remy-offwhite/60 hover:text-remy-sand transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] uppercase tracking-[0.2em] text-remy-sand font-bold mb-6">Contact</h3>
          <ul className="space-y-4">
            <li>
              <a 
                href="mailto:remystudio.web@gmail.com" 
                className="text-base text-remy-offwhite/60 hover:text-remy-sand transition-colors"
              >
                remystudio.web@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-remy-sand/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[12px] uppercase tracking-[0.1em] text-remy-offwhite/40">
          © {new Date().getFullYear()} Remy Studio. All rights reserved.
        </p>
        <p className="text-[12px] uppercase tracking-[0.1em] text-remy-offwhite/40">
          Sophisticated design for veterinary medicine.
        </p>
      </div>
    </footer>
  );
}
