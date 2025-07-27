import ContactForm from '@/components/ContactForm';

export default function SpeakingPage() {
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
            <a href="/speaking" className="text-blue-600 dark:text-blue-400 font-medium">Speaking</a>
            <a href="/podcast" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Podcast</a>
            <a href="/#insights" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Insights</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your Event with
            <span className="text-blue-600 dark:text-blue-400"> Expert Insights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Mayank brings real-world automation expertise and engaging storytelling to conferences, 
            workshops, and corporate events worldwide.
          </p>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="px-6 py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Speaking Topics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Business Process Automation
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                How to identify, design, and implement automation solutions that drive real ROI
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Automation Strategy Framework</li>
                <li>• ROI Measurement & Success Metrics</li>
                <li>• Change Management for Automation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI Integration in Business
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Practical approaches to leveraging AI for competitive advantage
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• AI Readiness Assessment</li>
                <li>• Implementation Roadmaps</li>
                <li>• Ethical AI Considerations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Digital Transformation
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Leading organizational change in the digital age
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Digital Strategy Development</li>
                <li>• Technology Adoption Frameworks</li>
                <li>• Cultural Transformation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Book Mayank for Your Event
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fill out the form below and let's discuss how we can make your event memorable.
            </p>
          </div>
          <ContactForm type="speaking" />
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