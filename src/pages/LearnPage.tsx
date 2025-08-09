import React from 'react';
import { BookOpen, Play, Users, Clock, Award, TrendingUp } from 'lucide-react';
import { categories, allUIPrinciples } from '../data/uiPrinciples';

interface LearnPageProps {
  onNavigate: (path: string) => void;
}

const LearnPage: React.FC<LearnPageProps> = ({ onNavigate }) => {
  const featuredPrinciples = allUIPrinciples.slice(0, 6);
  const beginnerPrinciples = allUIPrinciples.filter(p => 
    ['whitespace-fundamentals', 'color-theory-basics', 'typography-readability'].includes(p.id)
  );
  const intermediatePrinciples = allUIPrinciples.filter(p => 
    ['visual-hierarchy-tools', 'grid-systems-composition', 'feedback-affordances'].includes(p.id)
  );

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Hero Section - Clean Design */}
        <div className="text-center mb-12 py-16 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Learn UI Design
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master the fundamentals of user interface design through comprehensive lessons, 
            practical examples, and hands-on exercises. Start your journey from beginner to expert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('/principle/whitespace-fundamentals')}
              className="bg-[#E50914] hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Play size={20} fill="currentColor" />
              <span>Start Learning</span>
            </button>
            <button
              onClick={() => onNavigate('/categories')}
              className="bg-gray-600/70 hover:bg-gray-600/90 text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              Browse Categories
            </button>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <BookOpen className="mx-auto mb-3 text-blue-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">{allUIPrinciples.length}</div>
            <div className="text-gray-400 text-sm">Design Principles</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Users className="mx-auto mb-3 text-green-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">10K+</div>
            <div className="text-gray-400 text-sm">Active Learners</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Clock className="mx-auto mb-3 text-yellow-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">50+</div>
            <div className="text-gray-400 text-sm">Hours of Content</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Award className="mx-auto mb-3 text-purple-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">95%</div>
            <div className="text-gray-400 text-sm">Completion Rate</div>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Learning Path</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Beginner Path</h3>
                <p className="text-gray-300 text-sm">Perfect for those new to UI design</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {beginnerPrinciples.map((principle) => (
                  <div key={principle.id} className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>{principle.title}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => onNavigate('/principle/whitespace-fundamentals')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
              >
                Start Beginner Path
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Intermediate Path</h3>
                <p className="text-gray-300 text-sm">Build on your existing knowledge</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {intermediatePrinciples.map((principle) => (
                  <div key={principle.id} className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>{principle.title}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => onNavigate('/principle/visual-hierarchy-tools')}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors"
              >
                Start Intermediate Path
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced Path</h3>
                <p className="text-gray-300 text-sm">Master complex design concepts</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Design Systems</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Advanced Prototyping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>User Research Methods</span>
                </div>
              </div>
              
              <button
                onClick={() => onNavigate('/category/design-systems')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors"
              >
                Start Advanced Path
              </button>
            </div>
          </div>
        </div>

        {/* Featured Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrinciples.map((principle) => (
              <div
                key={principle.id}
                onClick={() => onNavigate(`/principle/${principle.id}`)}
                className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={principle.image} 
                  alt={principle.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{principle.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{principle.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase">
                      {categories.find(c => c.id === principle.category)?.title}
                    </span>
                    <button className="flex items-center space-x-1 text-[#E50914] hover:text-red-400 transition-colors">
                      <Play size={14} fill="currentColor" />
                      <span className="text-sm">Learn</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#E50914]/20 to-red-800/20 border border-[#E50914]/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Master UI Design?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of designers who have improved their skills with our comprehensive curriculum. 
            Start with the fundamentals and work your way up to advanced concepts.
          </p>
          <button
            onClick={() => onNavigate('/my-learning')}
            className="bg-[#E50914] hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition-colors"
          >
            Track Your Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;