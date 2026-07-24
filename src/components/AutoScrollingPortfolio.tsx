import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function AutoScrollingPortfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    { id: 1, image: '/images/porto1.png', category: 'RDKFM' },
    { id: 2, image: '/images/porto2.png', category: 'RDKFM' },
    { id: 3, image: '/images/porto3.png', category: 'RDKFM' },
    { id: 4, image: '/images/porto4.png', category: 'RDKFM' },
    { id: 5, image: '/images/porto5.png', category: 'RDKFM' },
    { id: 6, image: '/images/porto6.jpg', category: 'RDKFM' },
    { id: 7, image: '/images/porto7.png', category: 'Others' },
    { id: 8, image: '/images/porto8.jpg', category: 'Others' },
    { id: 9, image: '/images/porto9.jpg', category: 'Others' },
    { id: 10, image: '/images/porto10.jpg', category: 'Others' },
    { id: 11, image: '/images/porto11.webp', category: 'Others' },
    { id: 12, image: '/images/porto12.jpg', category: 'Others' },
    { id: 13, image: '/images/porto13.jpg', category: 'Others' }
  ];

  // We duplicate the array a few times to create a seamless infinite scrolling effect
  const scrollingProjects = [...projects, ...projects, ...projects];

  return (
    <div className="w-full overflow-hidden bg-white py-12 border-b border-gray-100 flex flex-col items-center transition-colors duration-300">
      <div className="w-full relative flex items-center">
        {/* Left/Right Gradients for smooth fade in/out effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

        {/* The scrolling container */}
        <div className="flex w-[200%] animate-[scroll_80s_linear_infinite] hover:[animation-play-state:paused]">
          <div className="flex gap-4 px-2 w-max items-center">
            {scrollingProjects.map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="h-48 md:h-64 flex-shrink-0 bg-gray-100 rounded-sm overflow-hidden border border-gray-200 relative group transition-colors duration-300"
              >
                <img
                  src={project.image}
                  alt={`Portfolio ${project.id}`}
                  className="h-full w-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                  <span className="text-white text-[10px] uppercase font-bold tracking-widest">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
