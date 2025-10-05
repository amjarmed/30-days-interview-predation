import Hero from "@/components/hero";
import { Sidebar } from "@/components/sidebar";
import type { Metadata } from "next";

// Page-specific metadata for better SEO
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my 30-day journey preparing for full-stack developer interviews. Follow along as I tackle daily coding challenges, master TypeScript, build Next.js projects, and prepare for technical interviews.",
  openGraph: {
    title: "30 Days Interview Preparation | Full-Stack Developer Journey",
    description: "Welcome to my 30-day journey preparing for full-stack developer interviews. Follow along as I tackle daily coding challenges, master TypeScript, build Next.js projects, and prepare for technical interviews.",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "30 Days Interview Preparation - Full-Stack Developer Journey",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex">
           <Sidebar/>
           <Hero/>
      </main>
      {/* <Footer /> */}
    </>
  );
}
