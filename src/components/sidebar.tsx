"use client";

import { useState, Dispatch, SetStateAction } from "react";

interface SidebarProps {
  onDaySelect: Dispatch<SetStateAction<string | null>>;
  selectedDay: string | null;
}

const weeks = [
  { title: "Week 1 — Foundation & Resume/GitHub Polish", days: [1, 2, 3, 4, 5, 6] },
  { title: "Week 2 — Algorithms & Coding Practice", days: [7, 7.5, 8, 9, 10, 11, 12, 13] },
  { title: "Week 3 — System Design + Full-Stack Project Polish", days: [14, 15, 16, 17, 17.5, 18, 19, 20] },
  { title: "Week 4 — Behavioral, Mock Interviews, and Final Prep", days: [21, 22, 23, 24, 25, 26, 27, 28, 29, 29.5, 30] },
];
const DaysNavigation = [
  // Week 1 — Foundation & Resume/GitHub Polish
  { day: 1, title: "Day 1: Audit & Plan", href: "/day-1" },
  { day: 2, title: "Day 2: Resume & LinkedIn Polish", href: "/day-2" },
  { day: 3, title: "Day 3: GitHub Hygiene", href: "/day-3" },
  { day: 4, title: "Day 4: Portfolio Microfixes", href: "/day-4" },
  { day: 5, title: "Day 5: Interview Logistics & Environment", href: "/day-5" },
  { day: 6, title: "Day 6: Rest / Light Review", href: "/day-6" },

  // Week 2 — Algorithms & Coding Practice
  { day: 7, title: "Day 7: Core Patterns Overview", href: "/day-7" },
  { day: 7.5, title: "Day 7.5: JavaScript Fundamentals Review", href: "/day-7-5" },
  { day: 8, title: "Day 8: Linked Lists & Stacks/Queues", href: "/day-8" },
  { day: 9, title: "Day 9: Recursion & Trees", href: "/day-9" },
  { day: 10, title: "Day 10: Dynamic Programming Intro", href: "/day-10" },
  { day: 11, title: "Day 11: Graphs & BFS/DFS", href: "/day-11" },
  { day: 12, title: "Day 12: Timed Practice", href: "/day-12" },
  { day: 13, title: "Day 13: Review & Patterns Cheat Sheet", href: "/day-13" },

  // Week 3 — System Design + Full-Stack Project Polish
  { day: 14, title: "Day 14: System Design Basics", href: "/day-14" },
  { day: 15, title: "Day 15: Design a Simple App", href: "/day-15" },
  { day: 16, title: "Day 16: Authentication & Authorization", href: "/day-16" },
  { day: 17, title: "Day 17: Data Layer & Scaling", href: "/day-17" },
  { day: 17.5, title: "Day 17.5: API Testing & Validation", href: "/day-17-5" },
  { day: 18, title: "Day 18: CI/CD & Observability", href: "/day-18" },
  { day: 19, title: "Day 19: Polish Demo Project", href: "/day-19" },
  { day: 20, title: "Day 20: Readable Architecture Doc", href: "/day-20" },

  // Week 4 — Behavioral, Mock Interviews, and Final Prep
  { day: 21, title: "Day 21: Behavioral Fundamentals", href: "/day-21" },
  { day: 22, title: "Day 22: Common Backend/Frontend Questions", href: "/day-22" },
  { day: 23, title: "Day 23: Mock Coding Interview #1", href: "/day-23" },
  { day: 24, title: "Day 24: Take-Home Strategy", href: "/day-24" },
  { day: 25, title: "Day 25: Mock System Design", href: "/day-25" },
  { day: 26, title: "Day 26: Advanced TypeScript & Next.js", href: "/day-26" },
  { day: 27, title: "Day 27: Final Mock Coding #2 + Feedback", href: "/day-27" },
  { day: 28, title: "Day 28: Portfolio & GitHub Final Pass", href: "/day-28" },
  { day: 29, title: "Day 29: Interview Day Rehearsal", href: "/day-29" },
  { day: 29.5, title: "Day 29.5: Reflection & Mindset Prep", href: "/day-29-5" },
  { day: 30, title: "Day 30: Final Checklist & Calm", href: "/day-30" },
];

export function Sidebar() {
  return (
    <aside className="hidden md:block w-1/3 max-h-screen bg-slate-300  overflow-scroll dark:bg-slate-900 border-r border-slate-50 dark:border-slate-800 p-4 ">
      <nav className="space-y-2">
        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-4 py-2 border-b border-slate-200 dark:border-slate-800">
          Days Navigation links
        </h3>
        {
          weeks.map((week, index) => (
            <div key={index}>
              <h3 className="font-semibold text-md text-slate-800 dark:text-slate-200 mt-4 mb-2">{week.title}</h3>
              <nav className="space-y-1">
                {week.days.map((day) => {
                  const item = DaysNavigation.find((item) => item.day === day);
                  return item ? (
                    <Link
                      key={item.day}
                      href={item.href}
                      className="block p-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                    >
                      {item.title}
                    </Link>
                  ) : null;
                })}
              </nav>
            </div>
          ))}
      </nav>
    </aside>
  );
}
