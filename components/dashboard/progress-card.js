export default function ProgressCard({ progress, totalSteps }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Claim Progress</p>
          <p className="mt-1 text-3xl font-bold text-slate-900">{progress}%</p>
        </div>

        <div className="text-left md:text-right">
          <p className="text-sm font-medium text-slate-900">
            {totalSteps} steps tracked
          </p>
          <p className="text-xs text-slate-500">
            Based on completed and reported stages
          </p>
        </div>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-slate-900 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
