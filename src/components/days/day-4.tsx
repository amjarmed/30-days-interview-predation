export default function Day4() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 4: Portfolio Microfixes
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Polish one main project to deployment-ready state with proper documentation and technical explanations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Pick 1 project to deploy/update (Next.js + TypeScript)</li>
            <li>Ensure SSR/SSG explanations are clear</li>
            <li>Add "What I built / Why / Challenges / Tech" to each project page</li>
            <li>Verify all functionality works properly</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🏗️ Project Structure Template
          </h2>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">What I Built</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Brief description of the application and its purpose</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Why</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Problem it solves or learning objective</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Challenges</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Technical challenges overcome during development</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Tech Stack</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Next.js 15, TypeScript, Tailwind CSS, Supabase, Vercel</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Project deployed to Vercel</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">SSR/SSG implementation documented</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Project description added</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Technical challenges documented</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">All features working properly</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
