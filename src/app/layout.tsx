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
  openGraph: {
    title: "Curious with Mayank - Speaker, Podcaster & Brand Strategist",
    description: "Sharing experiences in branding, automation, and business growth through speaking, podcasting, and conversations with fellow entrepreneurs.",
    url: "https://curiouswithmayank.com",
    siteName: "Curious with Mayank",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curious with Mayank - Speaker, Podcaster & Brand Strategist",
    description: "Sharing experiences in branding, automation, and business growth through speaking, podcasting, and conversations with fellow entrepreneurs.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
