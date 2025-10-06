export default function Day12() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 12: Timed Practice
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Simulate real interview conditions with timed problem solving.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Time-box 2 problems (60-90 min each)</li>
            <li>Practice explaining approach aloud</li>
            <li>Simulate whiteboard coding</li>
            <li>Focus on code clarity and optimization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Completed timed practice session</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Practiced verbal explanation</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Simulated interview conditions</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
