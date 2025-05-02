import React from 'react'

export default function Blog() {
  const posts = [
    {
      title: "Exploring the Intersection of Design, AI, and Design Engineering",
      description: "How AI is changing the way we design",
      link: "#"
    },
    {
      title: "Why I left my job to start my own company",
      description: "A deep dive into my decision to leave my job and start my own company",
      link: "#"
    },
    {
      title: "What I learned from my first year of freelancing",
      description: "A look back at my first year of freelancing and what I learned",
      link: "#"
    }
  ]

  return (
    <section className="section">
      <h2 className="text-2xl sm:text-3xl font-medium mb-8">Blog</h2>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="group">
            <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
} 