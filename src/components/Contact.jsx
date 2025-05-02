import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { At, Bug, Rocket, Question, CheckCircle } from '@phosphor-icons/react'

// Form configuration
const FORM_SUBMIT_CONFIG = {
  // The email address where form submissions will be sent
  email: 'apps@kantoprojects.com',
  
  // Enable or disable features
  disableCaptcha: true,
  
  // Customize the default subject prefix
  subjectPrefix: 'AdPulse Contact: '
};

const supportCategories = [
  {
    icon: <Bug size={36} weight="duotone" className="text-blue-500" />,
    title: "Report a Bug",
    description: "We appreciate your help in making AdPulse better! Please include device details, steps to reproduce, and screenshots if possible."
  },
  {
    icon: <Question size={36} weight="duotone" className="text-blue-500" />,
    title: "App Functionality",
    description: "Questions about how AdPulse works? We'll help you understand the features and how to get the most out of your AdSense tracking."
  },
  {
    icon: <Rocket size={36} weight="duotone" className="text-blue-500" />,
    title: "Feature Requests",
    description: "Have ideas to make AdPulse even better? We'd love to hear your suggestions for future updates."
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const { scrollYProgress } = useScroll();
  
  // Parallax effect transformations for the background logo
  const yPos = useTransform(scrollYProgress, [0.5, 1], [0, 50]);  // Start movement at 50% scroll
  const opacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0.12, 0.08, 0.05]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0.5, 1], [-5, 5]);  // Slight rotation as user scrolls

  // Handle SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check URL for success parameter when component mounts
  useEffect(() => {
    // Check if the URL has a success parameter (returning from form submission)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsSubmitted(true);
      
      // Remove the success parameter from URL without refreshing
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
      
      // Reset submission state after 5 seconds
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="contact">
      {/* Floating Logo Background with Parallax */}
      {isMounted && (
        <motion.div 
          className="absolute right-[10%] top-1/3 z-0 opacity-10 hidden md:block pointer-events-none"
          style={{ 
            y: yPos,
            opacity,
            scale,
            rotate,
          }}
        >
          <img 
            src="/images/logos/logo-on-dark-bg.png" 
            alt="AdPulse Background Logo" 
            className="w-[500px] h-auto"
          />
        </motion.div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We're committed to your experience and aim to respond within 24-48 hours.
            </p>
            <div className="mt-4 flex items-center gap-2 text-blue-500">
              <At size={24} weight="duotone" />
              <a 
                href={`mailto:${FORM_SUBMIT_CONFIG.email}`} 
                className="text-lg hover:underline"
              >
                {FORM_SUBMIT_CONFIG.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-6">Technical Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center">{category.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm">
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle size={48} weight="duotone" className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for contacting us. We've received your message and will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form 
                action={`https://formsubmit.co/82c2421e2571eaa3b25ab3d9ede08eaf`} 
                method="POST"
                className="space-y-4"
              >
                {/* FormSubmit.co Configuration */}
                <input type="hidden" name="_captcha" value={FORM_SUBMIT_CONFIG.disableCaptcha ? "false" : "true"} />
                <input type="hidden" name="_next" value={`${window.location.href.split('?')[0]}?success=true${window.location.hash}`} />
                <input 
                  type="hidden" 
                  name="_subject" 
                  value={formData.subject ? 
                    `${FORM_SUBMIT_CONFIG.subjectPrefix}${formData.subject}` : 
                    'AdPulse Contact Form'
                  } 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message details..."
                    required
                  ></textarea>
                </div>
                
                {/* Honeypot field to prevent spam */}
                <input type="text" name="_honey" style={{display: 'none'}} />
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex justify-center items-center"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}