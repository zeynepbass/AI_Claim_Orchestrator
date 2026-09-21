import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function SummaryCard({
  title,
  value,
  icon,
  valueClassName,
  hint,
}) {
  return (
    <Card className="overflow-hidden border-slate-200 shadow-sm transition-all duration-200 hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <p
              className={cn("text-lg font-semibold text-slate-900", valueClassName)}
            >
              {value}
            </p>
            {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
