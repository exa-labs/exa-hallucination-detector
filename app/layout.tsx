import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

// Load the ABCDiatype font (Regular and Bold only)
const abcdDiatype = localFont({
  src: [
    { path: "./fonts/ABCDiatype-Regular.otf", weight: "400" },
    { path: "./fonts/ABCDiatype-Bold.otf", weight: "700" },
  ],
  variable: "--font-abcd-diatype",
});

// Load the Reckless font (Regular and Medium only)
const reckless = localFont({
  src: [
    { path: "./fonts/RecklessTRIAL-Regular.woff2", weight: "400" },
    { path: "./fonts/RecklessTRIAL-Medium.woff2", weight: "500" },
  ],
  variable: "--font-reckless",
});

export const metadata: Metadata = {
  title: 'Hallucinations Detector Tool',
  description: 'Detect Hallucinations in Your Blogs & Articles Instantly for Free.',
  metadataBase: new URL('https://exa-hallucination-checker.vercel.app/'),
  
  // Favicon
  icons: {
    icon: '/favicon1.ico',
    shortcut: '/favicon1.ico',
    apple: '/favicon1.ico',
  },

  // Open Graph
  openGraph: {
    title: 'Hallucinations Detector Tool',
    description: 'Detect Hallucinations in Your Blogs & Articles Instantly for Free.',
    url: 'https://exa-hallucination-checker.vercel.app/',
    siteName: 'Fact Checker Tool',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hallucinations Detector Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Hallucinations Detector Tool',
    description: 'Detect Hallucinations in Your Blogs & Articles Instantly for Free.',
    images: ['https://exa-hallucination-checker.vercel.app/opengraph-image.jpg'],
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
        className={`${abcdDiatype.variable} ${reckless.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}