export default function Day3() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 3: GitHub Hygiene
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Clean up your GitHub profile to showcase professional development practices and project quality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Create comprehensive READMEs for main projects</li>
            <li>Include quick start, tech stack, architecture, screenshots, live links</li>
            <li>Add meaningful commit history (squash small WIP commits, add tags)</li>
            <li>Ensure repositories demonstrate best practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📋 README Template
          </h2>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <pre className="text-sm text-slate-700 dark:text-slate-300">
{`# Project Name

## Quick Start
\`\`\`bash
npm install
npm run dev
\`\`\`

## Tech Stack
- Next.js 15
- TypeScript
- Tailwind CSS
- Supabase

## Architecture
Brief explanation of project structure

## Screenshots
![Demo](screenshot.png)

## Live Demo
[Live Link](https://your-app.vercel.app)`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">README files for top 3 projects</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Screenshots added to projects</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Live links included</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Commit history cleaned up</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Tags added for releases</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
