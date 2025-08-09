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
        <div className="lg:w-1/2 space-y-8">
        <div className="space-y-6">
          {/* Category Badge */}
          <div className="inline-block">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
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
        
        {/* Visual Element */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="UX Design Workspace"
              className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E50914] rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;