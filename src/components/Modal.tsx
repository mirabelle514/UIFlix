import React from 'react';
import { X, Play, Plus, ThumbsUp, ThumbsDown } from 'lucide-react';
import { UICategory, UIPrincipleDetail } from '../types';

interface ModalProps {
  item: UICategory | UIPrincipleDetail | null;
  onClose: () => void;
  onLearnMore?: (id: string) => void;
  onStartLearning?: (id: string) => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose, onLearnMore, onStartLearning }) => {
  if (!item) return null;

  const isDetailedContent = 'content' in item;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-[#181818] rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header with image */}
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-lg"
          />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#181818] hover:bg-gray-700 rounded-full p-2 transition-colors"
          >
            <X size={20} className="text-white" />
          </button>

          {/* Title and controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{item.title}</h2>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => {
                  if (isDetailedContent && onStartLearning) {
                    onStartLearning(item.id);
                  } else if (onLearnMore) {
                    onLearnMore(item.id);
                  }
                }}
                className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                <Play size={16} fill="currentColor" />
                <span>Start Learning</span>
              </button>
              
              <button className="p-2 border-2 border-gray-400 hover:border-white rounded-full transition-colors">
                <Plus size={20} className="text-white" />
              </button>
              
              <button className="p-2 border-2 border-gray-400 hover:border-white rounded-full transition-colors">
                <ThumbsUp size={20} className="text-white" />
              </button>
              
              <button className="p-2 border-2 border-gray-400 hover:border-white rounded-full transition-colors">
                <ThumbsDown size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {isDetailedContent ? item.content : item.description}
              </p>

              {isDetailedContent && (
                <>
                  {/* Key Points */}
                  {item.keyPoints && item.keyPoints.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-white text-xl font-semibold mb-3">Key Points</h3>
                      <ul className="space-y-2">
                        {item.keyPoints.map((point, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <span className="text-[#E50914] mr-2">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Examples */}
                  {item.examples && item.examples.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-white text-xl font-semibold mb-3">Practical Examples</h3>
                      <ul className="space-y-2">
                        {item.examples.map((example, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Citations */}
                  {item.citations && item.citations.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-white text-xl font-semibold mb-3">Sources</h3>
                      <div className="space-y-2">
                        {item.citations.map((citation) => (
                          <div key={citation.id} className="text-sm">
                            <span className="text-gray-400">[{citation.id}]</span>
                            <a 
                              href={citation.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 ml-2 underline"
                            >
                              {citation.text}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded">
                <h4 className="text-white font-semibold mb-2">Category</h4>
                <p className="text-gray-300 text-sm capitalize">
                  {isDetailedContent ? item.category : 'UI Design Principles'}
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded">
                <h4 className="text-white font-semibold mb-2">Difficulty</h4>
                <p className="text-gray-300 text-sm">Beginner</p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded">
                <h4 className="text-white font-semibold mb-2">Read Time</h4>
                <p className="text-gray-300 text-sm">5-10 minutes</p>
              </div>

              {onLearnMore && !isDetailedContent && (
                <button
                  onClick={() => onLearnMore(item.id)}
                  className="w-full bg-[#E50914] hover:bg-red-700 text-white py-2 rounded transition-colors"
                >
                  Learn More Details
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;