import React, { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'
import { MotionList } from './MotionList'

const faqs = [
  {
    question: "What data does AdPulse access from my AdSense account?",
    answer: "AdPulse accesses your earnings data, performance metrics, and basic account information through Google's official AdSense API. We only retrieve the data necessary to display your earnings and statistics. We never access your Google account password or other sensitive information."
  },
  {
    question: "Is my AdSense data secure with AdPulse?",
    answer: "Absolutely. Your data security is our top priority. AdPulse uses industry-standard encryption, doesn't store your earnings data on our servers, and requires secure authentication through Google. All connections are made using HTTPS, and we regularly update our security protocols."
  },
  {
    question: "Will AdPulse work with my AdSense account type?",
    answer: "AdPulse is designed to work with all standard AdSense accounts, including AdSense for Content, AdSense for Search, and AdSense for YouTube. If you can access your data through the AdSense dashboard, AdPulse should be able to display it."
  },
  {
    question: "Can I track multiple AdSense accounts in AdPulse?",
    answer: "Yes! AdPulse seamlessly tracks earnings from all websites connected to your AdSense account. You can easily view performance metrics for each of your sites individually or see aggregated data across your entire portfolio. Perfect for publishers managing multiple websites under a single AdSense account."
  },
  {
    question: "Will AdPulse show real-time earnings data?",
    answer: "AdPulse displays earnings data as quickly as Google makes it available. While not truly real-time (due to Google's own reporting delays), AdPulse refreshes your data frequently to provide the most up-to-date information possible."
  },
  {
    question: "Does AdPulse work offline?",
    answer: "AdPulse requires an internet connection to fetch your latest AdSense data. However, once loaded, you can view previously fetched data offline. For the most current information, an internet connection is needed."
  },
  {
    question: "How much does AdPulse cost?",
    answer: "AdPulse offers both free and premium subscription options. The free version provides essential earnings tracking, while premium subscriptions offer additional features like advanced analytics, longer data history, and custom reporting. Pricing details will be available when the app launches."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-transparent" id="faq">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about AdPulse for AdSense
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <MotionList key={index} delay={0.05 * (index + 1)}>
                <motion.div 
                  className="p-6 rounded-2xl shadow-sm transition-all duration-300"
                  style={{ backgroundColor: 'rgb(31 41 55 / 0.5)' }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    className="w-full flex items-start justify-between"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === index 
                            ? 'max-h-96 mt-3 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-400 text-sm">{faq.answer}</p>
                      </div>
                    </div>
                    <CaretDown 
                      size={20} 
                      weight="bold" 
                      className={`text-blue-500 transform transition-transform duration-200 flex-shrink-0 mt-2 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </motion.div>
              </MotionList>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 