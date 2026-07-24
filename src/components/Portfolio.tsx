import { motion } from 'motion/react';

export function Portfolio() {
  const projects = [
    { id: 1, title: 'RDKFM', image: '/images/porto1.png', category: 'RDKFM' },
    { id: 2, title: 'RDKFM', image: '/images/porto2.png', category: 'RDKFM' },
    { id: 3, title: 'RDKFM', image: '/images/porto3.png', category: 'RDKFM' },
    { id: 4, title: 'RDKFM', image: '/images/porto4.png', category: 'RDKFM' },
    { id: 5, title: 'RDKFM', image: '/images/porto5.png', category: 'RDKFM' },
    { id: 6, title: 'RDKFM', image: '/images/porto6.jpg', category: 'RDKFM' },
    { id: 7, title: 'Others', image: '/images/porto7.png', category: 'Others' },
    { id: 8, title: 'Others', image: '/images/porto8.jpg', category: 'Others' },
    { id: 9, title: 'Others', image: '/images/porto9.jpg', category: 'Others' },
    { id: 10, title: 'Others', image: '/images/porto10.jpg', category: 'Others' },
    { id: 11, title: 'Others', image: '/images/porto11.webp', category: 'Others' },
    { id: 12, title: 'Others', image: '/images/porto12.jpg', category: 'Others' },
    { id: 13, title: 'Others', image: '/images/porto13.jpg', category: 'Others' }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 transition-colors duration-300" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Selected Works<span className="text-[#B7CEB0] text-sm ml-2 font-mono">[PORTFOLIO]</span>
            </h2>
            <p className="text-sm opacity-60 mt-2 max-w-xl text-[#1A1A1A]">
              Beberapa hasil karya terbaik saya selama masa perkuliahan dan berorganisasi.
            </p>
          </motion.div>
          <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest text-[#1A1A1A]">
            GRID VIEW / 13 PROJECTS
          </span>
        </div>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid bg-[#EEE] mb-4 transition-all duration-300 border border-transparent overflow-hidden relative group hover:scale-[0.98] hover:border-[#B7CEB0]"
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] uppercase font-bold tracking-widest z-10 transition-opacity duration-300">
                View Project
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto block object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Fallback if image doesn't exist yet
                  target.src = `https://placehold.co/600x600/EEEEEE/999999?text=Project+${project.id}`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
