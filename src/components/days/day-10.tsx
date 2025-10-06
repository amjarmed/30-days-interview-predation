export default function Day10() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 10: Dynamic Programming Intro
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Learn dynamic programming fundamentals with memoization and tabulation techniques.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Understand memoization vs tabulation</li>
            <li>Practice top-down and bottom-up approaches</li>
            <li>Solve classic DP problems (Fibonacci, Climbing Stairs)</li>
            <li>Complete 2 medium DP problems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📚 DP Fundamentals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Memoization</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Top-down approach using recursion with caching
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Tabulation</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Bottom-up approach using iterative table building
              </p>
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
              <span className="text-slate-600 dark:text-slate-400">Understood memoization</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Practiced tabulation</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Solved classic DP problems</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Completed 2 medium problems</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
