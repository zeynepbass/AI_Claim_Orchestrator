import { cn } from "@/lib/utils";
import StatusBadge from "@/components/process/status-badge";

export default function NodeHeading({ icon: Icon, iconClassName, item }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-2xl",
          iconClassName
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        <StatusBadge status={item.status} className="mt-2" />
      </div>
    </div>
  );
}
