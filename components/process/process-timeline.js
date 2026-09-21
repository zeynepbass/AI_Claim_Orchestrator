import ProcessList from "@/components/process/process-list";

export default function ProcessTimeline({ items }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Claim Process Timeline
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Review each completed, active, and pending claim step.
          </p>
        </div>

        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {items.length} steps
        </div>
      </div>

      <ProcessList items={items} />
    </div>
  );
}
