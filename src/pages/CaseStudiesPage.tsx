import React, { useState } from 'react';
import { Clock, User, ArrowRight, Filter } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (path: string) => void;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const caseStudies = [
    {
      id: 'spotify-redesign',
      title: 'Spotify Mobile App Redesign',
      category: 'mobile',
      description: 'A comprehensive redesign of Spotify\'s mobile experience focusing on music discovery and user engagement',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      author: 'Sarah Chen',
      readTime: '12 min read',
      tags: ['Mobile Design', 'Music App', 'User Research', 'Prototyping'],
      challenge: 'Users struggled to discover new music and navigate the complex interface',
      solution: 'Simplified navigation, improved discovery algorithms, and personalized recommendations',
      results: '40% increase in music discovery, 25% improvement in user retention'
    },
    {
      id: 'banking-dashboard',
      title: 'Enterprise Banking Dashboard',
      category: 'dashboard',
      description: 'Designing a comprehensive dashboard for enterprise banking with complex data visualization',
      image: 'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg',
      author: 'Michael Rodriguez',
      readTime: '15 min read',
      tags: ['Dashboard', 'Data Visualization', 'Enterprise', 'FinTech'],
      challenge: 'Complex financial data needed to be presented in an accessible way',
      solution: 'Hierarchical information architecture with progressive disclosure',
      results: '60% reduction in task completion time, 90% user satisfaction score'
    },
    {
      id: 'ecommerce-checkout',
      title: 'E-commerce Checkout Optimization',
      category: 'ecommerce',
      description: 'Optimizing the checkout process for a major e-commerce platform to reduce cart abandonment',
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg',
      author: 'Emily Johnson',
      readTime: '10 min read',
      tags: ['E-commerce', 'Conversion', 'UX Research', 'A/B Testing'],
      challenge: 'High cart abandonment rate of 70% during checkout process',
      solution: 'Streamlined single-page checkout with guest options and trust signals',
      results: '35% reduction in cart abandonment, $2M increase in annual revenue'
    },
    {
      id: 'healthcare-app',
      title: 'Telemedicine App for Seniors',
      category: 'healthcare',
      description: 'Designing an accessible telemedicine app specifically for senior users with varying tech literacy',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      author: 'Dr. James Park',
      readTime: '14 min read',
      tags: ['Healthcare', 'Accessibility', 'Senior Users', 'Telemedicine'],
      challenge: 'Creating an intuitive interface for users with limited technology experience',
      solution: 'Large touch targets, simplified navigation, and voice-guided interactions',
      results: '85% user adoption rate among seniors, 95% successful appointment completion'
    },
    {
      id: 'design-system-scale',
      title: 'Scaling Design Systems Across Teams',
      category: 'design-system',
      description: 'Building and implementing a design system across multiple product teams at a Fortune 500 company',
      image: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg',
      author: 'Alex Thompson',
      readTime: '18 min read',
      tags: ['Design Systems', 'Team Collaboration', 'Scalability', 'Process'],
      challenge: 'Inconsistent designs across 15+ product teams and platforms',
      solution: 'Comprehensive design system with governance model and adoption strategy',
      results: '80% faster design-to-development handoff, 50% reduction in design debt'
    },
    {
      id: 'social-media-engagement',
      title: 'Social Media Platform Engagement',
      category: 'social',
      description: 'Increasing user engagement and time spent on a social media platform through UX improvements',
      image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg',
      author: 'Lisa Wang',
      readTime: '11 min read',
      tags: ['Social Media', 'Engagement', 'Feed Algorithm', 'User Behavior'],
      challenge: 'Declining user engagement and session duration',
      solution: 'Personalized content feed with improved interaction patterns',
      results: '45% increase in daily active users, 30% longer session duration'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Case Studies' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'design-system', name: 'Design Systems' },
    { id: 'social', name: 'Social Media' }
  ];

  const filteredCaseStudies = filterCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filterCategory);

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real-world design challenges and solutions from industry professionals. 
            Learn from detailed case studies that showcase the design process from problem to solution.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter size={16} className="text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:border-[#E50914]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <span className="text-gray-400 text-sm">
            {filteredCaseStudies.length} case studies
          </span>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8 mb-12">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-xs px-2 py-1 rounded bg-[#E50914] text-white capitalize">
                      {study.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <User size={14} />
                      <span>{study.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Clock size={14} />
                      <span>{study.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-semibold text-xl mb-3">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Challenge</h4>
                      <p className="text-gray-400 text-xs">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Solution</h4>
                      <p className="text-gray-400 text-xs">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Results</h4>
                      <p className="text-gray-400 text-xs">{study.results}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {study.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="flex items-center space-x-2 text-[#E50914] hover:text-red-400 transition-colors">
                      <span>Read Case Study</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Categories */}
        <div className="bg-gray-800/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">What You'll Learn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Problem Identification</h3>
              <p className="text-gray-400 text-sm">
                Learn how to identify and frame design problems through user research and data analysis.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Design Process</h3>
              <p className="text-gray-400 text-sm">
                Understand the step-by-step process from ideation to final implementation.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Solution Validation</h3>
              <p className="text-gray-400 text-sm">
                See how designs are tested and validated with real users and stakeholders.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Impact Measurement</h3>
              <p className="text-gray-400 text-sm">
                Discover how design success is measured through metrics and user feedback.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-400 text-sm">
                Learn about working with cross-functional teams and stakeholder management.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Industry Insights</h3>
              <p className="text-gray-400 text-sm">
                Gain insights into different industries and their unique design challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;