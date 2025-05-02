import React from 'react'

const posts = [
  {
    title: 'Launching Quote Vibes Daily',
    date: 'May 01, 2025',
    excerpt: 'How I built a mood-based quotes app from scratch and the lessons learned along the way. This journey taught me about SwiftUI animations and user psychology...',
    link: '#',
  },
  {
    title: 'AdSense Insights with SwiftUI',
    date: 'Apr 22, 2025',
    excerpt: 'Visualizing your ad revenue trends on mobile with clean, interactive charts. Learn how I approached data visualization challenges on iOS...',
    link: '#',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-8">
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.title} className="space-y-2">
            <p className="text-gray-600">{post.date}</p>
            <h3 className="font-bold text-xl">
              <a href={post.link} className="text-purple-700 hover:underline">
                {post.title}
              </a>
            </h3>
            <p>{post.excerpt}</p>
            <a href={post.link} className="text-blue-600 hover:underline">
              Continue reading
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}