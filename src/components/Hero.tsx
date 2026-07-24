import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="hero">
      {/* Morphing Background Element */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#B7CEB0] opacity-30 blur-[30px] morphing-blob -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 relative z-10"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#B7CEB0] mb-8 bg-gray-200 md:hidden">
            <img
              src="/images/profil.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x600/e2e8f0/475569?text=Profile";
              }}
            />
          </div>
          <span className="inline-block py-1 px-3 bg-white/10 rounded-full text-[#1A1A1A] text-[10px] uppercase font-bold tracking-widest border border-gray-200">
            Journalism Student & Creator
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight text-[#1A1A1A]">
            Muhammad<br />
            <span className="text-[#5B7056]">Fariz Afiq.</span>
          </h1>
          <p className="text-lg opacity-80 leading-relaxed max-w-sm mb-6 text-[#1A1A1A]">
            Passionate about data journalism, deep research, and crafting engaging narratives with a strong adherence to journalistic ethics.
          </p>
          <div className="pt-4 flex gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#B7CEB0] transition-colors inline-block"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-black/10 text-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors inline-block"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex justify-end relative z-10"
        >
          <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#B7CEB0] bg-gray-200">
            <img
              src="/images/profil.jpeg"
              alt="Muhammad Fariz Afiq"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x600/e2e8f0/475569?text=Profile";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
