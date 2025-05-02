import React from 'react'
import { X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export default function TermsSheet({ isOpen, onClose }) {
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
          <h2 className="text-xl font-bold">Terms of Service</h2>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={onClose}
            aria-label="Close terms of service"
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
            <h3 className="text-lg font-bold">1. Acceptance of Terms</h3>
            <p>
              By downloading, installing or using AdPulse (the "App") and/or visiting https://adpulse.kantoprojects.com (the "Site"), you agree to these Terms of Service ("Terms"). If you don't agree, please don't use the App or Site.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">2. Eligibility</h3>
            <p>
              You must be at least 13 years old to use AdPulse. By agreeing, you represent that you're at least 13 and able to form a binding contract under your local laws.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">3. License & Use</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>What you get</strong>: We grant you a personal, non-exclusive, non-transferable, revocable license to use the App on any iOS device you own.</li>
              <li><strong>What you don't get</strong>: No reverse-engineering, copying, distributing, sublicensing or commercial use beyond what we explicitly allow.</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">4. Account Registration</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Google Sign-In</strong>: You must sign in with Google to link your AdSense account.</li>
              <li><strong>Accurate info</strong>: You agree to provide truthful information and keep your account secure.</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">5. Subscriptions & Billing</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Free vs. Premium</strong>: Basic features are free. Premium subscription unlocks advanced analytics.</li>
              <li><strong>Payments</strong>: Handled via Apple's In-App Purchase. All billing, refunds, and renewals follow Apple's policies—reach out to Apple for billing issues.</li>
              <li><strong>Cancellations</strong>: Cancel anytime in your Apple ID subscriptions; you'll retain premium until period end.</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">6. Google API & Compliance</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Scope</strong>: AdPulse uses only the <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">https://www.googleapis.com/auth/adsense.readonly</code> scope.</li>
              <li><strong>Verification</strong>: We comply with Google's API Services User Data Policy; if you exceed 100 users, you may see an "unverified app" warning unless we complete verification.</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">7. Intellectual Property</h3>
            <p>
              All content, UI, code, trademarks and logos in AdPulse or on the Site are owned by Kanto Projects or our licensors. Don't copy or steal it.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">8. User-Generated Content & Feedback</h3>
            <p>
              Any suggestions, bug reports or code snippets you send us become our property and may be used without restriction or attribution.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">9. Prohibited Conduct</h3>
            <p>You agree not to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Abuse, hack, reverse-engineer or disrupt AdPulse or Google's services.</li>
              <li>Misrepresent your identity or AdSense data.</li>
              <li>Use the App for unlawful purposes or to violate any third-party rights.</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">10. Termination</h3>
            <p>
              We can suspend or terminate your access at our discretion—say, for a Terms breach. You can also delete your account by uninstalling the app and revoking access in your Google Account settings.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">11. Disclaimers & "As-Is"</h3>
            <p>
              AdPulse is provided "as-is." We make no warranties—express or implied—about uptime, accuracy, or fitness for a particular purpose. Use at your own risk.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">12. Limitation of Liability</h3>
            <p>
              To the max extent allowed by law, Kanto Projects and its affiliates won't be liable for any indirect, incidental, special, punitive, or consequential damages—even if advised of the possibility. Our total liability to you for any claim under these Terms is limited to $50.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">13. Indemnification</h3>
            <p>
              You agree to defend, indemnify, and hold harmless Kanto Projects against any claims, damages or expenses arising from your misuse of AdPulse or violation of these Terms.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">14. Governing Law</h3>
            <p>
              These Terms are governed by Hawai'i law, without regard to conflict-of-law rules. Any disputes go to state or federal court in Honolulu, HI.
            </p>
          </section>
          
          <section className="space-y-2">
            <h3 className="text-lg font-bold">15. Changes to These Terms</h3>
            <p>
              We may update these Terms occasionally. If there's a material change, we'll highlight it in-app and post the new Terms here at least 7 days before they take effect. Your continued use after that date means you agree.
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