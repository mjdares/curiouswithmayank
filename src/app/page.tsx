"use client";

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialFollow from '@/components/SocialFollow';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '/brand-kickstart', label: 'Brand Kickstart' },
    { href: '/training', label: 'Training' },
    { href: '/podcast', label: 'Podcast' },
    { href: '/contact', label: 'Contact' },
  ];

  const ArrowIcon = (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M11.586 5H7a1 1 0 100 2h3.586L5.293 12.293a1 1 0 101.414 1.414L12 8.414V12a1 1 0 102 0V6a1 1 0 00-1-1h-5z" />
    </svg>
  );

  const SparkIcon = (
    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.4 5.1L18 6l-3.3 3.6L16.8 13l-4.8-1.2L8 16l1.3-4.5L6 8l4.6-.8L12 2z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.06),transparent_35%)]"
        aria-hidden
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl border border-white/50 bg-white/70 px-4 sm:px-6 py-3 shadow-lg shadow-slate-300/30 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70 dark:shadow-black/40">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-600/80 via-indigo-500/80 to-purple-600/80 shadow-inner shadow-blue-500/30 ring-1 ring-white/40 dark:ring-white/5"
              aria-hidden
            />
            <div>
              <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white">
                Curious with Mayank
              </Link>
              <p className="hidden sm:block text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Brand-led growth for modern founders & creators
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/60 bg-slate-900 text-white shadow-md shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-600 dark:border-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <span>Let&apos;s talk</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
              </svg>
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/60 bg-white/80 p-2 text-slate-700 shadow-sm shadow-slate-200/50 backdrop-blur transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-500"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round">
                {isMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M10 17h10" />}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 max-w-7xl mx-auto rounded-2xl border border-white/60 bg-white/90 px-6 py-5 shadow-lg shadow-slate-300/30 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/80 dark:shadow-black/40 md:hidden">
            <div className="flex flex-col gap-4 text-base font-semibold text-slate-800 dark:text-slate-100">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3 shadow-inner shadow-white/40 ring-1 ring-slate-100/70 transition hover:-translate-y-0.5 hover:ring-blue-200 dark:bg-slate-800/60 dark:ring-slate-700/80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    <span aria-hidden className="text-blue-600 dark:text-blue-300">
                      {ArrowIcon}
                    </span>
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3 shadow-inner shadow-white/40 ring-1 ring-slate-100/70 transition hover:-translate-y-0.5 hover:ring-blue-200 dark:bg-slate-800/60 dark:ring-slate-700/80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    <span aria-hidden className="text-blue-600 dark:text-blue-300">
                      {ArrowIcon}
                    </span>
                  </Link>
                )
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Let&apos;s talk
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/60 via-sky-200/40 to-transparent blur-3xl dark:from-blue-500/20 dark:via-indigo-500/10" />
            <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] bg-gradient-to-br from-purple-200/50 via-blue-200/40 to-transparent dark:from-blue-500/10 dark:via-purple-500/10 dark:to-transparent blur-3xl" />
          </div>
          <div className="relative px-4 sm:px-6 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 shadow-lg shadow-blue-500/10 backdrop-blur dark:bg-slate-900/70 dark:shadow-blue-500/5 border border-slate-100/70 dark:border-slate-800">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner shadow-blue-100 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-500/30">
                    {SparkIcon}
                  </span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 tracking-tight">
                    Workshops, content & community for emerging leaders
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 drop-shadow-sm dark:text-white">
                  Where curiosity becomes
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                    {' '} brand-led growth
                  </span>
                </h2>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
                  Join speaker and strategist Mayank Jain on a multidisciplinary journey through branding, automation and
                  business design. Learn how resilient founders craft memorable experiences, align teams and scale with
                  intention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/training"
                    className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-0.5"
                  >
                    Book a Strategy Session
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
                    </svg>
                  </Link>
                  <a
                    href="https://www.instagram.com/curiouswithmayank/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-slate-300/80 bg-white/70 text-slate-700 backdrop-blur hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all"
                  >
                    Watch the latest content
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm6.5 1.5v7l5-3.5-5-3.5z" />
                    </svg>
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {[{ label: 'Years building businesses', value: '14+' }, { label: 'Teams coached', value: '15+' }, { label: 'Sales (B2B + B2C)', value: '₹100 Cr' }].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/70 bg-white/80 p-6 text-left shadow-lg shadow-slate-300/30 backdrop-blur ring-1 ring-slate-100/60 transition hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-black/40 dark:ring-white/5"
                    >
                      <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl ring-1 ring-slate-100/80 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-blue-900/40 dark:ring-white/5">
                  <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />
                  <div className="relative">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                      Playbook Preview
                    </h3>
                    <p className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                      The &ldquo;Curious with Mayank&rdquo; canvas
                    </p>
                    <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                      Every story, talk, and training breaks down the messy middle of building a business—turning questions
                      into experiments and experiments into repeatable systems.
                    </p>
                    <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                      {['Brand positioning frameworks that scale with your ambition', 'Automation workflows that feel human-first', 'Community-powered learning with candid founder stories'].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner shadow-blue-100 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-500/30">
                            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                              <path d="M6.173 14.727a1 1 0 01-1.414 0l-3.486-3.486a1 1 0 111.414-1.414L5.466 12.6l7.847-7.846a1 1 0 111.414 1.414L6.173 14.727z" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white/70 to-blue-100/70 p-6 text-slate-700 shadow-inner shadow-blue-100/60 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-100">
                      <p className="font-semibold">Upcoming Live Session</p>
                      <p className="mt-2 text-sm leading-relaxed">
                        &ldquo;Designing onboarding journeys that convert&rdquo; – a 90 minute interactive workshop featuring real
                        founder case studies and automation templates you can use immediately.
                      </p>
                      <Link
                        href="/training"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
                      >
                        Reserve your seat
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Programs */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-2xl">
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                  Signature experiences crafted for brand builders
                </h3>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  Choose the path that matches your current season—whether you&apos;re launching a new venture, scaling
                  operations, or reinventing how your brand shows up in the world.
                </p>
              </div>
              <Link
                href="/brand-kickstart"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300"
              >
                Explore all offerings
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M7.293 4.293a1 1 0 011.414 0L14 9.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L11.586 11H4a1 1 0 110-2h7.586L7.293 5.707a1 1 0 010-1.414z" />
                </svg>
              </Link>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[{
                title: 'Brand Kickstart Sprints',
                description:
                  'Two-week strategy labs to unearth your brand story, map customer journeys and build a confident launch plan.',
                focus: 'Ideal for new founders & creators',
                accent: 'from-blue-500/20 via-blue-500/10 to-transparent'
              }, {
                title: 'Automation for Humans',
                description:
                  'Hands-on systems design that connects marketing, sales and service without losing authenticity or empathy.',
                focus: 'Perfect for scaling SMEs',
                accent: 'from-emerald-500/20 via-emerald-500/10 to-transparent'
              }, {
                title: 'Leadership Storytelling',
                description:
                  'Keynotes and workshops that transform founder lessons into narratives teams believe in and customers remember.',
                focus: 'Built for leadership teams',
                accent: 'from-purple-500/20 via-purple-500/10 to-transparent'
              }].map((program) => (
                <div
                  key={program.title}
                  className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur ring-1 ring-slate-100/80 transition-transform hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80 dark:ring-white/5 dark:shadow-black/30"
                >
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${program.accent} blur-2xl`} />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                      Signature format
                    </div>
                    <h4 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">{program.title}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{program.description}</p>
                    <p className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-300">{program.focus}</p>
                    <Link
                      href="/training"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                      Book a discovery call
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Content */}
        <section className="px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                  Featured Content
                </span>
                <h3 className="mt-4 text-3xl sm:text-4xl font-bold">
                  Conversations and experiments to spark your next move
                </h3>
              </div>
              <a
                href="https://youtube.com/@curiouswithmayank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white"
              >
                Browse the full library
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M7.293 4.293a1 1 0 011.414 0L14 9.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L11.586 11H4a1 1 0 110-2h7.586L7.293 5.707a1 1 0 010-1.414z" />
                </svg>
              </a>
            </div>
            <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-10 backdrop-blur">
                <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="relative flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-blue-300/90">
                    Latest drop
                  </div>
                  <h4 className="text-3xl font-semibold">
                    Podcast: Building brands that are brave enough to experiment in public
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-200">
                    A candid conversation about crafting unforgettable customer journeys, automation that feels human, and
                    the habits of founders who design for delight.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-200">
                    {["Brand Storytelling", "Founder Psychology", "Experiential Marketing"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://www.instagram.com/curiouswithmayank/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
                  >
                    Listen & watch highlights
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="grid gap-6">
                {[{
                  title: 'Training topics that move teams forward',
                  description: 'Brand strategy, business automation, revenue enablement and customer experience design packaged into practical sessions.',
                  link: '/training'
                }, {
                  title: 'Weekly insights from the Curious Journal',
                  description: 'A long-form breakdown of experiments, tools and templates used across consulting engagements.',
                  link: '#newsletter'
                }].map((item) => (
                  <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.06] p-8 transition-transform hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <h5 className="text-xl font-semibold">{item.title}</h5>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.description}</p>
                      <Link
                        href={item.link}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 group-hover:text-white"
                      >
                        Discover more
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Journey */}
        <section className="px-6 py-20 bg-white/80 backdrop-blur dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                What working together feels like
              </h3>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Each engagement is designed with intention—from the first curiosity call to the systems you launch. Here&apos;s
                how we co-create outcomes that last.
              </p>
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {[{
                title: 'Listen deeply',
                description:
                  'We unpack your context, customers and constraints to discover the moments that matter most.',
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
                    <path d="M9.75 9a2.25 2.25 0 104.5 0" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 16h8" strokeLinecap="round" />
                  </svg>
                )
              }, {
                title: 'Prototype relentlessly',
                description:
                  'Together we design experiments, playbooks and workshops that your teams can use immediately.',
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 3l7.794 4.5v9L12 21l-7.794-4.5v-9L12 3z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12l7.794-4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              }, {
                title: 'Embed for momentum',
                description:
                  'We build systems, rituals and measurement loops so your team keeps growing long after the session.',
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M20.5 9.5l-4.75 4.75-3.5-3.5L4 19" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 9V4h5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              }].map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg shadow-slate-200/40 transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/30"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100/70 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-500/30">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-20 bg-slate-50/90 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">Meet the host</p>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Mayank Jain
              </h3>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                A self-taught entrepreneur and computer engineer by training, Mayank has spent 14+ years at the
                intersection of sales, marketing and technology. His curiosity-fuelled approach uncovers the human stories
                behind data and transforms them into brand systems that grow with your ambitions.
              </p>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                {[
                  {
                    key: 'distk',
                    content: (
                      <>
                        Founder of{' '}
                        <a
                          href="https://distk.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
                        >
                          Distk.in
                        </a>
                        —building growth systems for ambitious Indian brands.
                      </>
                    )
                  },
                  {
                    key: 'mentor',
                    content: 'Coach and mentor to entrepreneurs at accelerators and community cohorts across India.'
                  },
                  {
                    key: 'host',
                    content: 'Host of the Curious with Mayank podcast sharing candid conversations with practitioners.'
                  }
                ].map((item) => (
                  <li key={item.key} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M6.173 14.727a1 1 0 01-1.414 0l-3.486-3.486a1 1 0 111.414-1.414L5.466 12.6l7.847-7.846a1 1 0 111.414 1.414L6.173 14.727z" />
                      </svg>
                    </span>
                    <span>{item.content}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-200/40 ring-1 ring-slate-100/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/30 dark:ring-white/5">
                <blockquote className="text-lg italic text-slate-700 dark:text-slate-200">
                  “I believe curiosity is a leadership muscle. The more we practice it, the more humane and joyful our
                  businesses become.”
                </blockquote>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                  — Mayank Jain
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-8 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100/70 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/40 dark:ring-white/5">
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                      Collaboration Snapshots
                    </h4>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      Brands, startups and communities that have recently trusted the Curious approach.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    {["SaaS accelerators", "Ed-tech collectives", "Boutique agencies", "SME leadership forums"].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200/60 bg-slate-50/70 p-4 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 text-sm text-slate-700 shadow-inner shadow-blue-100/60 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-100">
                    <p className="font-semibold">Let&apos;s co-create your story</p>
                    <p className="mt-2 leading-relaxed">
                      Share your current challenge and we&apos;ll build a bespoke roadmap—combining content, coaching and
                      systems to unlock the next chapter of growth.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300"
                    >
                      Start a conversation
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Follow */}
        <SocialFollow className="bg-white dark:bg-slate-900" />

        {/* Newsletter Signup */}
        <section id="newsletter" className="px-6 py-20 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 dark:from-indigo-900/40 dark:via-blue-900/30 dark:to-purple-900/40">
          <div className="max-w-5xl mx-auto">
            <NewsletterSignup />
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 text-center text-white shadow-2xl shadow-blue-500/20">
            <div className="mx-auto max-w-3xl">
              <h3 className="text-3xl sm:text-4xl font-bold">
                Ready to spark a conversation that moves your brand forward?
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                Whether it&apos;s a keynote, a workshop or a long-term advisory partnership, let&apos;s design a learning
                experience that unlocks clarity and momentum for your team.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-slate-900 font-semibold hover:bg-slate-100"
                >
                  Plan a collaboration
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" />
                  </svg>
                </Link>
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-transparent px-8 py-3 text-white font-semibold hover:border-white"
                >
                  Explore the podcast
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm6.5 1.5v7l5-3.5-5-3.5z" />
                  </svg>
                </Link>
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
