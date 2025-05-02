import React from 'react'
import { X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export default function PrivacyPolicySheet({ isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" aria-hidden="true" />
      
      <motion.div 
        className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-3xl max-h-[85vh] overflow-y-auto shadow-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 500 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-10">
          <h2 className="text-xl font-bold">Privacy Policy</h2>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={onClose}
            aria-label="Close privacy policy"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
              Effective Date: April 30, 2025
            </p>
          </div>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">1. Introduction</h3>
            <p>
              Welcome to <strong>AdPulse</strong>, an iOS app created by Kanto Projects that lets AdSense publishers view and analyze their earnings on the go. We respect your privacy and are committed to protecting any information we collect. This policy explains what data we gather, how we use it, and the choices you have.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">2. Data We Collect</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">What</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Where It Lives</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Why We Need It</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800 text-sm">
                  <tr>
                    <td className="px-4 py-3 font-medium">Account Info</td>
                    <td className="px-4 py-3">Google-sign-in email, name, profile photo</td>
                    <td className="px-4 py-3">Securely stored in Apple Keychain on your device</td>
                    <td className="px-4 py-3">To log you in and match your subscription status</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">AdSense Data</td>
                    <td className="px-4 py-3">Earnings, impressions, clicks, RPM, CTR, alert messages</td>
                    <td className="px-4 py-3">Pulled on-demand from the Google AdSense API; cached locally (encrypted)</td>
                    <td className="px-4 py-3">To populate dashboards, charts, and insights</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-4">
              We <strong>do not</strong> collect passwords, bank details, or raw ad creatives, and we <strong>never</strong> store your AdSense access tokens on our servers.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">3. How We Use Your Data</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Provide core features</strong> such as real-time dashboards, trends, and pulse breakdowns.</li>
              <li><strong>Generate insights</strong> about sudden RPM drops or policy alerts.</li>
            </ul>
            <p className="mt-2 italic">
              Your information is <em>never</em> sold, rented, or used for cross-app advertising.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">4. Data Sharing</h3>
            <p>We share data only with these third parties—strictly to deliver the service:</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Purpose</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Shared Data</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800 text-sm">
                  <tr>
                    <td className="px-4 py-3 font-medium">Google Sign-In & AdSense API</td>
                    <td className="px-4 py-3">Authentication & reporting</td>
                    <td className="px-4 py-3">OAuth token, AdSense metrics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Apple</td>
                    <td className="px-4 py-3">Crash & analytics (opt-in)</td>
                    <td className="px-4 py-3">Anonymous diagnostics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-2">
              No other third-party SDKs, trackers, or ad networks are embedded in AdPulse.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">5. Storage & Security</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>OAuth tokens and email are encrypted in the iOS Keychain.</li>
              <li>All network calls use HTTPS/TLS 1.2+.</li>
              <li>Offline caches are stored using Apple's file-protection class <strong className="font-mono">NSFileProtectionComplete</strong>.</li>
              <li>Optional Face ID/Touch ID lock adds another layer on supported devices.</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">6. Your Choices</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Disconnect Google</strong> inside Settings → Sign Out (tokens deleted immediately).</li>
              <li><strong>Delete local data</strong> by uninstalling the app.</li>
              <li><strong>Revoke API access</strong> anytime in your Google Account → Security → Third-party apps.</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">7. Children's Privacy</h3>
            <p>
              AdPulse is intended for users <strong>13 years and older</strong>. We do not knowingly collect information from children under 13. If you believe a child has provided us personal data, contact us and we'll promptly delete it.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">8. International Transfers</h3>
            <p>
              All data stays on your device. If you use AdPulse outside the United States, Google's servers may process your API requests in other regions subject to Google's own privacy policy.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">9. Changes to This Policy</h3>
            <p>
              We may update this page to reflect new features or legal requirements. Material changes will be highlighted in-app and take effect <strong>7 days</strong> after posting.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">10. Contact Us</h3>
            <p>
              Questions? Need your data wiped? Hit us up:<br />
              <strong>Email:</strong> <a href="mailto:apps@kantoprojects.com" className="text-blue-500 hover:underline">apps@kantoprojects.com</a>
            </p>
          </section>
          
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 text-center">
            © 2024 Kanto Projects. All rights reserved.
          </div>
        </div>
        
        <div className="sticky bottom-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )
} 