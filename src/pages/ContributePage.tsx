import React, { useState } from 'react';
import { Plus, Image as ImageIcon, X, Save, Eye } from 'lucide-react';

interface PrincipleForm {
  title: string;
  category: string;
  description: string;
  content: string;
  image: string;
  examples: string[];
  keyPoints: string[];
  citations: Array<{ text: string; url: string }>;
}

const ContributePage: React.FC = () => {
  const [formData, setFormData] = useState<PrincipleForm>({
    title: '',
    category: '',
    description: '',
    content: '',
    image: '',
    examples: [''],
    keyPoints: [''],
    citations: [{ text: '', url: '' }]
  });

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Accessibility',
    'Visual Design',
    'User Experience',
    'Information Architecture',
    'Interaction Design',
    'Performance',
    'Mobile Design',
    'Responsive Design',
    'Typography',
    'Color Theory'
  ];

  const handleInputChange = (field: keyof PrincipleForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: 'examples' | 'keyPoints', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const handleCitationChange = (index: number, field: 'text' | 'url', value: string) => {
    setFormData(prev => ({
      ...prev,
      citations: prev.citations.map((citation, i) => 
        i === index ? { ...citation, [field]: value } : citation
      )
    }));
  };

  const addArrayItem = (field: 'examples' | 'keyPoints') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'examples' | 'keyPoints', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const addCitation = () => {
    setFormData(prev => ({
      ...prev,
      citations: [...prev.citations, { text: '', url: '' }]
    }));
  };

  const removeCitation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      citations: prev.citations.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, this would send data to your backend
    console.log('Submitting principle:', formData);
    
    setIsSubmitting(false);
    // Show success message and reset form
    alert('Thank you for your contribution! Your UI principle has been submitted for review.');
    setFormData({
      title: '',
      category: '',
      description: '',
      content: '',
      image: '',
      examples: [''],
      keyPoints: [''],
      citations: [{ text: '', url: '' }]
    });
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Basic Information</h3>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Principle Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
              placeholder="e.g., Progressive Disclosure"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Category *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Brief Description *
          </label>
          <textarea
            required
            rows={3}
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
            placeholder="A concise description of this UI principle..."
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Image URL
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="url"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
              placeholder="https://example.com/image.jpg"
            />
            <ImageIcon size={20} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Detailed Content */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Detailed Content</h3>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Full Content *
          </label>
          <textarea
            required
            rows={8}
            value={formData.content}
            onChange={(e) => handleInputChange('content', e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
            placeholder="Provide a comprehensive explanation of this UI principle, including why it's important and how to implement it..."
          />
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Examples</h3>
          <button
            type="button"
            onClick={() => addArrayItem('examples')}
            className="flex items-center space-x-2 bg-[#E50914] hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={16} />
            <span>Add Example</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {formData.examples.map((example, index) => (
            <div key={index} className="flex items-center space-x-3">
              <input
                type="text"
                value={example}
                onChange={(e) => handleArrayChange('examples', index, e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
                placeholder="e.g., Using collapsible sections for complex forms"
              />
              {formData.examples.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('examples', index)}
                  className="text-red-400 transition-colors hover:text-red-300"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Key Points</h3>
          <button
            type="button"
            onClick={() => addArrayItem('keyPoints')}
            className="flex items-center space-x-2 bg-[#E50914] hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={16} />
            <span>Add Key Point</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {formData.keyPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-3">
              <input
                type="text"
                value={point}
                onChange={(e) => handleArrayChange('keyPoints', index, e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
                placeholder="e.g., Always provide clear visual feedback"
              />
              {formData.keyPoints.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('keyPoints', index)}
                  className="text-red-400 transition-colors hover:text-red-300"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Citations */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Citations & Sources</h3>
          <button
            type="button"
            onClick={addCitation}
            className="flex items-center space-x-2 bg-[#E50914] hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={16} />
            <span>Add Citation</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {formData.citations.map((citation, index) => (
            <div key={index} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                value={citation.text}
                onChange={(e) => handleCitationChange(index, 'text', e.target.value)}
                className="bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
                placeholder="Citation text or author name"
              />
              <div className="flex items-center space-x-3">
                <input
                  type="url"
                  value={citation.url}
                  onChange={(e) => handleCitationChange(index, 'url', e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
                  placeholder="https://example.com/source"
                />
                {formData.citations.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCitation(index)}
                    className="text-red-400 transition-colors hover:text-red-300"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6 border-t border-gray-700">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#E50914] hover:bg-red-700 disabled:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 rounded-full border-b-2 border-white animate-spin"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Save size={20} />
              <span>Submit Principle</span>
            </>
          )}
        </button>
      </div>
    </form>
  );

  const renderPreview = () => (
    <div className="space-y-8">
      <div className="p-6 bg-gray-800 rounded-lg">
        <h2 className="mb-4 text-2xl font-bold text-white">{formData.title || 'Principle Title'}</h2>
        <p className="mb-4 text-gray-300">{formData.description || 'Description will appear here...'}</p>
        
        {formData.image && (
          <div className="mb-6">
            <img 
              src={formData.image} 
              alt={formData.title}
              className="object-cover w-full h-48 rounded-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="max-w-none prose prose-invert">
          <div className="text-gray-300 whitespace-pre-wrap">
            {formData.content || 'Content will appear here...'}
          </div>
        </div>

        {formData.examples.length > 0 && formData.examples[0] && (
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Examples</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              {formData.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>
        )}

        {formData.keyPoints.length > 0 && formData.keyPoints[0] && (
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Key Points</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              {formData.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {formData.citations.length > 0 && formData.citations[0].text && (
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Sources</h3>
            <div className="space-y-2">
              {formData.citations.map((citation, index) => (
                <div key={index} className="text-gray-300">
                  <p>{citation.text}</p>
                  {citation.url && (
                    <a 
                      href={citation.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#E50914] hover:underline"
                    >
                      {citation.url}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#141414] pt-24 pb-16">
      <div className="px-4 mx-auto max-w-4xl md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Contribute to UI Principles
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Share your knowledge and help the developer community learn better UI design practices. 
            Your contributions will be reviewed and may be featured on our platform.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex p-1 bg-gray-800 rounded-lg">
            <button
              onClick={() => setIsPreviewMode(false)}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                !isPreviewMode 
                  ? 'bg-[#E50914] text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Edit Form
            </button>
            <button
              onClick={() => setIsPreviewMode(true)}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                isPreviewMode 
                  ? 'bg-[#E50914] text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Eye size={16} className="inline mr-2" />
              Preview
            </button>
          </div>
        </div>

        {/* Form or Preview */}
        {isPreviewMode ? renderPreview() : renderForm()}

        {/* Guidelines */}
        {!isPreviewMode && (
          <div className="p-6 mt-12 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="mb-4 text-lg font-semibold text-white">Submission Guidelines</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Ensure your principle is well-researched and practical</li>
              <li>• Provide clear, actionable examples</li>
              <li>• Include relevant citations and sources</li>
              <li>• Focus on principles that developers can implement</li>
              <li>• All submissions are reviewed before publication</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContributePage;
