import React from 'react'
import ScrollReveal from './ScrollReveal'

export default function Experience() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center sm:text-left tracking-tight">About project</h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto sm:mx-0">
          <ScrollReveal delay={0.2}>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 leading-snug tracking-tight">
              Creativity and knowledge is my advantage which is constantly growing with new challenges.
            </h3>
          </ScrollReveal>
          
          <div className="space-y-6 sm:space-y-8 text-gray-600 dark:text-gray-400">
            <ScrollReveal delay={0.3}>
              <p className="text-base sm:text-lg">
                The visual appearance of the website should be attractive to the user and consistent with the visual identification. You should use appropriate colors and typography that are essential but help build a professional image and attract the user's attention.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div>
                <h4 className="text-black dark:text-white font-semibold mb-2 text-lg sm:text-xl tracking-tight">Mobility and good navigation</h4>
                <p className="text-base sm:text-lg">
                  Well-designed navigation is the basis of every website. Users should be able to easily find what they are looking for without getting lost.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
} 