"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import { Sidebar } from "@/components/sidebar";
import Day1 from "@/components/days/day-1";

// Component to render different day content based on selection
const renderDayContent = (selectedDay: string | null) => {
  switch (selectedDay) {
    case "day-1":
      return <Day1 />;
    default:
      return <Hero />;
  }
};

export default function Home() {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex">
           <Sidebar onDaySelect={setSelectedContent} selectedDay={selectedContent} />
           {/* Content area that renders different components based on sidebar selection */}
           <section className="content flex-1">
             {renderDayContent(selectedContent)}
            </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
