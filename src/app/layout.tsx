import { PerformanceMonitor } from "@/components/performance-monitor";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimized font loading with display swap for better CLS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Comprehensive SEO metadata following Next.js 15 best practices
export const metadata: Metadata = {
  title: {
    default: "30 Days Interview Preparation | Full-Stack Developer Journey",
    template: "%s | 30 Days Interview Prep",
  },
  description: "Follow my 30-day journey preparing for full-stack developer interviews. Daily coding challenges, TypeScript practice, Next.js projects, and technical interview preparation.",
  keywords: [
    "interview preparation",
    "full-stack developer",
    "coding challenges",
    "TypeScript",
    "Next.js",
    "technical interviews",
    "web development",
    "JavaScript",
    "React",
    "programming portfolio",
    "software engineer",
    "developer journey",
  ],
  authors: [{ name: "Amjar Mohamed" }],
  creator: "Amjar Mohamed",
  publisher: "Amjar Mohamed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://30-days-interview-predation.vercel.app/",
    siteName: "30 Days Interview Preparation",
    title: "30 Days Interview Preparation | Full-Stack Developer Journey",
    description: "Follow my 30-day journey preparing for full-stack developer interviews. Daily coding challenges, TypeScript practice, Next.js projects, and technical interview preparation.",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "30 Days Interview Preparation - Full-Stack Developer Journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "30 Days Interview Preparation | Full-Stack Developer Journey",
    description: "Follow my 30-day journey preparing for full-stack developer interviews. Daily coding challenges, TypeScript practice, Next.js projects, and technical interview preparation.",
    images: ["/profile.webp"],
    creator: "@amjarmed",
  },
  metadataBase: new URL("https://30-days-interview-prep.vercel.app"),
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical resource preloading */}
        <link
          rel="preload"
          href="/profile.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//vercel.com" />
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amjar Mohamed",
              jobTitle: "Full-Stack Developer",
              description: "Full-Stack Developer preparing for technical interviews through a 30-day coding challenge",
              url: "https://30-days-interview-prep.vercel.app",
              sameAs: [
                "https://github.com/amjarmed",
                "https://linkedin.com/in/amjarmed",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Full-Stack Development",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-slate-900 transition-colors duration-300`}
      >
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
