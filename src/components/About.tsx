import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Profil <span className="text-[#B7CEB0]">Singkat</span>
            </h2>
            <p className="text-lg opacity-80 leading-relaxed mb-6 font-serif">
              Adalah mahasiswa semester 4 UIN Syarif Hidayatullah Jakarta yang aktif dan memiliki ketertarikan terhadap dunia jurnalistik.
            </p>
            <p className="text-lg opacity-80 leading-relaxed font-serif">
              Berpengalaman dalam kepenulisan Jurnalisme dan memiliki keteretarikan didalam jurnalisme data serta memiliki kemampuan riset mendalam dan pemahaman baik terhadap kode etik jurnalistik.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="text-sm italic opacity-60 mb-4">Kemampuan Utama</div>
            <div className="flex flex-wrap gap-3">
              {['Adobe Photoshop', 'Adobe InDesign', 'Adobe Lightroom', 'Editing video', 'Journalism writing', 'Excel', 'Word'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-[10px] uppercase font-bold tracking-widest text-white hover:bg-[#B7CEB0] hover:text-[#1A1A1A] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
