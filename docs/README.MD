# 30-Day Interview Prep Plan — focused, practical, first remote full-time role

Structure: 5–6 days/week intensity, with specific daily goals. Hands-on + mock interviews + portfolio polishing. Use your stack (Next.js, TypeScript, Tailwind, Supabase, Vercel, Stripe, pnpm). Do every day what you can — if something takes longer, move forward; partial progress is fine.

---

## Week 1 — foundation & resume / GitHub polish

**Day 1 — Audit & plan**

* Inventory: resume, GitHub, deployed projects, LinkedIn, portfolio site. Note gaps.
* Create interview checklist (tech stack, job description match, projects to demo).
* Set calendar: 2× coding practice, 2× system/architecture, 1× mock behavioral weekly.

**Day 2 — Resume & LinkedIn polish**

* Tailor resume bullets to impact (metrics, tech, role). One-page, top 3 lines = summary.
* Update LinkedIn headline and repo links. Ensure contact method visible.

**Day 3 — GitHub hygiene**

* Make README for main projects: quick start, tech, architecture, screenshots, live link.
* Add meaningful commit history (squash small WIP commits, add tags).

**Day 4 — Portfolio microfixes**

* Pick 1 project to deploy/update (Next.js + TypeScript). Ensure SSR/SSG explanations.
* Add “What I built / Why / Challenges / Tech” to each project page.

**Day 5 — Interview logistics & environment**

* Prepare remote setup: VS Code config, terminal, screen recorder, mic/camera, stable network.
* Create a short demo script (2–3 min) to present your main project.

**Day 6 — Rest / light review**

* Read job descriptions for target roles; note common required skills.

---

## Week 2 — Algorithms & coding practice (core)

Goal: build confidence on medium LeetCode problems and patterns.

**Day 7 — Core patterns overview**

