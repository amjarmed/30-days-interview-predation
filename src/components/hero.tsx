import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
  <div className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto text-center space-y-8">
            {/* Hero section with semantic HTML */}
            <header className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Welcome to my 30 days of Interview Preparation
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                This is a journey to enhance my coding skills and prepare for technical interviews.
              </p>
            </header>

            {/* Profile section with optimized image */}
            <section className="flex justify-center py-8" aria-label="Profile section">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse" aria-hidden="true"></div>
                <Image
                  src="/profile.webp"
                  alt="Amjar Mohamed - Full-Stack Developer preparing for technical interviews"
                  width={120}
                  height={120}
                  priority
                  className="relative rounded-full border-4 border-white dark:border-slate-800 shadow-xl hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 120px, 120px"
                />
              </div>
            </section>

            {/* Call to action section */}
            <section className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
              <p className="text-lg text-slate-700 dark:text-slate-200 font-medium">
                Stay tuned for daily coding challenges, solutions, and insights!
              </p>

            </section>
             <Link
                href="/platform"
                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors duration-300"
              >
                Follow My Journey
              </Link>


            {/* Decorative elements */}
            <div className="flex justify-center space-x-4 pt-8" aria-hidden="true">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
            </div>

            {/* Hidden structured data for better SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  name: "30 Days Interview Preparation",
                  description: "A 30-day journey preparing for full-stack developer interviews with daily coding challenges and technical practice.",
                  url: "https://30-days-interview-predation.vercel.app/",
                  mainEntity: {
                    "@type": "Course",
                    name: "30 Days Interview Preparation",
                    description: "Comprehensive interview preparation covering algorithms, system design, and full-stack development",
                    provider: {
                      "@type": "Person",
                      name: "Amjar Mohamed",
                    },
                    courseMode: "online",
                    educationalCredentialAwarded: "Programming Skills",
                  },
                }),
              }}
            />
          </article>
        </div>

    </>
  );
}
