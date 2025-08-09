import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header - Clean Design */}
        <div className="text-center mb-12 py-16 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about UIFlix? Want to suggest new content or report an issue? 
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="content">Content Suggestion</option>
                  <option value="technical">Technical Issue</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E50914] hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-gray-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-[#E50914] mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">hello@uiflix.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageSquare className="text-[#E50914] mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Live Chat</h3>
                    <p className="text-gray-400">Available 9 AM - 6 PM PST</p>
                    <p className="text-gray-500 text-sm">Monday through Friday</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-[#E50914] mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">For urgent technical issues</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#E50914] mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office</h3>
                    <p className="text-gray-400">
                      123 Design Street<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-gray-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Help</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">Frequently Asked Questions</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• How do I track my learning progress?</li>
                    <li>• Can I download content for offline viewing?</li>
                    <li>• How often is new content added?</li>
                    <li>• Is UIFlix suitable for beginners?</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => onNavigate('/category/whitespace')}
                      className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                    >
                      White Space
                    </button>
                    <button
                      onClick={() => onNavigate('/category/typography')}
                      className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                    >
                      Typography
                    </button>
                    <button
                      onClick={() => onNavigate('/category/accessibility')}
                      className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                    >
                      Accessibility
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-[#E50914]/20 to-red-800/20 border border-[#E50914]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Response Times</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">General Inquiries:</span>
                  <span className="text-gray-400">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Technical Issues:</span>
                  <span className="text-gray-400">4-8 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Content Suggestions:</span>
                  <span className="text-gray-400">48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;