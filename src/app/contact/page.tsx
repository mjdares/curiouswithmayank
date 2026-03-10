import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialFollow from '@/components/SocialFollow';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Mayank Jain - Business Consultation & Speaking Inquiries | Curious with Mayank',
  description: 'Get in touch with Mayank Jain for business consultation, training sessions, speaking engagements, and podcast collaborations. Expert in branding and automation.',
  keywords: 'contact Mayank Jain, business consultation, speaking inquiries, training sessions, branding expert, automation consultant, podcast guest, business growth',
  openGraph: {
    title: 'Contact Mayank Jain - Business Consultation & Speaking Inquiries',
    description: 'Get in touch with Mayank Jain for business consultation, training sessions, speaking engagements, and podcast collaborations. Expert in branding and automation.',
    url: 'https://curiouswithmayank.com/contact',
    siteName: 'Curious with Mayank',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://curiouswithmayank.com/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Mayank Jain - Business Consultation & Speaking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Mayank Jain - Business Consultation & Speaking Inquiries',
    description: 'Get in touch with Mayank Jain for business consultation, training sessions, speaking engagements, and podcast collaborations.',
    images: ['https://curiouswithmayank.com/og-contact.jpg'],
    creator: '@curiouswithmayank',
  },
  alternates: {
    canonical: 'https://curiouswithmayank.com/contact',
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

const contactOptions = [
  {
    title: 'Training Sessions',
    description: 'Book Mayank for workshops, training programs, and corporate sessions',
    href: '/training',
    linkText: 'Book Now',
    accent: 'from-blue-500/20 via-blue-500/10 to-transparent',
    btnClass: 'bg-blue-600 hover:bg-blue-700',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Podcast Guest',
    description: 'Share your expertise on Curious with Mayank podcast',
    href: '/podcast',
    linkText: 'Apply',
    accent: 'from-purple-500/20 via-purple-500/10 to-transparent',
    btnClass: 'bg-purple-600 hover:bg-purple-700',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Business Consulting',
    description: 'Strategic guidance on branding, automation, and growth for SMEs',
    href: '#general-contact',
    linkText: 'Inquire',
    accent: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
    btnClass: 'bg-emerald-600 hover:bg-emerald-700',
    isAnchor: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
      </svg>
    ),
  },
  {
    title: 'Training Programs',
    description: 'Sales & Marketing training for growing startups and SMEs',
    href: '#general-contact',
    linkText: 'Learn More',
    accent: 'from-amber-500/20 via-amber-500/10 to-transparent',
    btnClass: 'bg-amber-600 hover:bg-amber-700',
    isAnchor: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.06),transparent_35%)]"
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
            <Link href="/podcast" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors">Podcast</Link>
            <Link href="/contact" className="text-blue-600 dark:text-blue-300 font-semibold">Contact</Link>
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
        {/* Hero */}
        <section className="relative overflow-hidden px-4 sm:px-6 py-20 sm:py-24">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/60 via-sky-200/40 to-transparent blur-3xl dark:from-blue-500/20 dark:via-indigo-500/10" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] bg-gradient-to-br from-purple-200/50 via-blue-200/40 to-transparent blur-3xl dark:from-blue-500/10 dark:via-purple-500/10" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Let&apos;s
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"> Connect</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Interested in discussing automation, branding, or business growth? Want to share your story
              on the podcast? Let&apos;s connect and learn from each other.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactOptions.map((option) => (
                <div
                  key={option.title}
                  className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-7 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 transition-transform hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30 flex flex-col"
                >
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${option.accent} blur-2xl`} />
                  <div className="relative flex-1 flex flex-col">
                    <div className="mb-4 text-slate-500 dark:text-slate-400">{option.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{option.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 flex-1">{option.description}</p>
                    {option.isAnchor ? (
                      <a
                        href={option.href}
                        className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white text-sm font-medium shadow-md transition-all hover:-translate-y-0.5 ${option.btnClass}`}
                      >
                        {option.linkText}
                      </a>
                    ) : (
                      <Link
                        href={option.href}
                        className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white text-sm font-medium shadow-md transition-all hover:-translate-y-0.5 ${option.btnClass}`}
                      >
                        {option.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Contact Form */}
        <section className="px-4 sm:px-6 py-20">
          <div id="general-contact" className="max-w-7xl mx-auto">
            <ContactForm type="general" />
          </div>
        </section>

        {/* Social Follow */}
        <SocialFollow variant="compact" className="bg-white/80 backdrop-blur dark:bg-slate-900" />

        {/* Newsletter Signup */}
        <section className="px-6 py-20 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 dark:from-indigo-900/40 dark:via-blue-900/30 dark:to-purple-900/40">
          <NewsletterSignup variant="compact" />
        </section>

        {/* Alternative Contact Methods */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">
              Other Ways to Connect
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Professional Inquiries</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  For business partnerships, consulting, and collaboration opportunities
                </p>
                <a
                  href="mailto:connect@distk.in"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  connect@distk.in
                </a>
              </div>
              <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Follow the Journey</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Stay updated with latest insights and automation trends
                </p>
                <div className="flex justify-center gap-4 text-sm">
                  <a href="https://distk.in" className="text-blue-600 dark:text-blue-400 hover:underline">Distk.in</a>
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  <a href="https://youtube.com/@curiouswithmayank" className="text-blue-600 dark:text-blue-400 hover:underline">YouTube</a>
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  <a href="https://www.linkedin.com/company/distk-technologies/" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  <a href="https://www.instagram.com/curiouswithmayank/" className="text-blue-600 dark:text-blue-400 hover:underline">Instagram</a>
                </div>
              </div>
            </div>
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
                Learning and sharing about automation, branding, and business growth with fellow entrepreneurs.
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
                <Link href="/podcast" className="hover:text-white transition-colors">Podcast</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}