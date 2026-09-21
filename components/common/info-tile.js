import { cn } from "@/lib/utils";

export default function InfoTile({ label, value, className, valueClassName }) {
  return (
    <div className={cn("rounded-2xl bg-white p-4 shadow-sm", className)}>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p
        className={cn(
          "mt-1 text-sm font-semibold text-slate-900",
          valueClassName
        )}
      >
        {value}
      </p>
    </div>
  );
}
