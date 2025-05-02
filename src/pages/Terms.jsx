import React, { useEffect } from 'react'
import { ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { ThemeProvider } from '../context/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'

export default function Terms() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="relative min-h-screen">
          {/* Fixed gradient background */}
          <div className="fixed inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900/50 dark:to-gray-800/30" />
          
          {/* Scrollable content */}
          <div className="relative z-10">
            <SEO title="Terms of Service | AdPulse" />
            <div className="container mx-auto px-4 py-8 max-w-4xl">
              <Link to="/" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-6">
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>
              
              <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
              
              <div className="rounded-xl p-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 italic">
                    Effective Date: April 30, 2025
                  </p>
                </div>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
                  <p>
                    By downloading, installing or using AdPulse (the "App") and/or visiting https://adpulse.kantoprojects.com (the "Site"), you agree to these Terms of Service ("Terms"). If you don't agree, please don't use the App or Site.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">2. Eligibility</h2>
                  <p>
                    You must be at least 13 years old to use AdPulse. By agreeing, you represent that you're at least 13 and able to form a binding contract under your local laws.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">3. License & Use</h2>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>What you get</strong>: We grant you a personal, non-exclusive, non-transferable, revocable license to use the App on any iOS device you own.</li>
                    <li><strong>What you don't get</strong>: No reverse-engineering, copying, distributing, sublicensing or commercial use beyond what we explicitly allow.</li>
                  </ul>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">4. Account Registration</h2>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Google Sign-In</strong>: You must sign in with Google to link your AdSense account.</li>
                    <li><strong>Accurate info</strong>: You agree to provide truthful information and keep your account secure.</li>
                  </ul>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">5. Subscriptions & Billing</h2>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Free vs. Premium</strong>: Basic features are free. Premium subscription unlocks advanced analytics.</li>
                    <li><strong>Payments</strong>: Handled via Apple's In-App Purchase. All billing, refunds, and renewals follow Apple's policies—reach out to Apple for billing issues.</li>
                    <li><strong>Cancellations</strong>: Cancel anytime in your Apple ID subscriptions; you'll retain premium until period end.</li>
                  </ul>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">6. Google API & Compliance</h2>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Scope</strong>: AdPulse uses only the <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">https://www.googleapis.com/auth/adsense.readonly</code> scope.</li>
                    <li><strong>Verification</strong>: We comply with Google's API Services User Data Policy; if you exceed 100 users, you may see an "unverified app" warning unless we complete verification.</li>
                  </ul>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">7. Intellectual Property</h2>
                  <p>
                    All content, UI, code, trademarks and logos in AdPulse or on the Site are owned by Kanto Projects or our licensors. Don't copy or steal it.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">8. User-Generated Content & Feedback</h2>
                  <p>
                    Any suggestions, bug reports or code snippets you send us become our property and may be used without restriction or attribution.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">9. Prohibited Conduct</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Abuse, hack, reverse-engineer or disrupt AdPulse or Google's services.</li>
                    <li>Misrepresent your identity or AdSense data.</li>
                    <li>Use the App for unlawful purposes or to violate any third-party rights.</li>
                  </ul>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">10. Termination</h2>
                  <p>
                    We can suspend or terminate your access at our discretion—say, for a Terms breach. You can also delete your account by uninstalling the app and revoking access in your Google Account settings.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">11. Disclaimers & "As-Is"</h2>
                  <p>
                    AdPulse is provided "as-is." We make no warranties—express or implied—about uptime, accuracy, or fitness for a particular purpose. Use at your own risk.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">12. Limitation of Liability</h2>
                  <p>
                    To the max extent allowed by law, Kanto Projects and its affiliates won't be liable for any indirect, incidental, special, punitive, or consequential damages—even if advised of the possibility. Our total liability to you for any claim under these Terms is limited to $50.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">13. Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless Kanto Projects against any claims, damages or expenses arising from your misuse of AdPulse or violation of these Terms.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">14. Governing Law</h2>
                  <p>
                    These Terms are governed by Hawai'i law, without regard to conflict-of-law rules. Any disputes go to state or federal court in Honolulu, HI.
                  </p>
                </section>
                
                <section className="space-y-4 mb-8">
                  <h2 className="text-xl font-bold">15. Changes to These Terms</h2>
                  <p>
                    We may update these Terms occasionally. If there's a material change, we'll highlight it in-app and post the new Terms here at least 7 days before they take effect. Your continued use after that date means you agree.
                  </p>
                </section>
                
                <div className="mt-12 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 text-center">
                  © {new Date().getFullYear()} Kanto Projects. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
} 