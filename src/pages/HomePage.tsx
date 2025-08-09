import React, { useState } from 'react';
import Hero from '../components/Hero';
import ContentRow from '../components/ContentRow';
import Modal from '../components/Modal';
import { categories, allUIPrinciples } from '../data/uiPrinciples';
import { UICategory, UIPrincipleDetail } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState<UICategory | UIPrincipleDetail | null>(null);

  const featuredPrinciples = categories.filter(cat => cat.featured);
  const designFundamentals = categories.filter(cat => 
    ['whitespace', 'typography', 'hierarchy', 'consistency'].includes(cat.id)
  );
  const userExperience = categories.filter(cat => 
    ['navigation', 'interaction', 'forms', 'buttons', 'accessibility', 'usability'].includes(cat.id)
  );
  const layoutDesign = categories.filter(cat => 
    ['layout', 'responsive', 'spacing'].includes(cat.id)
  );
  const visualElements = categories.filter(cat => 
    ['icons', 'imagery', 'branding', 'animation'].includes(cat.id)
  );
  const advancedConcepts = categories.filter(cat => 
    ['design-systems', 'prototyping', 'user-research'].includes(cat.id)
  );
  const specializedAreas = categories.filter(cat => 
    ['mobile', 'web', 'dashboard', 'ecommerce'].includes(cat.id)
  );
  const feedbackSystems = categories.filter(cat => 
    ['feedback', 'errors', 'loading'].includes(cat.id)
  );

  const handleItemClick = (item: UICategory) => {
    setSelectedItem(item);
  };

  const handleLearnMore = (categoryId: string) => {
    onNavigate(`/category/${categoryId}`);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handlePlayClick = () => {
    const whitespaceDetail = allUIPrinciples.find(p => p.id === 'whitespace-fundamentals');
    if (whitespaceDetail) {
      onNavigate('/principle/whitespace-fundamentals');
    }
  };

  const handleInfoClick = () => {
    const whitespaceCategory = categories.find(c => c.id === 'whitespace');
    if (whitespaceCategory) {
      setSelectedItem(whitespaceCategory);
    }
  };

  return (
    <>
      <Hero onPlayClick={handlePlayClick} onInfoClick={handleInfoClick} />
      
      <div className="relative z-10 -mt-32 space-y-8">
        <ContentRow 
          title="Featured Design Principles" 
          items={featuredPrinciples}
          onItemClick={handleItemClick}
        />
        
        <ContentRow 
          title="Design Fundamentals" 
          items={designFundamentals}
          onItemClick={handleItemClick}
        />
        
        <ContentRow 
          title="User Experience & Interaction" 
          items={userExperience}
          onItemClick={handleItemClick}
        />
        
        <ContentRow 
          title="Layout & Structure" 
          items={layoutDesign}
          onItemClick={handleItemClick}
        />
        
        <ContentRow 
          title="Visual Elements" 
          items={visualElements}
          onItemClick={handleItemClick}
        />
        
        <ContentRow 
          title="Feedback & Communication" 
          items={feedbackSystems}
          onItemClick={handleItemClick}
        />
        
        <ContentRow 
          title="Advanced UI Concepts" 
          items={advancedConcepts}
          onItemClick={handleItemClick}
        />
        
        <ContentRow 
          title="Specialized Applications" 
          items={specializedAreas}
          onItemClick={handleItemClick}
        />
      </div>

      <Modal 
        item={selectedItem} 
        onClose={handleCloseModal}
        onLearnMore={handleLearnMore}
        onStartLearning={(id) => onNavigate(`/principle/${id}`)}
      />
    </>
  );
};

export default HomePage;