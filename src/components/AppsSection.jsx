import React from 'react'

const apps = [
  {
    name: 'Quote Vibes Daily',
    desc: 'Mood-based inspirational quotes, today & every day.',
    platform: 'iOS',
    link: '#',
  },
  {
    name: 'AdPulse',
    desc: 'Real-time AdSense & AdMob earnings tracker.',
    platform: 'iOS',
    link: '#',
  },
  {
    name: 'MLBB Cheat Sheet',
    desc: 'Mobile Legends hero counters & guides on the go.',
    platform: 'React Native',
    link: '#',
  },
]

export default function AppsSection() {
  return (
    <section id="apps" className="py-8">
      <h2 className="text-2xl font-bold mb-6">My Apps</h2>
      <div className="space-y-6">
        {apps.map(app => (
          <div key={app.name} className="space-y-1">
            <h3 className="font-bold text-xl">
              <a href={app.link} className="text-purple-700 hover:underline">
                {app.name}
              </a>
            </h3>
            <p>{app.desc}</p>
            <p className="text-blue-600">{app.platform}</p>
          </div>
        ))}
      </div>
    </section>
  )
}