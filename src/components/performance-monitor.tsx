"use client";

import { useEffect } from "react";

// Performance monitoring and analytics
export function PerformanceMonitor() {
  useEffect(() => {
    // Report Core Web Vitals
    const reportWebVitals = (metric: any) => {
      // In production, send to analytics service
      if (process.env.NODE_ENV === "production") {
        // Example: Send to PostHog, Google Analytics, or other analytics service
        console.log(metric);
      }
    };

    // Measure Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          reportWebVitals({
            name: "LCP",
            value: entry.startTime,
            id: generateUniqueId(),
          });
        }
      }
    });

    observer.observe({ type: "largest-contentful-paint", buffered: true });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        reportWebVitals({
          name: "FID",
          value: (entry as any).processingStart - entry.startTime,
          id: generateUniqueId(),
        });
      }
    });

    try {
      fidObserver.observe({ type: "first-input", buffered: true });
    } catch (e) {
      // FID not supported in all browsers
    }

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
    });

    try {
      clsObserver.observe({ type: "layout-shift", buffered: true });
    } catch (e) {
      // Layout shift not supported in all browsers
    }

    // Report CLS when the page is hidden
    const reportCLS = () => {
      reportWebVitals({
        name: "CLS",
        value: clsValue,
        id: generateUniqueId(),
      });
    };

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        reportCLS();
      }
    });

    // Navigation timing
    window.addEventListener("load", () => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

      reportWebVitals({
        name: "TTFB",
        value: navigation.responseStart - navigation.fetchStart,
        id: generateUniqueId(),
      });

      reportWebVitals({
        name: "Load",
        value: navigation.loadEventEnd - navigation.loadEventStart,
        id: generateUniqueId(),
      });
    });

    // Cleanup observers
    return () => {
      observer.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}

function generateUniqueId(): string {
  return `${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
}
