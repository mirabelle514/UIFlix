import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, BookOpen, Clock, Users } from 'lucide-react';
import { categories, allUIPrinciples } from '../data/uiPrinciples';
import Modal from '../components/Modal';
import { UIPrincipleDetail } from '../types';

interface CategoryPageProps {
  onNavigate: (path: string) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ onNavigate }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedPrinciple, setSelectedPrinciple] = useState<UIPrincipleDetail | null>(null);

  const category = categories.find(c => c.id === categoryId);
  const categoryPrinciples = allUIPrinciples.filter(p => p.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <p className="text-gray-400 mb-8">The category you're looking for doesn't exist.</p>
          <button
            onClick={() => onNavigate('/')}
            className="bg-[#E50914] hover:bg-red-700 text-white px-8 py-3 rounded transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      {/* Hero Section - Clean Layout */}
      <div className="px-4 md:px-16 py-12 mb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-2/3">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#E50914] text-white px-3 py-1 rounded text-sm font-medium">
                DESIGN CATEGORY
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {category.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <BookOpen size={16} />
                <span>{categoryPrinciples.length} Principles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>15-30 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>Beginner to Advanced</span>
              </div>
            </div>
          </div>
        </div>
          
          {/* Image */}
          <div className="lg:w-1/3">
            <img 
              src={category.image} 
              alt={category.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Principles Grid */}
      <div className="px-4 md:px-16 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          {category.title} Principles
        </h2>

        {categoryPrinciples.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryPrinciples.map((principle) => (
              <div
                key={principle.id}
                onClick={() => onNavigate(`/principle/${principle.id}`)}
                className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer group hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={principle.image} 
                  alt={principle.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-[#E50914] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {principle.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {principle.keyPoints.length} Key Points
                    </span>
                    <button className="flex items-center space-x-1 text-[#E50914] hover:text-red-400 transition-colors">
                      <Play size={14} fill="currentColor" />
                      <span className="text-sm">Start</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <BookOpen size={64} className="mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">More Content Coming Soon</h3>
              <p>We're working on adding more detailed principles for this category.</p>
            </div>
            <button
              onClick={() => onNavigate('/')}
              className="bg-[#E50914] hover:bg-red-700 text-white px-6 py-2 rounded transition-colors mt-4"
            >
              Explore Other Categories
            </button>
          </div>
        )}
      </div>

      <Modal 
        item={selectedPrinciple} 
        onClose={() => setSelectedPrinciple(null)}
      />
    </div>
  );
};

export default CategoryPage;