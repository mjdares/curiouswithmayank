import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialFollow from '@/components/SocialFollow';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training Programs for Entrepreneurs - Brand Strategy & Business Automation | Curious with Mayank',
  description: 'Professional training sessions on brand strategy, business automation, and growth strategies for entrepreneurs and their teams. Book your customized training program today.',
  keywords: 'business training, entrepreneur training, brand strategy training, automation training, SME growth, startup training, business development, Mayank Jain trainer',
  openGraph: {
    title: 'Training Programs for Entrepreneurs - Brand Strategy & Business Automation',
    description: 'Professional training sessions on brand strategy, business automation, and growth strategies for entrepreneurs and their teams.',
    url: 'https://curiouswithmayank.com/training',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Training Programs for Entrepreneurs',
    description: 'Professional training sessions on brand strategy, business automation, and growth strategies for entrepreneurs.',
  },
  alternates: {
    canonical: 'https://curiouswithmayank.com/training',
  },
};

const topics = [
  {
    title: 'Business Process Automation',
    description: 'How to identify, design, and implement automation solutions that drive real ROI',
    items: ['Automation Strategy Framework', 'ROI Measurement & Success Metrics', 'Change Management for Automation'],
    accent: 'from-blue-500/20 via-blue-500/10 to-transparent',
    iconBg: 'bg-blue-50 text-blue-600 ring-blue-100/70 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-500/30',
  },
  {
    title: 'AI Integration in Business',
    description: 'Practical approaches to leveraging AI for competitive advantage',
    items: ['AI Readiness Assessment', 'Implementation Roadmaps', 'Ethical AI Considerations'],
    accent: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
    iconBg: 'bg-emerald-50 text-emerald-600 ring-emerald-100/70 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/30',
  },
  {
    title: 'Digital Transformation',
    description: 'Leading organizational change in the digital age',
    items: ['Digital Strategy Development', 'Technology Adoption Frameworks', 'Cultural Transformation'],
    accent: 'from-purple-500/20 via-purple-500/10 to-transparent',
    iconBg: 'bg-purple-50 text-purple-600 ring-purple-100/70 dark:bg-purple-500/10 dark:text-purple-300 dark:ring-purple-500/30',
  },
  {
    title: 'Brand Building & Strategy',
    description: 'Psychology-driven branding and marketing for SMEs and startups',
    items: ['Brand Psychology & Positioning', 'Marketing Strategy for Startups', 'Customer Psychology & Behavior'],
    accent: 'from-orange-500/20 via-orange-500/10 to-transparent',
    iconBg: 'bg-orange-50 text-orange-600 ring-orange-100/70 dark:bg-orange-500/10 dark:text-orange-300 dark:ring-orange-500/30',
  },
  {
    title: 'Sales & Marketing Training',
    description: 'Comprehensive training programs for growing startups and SMEs',
    items: ['Sales Process Optimization', 'Marketing Strategy for SMEs', 'Customer Psychology Training', 'Growth-Focused Methodologies'],
    accent: 'from-amber-500/20 via-amber-500/10 to-transparent',
    iconBg: 'bg-amber-50 text-amber-600 ring-amber-100/70 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/30',
  },
  {
    title: 'Startup Growth Strategies',
    description: 'Practical growth frameworks for early-stage and scaling companies',
    items: ['Product-Market Fit Strategies', 'Scaling Operations', 'Customer Acquisition', 'Revenue Optimization'],
    accent: 'from-teal-500/20 via-teal-500/10 to-transparent',
    iconBg: 'bg-teal-50 text-teal-600 ring-teal-100/70 dark:bg-teal-500/10 dark:text-teal-300 dark:ring-teal-500/30',
  },
];

export default function TrainingPage() {
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
            <Link href="/training" className="text-blue-600 dark:text-blue-300 font-semibold">Training</Link>
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
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 py-20 sm:py-24">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/60 via-sky-200/40 to-transparent blur-3xl dark:from-blue-500/20 dark:via-indigo-500/10" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] bg-gradient-to-br from-purple-200/50 via-blue-200/40 to-transparent blur-3xl dark:from-blue-500/10 dark:via-purple-500/10" />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 shadow-lg shadow-blue-500/10 backdrop-blur dark:bg-slate-900/70 border border-slate-100/70 dark:border-slate-800 mb-8">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">✦</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Practical sessions for founders & teams</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Training Programs for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"> Entrepreneurs</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Practical training sessions on automation, branding, and business growth
              for entrepreneurs and their teams looking to scale their ventures.
            </p>
          </div>
        </section>

        {/* Training Topics */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Training Topics</h3>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Choose from a range of hands-on programs designed to accelerate your business growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 transition-transform hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30"
                >
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${topic.accent} blur-2xl`} />
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{topic.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{topic.description}</p>
                    <ul className="mt-5 space-y-2">
                      {topic.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Follow */}
        <SocialFollow variant="compact" className="bg-white/80 backdrop-blur dark:bg-slate-900" />

        {/* Newsletter Signup */}
        <section className="px-6 py-20 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 dark:from-indigo-900/40 dark:via-blue-900/30 dark:to-purple-900/40">
          <NewsletterSignup variant="compact" />
        </section>

        {/* Booking Form */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Let&apos;s Connect About Your Training Needs
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Ready to provide practical training for your team? Let&apos;s discuss what program would work best for your organization.
              </p>
            </div>
            <ContactForm type="training" />
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
                Sharing experiences and learnings about automation, branding, and business growth with fellow entrepreneurs and teams.
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