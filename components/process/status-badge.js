import { cn } from "@/lib/utils";
import { getStatusBadgeClass } from "@/features/claim/utils/claim-helpers";

export default function StatusBadge({ status, className }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
        getStatusBadgeClass(status),
        className
      )}
    >
      {status}
    </span>
  );
}
