import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';

import PrinciplePage from './pages/PrinciplePage';
import CategoriesPage from './pages/CategoriesPage';
import MyLearningPage from './pages/MyLearningPage';
import LearnPage from './pages/LearnPage';
import DesignToolsPage from './pages/DesignToolsPage';
import TemplatesPage from './pages/TemplatesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BestPracticesPage from './pages/BestPracticesPage';
import SourcesPage from './pages/SourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ContributePage from './pages/ContributePage';
import CacheManagerComponent from './components/CacheManager';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Add cache clearing function to window for console access
  useEffect(() => {
    (window as any).clearUIFlixCache = () => {
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(';').forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      });
      window.location.reload();
    };
    
    console.log('💡 Quick cache clear available: run clearUIFlixCache() in console');
  }, []);

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
          <Route path="/categories" element={<CategoriesPage onNavigate={handleNavigate} />} />
          <Route path="/my-learning" element={<MyLearningPage onNavigate={handleNavigate} />} />
          <Route path="/learn" element={<LearnPage onNavigate={handleNavigate} />} />
          <Route path="/category/:categoryId" element={<CategoryPage onNavigate={handleNavigate} />} />
          <Route path="/search" element={<SearchPage onNavigate={handleNavigate} />} />
          <Route path="/search/:query" element={<SearchPage onNavigate={handleNavigate} />} />

          <Route path="/principle/:principleId" element={<PrinciplePage onNavigate={handleNavigate} />} />
          <Route path="/design-tools" element={<DesignToolsPage onNavigate={handleNavigate} />} />
          <Route path="/templates" element={<TemplatesPage onNavigate={handleNavigate} />} />
          <Route path="/case-studies" element={<CaseStudiesPage onNavigate={handleNavigate} />} />
          <Route path="/best-practices" element={<BestPracticesPage onNavigate={handleNavigate} />} />
          <Route path="/sources" element={<SourcesPage onNavigate={handleNavigate} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
          <Route path="/contribute" element={<ContributePage onNavigate={handleNavigate} />} />
          <Route path="/cache-manager" element={<CacheManagerComponent onNavigate={handleNavigate} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage onNavigate={handleNavigate} />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage onNavigate={handleNavigate} />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
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