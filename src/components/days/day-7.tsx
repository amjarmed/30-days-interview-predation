export default function Day7() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 7: Core Patterns Overview
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Begin Week 2's intensive coding practice by mastering fundamental algorithm patterns.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Study array/two-pointers patterns</li>
            <li>Master hashmap usage for optimization</li>
            <li>Learn sliding window technique</li>
            <li>Complete 3 easy LeetCode problems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🧠 Core Patterns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Two Pointers</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Use two pointers moving towards each other or in the same direction
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Hash Maps</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Store values for O(1) lookup to optimize time complexity
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Sliding Window</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Maintain a window of elements while iterating through array
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📚 Recommended Problems
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Two Sum (Hash Map)</li>
            <li>Valid Palindrome (Two Pointers)</li>
            <li>Maximum Subarray (Sliding Window)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🔗 Resource
          </h2>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LeetCode Practice Platform
          </a>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Studied two-pointers pattern</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Practiced hashmap optimization</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Learned sliding window technique</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Solved 3 easy problems</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
