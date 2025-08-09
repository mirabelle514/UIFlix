import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#141414] pt-20">
      <div className="px-4 md:px-16 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information when you use UIFlix.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Privacy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Shield className="mx-auto mb-3 text-green-400" size={32} />
            <h3 className="text-white font-semibold mb-2">Data Protection</h3>
            <p className="text-gray-400 text-sm">We use industry-standard encryption to protect your data</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Eye className="mx-auto mb-3 text-blue-400" size={32} />
            <h3 className="text-white font-semibold mb-2">Transparency</h3>
            <p className="text-gray-400 text-sm">Clear information about what data we collect and why</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Lock className="mx-auto mb-3 text-purple-400" size={32} />
            <h3 className="text-white font-semibold mb-2">Your Control</h3>
            <p className="text-gray-400 text-sm">You can access, update, or delete your data anytime</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <Users className="mx-auto mb-3 text-orange-400" size={32} />
            <h3 className="text-white font-semibold mb-2">No Selling</h3>
            <p className="text-gray-400 text-sm">We never sell your personal information to third parties</p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/30 rounded-lg p-8 space-y-8">
            
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Account Information</h3>
                  <p className="text-gray-300 mb-2">When you create an account, we collect:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Name and email address</li>
                    <li>Profile information you choose to provide</li>
                    <li>Learning preferences and goals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Usage Information</h3>
                  <p className="text-gray-300 mb-2">We automatically collect information about how you use UIFlix:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Pages visited and time spent on each page</li>
                    <li>Learning progress and completed principles</li>
                    <li>Search queries and interaction patterns</li>
                    <li>Device information and browser type</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Information</h3>
                  <p className="text-gray-300 mb-2">We collect technical data to improve our service:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>IP address and location data</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Error logs and performance metrics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Service Provision</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Provide access to educational content and features</li>
                    <li>Track your learning progress and achievements</li>
                    <li>Personalize content recommendations</li>
                    <li>Enable social features like favorites and goals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Communication</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Send important service updates and notifications</li>
                    <li>Respond to your questions and support requests</li>
                    <li>Send educational content and tips (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Improvement and Analytics</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Analyze usage patterns to improve our platform</li>
                    <li>Conduct research to enhance educational effectiveness</li>
                    <li>Debug technical issues and optimize performance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
                <p className="text-green-300 font-semibold">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>

              <p className="text-gray-300 mb-4">We may share your information only in these limited circumstances:</p>
              
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong className="text-white">Service Providers:</strong> With trusted partners who help us operate UIFlix (hosting, analytics, customer support)</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and users' safety</li>
                <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                <li><strong className="text-white">With Your Consent:</strong> When you explicitly agree to share information</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              
              <p className="text-gray-300 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure data centers with physical and digital protections</li>
                <li>Employee training on data protection best practices</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights and Choices</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Access and Control</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Access and download your personal data</li>
                    <li>Update or correct your account information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cookie Preferences</h3>
                  <p className="text-gray-400">
                    You can control cookie settings through your browser preferences. Note that disabling 
                    certain cookies may affect the functionality of UIFlix.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Portability</h3>
                  <p className="text-gray-400">
                    You can request a copy of your data in a machine-readable format to transfer 
                    to another service.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              
              <p className="text-gray-300 mb-4">
                We retain your personal information only as long as necessary to provide our services 
                and fulfill the purposes outlined in this policy:
              </p>
              
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Account data: Until you delete your account</li>
                <li>Learning progress: Until you delete your account or request removal</li>
                <li>Usage analytics: Aggregated data may be retained indefinitely</li>
                <li>Support communications: Up to 3 years for quality assurance</li>
              </ul>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. International Data Transfers</h2>
              
              <p className="text-gray-300">
                UIFlix operates globally, and your information may be transferred to and processed 
                in countries other than your own. We ensure appropriate safeguards are in place 
                to protect your data in accordance with this privacy policy and applicable laws.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              
              <p className="text-gray-300">
                UIFlix is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If we become aware that we 
                have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
              
              <p className="text-gray-300">
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last updated" 
                date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              
              <p className="text-gray-300 mb-4">
                If you have any questions about this privacy policy or our data practices, 
                please contact us:
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@uiflix.com<br />
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
            <h3 className="text-white font-semibold mb-4">Need Help with Your Privacy?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/contact')}
                className="bg-[#E50914] hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
              >
                Contact Privacy Team
              </button>
              <button
                onClick={() => onNavigate('/profile')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded transition-colors"
              >
                Manage Your Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;