import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialFollow from '@/components/SocialFollow';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Curious with Mayank
          </h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</a>
            <Link href="/brand-kickstart" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Brand Kickstart</Link>
            <Link href="/training" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Training</Link>
            <Link href="/podcast" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Podcast</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Learning About Brands,
            <span className="text-blue-600 dark:text-blue-400"> Sharing Growth Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Sharing experiences in branding, automation, and business growth through speaking, podcasting, 
            and conversations with fellow entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/training" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Book Training Session
            </Link>
            <a 
              href="https://www.instagram.com/curiouswithmayank/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
            >
              Watch Content on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="px-6 py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Latest Content
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Podcast Card */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Curious with Mayank
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Conversations about brand building, psychology, and marketing with fellow entrepreneurs
              </p>
              <a href="https://www.instagram.com/curiouswithmayank/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Watch on Instagram →
              </a>
            </div>
            
            {/* Training Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Training Topics
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Brand Strategy • Business Automation • SME Growth • Startup Scaling
              </p>
              <Link href="/training" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Book Session →
              </Link>
            </div>
            
            {/* Insights Card */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Business Insights
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sharing learnings about branding, automation, and business growth with fellow entrepreneurs
              </p>
              <a href="#insights" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Mayank Jain
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                A self-learner who was formally trained in computer engineering but found his true passion in 
                entrepreneurship. With 14+ years of experience, Mayank currently works at the fascinating 
                intersection of sales, marketing, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Follow */}
      <SocialFollow className="bg-white dark:bg-gray-800" />

      {/* Newsletter Signup */}
      <section className="px-6 py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <NewsletterSignup />
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Connect and Learn Together
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Interested in discussing branding, automation, or business growth? I&apos;d love to hear about your journey.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Curious with Mayank</h3>
              <p className="text-gray-400 mb-4">
                Sharing experiences in branding, automation, and business growth through speaking, podcasting, and conversations with fellow entrepreneurs.
              </p>
            </div>
            <div>
              <NewsletterSignup variant="footer" className="text-left" />
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p>&copy; 2025 Curious with Mayank. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="https://distk.in" className="hover:text-white transition-colors">
                  Distk.in
                </a>
                <a href="https://youtube.com/@curiouswithmayank" className="hover:text-white transition-colors">
                  YouTube
                </a>
                <Link href="/podcast" className="hover:text-white transition-colors">
                  Podcast
                </Link>
                <Link href="/training" className="hover:text-white transition-colors">
                  Training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
