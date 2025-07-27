import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            <Link href="/">Curious with Mayank</Link>
          </h1>
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</Link>
            <Link href="/speaking" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Speaking</Link>
            <Link href="/podcast" className="text-blue-600 dark:text-blue-400 font-medium">Podcast</Link>
            <Link href="/#insights" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Insights</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Curious with
            <span className="text-purple-600 dark:text-purple-400"> Mayank</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Deep dives into brand building, consumer psychology, marketing strategies, and everything 
            that makes brands memorable. Real conversations with problem solvers and innovative entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#latest-episodes" 
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Latest Episodes
            </a>
            <a 
              href="#be-guest" 
              className="px-8 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors font-medium"
            >
              Be a Guest
            </a>
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section id="latest-episodes" className="px-6 py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Latest Episodes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <div className="mb-4">
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">Episode 15</span>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                  AI Automation Strategies for Modern Businesses
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Deep dive into practical AI implementation strategies that drive real business results.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">45 min</span>
                <a href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                  Listen Now →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl">
              <div className="mb-4">
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">Episode 14</span>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                  Building Scalable SaaS Platforms
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From MVP to enterprise: Lessons learned from successful SaaS entrepreneurs.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">52 min</span>
                <a href="#" className="text-green-600 dark:text-green-400 font-medium hover:underline">
                  Listen Now →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
              <div className="mb-4">
                <span className="text-sm text-orange-600 dark:text-orange-400 font-medium">Episode 13</span>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                  The Future of Work: Remote-First Companies
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                How leading companies are building distributed teams and culture.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">38 min</span>
                <a href="#" className="text-orange-600 dark:text-orange-400 font-medium hover:underline">
                  Listen Now →
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-block px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              View All Episodes
            </a>
          </div>
        </div>
      </section>

      {/* Podcast Topics */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Podcast Shows
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Curious with Mayank
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Bringing untold stories of Indian SMEs, startups, and core manufacturing sectors. Discover how they solve real problems for end consumers, the challenges they face, and innovative solutions that drive growth.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                <div>• Indian SME & Startup Success Stories</div>
                <div>• Manufacturing Sector Innovations</div>
                <div>• Problem-Solving Case Studies</div>
                <div>• Brand Building & Consumer Psychology</div>
                <div>• Marketing Strategies for Growth</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Machine with Mayank
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Technology discussions, training sessions, and practical insights on automation, AI, and digital transformation.
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <div>• Technology Training Sessions</div>
                <div>• Automation Implementation</div>
                <div>• AI Integration Strategies</div>
                <div>• Digital Transformation</div>
              </div>
            </div>
          </div>
          
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Topics We Cover
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technology</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">AI, automation, and emerging tech trends</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Branding</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Brand psychology, positioning, and marketing strategy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Disruptive ideas and breakthrough thinking</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Leadership</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Building teams and driving change</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Application */}
      <section id="be-guest" className="px-6 py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Be a Guest on Our Podcasts
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Share your expertise on Curious with Mayank (branding/marketing) or Machine with Mayank (technology/automation) 
              with our audience of entrepreneurs, SMEs, and business leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Ideal Guests
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Entrepreneurs & Founders</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Building innovative companies and solving real problems
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Technology Leaders</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      CTOs, architects, and innovators shaping the future
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Industry Experts</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Specialists with unique insights and proven results
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl">
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What to Expect:
              </h5>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>30-60 minute conversation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Remote recording via high-quality tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Professional editing and production</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Cross-promotion on social media</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Episode clips for your content</span>
                </li>
              </ul>
            </div>
          </div>

          <ContactForm type="podcast" />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Curious with Mayank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}