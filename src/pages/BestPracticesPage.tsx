import React, { useState } from 'react';
import { CheckCircle, BookOpen, Filter, Star } from 'lucide-react';

interface BestPracticesPageProps {
  onNavigate: (path: string) => void;
}

const BestPracticesPage: React.FC<BestPracticesPageProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const practices = [
    {
      id: 'mobile-first-design',
      title: 'Mobile-First Design Approach',
      category: 'responsive',
      description: 'Design for mobile devices first, then progressively enhance for larger screens',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      importance: 'Critical',
      difficulty: 'Beginner',
      practices: [
        'Start with the smallest screen size (320px)',
        'Focus on essential content and features first',
        'Use progressive enhancement for larger screens',
        'Test on real devices, not just browser tools',
        'Optimize touch targets for finger navigation'
      ],
      benefits: [
        'Better performance on all devices',
        'Forced prioritization of content',
        'Improved accessibility',
        'Future-proof design approach'
      ]
    },
    {
      id: 'accessibility-first',
      title: 'Accessibility-First Design',
      category: 'accessibility',
      description: 'Build inclusive interfaces that work for users with diverse abilities from the start',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      importance: 'Critical',
      difficulty: 'Intermediate',
      practices: [
        'Maintain 4.5:1 color contrast ratio minimum',
        'Provide keyboard navigation for all interactions',
        'Use semantic HTML structure',
        'Include descriptive alt text for images',
        'Test with screen readers regularly'
      ],
      benefits: [
        'Inclusive user experience',
        'Legal compliance',
        'Better SEO performance',
        'Improved usability for everyone'
      ]
    },
    {
      id: 'consistent-design-system',
      title: 'Consistent Design Systems',
      category: 'systems',
      description: 'Maintain consistency across products through well-defined design systems',
      image: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg',
      importance: 'High',
      difficulty: 'Advanced',
      practices: [
        'Define clear design tokens for colors, spacing, typography',
        'Create reusable component libraries',
        'Document usage guidelines and examples',
        'Establish governance and maintenance processes',
        'Version control design system updates'
      ],
      benefits: [
        'Faster design and development',
        'Consistent user experience',
        'Easier maintenance and updates',
        'Better team collaboration'
      ]
    },
    {
      id: 'user-centered-design',
      title: 'User-Centered Design Process',
      category: 'process',
      description: 'Put users at the center of every design decision through research and testing',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      importance: 'Critical',
      difficulty: 'Intermediate',
      practices: [
        'Conduct user research before designing',
        'Create user personas and journey maps',
        'Test prototypes with real users',
        'Iterate based on user feedback',
        'Validate assumptions with data'
      ],
      benefits: [
        'Higher user satisfaction',
        'Reduced development costs',
        'Better product-market fit',
        'Data-driven design decisions'
      ]
    },
    {
      id: 'performance-optimization',
      title: 'Performance-Optimized Design',
      category: 'performance',
      description: 'Design with performance in mind to create fast, responsive user experiences',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      importance: 'High',
      difficulty: 'Intermediate',
      practices: [
        'Optimize images for web (WebP, proper sizing)',
        'Minimize the number of web fonts',
        'Use CSS animations over JavaScript when possible',
        'Implement lazy loading for images and content',
        'Design with progressive loading in mind'
      ],
      benefits: [
        'Faster page load times',
        'Better user engagement',
        'Improved SEO rankings',
        'Reduced bounce rates'
      ]
    },
    {
      id: 'content-first-design',
      title: 'Content-First Design Strategy',
      category: 'content',
      description: 'Design around actual content rather than placeholder text and images',
      image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg',
      importance: 'High',
      difficulty: 'Beginner',
      practices: [
        'Use real content during the design process',
        'Design flexible layouts that adapt to content',
        'Consider content hierarchy and information architecture',
        'Plan for content variations and edge cases',
        'Collaborate closely with content creators'
      ],
      benefits: [
        'More realistic design outcomes',
        'Better content presentation',
        'Reduced design revisions',
        'Improved user comprehension'
      ]
    },
    {
      id: 'iterative-design',
      title: 'Iterative Design and Testing',
      category: 'process',
      description: 'Continuously improve designs through regular testing and iteration cycles',
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg',
      importance: 'High',
      difficulty: 'Intermediate',
      practices: [
        'Create low-fidelity prototypes early',
        'Test frequently with small user groups',
        'Document and analyze user feedback',
        'Make incremental improvements',
        'Measure success with clear metrics'
      ],
      benefits: [
        'Reduced risk of major design failures',
        'Continuous improvement',
        'Better user satisfaction',
        'Data-driven design decisions'
      ]
    },
    {
      id: 'cross-platform-consistency',
      title: 'Cross-Platform Design Consistency',
      category: 'platforms',
      description: 'Maintain brand and usability consistency across different platforms and devices',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      importance: 'High',
      difficulty: 'Advanced',
      practices: [
        'Adapt to platform-specific conventions',
        'Maintain core brand elements across platforms',
        'Consider platform-specific interaction patterns',
        'Test on multiple devices and operating systems',
        'Create platform-specific style guides'
      ],
      benefits: [
        'Cohesive brand experience',
        'Reduced user confusion',
        'Better platform adoption',
        'Streamlined development process'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Practices' },
    { id: 'responsive', name: 'Responsive Design' },
    { id: 'accessibility', name: 'Accessibility' },
    { id: 'systems', name: 'Design Systems' },
    { id: 'process', name: 'Design Process' },
    { id: 'performance', name: 'Performance' },
    { id: 'content', name: 'Content Strategy' },
    { id: 'platforms', name: 'Cross-Platform' }
  ];

  const filteredPractices = filterCategory === 'all' 
    ? practices 
    : practices.filter(practice => practice.category === filterCategory);

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Critical': return 'bg-red-600';
      case 'High': return 'bg-orange-600';
      case 'Medium': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Best Practices
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Industry-proven best practices for creating exceptional user interfaces. 
            Learn from established patterns and methodologies that lead to successful designs.
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
            {filteredPractices.length} best practices
          </span>
        </div>

        {/* Best Practices List */}
        <div className="space-y-8 mb-12">
          {filteredPractices.map((practice) => (
            <div
              key={practice.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-colors"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={practice.image} 
                    alt={practice.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`text-xs px-2 py-1 rounded text-white ${getImportanceColor(practice.importance)}`}>
                      {practice.importance}
                    </span>
                    <span className={`text-xs font-medium ${getDifficultyColor(practice.difficulty)}`}>
                      {practice.difficulty}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white capitalize">
                      {practice.category}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-semibold text-xl mb-3">{practice.title}</h3>
                  <p className="text-gray-400 mb-6">{practice.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <CheckCircle size={16} className="mr-2 text-green-400" />
                        Key Practices
                      </h4>
                      <ul className="space-y-2">
                        {practice.practices.map((item, index) => (
                          <li key={index} className="text-gray-400 text-sm flex items-start">
                            <span className="text-green-400 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <Star size={16} className="mr-2 text-yellow-400" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {practice.benefits.map((benefit, index) => (
                          <li key={index} className="text-gray-400 text-sm flex items-start">
                            <span className="text-yellow-400 mr-2 mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Categories Overview */}
        <div className="bg-gray-800/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Practice Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <BookOpen className="mx-auto mb-3 text-blue-400" size={32} />
              <h3 className="text-white font-semibold mb-2">Design Process</h3>
              <p className="text-gray-400 text-sm">Methodologies for effective design workflows</p>
            </div>
            
            <div className="text-center p-4">
              <CheckCircle className="mx-auto mb-3 text-green-400" size={32} />
              <h3 className="text-white font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-400 text-sm">Ensuring high-quality design outcomes</p>
            </div>
            
            <div className="text-center p-4">
              <Star className="mx-auto mb-3 text-yellow-400" size={32} />
              <h3 className="text-white font-semibold mb-2">User Experience</h3>
              <p className="text-gray-400 text-sm">Creating exceptional user experiences</p>
            </div>
            
            <div className="text-center p-4">
              <Filter className="mx-auto mb-3 text-purple-400" size={32} />
              <h3 className="text-white font-semibold mb-2">Technical Excellence</h3>
              <p className="text-gray-400 text-sm">Performance and accessibility standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPracticesPage;