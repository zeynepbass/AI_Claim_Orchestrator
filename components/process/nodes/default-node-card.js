import InfoTile from "@/components/common/info-tile";
import ExplainButton from "@/components/process/explain-button";
import StatusBadge from "@/components/process/status-badge";
import TimelineNode from "@/components/process/timeline-node";
import { formatKeyLabel } from "@/features/claim/utils/claim-helpers";

const HIDDEN_KEYS = ["title", "status"];

export default function DefaultNodeCard({ item, index, isLast }) {
  const details = Object.entries(item).filter(
    ([key]) => !HIDDEN_KEYS.includes(key)
  );

  return (
    <TimelineNode status={item.status} index={index} isLast={isLast}>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                {item.title}
              </h3>

              <StatusBadge status={item.status} />
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {details.map(([key, value]) => (
                <InfoTile
                  key={key}
                  label={formatKeyLabel(key)}
                  value={value}
                  className="rounded-xl bg-slate-50 px-3 py-2 shadow-none"
                  valueClassName="break-words font-medium text-slate-800"
                />
              ))}
            </div>
          </div>

          <div className="flex shrink-0">
            <ExplainButton item={item} className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </TimelineNode>
  );
}
