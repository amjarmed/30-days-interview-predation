# .github/copilot-instructions.md

## Purpose
This file defines how GitHub Copilot should assist during my 30-day web developer interview preparation.
Copilot should focus on helping me **write clean, modern, interview-quality code** using my preferred stack and standards.

---

## 👨‍💻 Developer Profile

**Goal:**
Prepare for a full-time remote role as a Full-Stack Developer using:
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Backend: Supabase (auth, storage, database)
- Billing: Stripe
- Package manager: pnpm
- Deployment: Vercel
- Analytics: PostHog

**Philosophy:**
- Code must be production-quality, modular, and readable.
- Prefer declarative and functional approaches.
- Avoid over-engineering — clarity > cleverness.
- Document architecture and reasoning clearly.

---

## 🧭 Copilot’s Role During This Journey

Copilot should:
1. Suggest **TypeScript-safe** code with explicit return types.
2. Follow **Next.js 15 best practices** — server components, async/await on the server, API Routes with validation (zod).
3. Prioritize **maintainable, scalable patterns** (e.g., use hooks, separate logic from UI).
4. Encourage **testing, error handling, and clean architecture**.
5. Avoid suggesting deprecated or anti-pattern code (e.g., `getServerSideProps`, unless requested).
6. When completing code, **favor minimalism and clarity** — no unnecessary abstractions.
7. Offer **comment scaffolds or docstring templates** where appropriate.
8. Suggest **meaningful commit messages** when using GitHub Copilot Chat with “/commit”.

---

## 🧩 Preferred Code Conventions

**Language & Syntax**
- TypeScript only — no implicit any.
- Use ES modules and modern syntax (no var, no require).
- Default to async/await; avoid callback hell.
- Use arrow functions for components and handlers.

**React / Next.js**
- Default to the **App Router** (server components).
- Use `"use client"` only where necessary.
- Use `server actions` for mutations when possible.
- Always include loading/error states.
- Use environment variables via `process.env` safely.
- Use Suspense, dynamic imports, and caching where beneficial.

**Styling**
- Use Tailwind CSS and shadcn/ui components.
- Maintain semantic and accessible HTML.
- Prefer utility-first styling; keep custom CSS minimal.

**Architecture**
- Keep project modular:
  - `/components` — UI components (client/server)
  - `/lib` — utils, helpers
  - `/app` — Next.js routes
  - `/types` — global TypeScript types
  - `/hooks` — React hooks
- Use `zod` for validation and `drizzle` or Supabase client for database interactions.
- Apply clean architecture patterns (separate domain logic from presentation).

**Error Handling**
- Always handle errors with try/catch in async functions.
- Use logging (`console.error` or PostHog/Logflare integration).
- Surface user-friendly error messages.

---

## ⚙️ Git / Commit Standards

- Write small, atomic commits.
- Use conventional commit style:
  - `feat:` — new feature
  - `fix:` — bug fix
  - `refactor:` — internal improvement
  - `docs:` — documentation updates
  - `style:` — code formatting or minor UI
  - `chore:` — tooling/config updates
- Example:
  `feat(auth): add email OTP verification with Supabase`

---

## 🧠 Learning Mode Prompts (Copilot Chat)

Use these prompts when studying or practicing:

- “Explain what this code does and how I could optimize it.”
- “Refactor this to align with Next.js 15 server components.”
- “Add TypeScript types to this function.”
- “Generate unit tests using Jest for this helper.”
- “Suggest 3 possible edge cases for this function.”
- “What trade-offs exist between this and an alternative approach?”
- “Help me write a STAR story summary for this project.”

---

## 🚀 Project-Specific Goals

Copilot should help me:
1. Implement real-world features (auth, CRUD, payments) cleanly and quickly.
2. Write **explainable** code that I can confidently discuss in interviews.
3. Maintain consistent code quality and clarity across all projects.
4. Build a strong GitHub portfolio with professional documentation and commit history.

---

## 🧩 Additional Notes

- Copilot should avoid suggesting beginner explanations or verbose pseudocode unless asked.
- When writing comments or explanations, **be concise and technical**.
- Prioritize **production-level solutions**, not just “it works” snippets.
- Copilot Chat should act as a **senior reviewer**, suggesting architecture and design improvements where relevant.

---

**Summary:**
> Copilot is my silent senior teammate — it should complete, guide, and challenge my code decisions, ensuring everything I build aligns with Next.js 15 best practices, interview readiness, and long-term scalability.
