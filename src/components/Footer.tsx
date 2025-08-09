import React from 'react';
import { citations } from '../data/uiPrinciples';

const Footer: React.FC = () => {
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {citations.map((citation) => (
              <div key={citation.id} className="bg-gray-800/30 p-4 rounded">
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
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Design Principles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Color Theory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Typography</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Visual Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">User Experience</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interface Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Design Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About UIFlix</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
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