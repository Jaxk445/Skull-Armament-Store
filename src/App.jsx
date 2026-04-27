import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Box, Zap, Target, ArrowUpRight, ShieldCheck, Crosshair, Package } from 'lucide-react';
import { SERVICES, PRODUCTS } from './data';

const App = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const contactWA = (msg) => window.open(`https://wa.me/6281267746789?text=${encodeURIComponent(msg)}`, '_blank');

  return (
    <div className="relative min-h-screen overflow-hidden bg-pitch-black text-white font-syne selection:bg-skull-red selection:text-white">
      <div className="noise-overlay fixed inset-0 opacity-[0.03] pointer-events-none -z-10" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      {/* --- LIQUID BACKGROUND BLOBS --- */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 blur-[80px] md:blur-[120px] rounded-full -z-20" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="fixed bottom-[10%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-skull-red/10 blur-[60px] md:blur-[100px] rounded-full -z-20" 
      />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 py-4 md:py-5 px-4 md:px-8 flex justify-between items-center bg-white/[0.01] backdrop-blur-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-white flex items-center justify-center font-display text-black text-lg md:text-xl italic transition-transform group-hover:rotate-12">SA</div>
          <div>
            <div className="font-display text-xl md:text-2xl tracking-[0.2em] uppercase leading-none">SKULL<span className="text-white/30 hidden sm:inline">ARMAMENT</span></div>
            <div className="font-mono text-[6px] md:text-[7px] text-slate-500 tracking-[0.4em] uppercase hidden sm:block mt-1">Tech_Operator // 2026</div>
          </div>
        </div>
        <div className="flex gap-4 md:gap-8 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/40">
          <a href="#services" className="hover:text-skull-red transition">Capabilities</a>
          <a href="#armory" className="hover:text-white transition">Armory</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div style={{ opacity: opacityHero }} className="w-full lg:w-2/3 text-left z-10">
          
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1 md:px-4 md:py-1.5 glass-panel rounded-full mb-6 md:mb-10 border border-white/10 w-fit bg-white/[0.01] backdrop-blur-[40px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-skull-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-skull-red"></span>
            </span>
            <span className="font-mono text-[7px] md:text-[9px] uppercase tracking-widest text-white/50 font-bold">System: Optimized // Sloter Available</span>
          </div>

          <h1 className="font-display text-[12vw] sm:text-7xl md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-tighter italic mb-6 md:mb-10 break-words w-full">
            ENGINEERED FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 uppercase">Total Domination.</span>
          </h1>

          <p className="max-w-xl text-white/40 text-base md:text-xl font-light mb-8 md:mb-12 border-l-2 border-white/10 pl-4 md:pl-6 leading-relaxed italic">
            "Eksperimen performa unit AEG & Spring. Presisi manufaktur 3D dalam balutan estetika monokromatis."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button onClick={() => contactWA("Halo, saya ingin tech booking.")} className="w-full sm:w-auto px-6 py-4 md:px-12 md:py-5 bg-white text-black font-display text-xl md:text-2xl uppercase tracking-wider hover:bg-skull-red hover:text-white transition-all transform hover:scale-105 text-center">
              Tech Booking
            </button>
            <button className="w-full sm:w-auto px-6 py-4 md:px-12 md:py-5 glass-panel border border-white/10 font-display text-xl md:text-2xl uppercase tracking-wider hover:border-white/40 transition text-center bg-white/[0.01] backdrop-blur-[40px]">
              Katalog
            </button>
          </div>
        </motion.div>

        {/* Right: Technical HUD Circle */}
        <motion.div 
          style={{ y: yParallax }}
          className="w-full lg:w-1/3 relative flex items-center justify-center h-[300px] md:h-[400px] mt-12 lg:mt-0 scale-75 md:scale-100"
        >
          <div className="absolute w-56 h-56 md:w-72 md:h-72 border border-white/5 rounded-full animate-pulse" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center p-8 animate-[spin_20s_linear_infinite]">
             <div className="w-full h-full border border-skull-red/20 rounded-full border-t-skull-red" />
          </div>
          <div className="absolute w-10 h-10 md:w-12 md:h-12 glass-panel border-white/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.2)] bg-white/[0.01] backdrop-blur-[40px]">
            <Crosshair size={18} className="text-skull-red" />
          </div>
          <div className="absolute top-10 right-0 md:-right-4 font-mono text-[6px] md:text-[7px] text-white/20 uppercase tracking-[0.5em]" style={{ writingMode: 'vertical-rl' }}>
            Alignment: True
          </div>
          <div className="absolute bottom-10 left-0 md:-left-4 font-mono text-[6px] md:text-[7px] text-white/20 uppercase tracking-[0.5em]">
            Scan_Freq: 144Hz
          </div>
        </motion.div>
      </header>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 md:gap-1">
          {SERVICES.map((s, i) => (
            <motion.div 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              key={i} 
              className="glass-panel p-8 md:p-12 relative group border border-white/5 bg-white/[0.01] backdrop-blur-[40px]"
            >
              <div className="text-white/20 mb-6 md:mb-10 group-hover:text-skull-red transition-all group-hover:scale-110 origin-left inline-block">
                {i === 0 ? <Target size={32} md:size={40} /> : i === 1 ? <Zap size={32} md:size={40} /> : <Box size={32} md:size={40} />}
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-3 md:mb-4 tracking-wide italic uppercase">{s.title}</h3>
              <p className="text-white/30 text-xs md:text-sm leading-relaxed mb-8 md:mb-10 font-light italic">"{s.desc}"</p>
              <button onClick={() => contactWA(`Inquiry Jasa: ${s.title}`)} className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-white flex items-center gap-2">
                Initiate <ArrowUpRight size={14} className="text-skull-red" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ARMORY SECTION --- */}
      <section id="armory" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
          <h2 className="font-display text-5xl md:text-6xl italic tracking-tighter uppercase">The Armory</h2>
          <div className="font-mono text-[7px] md:text-[8px] text-white/10 tracking-[0.5em] uppercase">Skull_Vault_2026</div>
        </div>
        
        {/* Adjusted to grid-cols-3 on large screens since we have 6 items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <div key={i} className="glass-panel p-6 md:p-8 group cursor-pointer border border-white/5 bg-white/[0.01] backdrop-blur-[40px] flex flex-col">
              
              {/* Kotak Gambar */}
              <div className="aspect-video sm:aspect-[4/3] bg-white/5 rounded-sm mb-6 flex items-center justify-center relative overflow-hidden border border-transparent group-hover:border-white/10 transition-colors">
                
                {/* Logika: Jika ada gambar, tampilkan gambar. Jika tidak, tampilkan Icon Package */}
                {p.image ? (
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                ) : (
                  <Package size={36} md:size={48} className="text-white/5 group-hover:text-skull-red/20 transition-all duration-700" />
                )}

                {/* Label Kategori (RENTAL/3DP/STOK) */}
                <div className="absolute top-0 left-0 bg-white text-black text-[7px] md:text-[8px] font-black px-2 py-1 uppercase tracking-tighter italic z-10">
                  {p.cat}
                </div>
              </div>

              <h4 className="font-display text-xl md:text-2xl tracking-wide mb-2 group-hover:text-white uppercase italic">{p.name}</h4>
              <p className="font-mono text-[9px] md:text-[10px] text-white/50 mb-3">{p.desc}</p>
              <p className="font-mono text-[11px] md:text-[12px] text-skull-red mb-6 flex-grow">{p.price}</p>
              <button onClick={() => contactWA(`Beli ${p.name}`)} className="w-full py-3 md:py-4 glass-panel border border-white/10 text-[8px] md:text-[9px] font-mono uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Acquire</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 md:py-48 text-center border-t border-white/5 relative bg-white/[0.01] overflow-hidden">
        <div className="font-display text-[25vw] md:text-[15vw] text-white/[0.02] md:text-white/[0.01] absolute bottom-[10%] md:bottom-[-5%] left-1/2 -translate-x-1/2 leading-none select-none pointer-events-none italic uppercase whitespace-nowrap">Precision</div>
        <div className="relative z-10 px-4 flex flex-col items-center gap-4 md:gap-6">
          <ShieldCheck size={24} md:size={32} className="text-white/10" />
          <p className="font-mono text-[7px] md:text-[9px] text-white/20 uppercase tracking-[0.5em] md:tracking-[1em]">Skull Armament Workshop Indonesia</p>
        </div>
      </footer>

      {/* --- FLOATING WA BUTTON --- */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => contactWA("Halo Admin Skull Armament!")}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-white text-black p-4 md:p-6 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center hover:bg-skull-red hover:text-white transition-colors"
      >
        <MessageCircle size={24} className="md:w-8 md:h-8" fill="currentColor" />
      </motion.button>
    </div>
  );
};

export default App;