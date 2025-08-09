import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Lead UX Designer',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      bio: '8+ years in product design with expertise in user research and design systems'
    },
    {
      name: 'Michael Rodriguez',
      role: 'UI Design Specialist',
      image: 'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg',
      bio: 'Visual design expert with a passion for creating beautiful, functional interfaces'
    },
    {
      name: 'Emily Johnson',
      role: 'Design Educator',
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg',
      bio: 'Former design professor with 10+ years of experience teaching design principles'
    },
    {
      name: 'Alex Thompson',
      role: 'Design Systems Architect',
      image: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg',
      bio: 'Specializes in scalable design systems and cross-platform consistency'
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About DevUX
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're on a mission to bridge the gap between development and user experience. 
            DevUX combines Netflix's intuitive user experience with comprehensive UX education 
            to create the ultimate learning platform for developers who want to build better user interfaces.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 rounded-lg p-8">
            <Target className="text-[#E50914] mb-4" size={48} />
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To empower developers with essential UX knowledge by providing high-quality, accessible learning 
              resources that bridge the gap between code and user experience. We believe that every developer 
              should understand the principles that make interfaces intuitive and user-friendly.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8">
            <Heart className="text-[#E50914] mb-4" size={48} />
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become the world's leading platform for UX education for developers, where every engineer 
              can find the resources they need to create exceptional user experiences. We envision 
              a future where great UX is built into every application from the ground up.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">UX Principles</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Developer Learners</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">26</div>
            <div className="text-gray-400">Categories</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Makes DevUX Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E50914] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Developer-Focused Content</h3>
              <p className="text-gray-400">
                Content specifically tailored for developers who need to understand UX principles 
                without becoming full-time designers. Practical, code-focused examples.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E50914] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Implementation-Ready</h3>
              <p className="text-gray-400">
                Every principle comes with practical implementation guidelines, code examples, 
                and technical considerations for real-world development scenarios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E50914] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Integration</h3>
              <p className="text-gray-400">
                Learn how UX principles integrate with modern development frameworks, 
                accessibility standards, and performance considerations.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#E50914] text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gray-800/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              UIFlix was born from a simple observation: design education was often dry, fragmented, 
              and difficult to navigate. As designers ourselves, we experienced the frustration of 
              jumping between different resources, trying to piece together a comprehensive understanding 
              of UI design principles.
            </p>
            
            <p className="text-gray-300 mb-4">
              We asked ourselves: "What if learning design could be as engaging as binge-watching 
              your favorite Netflix series?" This question led us to create UIFlix – a platform that 
              combines the addictive user experience of streaming services with the depth and rigor 
              of professional design education.
            </p>
            
            <p className="text-gray-300 mb-4">
              Every aspect of UIFlix is designed with the learner in mind. From our Netflix-inspired 
              interface to our carefully curated content, we've created an environment where learning 
              feels natural, engaging, and rewarding. Our goal isn't just to teach design principles – 
              it's to inspire a love for great design that lasts a lifetime.
            </p>
            
            <p className="text-gray-300">
              Today, UIFlix serves thousands of designers worldwide, from beginners taking their first 
              steps into UI design to seasoned professionals looking to refine their skills. We're 
              proud to be part of their journey and excited to be part of yours.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-400 mb-6">
            Join thousands of designers who have improved their skills with UIFlix
          </p>
          <button
            onClick={() => onNavigate('/learn')}
            className="bg-[#E50914] hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition-colors"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;