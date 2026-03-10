import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialFollow from '@/components/SocialFollow';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curious with Mayank Podcast - Conversations with Entrepreneurs | Curious with Mayank',
  description: 'Join Mayank Jain on Curious with Mayank podcast for conversations about brand building, consumer psychology, marketing strategy with entrepreneurs and industry leaders.',
  keywords: 'Curious with Mayank podcast, Mayank Jain, entrepreneur conversations, brand building, marketing psychology, consumer psychology, startup stories, business podcast, Indian entrepreneurs, SME stories',
  openGraph: {
    title: 'Curious with Mayank Podcast - Conversations with Entrepreneurs',
    description: 'Join Mayank Jain on Curious with Mayank podcast for conversations about brand building, consumer psychology, marketing strategy with entrepreneurs and industry leaders.',
    url: 'https://curiouswithmayank.com/podcast',
    siteName: 'Curious with Mayank',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://curiouswithmayank.com/og-podcast.jpg',
        width: 1200,
        height: 630,
        alt: 'Curious with Mayank Podcast - Conversations with Entrepreneurs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curious with Mayank Podcast - Conversations with Entrepreneurs',
    description: 'Join Mayank Jain on Curious with Mayank podcast for conversations about brand building, consumer psychology, marketing strategy with entrepreneurs.',
    images: ['https://curiouswithmayank.com/og-podcast.jpg'],
    creator: '@curiouswithmayank',
  },
  alternates: {
    canonical: 'https://curiouswithmayank.com/podcast',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const shows = [
  {
    title: 'Curious with Mayank',
    description: 'Bringing untold stories of Indian SMEs, startups, and core manufacturing sectors. Discover how they solve real problems for end consumers, the challenges they face, and innovative solutions that drive growth.',
    items: ['Indian SME & Startup Success Stories', 'Manufacturing Sector Innovations', 'Problem-Solving Case Studies', 'Brand Building & Consumer Psychology', 'Marketing Strategies for Growth'],
    accent: 'from-purple-500/20 via-purple-500/10 to-transparent',
    dotColor: 'bg-purple-500',
    textColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Machine with Mayank',
    description: 'Technology discussions, training sessions, and practical insights on automation, AI, and digital transformation.',
    items: ['Technology Training Sessions', 'Automation Implementation', 'AI Integration Strategies', 'Digital Transformation'],
    accent: 'from-blue-500/20 via-blue-500/10 to-transparent',
    dotColor: 'bg-blue-500',
    textColor: 'text-blue-600 dark:text-blue-400',
  },
];

const topics = [
  {
    title: 'Technology',
    description: 'AI, automation, and emerging tech trends',
    iconBg: 'bg-blue-50 dark:bg-blue-500/10',
    iconColor: 'text-blue-600 dark:text-blue-400',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Branding',
    description: 'Brand psychology, positioning, and marketing strategy',
    iconBg: 'bg-emerald-50 dark:bg-emerald-500/10',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'Disruptive ideas and breakthrough thinking',
    iconBg: 'bg-purple-50 dark:bg-purple-500/10',
    iconColor: 'text-purple-600 dark:text-purple-400',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Leadership',
    description: 'Building teams and driving change',
    iconBg: 'bg-orange-50 dark:bg-orange-500/10',
    iconColor: 'text-orange-600 dark:text-orange-400',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(167,139,250,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.06),transparent_35%)]"
        aria-hidden
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl border border-white/50 bg-white/70 px-4 sm:px-6 py-3 shadow-lg shadow-slate-300/30 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70 dark:shadow-black/40">
          <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white">
            Curious with Mayank
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/#about" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors">About</Link>
            <Link href="/training" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors">Training</Link>
            <Link href="/podcast" className="text-blue-600 dark:text-blue-300 font-semibold">Podcast</Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors">Contact</Link>
          </div>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/60 bg-slate-900 text-white shadow-md shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-600 dark:border-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            <span>Let&apos;s talk</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
            </svg>
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 py-20 sm:py-24">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-purple-200/60 via-indigo-200/40 to-transparent blur-3xl dark:from-purple-500/20 dark:via-indigo-500/10" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] bg-gradient-to-br from-blue-200/50 via-purple-200/40 to-transparent blur-3xl dark:from-blue-500/10 dark:via-purple-500/10" />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 shadow-lg shadow-purple-500/10 backdrop-blur dark:bg-slate-900/70 border border-slate-100/70 dark:border-slate-800 mb-8">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-semibold">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Conversations with entrepreneurs & leaders</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Curious with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"> Mayank</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Conversations about brand building, consumer psychology, and marketing with fellow entrepreneurs.
              Learning together through shared experiences and stories.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/curiouswithmayank/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl font-medium"
              >
                Watch on Instagram
              </a>
              <a
                href="#be-guest"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-md backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg font-medium dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
              >
                Be a Guest
              </a>
            </div>
          </div>
        </section>

        {/* Podcast Shows */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Our Podcast Shows</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {shows.map((show) => (
                <div
                  key={show.title}
                  className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 transition-transform hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30"
                >
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${show.accent} blur-2xl`} />
                  <div className="relative">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{show.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-5">{show.description}</p>
                    <ul className="space-y-2">
                      {show.items.map((item) => (
                        <li key={item} className={`flex items-start gap-2 text-sm ${show.textColor}`}>
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${show.dotColor} shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Core Topics We Cover</h4>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-200/30 backdrop-blur ring-1 ring-slate-100/80 text-center transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30"
                >
                  <div className={`w-14 h-14 ${topic.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 ${topic.iconColor}`}>
                    {topic.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{topic.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Follow */}
        <SocialFollow variant="compact" className="bg-white/80 backdrop-blur dark:bg-slate-900" />

        {/* Newsletter Signup */}
        <section className="px-6 py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 dark:from-indigo-900/40 dark:via-purple-900/30 dark:to-blue-900/40">
          <NewsletterSignup variant="compact" />
        </section>

        {/* Guest Application */}
        <section id="be-guest" className="px-4 sm:px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Join Our Podcast Conversation
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Have an interesting story or experience to share? I&apos;d love to have a conversation on Curious with Mayank
                or Machine with Mayank and learn from your journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Ideal Guests</h4>
                <div className="space-y-4">
                  {[
                    { title: 'Entrepreneurs & Founders', desc: 'Building innovative companies and solving real problems' },
                    { title: 'Technology Leaders', desc: 'CTOs, architects, and innovators shaping the future' },
                    { title: 'Industry Experts', desc: 'Specialists with unique insights and proven results' },
                  ].map((guest) => (
                    <div key={guest.title} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-500 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{guest.title}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{guest.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30">
                <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">What to Expect:</h5>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  {['30-60 minute conversation', 'Remote recording via high-quality tools', 'Professional editing and production', 'Cross-promotion on social media', 'Episode clips for your content'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <svg className="w-5 h-5 text-purple-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ContactForm type="podcast" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 bg-slate-950 text-slate-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Curious with Mayank</h3>
              <p className="text-slate-400 mb-4">
                Conversations about brand building, consumer psychology, and marketing with fellow entrepreneurs and learners.
              </p>
            </div>
            <div>
              <NewsletterSignup variant="footer" className="text-left" />
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p>&copy; 2026 Curious with Mayank. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="https://distk.in" className="hover:text-white transition-colors">Distk.in</a>
                <a href="https://youtube.com/@curiouswithmayank" className="hover:text-white transition-colors">YouTube</a>
                <Link href="/training" className="hover:text-white transition-colors">Training</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}