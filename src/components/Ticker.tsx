export default function Ticker() {
  const text = "SITES THAT PROFIT • COPY THAT CONVERTS • PRESENCE THAT POSITIONS • DIGITAL SOPHISTICATION • REAL RESULTS • ";
  
  return (
    <div className="relative w-full bg-[#0b0b0b] backdrop-blur-sm border-y border-remy-sand/10 py-6 overflow-hidden z-50">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-remy-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-remy-black to-transparent z-10" />
      
      <div className="flex whitespace-nowrap animate-ticker">
        <div className="flex shrink-0 items-center">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-[16px] md:text-[18px] font-poppins font-bold tracking-[0.15em] text-remy-sand px-0 drop-shadow-[0_0_8px_rgba(214,195,163,0.3)]">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
