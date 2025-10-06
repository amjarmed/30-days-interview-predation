export default function Day6() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Day 6: Rest / Light Review
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📝 Today's Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Take a lighter day to review job requirements and prepare for Week 2's intensive coding practice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🎯 Goals
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>Read job descriptions for target roles</li>
            <li>Note common required skills and technologies</li>
            <li>Review Week 1 accomplishments</li>
            <li>Prepare mentally for algorithm practice starting Week 2</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            🔍 Job Description Analysis
          </h2>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-3">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Common Requirements to Look For:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>JavaScript/TypeScript proficiency</li>
              <li>React/Next.js experience</li>
              <li>RESTful API development</li>
              <li>Database experience (SQL/NoSQL)</li>
              <li>Version control (Git)</li>
              <li>Testing frameworks</li>
              <li>Cloud platforms (AWS, Vercel, etc.)</li>
              <li>Agile/Scrum methodologies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📊 Week 1 Review
          </h2>
          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 dark:text-green-300">Completed ✅</h4>
              <p className="text-green-700 dark:text-green-400 text-sm">Foundation work: resume, GitHub, portfolio polish</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300">Next Week Preview 🎯</h4>
              <p className="text-blue-700 dark:text-blue-400 text-sm">Intensive coding practice and algorithm patterns</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
            ✅ Light Checklist
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Reviewed 3-5 job descriptions</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Listed common skill requirements</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Celebrated Week 1 progress</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Mentally prepared for coding practice</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600 dark:text-slate-400">Planned rest and recovery</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
