import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - Request Received | Curious with Mayank',
  description: 'Thank you for your interest in Brand Kickstart service. We have received your request and will contact you within 24 hours.',
  keywords: 'thank you, request received, Brand Kickstart, Mayank Jain, business consultation',
  openGraph: {
    title: 'Thank You - Request Received',
    description: 'Thank you for your interest in Brand Kickstart service. We have received your request and will contact you within 24 hours.',
    url: 'https://curiouswithmayank.com/thank-you',
    siteName: 'Curious with Mayank',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://curiouswithmayank.com/og-thankyou.jpg',
        width: 1200,
        height: 630,
        alt: 'Thank You - Request Received - Curious with Mayank',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You - Request Received',
    description: 'Thank you for your interest in Brand Kickstart service. We have received your request and will contact you within 24 hours.',
    images: ['https://curiouswithmayank.com/og-thankyou.jpg'],
    creator: '@curiouswithmayank',
  },
  alternates: {
    canonical: 'https://curiouswithmayank.com/thank-you',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8.5h.01M11 12h2v5h-2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 6.5h16a1 1 0 011 1V17a1 1 0 01-1 1H4a1 1 0 01-1-1V7.5a1 1 0 011-1z" />
    <path d="M4 8l8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M6.5 3h3l1 4-2 1.5a11.5 11.5 0 005 5l1.5-2 4 1v3a2 2 0 01-2 2 15.5 15.5 0 01-15.5-15.5 2 2 0 011.5-1.95z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-green-900">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Curious with Mayank
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</Link>
            <Link href="/brand-kickstart" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Brand Kickstart</Link>
            <Link href="/training" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Training</Link>
            <Link href="/podcast" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Podcast</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Success Message */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Thank You!
          </h1>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
              We&apos;ve Received Your Request
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Thank you for your interest in our Brand Kickstart service! We&apos;ve received all your details and 
              are excited to help you launch your business online.
            </p>
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium text-green-800 dark:text-green-400 mb-3">
                What Happens Next?
              </h3>
              <div className="text-left space-y-2 text-green-700 dark:text-green-300">
                <p className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 mt-0.5 text-green-700 dark:text-green-300" />
                  <span><strong>Within 24 hours:</strong> We&apos;ll review your requirements and contact you</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 mt-0.5 text-green-700 dark:text-green-300" />
                  <span><strong>Strategy Call:</strong> 30-minute discussion about your vision and project details</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 mt-0.5 text-green-700 dark:text-green-300" />
                  <span><strong>Proposal:</strong> Detailed quote and timeline based on your needs</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 mt-0.5 text-green-700 dark:text-green-300" />
                  <span><strong>Project Start:</strong> Once approved, we begin creating your professional online presence</span>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6 text-left">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 dark:text-blue-400 mb-2 flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  <span>Check Your Email</span>
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  You&apos;ll receive a confirmation email shortly with your submission details.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 dark:text-purple-400 mb-2 flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>Questions?</span>
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Feel free to reach out if you have any immediate questions or concerns.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/brand-kickstart"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Back to Brand Kickstart
            </Link>
            <Link 
              href="/"
              className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
            >
              Home Page
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-6 py-12 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build Momentum
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            While you wait for our call, here are some things you can start thinking about:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
                <InfoIcon className="w-4 h-4" />
                <span>Visual Identity</span>
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Gather any existing logos, brand colors, or visual elements you&apos;d like to incorporate.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
              <h4 className="font-semibold text-green-900 dark:text-green-400 mb-2 flex items-center gap-2">
                <InfoIcon className="w-4 h-4" />
                <span>Content Ideas</span>
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Think about key messages, services, and what makes your business unique.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h4 className="font-semibold text-purple-900 dark:text-purple-400 mb-2 flex items-center gap-2">
                <InfoIcon className="w-4 h-4" />
                <span>Social Accounts</span>
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Set up your social media accounts if you haven&apos;t already - we&apos;ll connect them all!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Curious with Mayank. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">
            Thank you for choosing Brand Kickstart - Your journey to professional online presence starts now!
          </p>
        </div>
      </footer>
    </div>
  );
}
