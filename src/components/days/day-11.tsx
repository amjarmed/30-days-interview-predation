export default function Day11() {export default function Day11() {export default function Day11() {

  return (

    <div className="p-8 max-w-4xl mx-auto">  return (  return (

      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">

        Day 11: Graphs & BFS/DFS    <div className="p-8 max-w-4xl mx-auto">    <div className="p-8 max-w-4xl mx-auto">

      </h1>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">

      <div className="space-y-6">

        <section>        Day 11: Graphs & BFS/DFS        Day 11: Graphs ${DAY_TITLE} BFS/DFS

          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">

            📝 Today's Focus      </h1>      </h1>

          </h2>

          <p className="text-slate-600 dark:text-slate-400 mb-4">

            Understand graph representations and traversal algorithms.

          </p>      <div className="space-y-6">      <div className="space-y-6">

        </section>

        <section>        <section>

        <section>

          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">

            🎯 Goals

          </h2>            📝 Today's Focus            ��� Today's Focus

          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">

            <li>Learn graph representations (adjacency list/matrix)</li>          </h2>          </h2>

            <li>Master BFS for shortest path problems</li>

            <li>Practice DFS for connected components</li>          <p className="text-slate-600 dark:text-slate-400 mb-4">          <p className="text-slate-600 dark:text-slate-400 mb-4">

            <li>Solve graph traversal problems</li>

          </ul>            Understand graph representations and traversal algorithms.            Understand graph representations and traversal algorithms.

        </section>

          </p>          </p>

        <section>

          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">        </section>        </section>

            ✅ Checklist

          </h2>

          <div className="space-y-2">

            <label className="flex items-center space-x-2">        <section>        <section>

              <input type="checkbox" className="rounded" />

              <span className="text-slate-600 dark:text-slate-400">Learned graph representations</span>          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">

            </label>

            <label className="flex items-center space-x-2">            🎯 Goals            ��� Goals

              <input type="checkbox" className="rounded" />

              <span className="text-slate-600 dark:text-slate-400">Practiced BFS algorithms</span>          </h2>          </h2>

            </label>

            <label className="flex items-center space-x-2">          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">

              <input type="checkbox" className="rounded" />

              <span className="text-slate-600 dark:text-slate-400">Implemented DFS solutions</span>            <li>Learn graph representations (adjacency list/matrix)</li>            <li>Goal 1 for Day 11</li>

            </label>

          </div>            <li>Master BFS for shortest path problems</li>            <li>Goal 2 for Day 11</li>

        </section>

      </div>            <li>Practice DFS for connected components</li>            <li>Goal 3 for Day 11</li>

    </div>

  );            <li>Solve graph traversal problems</li>          </ul>

}
          </ul>        </section>

        </section>

        <section>

        <section>          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">

          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">            ✅ Checklist

            ✅ Checklist          </h2>

          </h2>          <div className="space-y-2">

          <div className="space-y-2">            <label className="flex items-center space-x-2">

            <label className="flex items-center space-x-2">              <input type="checkbox" className="rounded" />

              <input type="checkbox" className="rounded" />              <span className="text-slate-600 dark:text-slate-400">Task 1 completed</span>

              <span className="text-slate-600 dark:text-slate-400">Learned graph representations</span>            </label>

            </label>            <label className="flex items-center space-x-2">

            <label className="flex items-center space-x-2">              <input type="checkbox" className="rounded" />

              <input type="checkbox" className="rounded" />              <span className="text-slate-600 dark:text-slate-400">Task 2 completed</span>

              <span className="text-slate-600 dark:text-slate-400">Practiced BFS algorithms</span>            </label>

            </label>            <label className="flex items-center space-x-2">

            <label className="flex items-center space-x-2">              <input type="checkbox" className="rounded" />

              <input type="checkbox" className="rounded" />              <span className="text-slate-600 dark:text-slate-400">Task 3 completed</span>

              <span className="text-slate-600 dark:text-slate-400">Implemented DFS solutions</span>            </label>

            </label>          </div>

          </div>        </section>

        </section>      </div>

      </div>    </div>

    </div>  );

  );}

}
