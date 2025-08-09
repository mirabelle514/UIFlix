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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <h1 className="text-[#E50914] text-2xl font-bold">UIFlix</h1>
          
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
              onClick={() => onNavigate('/category/whitespace')}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Categories
            </button>
            <button 
              onClick={() => onNavigate('/profile')}
              className={`transition-colors ${currentPath === '/profile' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              My Learning
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
                  placeholder="Search UI principles..."
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
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center space-x-2 cursor-pointer group"
            >
            <div className="w-8 h-8 bg-[#E50914] rounded flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <ChevronDown size={16} className="text-white group-hover:text-gray-300 transition-colors" />
            </button>

            {/* User Dropdown */}
            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#141414] border border-gray-700 rounded-lg shadow-lg z-50">
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
                      onNavigate('/');
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    My Learning
                  </button>
                  <hr className="border-gray-700 my-2" />
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors">
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