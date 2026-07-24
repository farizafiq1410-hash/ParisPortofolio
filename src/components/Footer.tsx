import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] py-16 border-t border-gray-100 transition-colors duration-300" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Mari <span className="text-[#B7CEB0]">Berkolaborasi.</span>
            </h2>
            <p className="text-[#1A1A1A] opacity-60 mb-8 max-w-sm text-sm leading-relaxed">
              Tertarik untuk bekerja sama atau mendiskusikan jurnalisme data? Jangan ragu untuk menghubungi saya.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:farizafiq1410@gmail.com" className="flex items-center gap-4 text-[#1A1A1A] hover:text-[#B7CEB0] transition-colors text-sm uppercase tracking-widest font-bold">
                <Mail className="w-4 h-4" />
                <span>farizafiq1410@gmail.com</span>
              </a>
              <a href="https://wa.me/6281222218637" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#1A1A1A] hover:text-[#B7CEB0] transition-colors text-sm uppercase tracking-widest font-bold">
                <Phone className="w-4 h-4" />
                <span>081222218637</span>
              </a>
              <a href="https://maps.app.goo.gl/RPkXCg3rZdEwsgDu8?g_st=ac" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#1A1A1A] hover:text-[#B7CEB0] transition-colors text-sm uppercase tracking-widest font-bold">
                <MapPin className="w-4 h-4" />
                <span>Pondok Betung, Tangerang Selatan</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:items-end justify-between"
          >
            <div className="flex gap-4 mb-12">
              <a href="https://id.pinterest.com/parisGFX/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#B7CEB0] hover:border-[#B7CEB0] hover:text-[#1A1A1A] transition-all duration-300 text-[#1A1A1A]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.163 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/fariz_afk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#B7CEB0] hover:border-[#B7CEB0] hover:text-[#1A1A1A] transition-all duration-300 text-[#1A1A1A]">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            
            <div className="text-[10px] uppercase font-bold tracking-tighter opacity-40 text-[#1A1A1A] md:text-right">
              &copy; {new Date().getFullYear()} MUHAMMAD FARIZ AFIQ<br />
              ALL RIGHTS RESERVED.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
