import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  images?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

const baseKeywords = [
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
];

const siteConfig = {
  name: "30 Days Interview Preparation",
  url: "https://30-days-interview-prep.vercel.app",
  description: "Follow my 30-day journey preparing for full-stack developer interviews",
  author: "Amjar Mohamed",
  creator: "@amjarmed",
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  images = ["/profile.webp"],
  type = "website",
  publishedTime,
  modifiedTime,
  authors = [siteConfig.author],
}: SEOProps): Metadata {
  const fullTitle = title === "Home" ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    authors: authors.map(author => ({ name: author })),
    creator: siteConfig.author,
    publisher: siteConfig.author,
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
      type,
      locale: "en_US",
      url: canonical ? `${siteConfig.url}${canonical}` : siteConfig.url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: images.map((img) => ({
        url: img.startsWith("http") ? img : `${siteConfig.url}${img}`,
        width: 1200,
        height: 630,
        alt: fullTitle,
      })),
      publishedTime,
      modifiedTime,
      authors: type === "article" ? authors : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((img) =>
        img.startsWith("http") ? img : `${siteConfig.url}${img}`
      ),
      creator: siteConfig.creator,
    },
    alternates: canonical ? { canonical: `${siteConfig.url}${canonical}` } : undefined,
    metadataBase: new URL(siteConfig.url),
  };
}

export function generateStructuredData(type: "Person" | "WebPage" | "Course", data: any) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return JSON.stringify(baseStructuredData);
}

export { siteConfig };
