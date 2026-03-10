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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(167,139,250,0.06),transparent_35%)]"
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
            <Link href="/brand-kickstart" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors">Brand Kickstart</Link>
            <Link href="/training" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors">Training</Link>
            <Link href="/podcast" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors">Podcast</Link>
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
        {/* Success Message */}
        <section className="relative overflow-hidden px-4 sm:px-6 py-20">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-200/60 via-green-200/40 to-transparent blur-3xl dark:from-emerald-500/20 dark:via-green-500/10" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] bg-gradient-to-br from-blue-200/50 via-emerald-200/40 to-transparent blur-3xl dark:from-blue-500/10 dark:via-emerald-500/10" />

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Thank You!
            </h1>

            <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30 mb-8 text-left">
              <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 text-center">
                We&apos;ve Received Your Request
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 text-center">
                Thank you for your interest in our Brand Kickstart service! We&apos;ve received all your details and
                are excited to help you launch your business online.
              </p>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-6 rounded-2xl mb-6">
                <h3 className="text-lg font-medium text-emerald-800 dark:text-emerald-400 mb-3">
                  What Happens Next?
                </h3>
                <div className="space-y-2 text-emerald-700 dark:text-emerald-300">
                  <p className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 mt-0.5 text-emerald-700 dark:text-emerald-300 shrink-0" />
                    <span><strong>Within 24 hours:</strong> We&apos;ll review your requirements and contact you</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 mt-0.5 text-emerald-700 dark:text-emerald-300 shrink-0" />
                    <span><strong>Strategy Call:</strong> 30-minute discussion about your vision and project details</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 mt-0.5 text-emerald-700 dark:text-emerald-300 shrink-0" />
                    <span><strong>Proposal:</strong> Detailed quote and timeline based on your needs</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 mt-0.5 text-emerald-700 dark:text-emerald-300 shrink-0" />
                    <span><strong>Project Start:</strong> Once approved, we begin creating your professional online presence</span>
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl">
                  <h4 className="font-medium text-blue-800 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <MailIcon className="w-4 h-4" />
                    <span>Check Your Email</span>
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    You&apos;ll receive a confirmation email shortly with your submission details.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-2xl">
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
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl font-medium"
              >
                Back to Brand Kickstart
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-md backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg font-medium dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
              >
                Home Page
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-emerald-600 text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Build Momentum
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              While you wait for our call, here are some things you can start thinking about:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Visual Identity', desc: "Gather any existing logos, brand colors, or visual elements you'd like to incorporate.", color: 'from-blue-500/20 via-blue-500/10 to-transparent', iconColor: 'text-blue-600 dark:text-blue-400' },
                { title: 'Content Ideas', desc: 'Think about key messages, services, and what makes your business unique.', color: 'from-emerald-500/20 via-emerald-500/10 to-transparent', iconColor: 'text-emerald-600 dark:text-emerald-400' },
                { title: 'Social Accounts', desc: "Set up your social media accounts if you haven't already - we'll connect them all!", color: 'from-purple-500/20 via-purple-500/10 to-transparent', iconColor: 'text-purple-600 dark:text-purple-400' },
              ].map((card) => (
                <div
                  key={card.title}
                  className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30"
                >
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${card.color} blur-2xl`} />
                  <div className="relative">
                    <h4 className={`font-semibold mb-2 flex items-center justify-center gap-2 ${card.iconColor}`}>
                      <InfoIcon className="w-4 h-4" />
                      <span>{card.title}</span>
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 bg-slate-950 text-slate-300">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2026 Curious with Mayank. All rights reserved.</p>
          <p className="text-sm text-slate-400 mt-2">
            Thank you for choosing Brand Kickstart - Your journey to professional online presence starts now!
          </p>
        </div>
      </footer>
    </div>
  );
}