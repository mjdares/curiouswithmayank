import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            <a href="/">Curious with Mayank</a>
          </h1>
          <div className="hidden md:flex space-x-8">
            <a href="/#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</a>
            <a href="/speaking" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Speaking</a>
            <a href="/podcast" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Podcast</a>
            <a href="/#insights" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Insights</a>
            <a href="/contact" className="text-blue-600 dark:text-blue-400 font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with automation? Looking for an expert speaker? 
              Want to be featured on the podcast? Let's discuss how we can work together.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Speaking Engagements
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Book Mayank for conferences, workshops, and corporate events
              </p>
              <a 
                href="/speaking" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Podcast Guest
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Share your expertise on Machine with Mayank podcast
              </p>
              <a 
                href="/podcast" 
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Apply
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Business Consulting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get strategic guidance on automation and digital transformation
              </p>
              <a 
                href="#general-contact" 
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Inquire
              </a>
            </div>
          </div>

          {/* General Contact Form */}
          <div id="general-contact">
            <ContactForm type="general" />
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="px-6 py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Other Ways to Connect
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Inquiries
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For business partnerships, consulting, and collaboration opportunities
              </p>
              <a 
                href="mailto:mayank@distk.in" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                mayank@distk.in
              </a>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow the Journey
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Stay updated with latest insights and automation trends
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://distk.in" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Distk.in
                </a>
                <span className="text-gray-400">•</span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  LinkedIn
                </a>
                <span className="text-gray-400">•</span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Twitter
                </a>
              </div>
            </div>
          </div>
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