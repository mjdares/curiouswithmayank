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
        {children}
      </body>
    </html>
  );
}
