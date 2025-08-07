import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Kickstart - Professional Online Presence for ₹25,000 | Curious with Mayank',
  description: 'Launch your business with confidence! Get a professional landing page, social media integration, and complete online presence in 7 days for ₹25,000. Perfect for new entrepreneurs.',
  keywords: 'brand kickstart, website design, landing page, small business website, startup online presence, professional website, social media integration, business launch, entrepreneur website, Mayank Jain',
  openGraph: {
    title: 'Brand Kickstart - Professional Online Presence for ₹25,000',
    description: 'Launch your business with confidence! Get a professional landing page, social media integration, and complete online presence in 7 days.',
    url: 'https://curiouswithmayank.com/brand-kickstart',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Kickstart - Professional Online Presence for ₹25,000',
    description: 'Launch your business with confidence! Get a professional landing page and complete online presence in 7 days.',
  },
  alternates: {
    canonical: 'https://curiouswithmayank.com/brand-kickstart',
  },
};

export default function BrandKickstart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Curious with Mayank
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</Link>
            <Link href="/training" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Training</Link>
            <Link href="/podcast" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Podcast</Link>
            <Link href="/brand-kickstart" className="text-blue-600 font-medium dark:text-blue-400">Brand Kickstart</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-800 dark:text-green-400 text-sm font-medium mb-6">
            ✨ Your First Step Online - Start Building Momentum Today
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Launch Your Business with
            <span className="text-blue-600 dark:text-blue-400"> Confidence</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop waiting to get &quot;ready&quot; - businesses are built on momentum! Get your professional online presence 
            in just 7 days and start approaching customers with confidence. You can evolve as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="#schedule-call"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Start Your Journey - ₹25,000
            </a>
            <a 
              href="#packages"
              className="px-8 py-4 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium text-lg"
            >
              View All Packages
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            💳 50% advance • 🚀 7-day delivery • 🔄 2 revisions included
          </p>
        </div>
      </section>

      {/* Momentum Message */}
      <section className="px-6 py-12 bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            🚀 Businesses Are Built on Momentum, Not Perfection
          </h2>
          <p className="text-lg text-emerald-100 mb-4">
            Don&apos;t wait to get &quot;ready&quot; - start with something solid and keep evolving. This is your first step online, 
            and with time, our team can help you build end-to-end business processes, automation, and integrations.
          </p>
          <p className="text-emerald-200 font-medium">
            We want you to succeed. Let&apos;s get you started today! 💪
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="px-6 py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The First Step is Often the Hardest
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">&quot;I don&apos;t feel professional enough to approach customers&quot;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">&quot;My business looks too small/informal online&quot;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">&quot;I&apos;m waiting to have everything perfect before launching&quot;</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What if you could...
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Start with a professional foundation today</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Approach customers with confidence immediately</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Build and evolve as your business grows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Starting Point
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From quick launch to custom solutions - we&apos;ve got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Brand Kickstart Package */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border-2 border-blue-200 dark:border-blue-800">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Brand Kickstart</h3>
                <p className="text-blue-100">Perfect first step online</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">₹25,000</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Everything you need to launch professionally</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Professional landing page</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Mobile responsive design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Social media integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Contact forms & CTAs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">SEO optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Google Analytics setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">2 rounds of revisions</span>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                  <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
                    ⏱️ Delivery: 5-7 business days<br/>
                    💳 50% advance payment
                  </p>
                </div>

                <a 
                  href="#schedule-call"
                  className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* Custom Development Package */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border-2 border-purple-200 dark:border-purple-800">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Custom Development</h3>
                <p className="text-purple-100">Tailored to your specific needs</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Custom Quote</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Pricing depends on scope and requirements</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Multi-page websites</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">E-commerce functionality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Custom integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Business automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">CRM/ERP solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Third-party API integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">Ongoing support & maintenance</span>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-6">
                  <p className="text-sm text-purple-800 dark:text-purple-300 font-medium">
                    ⏱️ Delivery: Based on scope<br/>
                    💡 Detailed proposal provided<br/>
                    📞 Free consultation call
                  </p>
                </div>

                <a 
                  href="#schedule-call"
                  className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Discuss Your Project
                </a>
              </div>
            </div>
          </div>

          {/* Growth Message */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-8 rounded-xl text-center border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Start Small, Think Big, Grow Smart
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Begin with Brand Kickstart to establish your online presence immediately. As your business grows, 
              our team can help you evolve with custom development, automation, integrations, and end-to-end 
              business process optimization. The key is to start today!
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 px-3 py-1 rounded-full">
                Start with momentum
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full">
                Evolve as you grow
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 px-3 py-1 rounded-full">
                Scale with confidence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Call Form Section */}
      <section id="schedule-call" className="px-6 py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Fill out this form and let&apos;s discuss how we can help you launch your business online
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full text-green-800 dark:text-green-400 text-sm font-medium">
              <span>🔒</span>
              <span>Your information is completely secure and confidential</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-8 rounded-xl shadow-xl">
            <form 
              name="brand-kickstart-inquiry" 
              method="POST" 
              action="/thank-you"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="brand-kickstart-inquiry" />
              <p style={{display: 'none'}}>
                <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
              </p>
              
              {/* Package Selection */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">1</span>
                  Select Package
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <input type="radio" name="package" value="brand-kickstart" className="text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Brand Kickstart - ₹25,000</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Professional landing page with social integration</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <input type="radio" name="package" value="custom-development" className="text-purple-600" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Custom Development - Quote Based</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Tailored solution based on your specific requirements</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">2</span>
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      name="mobile"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">3</span>
                  About Your Business
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Business Name *
                    </label>
                    <input 
                      type="text" 
                      name="businessName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your business/company name"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Industry/Category *
                      </label>
                      <select name="industry" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                        <option value="">Select your industry</option>
                        <option value="technology">Technology/Software</option>
                        <option value="ecommerce">E-commerce/Retail</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education/Training</option>
                        <option value="finance">Finance/Consulting</option>
                        <option value="food">Food & Beverage</option>
                        <option value="beauty">Beauty/Wellness</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="services">Professional Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Business Stage *
                      </label>
                      <select name="businessStage" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                        <option value="">Select stage</option>
                        <option value="idea">Idea Stage</option>
                        <option value="startup">Just Started (0-6 months)</option>
                        <option value="early">Early Stage (6m-2 years)</option>
                        <option value="growth">Growth Stage (2+ years)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      What does your business do? *
                    </label>
                    <textarea 
                      name="businessDescription"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Describe your products/services, what problem you solve, and what makes you unique..."
                    />
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">4</span>
                  Your Target Customers
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Who are your ideal customers? *
                    </label>
                    <textarea 
                      name="targetCustomers"
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Describe your target audience: age group, profession, interests, pain points, etc."
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Customer Type *
                      </label>
                      <select name="customerType" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                        <option value="">Select customer type</option>
                        <option value="b2b">B2B (Businesses)</option>
                        <option value="b2c">B2C (Individual consumers)</option>
                        <option value="both">Both B2B and B2C</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Geographic Focus *
                      </label>
                      <select name="geographicFocus" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                        <option value="">Select area</option>
                        <option value="local">Local/City</option>
                        <option value="state">State/Regional</option>
                        <option value="national">All India</option>
                        <option value="global">International</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Requirements */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">5</span>
                  Project Requirements
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Domain Name Ideas
                    </label>
                    <input 
                      type="text"
                      name="domainName"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="yourcompany.com, yourbrand.in (we&apos;ll help check availability)"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Brand Colors (if any)
                      </label>
                      <input 
                        type="text"
                        name="brandColors"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Blue, Red, #FF5733 (or say &apos;Need help choosing&apos;)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Timeline *
                      </label>
                      <select name="timeline" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                        <option value="">Select timeline</option>
                        <option value="urgent">ASAP (3-5 days)</option>
                        <option value="standard">Standard (5-7 days)</option>
                        <option value="flexible">Flexible (1-2 weeks)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Social Media Accounts to Connect
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="socialMedia[]" value="linkedin" className="rounded text-blue-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">LinkedIn</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="socialMedia[]" value="facebook" className="rounded text-blue-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Facebook</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="socialMedia[]" value="instagram" className="rounded text-blue-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Instagram</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="socialMedia[]" value="whatsapp" className="rounded text-blue-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">WhatsApp</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="socialMedia[]" value="twitter" className="rounded text-blue-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Twitter</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="socialMedia[]" value="youtube" className="rounded text-blue-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">YouTube</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="socialMedia[]" value="google-my-business" className="rounded text-blue-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Google My Business</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="socialMedia[]" value="other" className="rounded text-blue-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Other</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Requirements or Questions
                    </label>
                    <textarea 
                      name="additionalRequirements"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Any specific features, design preferences, or questions you have..."
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Agreement */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  📋 Terms & Conditions
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <p><strong>Brand Kickstart Package (₹25,000):</strong></p>
                  <p>• Payment: 50% advance payment (₹12,500) required to start. Balance due on completion.</p>
                  <p>• Delivery: 5-7 business days from advance payment and final requirements confirmation.</p>
                  <p>• Inclusions: Single landing page, social media integration, mobile responsive design, basic SEO setup.</p>
                  <p>• Exclusions: Domain registration costs (₹500-2000/year), hosting costs (₹3000-5000/year), content writing for more than 5 sections, e-commerce features, complex integrations.</p>
                  <p>• Revisions: 2 rounds of revisions included. Additional changes: ₹2000 per round.</p>
                  
                  <p className="mt-4"><strong>Custom Development:</strong></p>
                  <p>• Pricing based on detailed project scope and requirements</p>
                  <p>• Detailed proposal provided after consultation call</p>
                  <p>• Payment terms discussed based on project complexity</p>
                  
                  <p className="mt-4"><strong>General Terms:</strong></p>
                  <p>• Refund Policy: 50% refund if project cancelled within 24 hours of advance payment. No refund after work begins.</p>
                  <p>• Ownership: You own all content and design. Source code ownership transferred after full payment.</p>
                  <p>• Future Support: We&apos;re here to help you grow! Our team can assist with ongoing development, automation, and business process optimization as your business evolves.</p>
                </div>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" name="acceptTerms" required className="mt-1 rounded text-blue-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    I have read and agree to the terms and conditions mentioned above. I understand the scope of work, payment terms, and delivery timeline. *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg"
                >
                  Schedule Strategy Call & Get Started
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  We&apos;ll contact you within 24 hours to schedule your strategy call
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From strategy call to launch - transparent and efficient
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Fill Form & Strategy Call
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete our detailed form above. We&apos;ll schedule a 30-minute strategy call to understand your vision, discuss package options, and finalize requirements.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Confirmation & Payment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive detailed proposal and quote. For Brand Kickstart: pay 50% advance (₹12,500). For Custom Development: payment terms based on project scope.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Design & Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We create your professional online presence with regular updates. Brand Kickstart: 5-7 days. Custom projects: timeline based on scope.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Launch & Ongoing Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Final review, revisions, and launch. We provide all access details and documentation. As you grow, we&apos;re here to help with automation, integrations, and scaling solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Curious with Mayank. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">
            Brand Kickstart - Your first step online. Build momentum, grow smart.
          </p>
        </div>
      </footer>
    </div>
  );
}