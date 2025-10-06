export default function Day8() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 8: Linked Lists & Stacks/Queues
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Master linked list manipulations and stack/queue operations through hands-on practice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Practice linked list reversal and cycle detection</li>
            <li>Master stack applications (balanced parentheses)</li>
            <li>Implement queue operations efficiently</li>
            <li>Solve 2 medium linked-list problems + 1 stack/queue</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📚 Key Patterns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Linked Lists</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Pointer manipulation, cycle detection, reversal techniques
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Stacks</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                LIFO operations, expression evaluation, balanced parentheses
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Queues</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                FIFO operations, level-order traversal, breadth-first search
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            💡 Recommended Problems
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Reverse Linked List</li>
            <li>Linked List Cycle</li>
            <li>Valid Parentheses (Stack)</li>
            <li>Implement Queue using Stacks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Practiced linked list operations</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Implemented stack applications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Solved queue problems</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Completed 2-3 medium problems</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
