"use client";

import Day1 from "@/components/days/day-1";
import Day10 from "@/components/days/day-10";
import Day11 from "@/components/days/day-11";
import Day12 from "@/components/days/day-12";
import Day13 from "@/components/days/day-13";
import Day14 from "@/components/days/day-14";
import Day15 from "@/components/days/day-15";
import Day16 from "@/components/days/day-16";
import Day17 from "@/components/days/day-17";
import Day17_5 from "@/components/days/day-17-5";
import Day18 from "@/components/days/day-18";
import Day19 from "@/components/days/day-19";
import Day2 from "@/components/days/day-2";
import Day20 from "@/components/days/day-20";
import Day21 from "@/components/days/day-21";
import Day22 from "@/components/days/day-22";
import Day23 from "@/components/days/day-23";
import Day24 from "@/components/days/day-24";
import Day25 from "@/components/days/day-25";
import Day26 from "@/components/days/day-26";
import Day27 from "@/components/days/day-27";
import Day28 from "@/components/days/day-28";
import Day29 from "@/components/days/day-29";
import Day29_5 from "@/components/days/day-29-5";
import Day3 from "@/components/days/day-3";
import Day30 from "@/components/days/day-30";
import Day4 from "@/components/days/day-4";
import Day5 from "@/components/days/day-5";
import Day6 from "@/components/days/day-6";
import Day7 from "@/components/days/day-7";
import Day7_5 from "@/components/days/day-7-5";
import Day8 from "@/components/days/day-8";
import Day9 from "@/components/days/day-9";
import Hero from "@/components/hero";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

// Component to render different day content based on selection
const renderDayContent = (selectedDay: string | null) => {
  switch (selectedDay) {
    case "day-1":
      return <Day1 />;
    case "day-2":
      return <Day2 />;
    case "day-3":
      return <Day3 />;
    case "day-4":
      return <Day4 />;
    case "day-5":
      return <Day5 />;
    case "day-6":
      return <Day6 />;
    case "day-7":
      return <Day7 />;
    case "day-7.5":
      return <Day7_5 />;
    case "day-8":
      return <Day8 />;
    case "day-9":
      return <Day9 />;
    case "day-10":
      return <Day10 />;
    case "day-11":
      return <Day11 />;
    case "day-12":
      return <Day12 />;
    case "day-13":
      return <Day13 />;
    case "day-14":
      return <Day14 />;
    case "day-15":
      return <Day15 />;
    case "day-16":
      return <Day16 />;
    case "day-17":
      return <Day17 />;
    case "day-17.5":
      return <Day17_5 />;
    case "day-18":
      return <Day18 />;
    case "day-19":
      return <Day19 />;
    case "day-20":
      return <Day20 />;
    case "day-21":
      return <Day21 />;
    case "day-22":
      return <Day22 />;
    case "day-23":
      return <Day23 />;
    case "day-24":
      return <Day24 />;
    case "day-25":
      return <Day25 />;
    case "day-26":
      return <Day26 />;
    case "day-27":
      return <Day27 />;
    case "day-28":
      return <Day28 />;
    case "day-29":
      return <Day29 />;
    case "day-29.5":
      return <Day29_5 />;
    case "day-30":
      return <Day30 />;
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
