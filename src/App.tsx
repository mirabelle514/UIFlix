import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import PrinciplePage from './pages/PrinciplePage';
import CategoriesPage from './pages/CategoriesPage';
import MyLearningPage from './pages/MyLearningPage';
import LearnPage from './pages/LearnPage';
import DesignToolsPage from './pages/DesignToolsPage';
import TemplatesPage from './pages/TemplatesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BestPracticesPage from './pages/BestPracticesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

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
          <Route path="/categories" element={<CategoriesPage onNavigate={handleNavigate} />} />
          <Route path="/my-learning" element={<MyLearningPage onNavigate={handleNavigate} />} />
          <Route path="/learn" element={<LearnPage onNavigate={handleNavigate} />} />
          <Route path="/category/:categoryId" element={<CategoryPage onNavigate={handleNavigate} />} />
          <Route path="/search" element={<SearchPage onNavigate={handleNavigate} />} />
          <Route path="/search/:query" element={<SearchPage onNavigate={handleNavigate} />} />
          <Route path="/profile" element={<ProfilePage onNavigate={handleNavigate} />} />
          <Route path="/principle/:principleId" element={<PrinciplePage onNavigate={handleNavigate} />} />
          <Route path="/design-tools" element={<DesignToolsPage onNavigate={handleNavigate} />} />
          <Route path="/templates" element={<TemplatesPage onNavigate={handleNavigate} />} />
          <Route path="/case-studies" element={<CaseStudiesPage onNavigate={handleNavigate} />} />
          <Route path="/best-practices" element={<BestPracticesPage onNavigate={handleNavigate} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
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