import React from 'react';
import { citations } from '../data/uiPrinciples';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#141414] text-gray-400 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Citations Section */}
        <div className="mb-12 bg-gray-800/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">Sources & References</h3>
              <p className="text-gray-300 text-sm">
                All content is based on established UI/UX research from {citations.length} industry sources.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/sources')}
              className="bg-[#E50914] hover:bg-red-700 text-white px-4 py-2 rounded transition-colors text-sm"
            >
              View All Sources
            </button>
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