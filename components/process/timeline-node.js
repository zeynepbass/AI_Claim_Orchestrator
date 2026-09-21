import { cn } from "@/lib/utils";
import { getStatusDotClass } from "@/features/claim/utils/claim-helpers";

export default function TimelineNode({ status, index, isLast, children }) {
  return (
    <div className="relative pl-10">
      {!isLast && (
        <div className="absolute left-3.75 top-9 h-[calc(100%-12px)] w-px bg-slate-200" />
      )}

      <div
        className={cn(
          "absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white",
          getStatusDotClass(status)
        )}
      >
        <span className="text-[11px] font-semibold text-white">{index + 1}</span>
      </div>

      {children}
    </div>
  );
}
