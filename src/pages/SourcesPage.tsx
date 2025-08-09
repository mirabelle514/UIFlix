import React, { useState } from 'react';
import { ExternalLink, BookOpen, Filter } from 'lucide-react';
import { citations } from '../data/uiPrinciples';

interface SourcesPageProps {
  onNavigate: (path: string) => void;
}

const SourcesPage: React.FC<SourcesPageProps> = ({ onNavigate }) => {
  const [filterType, setFilterType] = useState<string>('all');

  // Categorize citations (you could add a category field to citations data)
  const categorizedCitations = {
    design: citations.filter(c => c.text.toLowerCase().includes('design') || c.text.toLowerCase().includes('ui')),
    research: citations.filter(c => c.text.toLowerCase().includes('research') || c.text.toLowerCase().includes('study')),
    accessibility: citations.filter(c => c.text.toLowerCase().includes('accessibility') || c.text.toLowerCase().includes('wcag')),
    other: citations.filter(c => 
      !c.text.toLowerCase().includes('design') && 
      !c.text.toLowerCase().includes('ui') && 
      !c.text.toLowerCase().includes('research') && 
      !c.text.toLowerCase().includes('study') &&
      !c.text.toLowerCase().includes('accessibility') &&
      !c.text.toLowerCase().includes('wcag')
    )
  };

  const filteredCitations = filterType === 'all' 
    ? citations 
    : categorizedCitations[filterType as keyof typeof categorizedCitations] || citations;

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sources & References
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            All content on DevUX is based on established UI/UX design principles and research from 
            industry experts. We provide complete citations for transparency and to encourage further learning.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">{citations.length}</div>
            <div className="text-gray-400 text-sm">Total Sources</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">{categorizedCitations.design.length}</div>
            <div className="text-gray-400 text-sm">Design Sources</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">{categorizedCitations.research.length}</div>
            <div className="text-gray-400 text-sm">Research Papers</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">{categorizedCitations.accessibility.length}</div>
            <div className="text-gray-400 text-sm">Accessibility Guides</div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter size={16} className="text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:border-[#E50914]"
            >
              <option value="all">All Sources</option>
              <option value="design">Design & UI</option>
              <option value="research">Research & Studies</option>
              <option value="accessibility">Accessibility</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <span className="text-gray-400 text-sm">
            {filteredCitations.length} sources
          </span>
        </div>

        {/* Citations List */}
        <div className="space-y-4 mb-12">
          {filteredCitations.map((citation) => (
            <div key={citation.id} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
              <div className="flex items-start space-x-4">
                <span className="bg-[#E50914] text-white text-sm px-3 py-1 rounded flex-shrink-0 font-medium">
                  [{citation.id}]
                </span>
                <div className="flex-1">
                  <a 
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline leading-relaxed block mb-2"
                  >
                    {citation.text}
                  </a>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <ExternalLink size={14} />
                    <span>External Link</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Our Sources */}
        <div className="bg-gray-800/30 rounded-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <BookOpen className="text-[#E50914] mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About Our Sources</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Every principle and concept taught on DevUX is backed by established research, 
                  industry best practices, and expert knowledge. We carefully curate our sources to ensure:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Accuracy and reliability of information</li>
                  <li>Relevance to modern UI/UX practices</li>
                  <li>Accessibility and inclusive design principles</li>
                  <li>Evidence-based design recommendations</li>
                </ul>
                
                <p>
                  All external links are provided for educational purposes and to give proper credit 
                  to the original authors and researchers who have contributed to the field of user experience design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
          <h3 className="text-yellow-300 font-semibold mb-2">Educational Use Disclaimer</h3>
          <p className="text-yellow-200 text-sm">
            <strong>Disclaimer:</strong> DevUX is an educational platform created to teach UI design principles. 
            All design patterns and visual elements are used for educational purposes only. This site is not 
            affiliated with Netflix, Inc. All cited sources are provided for educational reference and 
            to credit the original authors and researchers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourcesPage;