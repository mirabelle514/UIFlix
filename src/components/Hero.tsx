import React from 'react';
import { Play, Info } from 'lucide-react';

interface HeroProps {
  onPlayClick: () => void;
  onInfoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlayClick, onInfoClick }) => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 40%, transparent 70%), url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 max-w-2xl">
        <div className="space-y-6">
          {/* Category Badge */}
          <div className="inline-block">
            <span className="bg-[#E50914] text-white px-3 py-1 rounded text-sm font-medium">
              FEATURED PRINCIPLE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            White Space & Color Theory
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            Master the fundamentals of visual hierarchy and color harmony. Learn when to use white space effectively and how color theory guides the creation of visually satisfying interfaces.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button 
              onClick={onPlayClick}
              className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors netflix-button"
            >
              <Play size={20} fill="currentColor" />
              <span>Start Learning</span>
            </button>
            
            <button 
              onClick={onInfoClick}
              className="flex items-center space-x-2 bg-gray-600/70 text-white px-8 py-3 rounded font-semibold hover:bg-gray-600/90 transition-colors"
            >
              <Info size={20} />
              <span>More Info</span>
            </button>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="text-sm text-gray-300">
              ✓ Improves readability and focus
            </div>
            <div className="text-sm text-gray-300">
              ✓ Creates visual hierarchy
            </div>
            <div className="text-sm text-gray-300">
              ✓ Guides user attention
            </div>
            <div className="text-sm text-gray-300">
              ✓ Elevates design aesthetics
            </div>
          </div>
        </div>
      </div>

      {/* Fade to black gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent" />
    </div>
  );
};

export default Hero;