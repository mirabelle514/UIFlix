import React, { useState } from 'react';
import { ExternalLink, Star, Download, Filter } from 'lucide-react';

interface DesignToolsPageProps {
  onNavigate: (path: string) => void;
}

const DesignToolsPage: React.FC<DesignToolsPageProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const tools = [
    {
      id: 'figma',
      name: 'Figma',
      category: 'design',
      description: 'Collaborative interface design tool with real-time collaboration',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      price: 'Free/Paid',
      url: 'https://figma.com',
      features: ['Real-time collaboration', 'Prototyping', 'Design systems', 'Developer handoff'],
      detailedDescription: 'Figma revolutionized design collaboration by moving design tools to the browser. It offers vector-based design capabilities, real-time multiplayer editing, and comprehensive prototyping features. Teams can work simultaneously on designs, leave comments, and maintain design systems with shared components and styles.'
    },
    {
      id: 'sketch',
      name: 'Sketch',
      category: 'design',
      description: 'Vector-based design tool for Mac with extensive plugin ecosystem',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      price: 'Paid',
      url: 'https://sketch.com',
      features: ['Vector editing', 'Symbols', 'Plugins', 'Prototyping'],
      detailedDescription: 'Sketch pioneered modern UI design tools with its vector-based approach and symbol system. It offers powerful design capabilities specifically tailored for digital interfaces, with an extensive plugin ecosystem that extends functionality for everything from content generation to design system management.'
    },
    {
      id: 'adobe-xd',
      name: 'Adobe XD',
      category: 'design',
      description: 'All-in-one UX/UI solution for designing websites, mobile apps, and more',
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      price: 'Free/Paid',
      url: 'https://adobe.com/products/xd.html',
      features: ['Prototyping', 'Voice prototyping', 'Auto-animate', 'Coediting']
    },
    {
      id: 'framer',
      name: 'Framer',
      category: 'prototyping',
      description: 'Interactive prototyping tool with advanced animations',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      price: 'Free/Paid',
      url: 'https://framer.com',
      features: ['Advanced animations', 'Interactive components', 'Code components', 'Team collaboration']
    },
    {
      id: 'principle',
      name: 'Principle',
      category: 'prototyping',
      description: 'Timeline-based animation and interaction design tool',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      price: 'Paid',
      url: 'https://principleformac.com',
      features: ['Timeline animations', 'Interactive design', 'Easy learning curve', 'Export options']
    },
    {
      id: 'invision',
      name: 'InVision',
      category: 'prototyping',
      description: 'Digital product design platform with prototyping and collaboration',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      price: 'Free/Paid',
      url: 'https://invisionapp.com',
      features: ['Clickable prototypes', 'Design collaboration', 'User testing', 'Design system manager']
    },
    {
      id: 'zeplin',
      name: 'Zeplin',
      category: 'handoff',
      description: 'Design handoff tool that generates code snippets and specs',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      price: 'Free/Paid',
      url: 'https://zeplin.io',
      features: ['Code generation', 'Design specs', 'Asset export', 'Team collaboration']
    },
    {
      id: 'abstract',
      name: 'Abstract',
      category: 'collaboration',
      description: 'Version control and collaboration platform for design teams',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.2,
      price: 'Paid',
      url: 'https://abstract.com',
      features: ['Version control', 'Design reviews', 'Branch management', 'Team libraries']
    },
    {
      id: 'maze',
      name: 'Maze',
      category: 'testing',
      description: 'User testing platform for validating designs and prototypes',
      image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      price: 'Free/Paid',
      url: 'https://maze.co',
      features: ['Usability testing', 'Prototype testing', 'Analytics', 'User insights']
    },
    {
      id: 'hotjar',
      name: 'Hotjar',
      category: 'testing',
      description: 'Behavior analytics and user feedback tool',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      price: 'Free/Paid',
      url: 'https://hotjar.com',
      features: ['Heatmaps', 'Session recordings', 'Surveys', 'User feedback']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'design', name: 'Design' },
    { id: 'prototyping', name: 'Prototyping' },
    { id: 'handoff', name: 'Developer Handoff' },
    { id: 'collaboration', name: 'Collaboration' },
    { id: 'testing', name: 'User Testing' }
  ];

  const filteredTools = filterCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === filterCategory);

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Design Tools
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Discover the best tools for UI/UX design, prototyping, collaboration, and user testing. 
            Each tool is carefully selected and reviewed by design professionals.
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
            {filteredTools.length} tools
          </span>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <img 
                src={tool.image} 
                alt={tool.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold text-lg">{tool.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                    <span className="text-gray-300 text-sm">{tool.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{tool.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white capitalize">
                    {tool.category}
                  </span>
                  <span className="text-gray-300 text-sm">{tool.price}</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {tool.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                        {feature}
                      </span>
                    ))}
                    {tool.features.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                        +{tool.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-[#E50914] hover:bg-red-700 text-white py-2 rounded transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Tool</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tool Categories Overview */}
        <div className="bg-gray-800/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Tool Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Design Tools</h3>
              <p className="text-gray-400 text-sm">
                Create beautiful interfaces with vector-based design tools that support modern workflows.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Prototyping</h3>
              <p className="text-gray-400 text-sm">
                Build interactive prototypes to test and validate your design concepts before development.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Developer Handoff</h3>
              <p className="text-gray-400 text-sm">
                Bridge the gap between design and development with tools that generate code and specs.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-400 text-sm">
                Work seamlessly with your team using version control and real-time collaboration features.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">User Testing</h3>
              <p className="text-gray-400 text-sm">
                Validate your designs with real users through usability testing and behavior analytics.
              </p>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Design Systems</h3>
              <p className="text-gray-400 text-sm">
                Build and maintain consistent design languages across your products and teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignToolsPage;