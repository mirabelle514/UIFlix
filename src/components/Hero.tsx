import React from 'react';
import { Play, Info } from 'lucide-react';

interface HeroProps {
  onPlayClick: () => void;
  onInfoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlayClick, onInfoClick }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-[#141414] to-gray-800 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 py-16 min-h-screen">
        {/* Content */}
        <div className="w-full max-w-4xl space-y-8">
        <div className="space-y-6 text-left">
          {/* Category Badge */}
          <div>
            <span className="bg-[#E50914] text-white px-3 py-1 rounded text-sm font-medium">
              FEATURED PRINCIPLE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            UX Principles for Developers
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            Bridge the gap between code and user experience. Learn essential UX/UI principles that every developer should know to build intuitive, accessible, and user-friendly applications.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button 
              onClick={onPlayClick}
              className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors netflix-button"
            >
              <Play size={20} fill="currentColor" />
              <span>Start Learning UX</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 max-w-2xl">
            <div className="text-sm text-gray-300">
              ✓ Code with user empathy
            </div>
            <div className="text-sm text-gray-300">
              ✓ Build accessible interfaces
            </div>
            <div className="text-sm text-gray-300">
              ✓ Implement responsive design
            </div>
            <div className="text-sm text-gray-300">
              ✓ Optimize user workflows
            </div>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default Hero;