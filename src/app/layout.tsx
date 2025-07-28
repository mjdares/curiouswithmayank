import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Speaker, Podcaster & Brand Strategist helping SMEs and startups solve core problems through intelligent branding, automation, and strategic insights.",
  keywords: "Mayank Jain, speaker, podcaster, brand strategist, SME, startup, automation, branding, marketing, curious with mayank, machine with mayank",
  authors: [{ name: "Mayank Jain" }],
  creator: "Mayank Jain",
  openGraph: {
    title: "Curious with Mayank - Speaker, Podcaster & Brand Strategist",
    description: "Speaker, Podcaster & Brand Strategist helping SMEs and startups solve core problems through intelligent branding, automation, and strategic insights.",
    url: "https://curiouswithmayank.com",
    siteName: "Curious with Mayank",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curious with Mayank - Speaker, Podcaster & Brand Strategist",
    description: "Speaker, Podcaster & Brand Strategist helping SMEs and startups solve core problems through intelligent branding, automation, and strategic insights.",
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
        {children}
      </body>
    </html>
  );
}
