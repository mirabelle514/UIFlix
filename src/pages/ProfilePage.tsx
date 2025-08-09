import React, { useState } from 'react';
import { User, Settings, BookOpen, Heart, Clock, Award, Edit2, Save, X } from 'lucide-react';
import { categories, allUIPrinciples } from '../data/uiPrinciples';

interface ProfilePageProps {
  onNavigate: (path: string) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Design Enthusiast',
    email: 'designer@uiflix.com',
    bio: 'Passionate about creating beautiful and functional user interfaces. Always learning and improving my design skills.',
    learningGoals: ['Master color theory', 'Improve typography skills', 'Learn accessibility best practices'],
    favoriteCategories: ['whitespace', 'typography', 'accessibility']
  });

  const completedPrinciples = ['whitespace-fundamentals', 'color-theory-basics', 'typography-hierarchy'];
  const favoriteCategories = categories.filter(cat => userProfile.favoriteCategories.includes(cat.id));
  const recentlyViewed = allUIPrinciples.slice(0, 3);

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, this would save to a backend
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset any changes
  };

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <div className="w-24 h-24 bg-[#E50914] rounded-full flex items-center justify-center">
                <User size={40} className="text-white" />
              </div>
              
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                      className="bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded w-full focus:outline-none focus:border-[#E50914]"
                    />
                    <input
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                      className="bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded w-full focus:outline-none focus:border-[#E50914]"
                    />
                    <textarea
                      value={userProfile.bio}
                      onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})}
                      rows={3}
                      className="bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded w-full focus:outline-none focus:border-[#E50914] resize-none"
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="text-3xl font-bold text-white mb-2">{userProfile.name}</h1>
                    <p className="text-gray-400 mb-3">{userProfile.email}</p>
                    <p className="text-gray-300 max-w-2xl">{userProfile.bio}</p>
                  </>
                )}
              </div>
            </div>

            <div className="flex space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveProfile}
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    <Save size={16} />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 bg-[#E50914] hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                >
                  <Edit2 size={16} />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <BookOpen className="mx-auto mb-3 text-blue-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">{completedPrinciples.length}</div>
            <div className="text-gray-400 text-sm">Principles Learned</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Heart className="mx-auto mb-3 text-red-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">{favoriteCategories.length}</div>
            <div className="text-gray-400 text-sm">Favorite Categories</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Clock className="mx-auto mb-3 text-green-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">24h</div>
            <div className="text-gray-400 text-sm">Learning Time</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Award className="mx-auto mb-3 text-yellow-400" size={32} />
            <div className="text-2xl font-bold text-white mb-1">3</div>
            <div className="text-gray-400 text-sm">Achievements</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Learning Goals */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Settings className="mr-2" size={20} />
              Learning Goals
            </h2>
            
            <div className="space-y-3">
              {userProfile.learningGoals.map((goal, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#E50914] rounded-full"></div>
                  <span className="text-gray-300">{goal}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-4 text-[#E50914] hover:text-red-400 text-sm transition-colors">
              + Add New Goal
            </button>
          </div>

          {/* Favorite Categories */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Heart className="mr-2" size={20} />
              Favorite Categories
            </h2>
            
            <div className="space-y-3">
              {favoriteCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => onNavigate(`/category/${category.id}`)}
                  className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <div className="text-white font-medium">{category.title}</div>
                    <div className="text-gray-400 text-sm">{category.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Recently Viewed</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentlyViewed.map((principle) => (
              <div
                key={principle.id}
                className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800/70 transition-colors"
              >
                <img 
                  src={principle.image} 
                  alt={principle.title}
                  className="w-full h-32 object-cover"
                />
                
                <div className="p-4">
                  <h3 className="text-white font-medium mb-2">{principle.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{principle.description}</p>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase">
                      {categories.find(c => c.id === principle.category)?.title}
                    </span>
                    <span className="text-xs text-green-400">Completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;