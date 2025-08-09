import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, BookOpen, Clock, Users, ArrowLeft, CheckCircle, Heart } from 'lucide-react';
import { allUIPrinciples, categories } from '../data/uiPrinciples';
import { UIPrincipleDetail } from '../types';

interface PrinciplePageProps {
  onNavigate: (path: string) => void;
}

const PrinciplePage: React.FC<PrinciplePageProps> = ({ onNavigate }) => {
  const { principleId } = useParams<{ principleId: string }>();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const principle = allUIPrinciples.find(p => p.id === principleId);
  
  if (!principle) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Principle Not Found</h1>
          <p className="text-gray-400 mb-8">The principle you're looking for doesn't exist.</p>
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

  const category = categories.find(c => c.id === principle.category);
  const relatedPrinciples = allUIPrinciples.filter(p => p.category === principle.category && p.id !== principle.id);

  const handleMarkComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      {/* Back Navigation */}
      <div className="px-4 md:px-16 py-4">
        <button
          onClick={() => onNavigate(-1)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="px-4 md:px-16 py-12 mb-12">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Content */}
          <div className="lg:w-2/3">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="bg-[#E50914] text-white px-3 py-1 rounded text-sm font-medium">
                {category?.title.toUpperCase() || 'UI PRINCIPLE'}
              </span>
              {isCompleted && (
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium flex items-center space-x-1">
                  <CheckCircle size={14} />
                  <span>COMPLETED</span>
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {principle.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              {principle.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <BookOpen size={16} />
                <span>{principle.keyPoints.length} Key Points</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>8-12 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>Beginner Friendly</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button 
                onClick={handleMarkComplete}
                className={`flex items-center space-x-2 px-8 py-3 rounded font-semibold transition-colors ${
                  isCompleted 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                <CheckCircle size={20} />
                <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
              </button>
              
              <button 
                onClick={handleToggleFavorite}
                className={`flex items-center space-x-2 px-8 py-3 rounded font-semibold transition-colors ${
                  isFavorited
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-600/70 text-white hover:bg-gray-600/90'
                }`}
              >
                <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
                <span>{isFavorited ? 'Favorited' : 'Add to Favorites'}</span>
              </button>
            </div>
          </div>
        </div>
          
          {/* Image */}
          <div className="lg:w-1/3">
            <img 
              src={principle.image} 
              alt={principle.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg sticky top-24"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {principle.content}
              </p>
            </section>

            {/* Key Points */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Key Learning Points</h2>
              <div className="space-y-4">
                {principle.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg">
                    <div className="w-8 h-8 bg-[#E50914] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Practical Examples */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Practical Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {principle.examples.map((example, index) => (
                  <div key={index} className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-300">{example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sources & Citations */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Sources & References</h2>
              <div className="space-y-3">
                {principle.citations.map((citation) => (
                  <div key={citation.id} className="p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <span className="bg-[#E50914] text-white text-xs px-2 py-1 rounded flex-shrink-0">
                        [{citation.id}]
                      </span>
                      <a 
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline leading-relaxed"
                      >
                        {citation.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Status</span>
                  <span className={`text-sm font-medium ${isCompleted ? 'text-green-400' : 'text-yellow-400'}`}>
                    {isCompleted ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Reading Time</span>
                  <span className="text-gray-300">8-12 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="text-gray-300">Beginner</span>
                </div>
              </div>
            </div>

            {/* Category Info */}
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Category</h3>
              <div 
                onClick={() => onNavigate(`/category/${principle.category}`)}
                className="cursor-pointer group"
              >
                <img 
                  src={category?.image} 
                  alt={category?.title}
                  className="w-full h-32 object-cover rounded mb-3 group-hover:scale-105 transition-transform"
                />
                <h4 className="text-white font-medium group-hover:text-[#E50914] transition-colors">
                  {category?.title}
                </h4>
                <p className="text-gray-400 text-sm mt-1">{category?.description}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('/search')}
                  className="w-full text-left text-blue-400 hover:text-blue-300 transition-colors"
                >
                  → Search related principles
                </button>
                <button
                  onClick={() => onNavigate(`/category/${principle.category}`)}
                  className="w-full text-left text-blue-400 hover:text-blue-300 transition-colors"
                >
                  → View all {category?.title} principles
                </button>
                <button
                  onClick={() => onNavigate('/profile')}
                  className="w-full text-left text-blue-400 hover:text-blue-300 transition-colors"
                >
                  → View learning progress
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Principles */}
        {relatedPrinciples.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPrinciples.map((related) => (
                <div
                  key={related.id}
                  onClick={() => onNavigate(`/principle/${related.id}`)}
                  className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer group hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src={related.image} 
                    alt={related.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 group-hover:text-[#E50914] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {related.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrinciplePage;