export default function Day9() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 9: Recursion & Trees
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Practice recursive thinking and tree traversal algorithms with backtracking fundamentals.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Practice recursive problem decomposition</li>
            <li>Master tree traversal (inorder, preorder, postorder)</li>
            <li>Learn backtracking fundamentals</li>
            <li>Solve 2 medium tree problems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📚 Key Concepts
          </h2>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Recursive Thinking</h4>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Base case identification</li>
              <li>• Recursive relation formulation</li>
              <li>• Tree traversal patterns</li>
              <li>• Backtracking strategies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            💡 Recommended Problems
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Binary Tree Inorder Traversal</li>
            <li>Maximum Depth of Binary Tree</li>
            <li>Path Sum</li>
            <li>Generate Parentheses (Backtracking)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Practiced recursive decomposition</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Mastered tree traversals</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Learned backtracking</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Solved 2 tree problems</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
