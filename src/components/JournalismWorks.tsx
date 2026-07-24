import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function JournalismWorks() {
  const photoWorks = [
    { id: 1, image: '/images/Works1.png' },
    { id: 2, image: '/images/works2.png' },
    { id: 3, image: '/images/works3.png' },
    { id: 4, image: '/images/work4.png' },
    { id: 5, image: '/images/work5.png' },
  ];

  const kompasianaArticles = [
    {
      id: 1,
      title: 'Fenomena Tergerusnya Masyarakat Golongan Menengah',
      link: 'https://www.kompasiana.com/farizafiq4312/6a4d193ac925c44e321545a3/fenomena-tergerusnya-masyarakat-golongan-menengah'
    },
    {
      id: 2,
      title: 'Dari Upaya Penggulingan Rezim Hingga Manipulasi Pikiran, Inilah Daftar Operasi Kontroversial CIA',
      link: 'https://www.kompasiana.com/farizafiq4312/690f88c234777c02170f1332/dari-upaya-penggulingan-rezim-hingga-manipulasi-pikiran-inilah-daftar-operasi-kontroversial-cia'
    },
    {
      id: 3,
      title: 'Bukan dari Sekedar Burger, Inilah Cara McDonald Meraup Keuntungan',
      link: 'https://www.kompasiana.com/farizafiq4312/68fce468c925c444d83dc476/bukan-dari-sekedar-burger-inilah-cara-mcdonald-meraup-keuntungan'
    },
    {
      id: 4,
      title: 'Digitalisasi Pasar Indonesia, Bagaimana Pasar Daring Mengubah Wajah Digital Indonesia',
      link: 'https://www.kompasiana.com/farizafiq4312/68751ee9ed64150bcb0fea62/digitalisasi-pasar-indonesia-bagaimana-pasar-daring-mengubah-wajah-digital-indonesia'
    },
    {
      id: 5,
      title: 'Tulisan Lainnya di Kompasiana',
      link: 'https://www.kompasiana.com/farizafiq4312'
    }
  ];

  return (
    <section id="journalism-works" className="py-24 bg-[#FAFAFA] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Photos Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1A1A1A] mb-4">
                Artikel yang disusun sebagai mahasiswa jurnalistik
              </h2>
            </motion.div>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {photoWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col break-inside-avoid"
              >
                <div className="block overflow-hidden relative rounded-sm bg-gray-100 shadow-sm">
                  <img
                    src={work.image}
                    alt={`Journalism Work ${work.id}`}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kompasiana Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1A1A1A] mb-4">
                Artikel yang disusun di Kompasiana
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-col space-y-4">
            {kompasianaArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block p-6 bg-white border border-gray-100 hover:border-[#B7CEB0] rounded-sm transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] group-hover:text-[#B7CEB0] transition-colors">
                      {article.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#B7CEB0]/10 transition-colors shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#B7CEB0] transition-colors" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
