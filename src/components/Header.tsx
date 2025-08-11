import React, { useState, useEffect } from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onNavigate, currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Demo User',
    email: 'developer@example.com'
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignIn = () => {
    setIsSignedIn(true);
    setUserMenuOpen(false);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserMenuOpen(false);
    // In a real app, this would clear tokens, redirect, etc.
    console.log('User signed out');
  };
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-[#E50914] text-2xl font-bold">UXFlix</h1>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => onNavigate('/')}
              className={`transition-colors ${currentPath === '/' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('/search')}
              className={`transition-colors ${currentPath.startsWith('/search') ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Search
            </button>
            <button 
              onClick={() => onNavigate('/categories')}
              className={`transition-colors ${currentPath === '/categories' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Categories
            </button>
            <button 
              onClick={() => onNavigate('/my-learning')}
              className={`transition-colors ${currentPath === '/my-learning' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              My Learning
            </button>
            <button 
              onClick={() => onNavigate('/contribute')}
              className={`transition-colors ${currentPath === '/contribute' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Contribute
            </button>
          </nav>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search UX principles for developers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-black/70 border border-white/20 text-white px-4 py-2 rounded-sm w-64 focus:outline-none focus:border-white/40"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="ml-2 text-white hover:text-gray-300"
                >
                  ×
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Notifications */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <Bell size={20} />
          </button>

          {/* User Menu */}
          <div className="relative">
            {isSignedIn ? (
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 cursor-pointer group"
              >
                <div className="w-8 h-8 bg-[#E50914] rounded flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <span className="text-white text-sm hidden md:block">{userProfile.name}</span>
                <ChevronDown size={16} className="text-white group-hover:text-gray-300 transition-colors" />
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                className="bg-[#E50914] hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
              >
                Sign In
              </button>
            )}

            {/* User Dropdown */}
            {isSignedIn && userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#141414] border border-gray-700 rounded-lg shadow-lg z-50">
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-white font-medium">{userProfile.name}</p>
                  <p className="text-gray-400 text-sm">{userProfile.email}</p>
                </div>
                <div className="py-2">
                  <button
                    onClick={() => {
                      onNavigate('/profile');
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('/my-learning');
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    My Learning
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('/contribute');
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    Contribute
                  </button>
                  <hr className="border-gray-700 my-2" />
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Settings
                  </button>
                  <button 
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;