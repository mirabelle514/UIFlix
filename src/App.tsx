import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import PrinciplePage from './pages/PrinciplePage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-[#141414] min-h-screen">
      <Header 
        onSearch={handleSearch} 
        onNavigate={handleNavigate}
        currentPath={location.pathname}
      />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/category/:categoryId" element={<CategoryPage onNavigate={handleNavigate} />} />
          <Route path="/search" element={<SearchPage onNavigate={handleNavigate} />} />
          <Route path="/search/:query" element={<SearchPage onNavigate={handleNavigate} />} />
          <Route path="/profile" element={<ProfilePage onNavigate={handleNavigate} />} />
          <Route path="/principle/:principleId" element={<PrinciplePage onNavigate={handleNavigate} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;