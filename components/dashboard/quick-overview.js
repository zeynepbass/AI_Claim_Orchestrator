import { cn } from "@/lib/utils";

function OverviewItem({ label, value, tone = "default" }) {
  const isWarning = tone === "warning";

  return (
    <div
      className={cn(
        "rounded-2xl p-4",
        isWarning ? "bg-amber-50" : "bg-slate-50"
      )}
    >
      <p
        className={cn(
          "text-xs font-medium uppercase tracking-wide",
          isWarning ? "text-amber-700" : "text-slate-500"
        )}
      >
        {label}
      </p>

      <p
        className={cn(
          "mt-1 text-sm font-semibold",
          isWarning ? "text-amber-800" : "text-slate-900"
        )}
      >
        {value}
      </p>
    </div>
  );
}

export default function QuickOverview({
  currentPhase,
  remainingTime,
  nextAction,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">Quick Overview</h3>

      <div className="mt-4 space-y-3">
        <OverviewItem label="Current Phase" value={currentPhase} />
        <OverviewItem label="Remaining Time" value={remainingTime} />
        <OverviewItem label="Next Action" value={nextAction} tone="warning" />
      </div>
    </div>
  );
}
