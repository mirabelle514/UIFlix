import React, { useState } from 'react';
import { BookOpen, Clock, Award, TrendingUp, Target, Heart, CheckCircle, Play } from 'lucide-react';
import { categories, allUIPrinciples } from '../data/uiPrinciples';

interface MyLearningPageProps {
  onNavigate: (path: string) => void;
}

const MyLearningPage: React.FC<MyLearningPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'progress' | 'favorites' | 'goals'>('progress');

  // Mock user data - in a real app this would come from a backend
  const completedPrinciples = ['whitespace-fundamentals', 'color-theory-basics', 'typography-hierarchy'];
  const inProgressPrinciples = ['visual-hierarchy-principles', 'grid-systems'];
  const favoriteCategories = ['whitespace', 'typography', 'accessibility'];
  const learningGoals = [
    'Master color theory fundamentals',
    'Complete all typography principles',
    'Learn accessibility best practices',
    'Build a personal design system'
  ];

  const completedPrincipleDetails = allUIPrinciples.filter(p => 
    completedPrinciples.includes(p.id)
  );
  const inProgressPrincipleDetails = allUIPrinciples.filter(p => 
    inProgressPrinciples.includes(p.id)
  );
  const favoriteCategoryDetails = categories.filter(c => 
    favoriteCategories.includes(c.id)
  );

  const totalPrinciples = allUIPrinciples.length;
  const completionPercentage = Math.round((completedPrinciples.length / totalPrinciples) * 100);

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Learning
          </h1>
          <p className="text-gray-400 text-lg">
            Track your progress and continue your UI design education journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <TrendingUp className="mx-auto mb-3 text-green-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">{completionPercentage}%</div>
            <div className="text-gray-400 text-sm">Overall Progress</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <CheckCircle className="mx-auto mb-3 text-blue-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">{completedPrinciples.length}</div>
            <div className="text-gray-400 text-sm">Completed Principles</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Clock className="mx-auto mb-3 text-yellow-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">{inProgressPrinciples.length}</div>
            <div className="text-gray-400 text-sm">In Progress</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Award className="mx-auto mb-3 text-purple-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">3</div>
            <div className="text-gray-400 text-sm">Achievements</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Learning Progress</h3>
            <span className="text-gray-400 text-sm">{completedPrinciples.length} of {totalPrinciples} principles</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-[#E50914] to-red-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-800/30 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex-1 py-3 px-4 rounded-md transition-colors ${
              activeTab === 'progress' 
                ? 'bg-[#E50914] text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Progress
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-3 px-4 rounded-md transition-colors ${
              activeTab === 'favorites' 
                ? 'bg-[#E50914] text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab('goals')}
            className={`flex-1 py-3 px-4 rounded-md transition-colors ${
              activeTab === 'goals' 
                ? 'bg-[#E50914] text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Goals
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'progress' && (
          <div className="space-y-8">
            {/* Completed Principles */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="mr-2 text-green-400" size={24} />
                Completed Principles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedPrincipleDetails.map((principle) => (
                  <div
                    key={principle.id}
                    onClick={() => onNavigate(`/principle/${principle.id}`)}
                    className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800/70 transition-colors"
                  >
                    <img 
                      src={principle.image} 
                      alt={principle.title}
                      className="w-full h-32 object-cover"
                    />
                    
                    <div className="p-4">
                      <h3 className="text-white font-medium mb-2">{principle.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-3">{principle.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-green-400 flex items-center">
                          <CheckCircle size={12} className="mr-1" />
                          Completed
                        </span>
                        <button className="text-[#E50914] hover:text-red-400 text-sm transition-colors">
                          Review →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="mr-2 text-yellow-400" size={24} />
                Continue Learning
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inProgressPrincipleDetails.map((principle) => (
                  <div
                    key={principle.id}
                    onClick={() => onNavigate(`/principle/${principle.id}`)}
                    className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800/70 transition-colors"
                  >
                    <img 
                      src={principle.image} 
                      alt={principle.title}
                      className="w-full h-32 object-cover"
                    />
                    
                    <div className="p-4">
                      <h3 className="text-white font-medium mb-2">{principle.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-3">{principle.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-yellow-400 flex items-center">
                          <Play size={12} className="mr-1" />
                          In Progress
                        </span>
                        <button className="text-[#E50914] hover:text-red-400 text-sm transition-colors">
                          Continue →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Heart className="mr-2 text-red-400" size={24} />
              Favorite Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteCategoryDetails.map((category) => (
                <div
                  key={category.id}
                  onClick={() => onNavigate(`/category/${category.id}`)}
                  className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800/70 transition-colors"
                >
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{category.description}</p>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-red-400 flex items-center">
                        <Heart size={12} className="mr-1" fill="currentColor" />
                        Favorited
                      </span>
                      <button className="text-[#E50914] hover:text-red-400 text-sm transition-colors">
                        Explore →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="mr-2 text-blue-400" size={24} />
              Learning Goals
            </h2>
            
            <div className="space-y-4 mb-8">
              {learningGoals.map((goal, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#E50914] rounded-full"></div>
                    <span className="text-gray-300">{goal}</span>
                  </div>
                  <button className="text-[#E50914] hover:text-red-400 text-sm transition-colors">
                    Start →
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/30 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Add New Goal</h3>
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Enter your learning goal..."
                  className="flex-1 bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:border-[#E50914]"
                />
                <button className="bg-[#E50914] hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
                  Add Goal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearningPage;