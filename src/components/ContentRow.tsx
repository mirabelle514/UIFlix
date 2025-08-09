import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { UICategory } from '../types';

interface ContentRowProps {
  title: string;
  items: UICategory[];
  onItemClick: (item: UICategory) => void;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items, onItemClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });

    setTimeout(checkScrollButtons, 100);
  };

  return (
    <div className="px-4 md:px-16 mb-12 group">
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h2>
      
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight size={24} />
        </button>

        {/* Content container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth"
          onScroll={checkScrollButtons}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemClick(item)}
              className="flex-none w-80 cursor-pointer group/item transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative rounded-lg overflow-hidden bg-gray-800">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover/item:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                </div>

                {/* Hover indicator */}
                <div className="absolute inset-0 border-2 border-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;