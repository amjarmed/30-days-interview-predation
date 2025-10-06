export default function Day30() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 30: Final Checklist & Calm
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Final preparation and mental readiness for upcoming interviews.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Final Checklist
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Resume PDF ready</li>
            <li>GitHub links updated</li>
            <li>Deployed project accessible</li>
            <li>Demo script prepared</li>
            <li>Zoom/VS Code setup tested</li>
            <li>3 STAR stories ready</li>
            <li>Patterns cheat sheet available</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🧘 Final Preparation
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-green-800 dark:text-green-300">
              Quick warmup: 2 easy LeetCode problems + 10-minute review of demo script. Sleep well! 🚀
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">All materials ready</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Environment tested</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Mentally prepared</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
