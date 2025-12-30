import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curious with Mayank - Speaker, Podcaster & Brand Strategist",
  description: "Sharing experiences in branding, automation, and business growth through speaking, podcasting, and conversations with fellow entrepreneurs.",
  keywords: "Mayank Jain, speaker, podcaster, brand strategist, SME, startup, automation, branding, marketing, curious with mayank, machine with mayank",
  authors: [{ name: "Mayank Jain" }],
  creator: "Mayank Jain",
  metadataBase: new URL("https://curiouswithmayank.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Curious with Mayank - Speaker, Podcaster & Brand Strategist",
    description: "Sharing experiences in branding, automation, and business growth through speaking, podcasting, and conversations with fellow entrepreneurs.",
    url: "https://curiouswithmayank.com",
    siteName: "Curious with Mayank",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Curious with Mayank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curious with Mayank - Speaker, Podcaster & Brand Strategist",
    description: "Sharing experiences in branding, automation, and business growth through speaking, podcasting, and conversations with fellow entrepreneurs.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

// Schema.org structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mayank Jain",
  alternateName: "Curious with Mayank",
  url: "https://curiouswithmayank.com",
  image: "https://curiouswithmayank.com/og-image.jpg",
  description: "Speaker, Podcaster & Brand Strategist helping SMEs and startups with branding, automation, and business growth.",
  jobTitle: "Brand Strategist & Speaker",
  knowsAbout: [
    "Brand Strategy",
    "Business Automation",
    "Podcasting",
    "Public Speaking",
    "SME Growth",
    "Startup Marketing"
  ],
  sameAs: [
    "https://www.linkedin.com/in/themayankjain/",
    "https://www.instagram.com/curiouswithmayank/"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Distk",
    url: "https://distk.in"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z13KGXNHNN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z13KGXNHNN');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
