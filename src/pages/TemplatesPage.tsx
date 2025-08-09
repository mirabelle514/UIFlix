import React, { useState } from 'react';
import { Download, Eye, Filter, Star } from 'lucide-react';

interface TemplatesPageProps {
  onNavigate: (path: string) => void;
}

const TemplatesPage: React.FC<TemplatesPageProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const templates = [
    {
      id: 'dashboard-admin',
      name: 'Admin Dashboard',
      category: 'dashboard',
      description: 'Clean and modern admin dashboard with data visualization components',
      image: 'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloads: 2500,
      rating: 4.8,
      format: 'Figma',
      tags: ['Dashboard', 'Admin', 'Charts', 'Tables'],
      detailedDescription: 'A comprehensive admin dashboard template featuring modern data visualization components, responsive grid layouts, and intuitive navigation patterns. Includes pre-built components for analytics, user management, and system monitoring.'
    },
    {
      id: 'ecommerce-mobile',
      name: 'E-commerce Mobile App',
      category: 'mobile',
      description: 'Complete mobile app design for e-commerce with shopping cart and checkout',
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloads: 3200,
      rating: 4.9,
      format: 'Sketch',
      tags: ['Mobile', 'E-commerce', 'Shopping', 'iOS'],
      detailedDescription: 'A complete mobile e-commerce solution with product browsing, search functionality, shopping cart, secure checkout, and user account management. Optimized for iOS with native interaction patterns and accessibility features.'
    },
    {
      id: 'landing-page-saas',
      name: 'SaaS Landing Page',
      category: 'web',
      description: 'Modern landing page template for SaaS products with conversion optimization',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg',
      downloads: 1800,
      rating: 4.7,
      format: 'Figma',
      tags: ['Landing Page', 'SaaS', 'Marketing', 'Conversion']
    },
    {
      id: 'design-system',
      name: 'Complete Design System',
      category: 'system',
      description: 'Comprehensive design system with components, tokens, and documentation',
      image: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg',
      downloads: 4100,
      rating: 4.9,
      format: 'Figma',
      tags: ['Design System', 'Components', 'Tokens', 'Documentation']
    },
    {
      id: 'portfolio-website',
      name: 'Designer Portfolio',
      category: 'web',
      description: 'Elegant portfolio website template for designers and creatives',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      downloads: 2200,
      rating: 4.6,
      format: 'Adobe XD',
      tags: ['Portfolio', 'Creative', 'Personal', 'Showcase']
    },
    {
      id: 'banking-app',
      name: 'Banking Mobile App',
      category: 'mobile',
      description: 'Secure and user-friendly banking app with transaction management',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      downloads: 1900,
      rating: 4.8,
      format: 'Figma',
      tags: ['Banking', 'Finance', 'Security', 'Mobile']
    },
    {
      id: 'social-media-app',
      name: 'Social Media App',
      category: 'mobile',
      description: 'Modern social media app design with feed, stories, and messaging',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      downloads: 2800,
      rating: 4.7,
      format: 'Sketch',
      tags: ['Social Media', 'Feed', 'Stories', 'Chat']
    },
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      category: 'dashboard',
      description: 'Data-rich analytics dashboard with interactive charts and KPIs',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      downloads: 1600,
      rating: 4.5,
      format: 'Figma',
      tags: ['Analytics', 'Data Viz', 'KPIs', 'Reports']
    },
    {
      id: 'food-delivery-app',
      name: 'Food Delivery App',
      category: 'mobile',
      description: 'Complete food delivery app with restaurant listings and order tracking',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      downloads: 2400,
      rating: 4.8,
      format: 'Figma',
      tags: ['Food', 'Delivery', 'Restaurant', 'Ordering']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'system', name: 'Design System' }
  ];

  const filteredTemplates = filterCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === filterCategory);

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Design Templates
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            High-quality UI templates and design systems to jumpstart your projects. 
            All templates are professionally designed and ready to customize.
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
            {filteredTemplates.length} templates
          </span>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-xs text-white">
                  {template.format}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold text-lg">{template.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                    <span className="text-gray-300 text-sm">{template.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{template.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2 py-1 rounded bg-green-600 text-white capitalize">
                    {template.category}
                  </span>
                  <span className="text-gray-300 text-sm flex items-center space-x-1">
                    <Download size={12} />
                    <span>{template.downloads.toLocaleString()}</span>
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {template.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                        {tag}
                      </span>
                    ))}
                    {template.tags.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                        +{template.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-[#E50914] hover:bg-red-700 text-white py-2 rounded transition-colors">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                  <button className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Template Categories */}
        <div className="bg-gray-800/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Template Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Web Templates</h3>
              <p className="text-gray-400 text-sm">Landing pages, portfolios, and web applications</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-400 text-sm">iOS and Android app designs for various industries</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Dashboards</h3>
              <p className="text-gray-400 text-sm">Admin panels and data visualization interfaces</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Design Systems</h3>
              <p className="text-gray-400 text-sm">Complete component libraries and style guides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;