* Study array/two-pointers, hashmaps, sliding window. Do 3 easy problems.
* Resource: LeetCode ([https://leetcode.com](https://leetcode.com)).

**Day 7.5 — JavaScript fundamentals review**

* Review key JS topics: closures, promises, async/await, event loop, scope, prototype inheritance, deep vs shallow copy.
* Practice 3–4 short coding challenges focusing on async and data structures.
* Resource: JavaScript.info or Frontend Interview Handbook.

**Day 8 — Linked lists & stacks/queues**

* Read patterns; solve 2 medium linked-list problems + 1 stack/queue.

**Day 9 — Recursion & trees**

* Practice recursion/backtracking basics; 2 medium tree problems.

**Day 10 — Dynamic programming intro**

* Learn memoization vs tabulation with 2 medium DP problems.

**Day 11 — Graphs & BFS/DFS**

* Solve shortest path/BFS problem and one DFS problem (connected components).

**Day 12 — Timed practice**

* Time-box 2 problems (60–90 min each). Simulate whiteboard: speak your approach aloud.

**Day 13 — Review & patterns cheat sheet**

* Build a 1-page patterns cheat sheet you can review before interviews.

---

## Week 3 — System design + full-stack project polish

Goal: explain architecture, tradeoffs, and show a deployed sample.

**Day 14 — System design basics**

* Read capacity, latency, caching, consistency, database choices.
* Resource: Educative “Grokking the System Design Interview” ([https://www.educative.io](https://www.educative.io)).

**Day 15 — Design a simple app**

* Sketch an auth + payments SaaS using Next.js + Supabase + Stripe: components, flows, data model. Write 1-page diagram.

**Day 16 — Deep dive: Authentication & Authorization**

* Implement/verify OAuth/email + JWT session flows. Add notes on refresh tokens & session revocation.
* Resource: Supabase auth docs ([https://supabase.com/docs](https://supabase.com/docs)).

**Day 17 — Data layer & scaling**

* Explain when to use Postgres vs NoSQL; add caching layer (Redis) and CDN usage (Vercel/Edge). Document tradeoffs.

**Day 17.5 — API testing & validation**

* Test your Next.js API routes or Supabase functions using Postman or Thunder Client.
* Validate responses, error handling, and authentication headers.
* Write short documentation of your API endpoints.
* Optional: add simple rate-limiting or input validation middleware (zod).

**Day 18 — CI/CD & observability**

* Add GitHub Actions for tests + deploy to Vercel.
* Add basic logging/monitoring plan (PostHog/Logflare).
* Links: Vercel ([https://vercel.com](https://vercel.com)), PostHog ([https://posthog.com](https://posthog.com)).

**Day 19 — Polish demo project**

* Finalize one deployable project: auth, CRUD, payment stub, responsive UI (Tailwind). Ensure it deploys to Vercel.

**Day 20 — Readable architecture doc**

* Write a 1-page README: goals, architecture diagram, API contract, scaling plan — ready to present.

---

## Week 4 — Behavioral, mock interviews, and final prep

Goal: be ready for remote technical screen + take-home + behavioral.

**Day 21 — Behavioral fundamentals**

* Prepare 6 STAR stories: team conflict, failure, system tradeoff, shipped feature, ownership, learning. Keep concise metrics.

**Day 22 — Common backend/frontend questions**

* Prepare short answers: CORS, SSR vs CSR, hydration, incremental static regeneration (ISR), type narrowing in TypeScript, generics.

**Day 23 — Mock coding interview #1**

* 45–60 min live mock (use Pramp / Interviewing.io / friend). Record it.
* Tools: Pramp ([https://www.pramp.com](https://www.pramp.com)), interviewing.io ([https://interviewing.io](https://interviewing.io)).

**Day 24 — Take-home strategy**

* Template: README with assumptions, list of TODOs prioritized, tests, deployment link, short video walkthrough (2–3 min).

**Day 25 — Mock system design**

* 45 min design interview simulation: explain architecture, draw, talk about tradeoffs, present scaling plan.

**Day 26 — Advanced TypeScript & Next.js**

* Review advanced TS types, inference, utility types; Next.js routing, app router vs pages, server components.
* Docs: TypeScript ([https://www.typescriptlang.org](https://www.typescriptlang.org)), Next.js ([https://nextjs.org/docs](https://nextjs.org/docs)).

**Day 27 — Final mock coding #2 + feedback**

* Focus on speed and clarity. After mock, implement feedback points.

**Day 28 — Portfolio & GitHub final pass**

* Ensure live links, tests run, README clear, demo script ready.
* Add a “How I’d improve this” section for each project.

**Day 29 — Interview day rehearsal**

* Do 1 full dress rehearsal: 30-min coding, 20-min system design, 15–20 min behavioral. Time everything.

**Day 29.5 — Reflection & mindset prep**

* Write 1-page reflection: top strengths, 3 improvement areas, and your “why” for this role.
* Rehearse confidence-building answers and calm breathing before Day 30.

**Day 30 — Final checklist & calm**

* Checklist: resume PDF, GitHub links, deployed project, demo script, Zoom/VS Code link, 3 STAR stories, 1-page patterns cheat sheet.
* Quick warmup: 2 easy LeetCode problems + 10-minute review of your demo script. Sleep well.

---

## Ongoing daily habits (10–30 minutes/day)

* Read one job description and adapt resume keywords.
* 1–2 LeetCode problems (mix easy/medium).
* Review your one-page cheat sheets (algorithms + architecture + demo script).
* Record short self-reviews of mock answers.

---

## Tools / Resources (quick links)

* LeetCode — [https://leetcode.com](https://leetcode.com)
* Next.js docs — [https://nextjs.org/docs](https://nextjs.org/docs)
* TypeScript docs — [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)
* Tailwind CSS — [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* Supabase — [https://supabase.com/docs](https://supabase.com/docs)
* Vercel — [https://vercel.com/docs](https://vercel.com/docs)
* Stripe (payments) — [https://stripe.com/docs](https://stripe.com/docs)
* Educative (Grokking) — [https://www.educative.io](https://www.educative.io)
* Pramp — [https://www.pramp.com](https://www.pramp.com)
* interviewing.io — [https://interviewing.io](https://interviewing.io)
* GitHub Copilot — [https://github.com/features/copilot](https://github.com/features/copilot)
* ChatGPT — [https://chat.openai.com](https://chat.openai.com)

---

## Quick tactical tips

* Speak aloud your approach; narrate time/space complexity first.
* Use small, testable commits for take-homes and include tests.
* For remote: share editor, use 1-line summaries in PRs, and always send a short follow-up email after interviews.
* Automate repetitive prep: use ChatGPT/Copilot to generate outlines, unit tests, and mock answers — but **verify** code manually.

---
