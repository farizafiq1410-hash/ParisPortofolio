import { motion } from 'motion/react';

export function Resume() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-gray-100 transition-colors duration-300" id="resume">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-10 tracking-tight flex items-center">
              Pengalaman<span className="text-[#B7CEB0] text-sm ml-2 font-mono opacity-60">[2024-PRESENT]</span>
            </h3>
            
            <div className="space-y-12 border-l border-gray-200 ml-2 pl-8 relative">
              <div className="relative">
                <div className="absolute w-2 h-2 bg-[#B7CEB0] rounded-full -left-[37px] top-2"></div>
                <div className="text-[10px] uppercase tracking-wider font-bold mb-1 opacity-40 text-[#1A1A1A]">2025 - Sekarang</div>
                <h4 className="text-xl font-bold text-[#1A1A1A]">Creative Departement</h4>
                <p className="text-[#5B7056] text-sm font-semibold mb-4 uppercase tracking-widest">RDKFM</p>
                <ul className="space-y-2 text-[#1A1A1A] opacity-80 list-none">
                  <li className="flex gap-2"><span className="text-[#B7CEB0]">—</span> Membantu Merancang brand guideline.</li>
                  <li className="flex gap-2"><span className="text-[#B7CEB0]">—</span> Bertanggungjawab atas publikasi perancangan materi cetak, digital dalam pembuatan konten.</li>
                  <li className="flex gap-2"><span className="text-[#B7CEB0]">—</span> Bekerja dalam perancangan konten dalam tekanan dan bedasarkan brand guideline.</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute w-2 h-2 bg-gray-300 rounded-full -left-[37px] top-2"></div>
                <h4 className="text-xl font-bold text-[#1A1A1A]">Mahasiswa Jurnalistik</h4>
                <p className="text-[#1A1A1A] opacity-60 text-sm font-semibold mb-4 uppercase tracking-widest">UIN Syarif Hidayatullah Jakarta</p>
                <ul className="space-y-2 text-[#1A1A1A] opacity-80 list-none">
                  <li className="flex gap-2"><span className="text-[#B7CEB0]">—</span> Melakukan kegiatan wawancara.</li>
                  <li className="flex gap-2"><span className="text-[#B7CEB0]">—</span> Menyusun naskah berita.</li>
                  <li className="flex gap-2"><span className="text-[#B7CEB0]">—</span> Mengolah dan menganalisa data dan mengintepretasikanya untuk artikel analisis mendalam untuk masyarakat awam.</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Education & Certs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 tracking-tight flex items-center">
                Pendidikan<span className="text-[#B7CEB0] text-sm ml-2 font-mono opacity-60">[2024-PRESENT]</span>
              </h3>
              <div className="bg-[#1A1A1A] text-white p-8 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-full opacity-40">
                  <img src="https://images.unsplash.com/photo-1455309038312-1691a56ea7ce?q=80&w=800&auto=format&fit=crop" alt="Journalism" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent"></div>
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">S1 Jurnalistik</h4>
                  <p className="text-white opacity-70 mb-6 text-sm uppercase tracking-widest">UIN Syarif Hidayatullah Jakarta</p>
                  <div className="inline-block py-1 px-3 bg-[#B7CEB0] text-[#1A1A1A] rounded-full text-[10px] uppercase font-bold tracking-widest">
                    2024 - Sekarang
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 tracking-tight">
                Pelatihan & Sertifikasi
              </h3>
              <div className="space-y-4">
                <div className="p-6 border border-gray-200 bg-white hover:border-[#B7CEB0] transition-all duration-300 group rounded-sm">
                  <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#B7CEB0] transition-colors">Pelatihan Mahasiswa Jurnalistk</h4>
                  <p className="text-xs uppercase tracking-widest text-[#1A1A1A] opacity-60 mt-2">UIN Jakarta</p>
                </div>
                <div className="p-6 border border-gray-200 bg-white hover:border-[#B7CEB0] transition-all duration-300 group rounded-sm">
                  <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#B7CEB0] transition-colors">Workshop Kepenulisan</h4>
                  <p className="text-xs uppercase tracking-widest text-[#1A1A1A] opacity-60 mt-2">Mahasiswa Jurnalistik</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
