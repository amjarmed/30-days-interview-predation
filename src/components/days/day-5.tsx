export default function Day5() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 5: Interview Logistics & Environment
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Set up your remote interview environment and prepare a compelling project demo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Prepare remote setup: VS Code config, terminal, screen recorder</li>
            <li>Test mic/camera and ensure stable network</li>
            <li>Create a short demo script (2–3 min) for your main project</li>
            <li>Practice explaining technical decisions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎬 Demo Script Template
          </h2>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-3">
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">1. Introduction (30s)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"This is [Project Name], a [type] application that [main purpose]"</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">2. Key Features (60s)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Show 2-3 main features with quick navigation</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">3. Technical Highlights (60s)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Mention tech stack, architecture decisions, and challenges solved</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">4. Code Overview (30s)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Brief look at clean code structure</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🛠️ Technical Setup
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>VS Code with relevant extensions</li>
            <li>Terminal with clear font and contrast</li>
            <li>Screen sharing tested</li>
            <li>Backup internet connection</li>
            <li>Quiet environment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">VS Code properly configured</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Screen recording/sharing tested</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Audio/video quality verified</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Demo script written and practiced</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Network stability confirmed</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
