import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { citations } from '../data/uiPrinciples';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [currentCitationIndex, setCurrentCitationIndex] = useState(0);

  const nextCitation = () => {
    setCurrentCitationIndex((prev) => 
      prev < citations.length - 1 ? prev + 1 : prev
    );
  };

  const prevCitation = () => {
    setCurrentCitationIndex((prev) => prev > 0 ? prev - 1 : prev);
  };

  return (
    <footer className="bg-[#141414] text-gray-400 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Citations Section */}
        <div className="mb-12">
          <h3 className="text-white text-2xl font-semibold mb-6">Sources & References</h3>
          <p className="text-gray-300 mb-6">
            All content is based on established UI/UX design principles and research from industry experts. 
            Citations are provided for transparency and further learning.
          </p>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentCitationIndex * 100}%)` }}
              >
                {citations.map((citation) => (
                  <div key={citation.id} className="w-full flex-shrink-0">
                    <div className="bg-gray-800/30 p-6 rounded mx-2">
                      <div className="flex items-start space-x-3">
                        <span className="bg-[#E50914] text-white text-xs px-2 py-1 rounded flex-shrink-0">
                          [{citation.id}]
                        </span>
                        <a 
                          href={citation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm underline leading-relaxed"
                        >
                          {citation.text}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevCitation}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              disabled={currentCitationIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextCitation}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              disabled={currentCitationIndex === citations.length - 1}
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {citations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCitationIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentCitationIndex ? 'bg-[#E50914]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Design Principles</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('/category/whitespace')} className="hover:text-white transition-colors text-left">White Space</button></li>
              <li><button onClick={() => onNavigate('/category/typography')} className="hover:text-white transition-colors text-left">Typography</button></li>
              <li><button onClick={() => onNavigate('/category/hierarchy')} className="hover:text-white transition-colors text-left">Visual Hierarchy</button></li>
              <li><button onClick={() => onNavigate('/category/accessibility')} className="hover:text-white transition-colors text-left">Accessibility</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('/design-tools')} className="hover:text-white transition-colors text-left">Design Tools</button></li>
              <li><button onClick={() => onNavigate('/templates')} className="hover:text-white transition-colors text-left">Templates</button></li>
              <li><button onClick={() => onNavigate('/case-studies')} className="hover:text-white transition-colors text-left">Case Studies</button></li>
              <li><button onClick={() => onNavigate('/best-practices')} className="hover:text-white transition-colors text-left">Best Practices</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('/learn')} className="hover:text-white transition-colors text-left">Start Learning</button></li>
              <li><button onClick={() => onNavigate('/categories')} className="hover:text-white transition-colors text-left">All Categories</button></li>
              <li><button onClick={() => onNavigate('/my-learning')} className="hover:text-white transition-colors text-left">My Progress</button></li>
              <li><button onClick={() => onNavigate('/search')} className="hover:text-white transition-colors text-left">Search</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors text-left">About UIFlix</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
              <li><button onClick={() => onNavigate('/privacy-policy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('/terms-of-service')} className="hover:text-white transition-colors text-left">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="text-[#E50914] text-2xl font-bold">UIFlix</div>
              <span className="text-sm">© 2025 UIFlix. Educational content for UI/UX designers.</span>
            </div>
            
            <div className="text-sm">
              <span>Inspired by Netflix UI • Built for design education</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/30 rounded text-sm text-gray-400">
          <p>
            <strong>Disclaimer:</strong> UIFlix is an educational platform created to teach UI design principles. 
            All design patterns and visual elements are used for educational purposes only. This site is not 
            affiliated with Netflix, Inc. All cited sources are provided for educational reference and 
            to credit the original authors and researchers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;