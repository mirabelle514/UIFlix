import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter, Grid, List } from 'lucide-react';
import { categories, allUIPrinciples } from '../data/uiPrinciples';
import Modal from '../components/Modal';
import { UICategory, UIPrincipleDetail, SearchResult } from '../types';

interface SearchPageProps {
  onNavigate: (path: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onNavigate }) => {
  const { query } = useParams<{ query: string }>();
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedItem, setSelectedItem] = useState<UICategory | UIPrincipleDetail | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  useEffect(() => {
    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [searchQuery, filterCategory]);

  const performSearch = (query: string) => {
    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search categories
    categories.forEach(category => {
      if (
        category.title.toLowerCase().includes(lowerQuery) ||
        category.description.toLowerCase().includes(lowerQuery)
      ) {
        if (filterCategory === 'all' || filterCategory === 'categories') {
          searchResults.push({
            id: category.id,
            title: category.title,
            description: category.description,
            category: 'UI Design Category',
            image: category.image,
            type: 'category'
          });
        }
      }
    });

    // Search principles
    allUIPrinciples.forEach(principle => {
      if (
        principle.title.toLowerCase().includes(lowerQuery) ||
        principle.description.toLowerCase().includes(lowerQuery) ||
        principle.content.toLowerCase().includes(lowerQuery) ||
        principle.keyPoints.some(point => point.toLowerCase().includes(lowerQuery))
      ) {
        if (filterCategory === 'all' || filterCategory === 'principles') {
          const category = categories.find(c => c.id === principle.category);
          searchResults.push({
            id: principle.id,
            title: principle.title,
            description: principle.description,
            category: category?.title || 'UI Principle',
            image: principle.image,
            type: 'principle'
          });
        }
      }
    });

    setResults(searchResults);
  };

  const handleItemClick = (result: SearchResult) => {
    if (result.type === 'category') {
      onNavigate(`/category/${result.id}`);
    } else {
      onNavigate(`/principle/${result.id}`);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {query ? `Search Results for "${query}"` : 'Search UI Principles'}
          </h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="mb-6">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for UI principles, color theory, typography..."
                className="w-full bg-gray-800 border border-gray-600 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
              />
            </div>
          </form>

          {/* Filters and View Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter size={16} className="text-gray-400" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:border-[#E50914]"
                >
                  <option value="all">All Results</option>
                  <option value="categories">Categories Only</option>
                  <option value="principles">Principles Only</option>
                </select>
              </div>
              
              {results.length > 0 && (
                <span className="text-gray-400 text-sm">
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </span>
              )}
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
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
          }>
            {results.map((result) => (
              <div
                key={result.id}
                onClick={() => handleItemClick(result)}
                className={`cursor-pointer group transition-all duration-300 hover:scale-105 ${
                  viewMode === 'list' 
                    ? 'flex bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70'
                    : 'bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70'
                }`}
              >
                <img 
                  src={result.image} 
                  alt={result.title}
                  className={viewMode === 'list' 
                    ? 'w-32 h-24 object-cover flex-shrink-0'
                    : 'w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                  }
                />
                
                <div className="p-4 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      result.type === 'category' ? 'bg-blue-600' : 'bg-green-600'
                    } text-white`}>
                      {result.type === 'category' ? 'Category' : 'Principle'}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#E50914] transition-colors">
                    {result.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                    {result.description}
                  </p>
                  
                  <p className="text-gray-500 text-xs">
                    {result.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-16">
            <Search size={64} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
            <p className="text-gray-400 mb-6">
              Try searching for different terms like "color", "typography", or "spacing"
            </p>
            <button
              onClick={() => onNavigate('/')}
              className="bg-[#E50914] hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
            >
              Browse All Principles
            </button>
          </div>
        ) : (
          <div className="text-center py-16">
            <Search size={64} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold text-white mb-2">Start Your Search</h3>
            <p className="text-gray-400">
              Enter a search term above to find UI principles and design concepts
            </p>
          </div>
        )}
      </div>

      <Modal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)}
        onLearnMore={(categoryId) => onNavigate(`/category/${categoryId}`)}
      />
    </div>
  );
};

export default SearchPage;