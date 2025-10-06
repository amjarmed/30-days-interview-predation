export default function Day7_5() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 7.5: JavaScript Fundamentals Review
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Strengthen your JavaScript foundation with key concepts that frequently appear in interviews.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Review closures, promises, async/await</li>
            <li>Understand event loop and execution context</li>
            <li>Master scope and prototype inheritance</li>
            <li>Practice deep vs shallow copy techniques</li>
            <li>Complete 3-4 short coding challenges</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🧠 Key Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Closures</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Functions that have access to outer scope variables
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Event Loop</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                How JavaScript handles asynchronous operations
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Promises</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Handling asynchronous operations with then/catch
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Prototypes</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                JavaScript's inheritance mechanism
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            💡 Common Interview Questions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Explain the difference between let, const, and var</li>
            <li>What is the event loop and how does it work?</li>
            <li>How do closures work in JavaScript?</li>
            <li>Difference between deep and shallow copy</li>
            <li>How does async/await work compared to promises?</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🔗 Resources
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://javascript.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                JavaScript.info - Comprehensive Guide
              </a>
            </li>
            <li>
              <a
                href="https://frontendinterviewhandbook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Frontend Interview Handbook
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Reviewed closures and scope</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Understood event loop</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Practiced async/await</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Completed coding challenges</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
