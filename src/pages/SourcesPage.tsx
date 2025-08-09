import React, { useState } from 'react';
import { ExternalLink, BookOpen, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { citations } from '../data/uiPrinciples';

interface SourcesPageProps {
  onNavigate: (path: string) => void;
}

const SourcesPage: React.FC<SourcesPageProps> = ({ onNavigate }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['design', 'research']);

  // Categorize citations by topic
  const categorizedCitations = {
    design: {
      title: 'Design & UI Principles',
      color: 'blue',
      sources: citations.filter(c => 
        c.text.toLowerCase().includes('design') || 
        c.text.toLowerCase().includes('ui') ||
        c.text.toLowerCase().includes('interface') ||
        c.text.toLowerCase().includes('visual') ||
        c.text.toLowerCase().includes('typography') ||
        c.text.toLowerCase().includes('color')
      )
    },
    research: {
      title: 'UX Research & Studies',
      color: 'green',
      sources: citations.filter(c => 
        c.text.toLowerCase().includes('research') || 
        c.text.toLowerCase().includes('study') ||
        c.text.toLowerCase().includes('user') ||
        c.text.toLowerCase().includes('usability') ||
        c.text.toLowerCase().includes('testing')
      )
    },
    accessibility: {
      title: 'Accessibility & Inclusion',
      color: 'purple',
      sources: citations.filter(c => 
        c.text.toLowerCase().includes('accessibility') || 
        c.text.toLowerCase().includes('wcag') ||
        c.text.toLowerCase().includes('inclusive') ||
        c.text.toLowerCase().includes('disability') ||
        c.text.toLowerCase().includes('a11y')
      )
    },
    development: {
      title: 'Development & Implementation',
      color: 'orange',
      sources: citations.filter(c => 
        c.text.toLowerCase().includes('development') || 
        c.text.toLowerCase().includes('code') ||
        c.text.toLowerCase().includes('implementation') ||
        c.text.toLowerCase().includes('frontend') ||
        c.text.toLowerCase().includes('css') ||
        c.text.toLowerCase().includes('html')
      )
    },
    standards: {
      title: 'Standards & Guidelines',
      color: 'red',
      sources: citations.filter(c => 
        c.text.toLowerCase().includes('guideline') || 
        c.text.toLowerCase().includes('standard') ||
        c.text.toLowerCase().includes('specification') ||
        c.text.toLowerCase().includes('w3c') ||
        c.text.toLowerCase().includes('iso')
      )
    }
  };

  // Add remaining citations to "Other" category
  const usedIds = new Set();
  Object.values(categorizedCitations).forEach(category => {
    category.sources.forEach(source => usedIds.add(source.id));
  });

  const otherSources = citations.filter(c => !usedIds.has(c.id));
  if (otherSources.length > 0) {
    categorizedCitations.other = {
      title: 'Other Resources',
      color: 'gray',
      sources: otherSources
    };
  }

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryKey) 
        ? prev.filter(key => key !== categoryKey)
        : [...prev, categoryKey]
    );
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-500/30 bg-blue-600/10',
      green: 'border-green-500/30 bg-green-600/10',
      purple: 'border-purple-500/30 bg-purple-600/10',
      orange: 'border-orange-500/30 bg-orange-600/10',
      red: 'border-red-500/30 bg-red-600/10',
      gray: 'border-gray-500/30 bg-gray-600/10'
    };
    return colors[color] || colors.gray;
  };

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600',
      red: 'bg-red-600',
      gray: 'bg-gray-600'
    };
    return colors[color] || colors.gray;
  };

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
            industry experts. Sources are organized by topic for easy navigation and reference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          {Object.entries(categorizedCitations).map(([key, category]) => (
            <div key={key} className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-white mb-1">{category.sources.length}</div>
              <div className="text-gray-400 text-xs">{category.title.split(' ')[0]}</div>
            </div>
          ))}
        </div>

        {/* Categorized Sources */}
        <div className="space-y-6 mb-12">
          {Object.entries(categorizedCitations).map(([categoryKey, category]) => (
            <div key={categoryKey} className={`border rounded-lg ${getColorClasses(category.color)}`}>
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryKey)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <span className={`${getBadgeColor(category.color)} text-white text-sm px-3 py-1 rounded font-medium`}>
                    {category.sources.length}
                  </span>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>
                
                {expandedCategories.includes(categoryKey) ? (
                  <ChevronUp className="text-gray-400" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </button>

              {/* Category Sources */}
              {expandedCategories.includes(categoryKey) && (
                <div className="px-6 pb-6">
                  <div className="space-y-3">
                    {category.sources.map((citation) => (
                      <div key={citation.id} className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                        <div className="flex items-start space-x-4">
                          <span className="bg-[#E50914] text-white text-xs px-2 py-1 rounded flex-shrink-0 font-medium">
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
                              <ExternalLink size={12} />
                              <span>External Link</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* About Our Sources */}
        <div className="bg-gray-800/30 rounded-lg p-8 mb-8">
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
        <div className="p-6 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
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