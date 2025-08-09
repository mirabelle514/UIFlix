import React, { useState } from 'react';
import { Grid, List, Filter, BookOpen } from 'lucide-react';
import { categories } from '../data/uiPrinciples';

interface CategoriesPageProps {
  onNavigate: (path: string) => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterType, setFilterType] = useState<string>('all');

  const categoryGroups = {
    fundamentals: categories.filter(cat => 
      ['whitespace', 'typography', 'hierarchy', 'consistency'].includes(cat.id)
    ),
    userExperience: categories.filter(cat => 
      ['navigation', 'interaction', 'forms', 'buttons', 'accessibility', 'usability'].includes(cat.id)
    ),
    layout: categories.filter(cat => 
      ['layout', 'responsive', 'spacing'].includes(cat.id)
    ),
    visual: categories.filter(cat => 
      ['icons', 'imagery', 'branding', 'animation'].includes(cat.id)
    ),
    feedback: categories.filter(cat => 
      ['feedback', 'errors', 'loading'].includes(cat.id)
    ),
    advanced: categories.filter(cat => 
      ['design-systems', 'prototyping', 'user-research'].includes(cat.id)
    ),
    specialized: categories.filter(cat => 
      ['mobile', 'web', 'dashboard', 'ecommerce'].includes(cat.id)
    )
  };

  const filteredCategories = filterType === 'all' 
    ? categories 
    : categoryGroups[filterType as keyof typeof categoryGroups] || categories;

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            All Categories
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore our comprehensive collection of UI design principles organized by topic. 
            Each category contains detailed principles, examples, and best practices.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:border-[#E50914]"
              >
                <option value="all">All Categories</option>
                <option value="fundamentals">Design Fundamentals</option>
                <option value="userExperience">User Experience</option>
                <option value="layout">Layout & Structure</option>
                <option value="visual">Visual Elements</option>
                <option value="feedback">Feedback & Communication</option>
                <option value="advanced">Advanced Concepts</option>
                <option value="specialized">Specialized Applications</option>
              </select>
            </div>
            
            <span className="text-gray-400 text-sm">
              {filteredCategories.length} categories
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#E50914] text-white' : 'bg-gray-800 text-gray-400 hover:text-white'} transition-colors`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#E50914] text-white' : 'bg-gray-800 text-gray-400 hover:text-white'} transition-colors`}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Categories Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'space-y-4'
        }>
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => onNavigate(`/category/${category.id}`)}
              className={`cursor-pointer group transition-all duration-300 hover:scale-105 ${
                viewMode === 'list' 
                  ? 'flex bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70'
                  : 'bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70'
              }`}
            >
              <img 
                src={category.image} 
                alt={category.title}
                className={viewMode === 'list' 
                  ? 'w-32 h-24 object-cover flex-shrink-0'
                  : 'w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                }
              />
              
              <div className="p-4 flex-1">
                <div className="flex items-center justify-between mb-2">
                  {category.featured && (
                    <span className="text-xs px-2 py-1 rounded bg-[#E50914] text-white">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#E50914] transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Category Groups Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Learning Paths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <BookOpen className="text-blue-400 mb-3" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Beginner Path</h3>
              <p className="text-gray-400 text-sm mb-4">
                Start with fundamentals: White Space, Typography, and Visual Hierarchy
              </p>
              <button
                onClick={() => onNavigate('/category/whitespace')}
                className="text-[#E50914] hover:text-red-400 text-sm transition-colors"
              >
                Start Learning →
              </button>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-lg">
              <BookOpen className="text-green-400 mb-3" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Intermediate Path</h3>
              <p className="text-gray-400 text-sm mb-4">
                Advance to UX principles: Navigation, Forms, and Interaction Design
              </p>
              <button
                onClick={() => onNavigate('/category/navigation')}
                className="text-[#E50914] hover:text-red-400 text-sm transition-colors"
              >
                Continue Learning →
              </button>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-lg">
              <BookOpen className="text-purple-400 mb-3" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Advanced Path</h3>
              <p className="text-gray-400 text-sm mb-4">
                Master complex topics: Design Systems, Prototyping, and Research
              </p>
              <button
                onClick={() => onNavigate('/category/design-systems')}
                className="text-[#E50914] hover:text-red-400 text-sm transition-colors"
              >
                Master Skills →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;