import React from 'react';
import { FileText, Shield, AlertTriangle, Users } from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (path: string) => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header - Clean Design */}
        <div className="text-center mb-12 py-16 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These terms govern your use of UIFlix and outline the rights and responsibilities 
            of both users and our platform.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <FileText className="mx-auto mb-3 text-blue-400" size={32} />
            <h3 className="text-white font-semibold mb-2">Educational Use</h3>
            <p className="text-gray-400 text-sm">Content is for educational purposes only</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Shield className="mx-auto mb-3 text-green-400" size={32} />
            <h3 className="text-white font-semibold mb-2">Intellectual Property</h3>
            <p className="text-gray-400 text-sm">Respect for content creators and sources</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <AlertTriangle className="mx-auto mb-3 text-yellow-400" size={32} />
            <h3 className="text-white font-semibold mb-2">Acceptable Use</h3>
            <p className="text-gray-400 text-sm">Guidelines for appropriate platform usage</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Users className="mx-auto mb-3 text-purple-400" size={32} />
            <h3 className="text-white font-semibold mb-2">Community</h3>
            <p className="text-gray-400 text-sm">Respectful interaction with other users</p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/30 rounded-lg p-8 space-y-8">
            
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              
              <p className="text-gray-300 mb-4">
                By accessing and using UIFlix, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300">
                  <strong>Important:</strong> These terms constitute a legally binding agreement 
                  between you and UIFlix. Please read them carefully.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              
              <p className="text-gray-300 mb-4">
                UIFlix is an educational platform that provides UI/UX design principles, tutorials, 
                and resources. Our service includes:
              </p>
              
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Access to educational content about UI design principles</li>
                <li>Interactive learning tools and progress tracking</li>
                <li>Design templates, case studies, and best practices</li>
                <li>Community features for learning and discussion</li>
                <li>Tools and resource recommendations</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Account Creation</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining account security</li>
                    <li>You must be at least 13 years old to create an account</li>
                    <li>One person may not maintain multiple accounts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Account Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Keep your login credentials secure and confidential</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>You are responsible for all activities under your account</li>
                    <li>Provide accurate contact information for important updates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use Policy</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Permitted Uses</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Personal and educational use of content and resources</li>
                    <li>Sharing knowledge and insights with the community</li>
                    <li>Using templates and resources for your own projects</li>
                    <li>Providing constructive feedback and suggestions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Prohibited Activities</h3>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                    <p className="text-red-300 font-semibold mb-2">The following activities are strictly prohibited:</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Redistributing or reselling UIFlix content without permission</li>
                    <li>Using automated tools to scrape or download content</li>
                    <li>Attempting to reverse engineer or hack the platform</li>
                    <li>Uploading malicious code, viruses, or harmful content</li>
                    <li>Harassing, threatening, or abusing other users</li>
                    <li>Impersonating others or providing false information</li>
                    <li>Using the service for illegal or unauthorized purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">UIFlix Content</h3>
                  <p className="text-gray-300 mb-2">
                    All content on UIFlix, including but not limited to text, graphics, logos, 
                    images, and software, is the property of UIFlix or its content suppliers 
                    and is protected by copyright and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">User-Generated Content</h3>
                  <p className="text-gray-300 mb-2">
                    By submitting content to UIFlix (comments, feedback, suggestions), you grant 
                    us a non-exclusive, royalty-free license to use, modify, and display such 
                    content in connection with our service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Third-Party Content</h3>
                  <p className="text-gray-300 mb-2">
                    We respect the intellectual property rights of others. All third-party content 
                    is properly attributed and used in accordance with fair use principles for 
                    educational purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy and Data */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Privacy and Data Protection</h2>
              
              <p className="text-gray-300 mb-4">
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these terms by reference.
              </p>
              
              <button
                onClick={() => onNavigate('/privacy-policy')}
                className="text-[#E50914] hover:text-red-400 underline transition-colors"
              >
                Read our Privacy Policy →
              </button>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Service Availability</h2>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  We strive to provide reliable access to UIFlix, but we cannot guarantee 
                  uninterrupted service. We may:
                </p>
                
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>Temporarily suspend service for maintenance or updates</li>
                  <li>Modify or discontinue features with reasonable notice</li>
                  <li>Limit access during periods of high demand</li>
                  <li>Update content and resources as needed</li>
                </ul>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimers and Limitations</h2>
              
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <p className="text-yellow-300 font-semibold">
                  Important Legal Information
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Educational Purpose</h3>
                  <p className="text-gray-400">
                    UIFlix content is for educational purposes only. While we strive for accuracy, 
                    we make no warranties about the completeness or reliability of the information provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">No Professional Advice</h3>
                  <p className="text-gray-400">
                    Content on UIFlix does not constitute professional design advice. Users should 
                    exercise their own judgment and seek professional consultation when needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Limitation of Liability</h3>
                  <p className="text-gray-400">
                    UIFlix shall not be liable for any indirect, incidental, special, or consequential 
                    damages arising from your use of the service.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">By You</h3>
                  <p className="text-gray-400">
                    You may terminate your account at any time by contacting us or using 
                    the account deletion feature in your profile settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">By UIFlix</h3>
                  <p className="text-gray-400 mb-2">
                    We may terminate or suspend your account if you:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Violate these terms of service</li>
                    <li>Engage in prohibited activities</li>
                    <li>Provide false or misleading information</li>
                    <li>Remain inactive for an extended period</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
              
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users 
                of material changes via email or platform notification. Continued use of UIFlix 
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              
              <p className="text-gray-300">
                These terms shall be governed by and construed in accordance with the laws 
                of the State of California, United States, without regard to its conflict 
                of law provisions.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@uiflix.com<br />
                  <strong>Address:</strong> 123 Design Street, San Francisco, CA 94102<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-white font-semibold mb-4">Questions About These Terms?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/contact')}
                className="bg-[#E50914] hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
              >
                Contact Legal Team
              </button>
              <button
                onClick={() => onNavigate('/privacy-policy')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded transition-colors"
              >
                View Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;