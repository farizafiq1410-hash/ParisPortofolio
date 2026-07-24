import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-[#1A1A1A]">
          MFA<span className="text-[#B7CEB0]">.</span>
        </a>
        <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest opacity-60">
          {['About', 'Resume', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#B7CEB0] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="md:hidden text-xs font-semibold uppercase tracking-widest opacity-60 hover:text-[#B7CEB0] transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
