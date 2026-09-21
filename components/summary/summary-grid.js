import { Activity, BadgeAlert, Clock3, FileText } from "lucide-react";
import SummaryCard from "@/components/summary/summary-card";

export default function SummaryGrid({ claim, actionRequired }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <SummaryCard
        title="File Number"
        value={claim.fileNo}
        hint="Unique claim reference"
        icon={<FileText className="h-5 w-5" />}
      />

      <SummaryCard
        title="Current Status"
        value={claim.currentStatus}
        hint="Live process overview"
        icon={<Activity className="h-5 w-5" />}
      />

      <SummaryCard
        title="Estimated Time"
        value={claim.estimatedRemainingTime}
        hint="Projected completion"
        icon={<Clock3 className="h-5 w-5" />}
      />

      <SummaryCard
        title="Action Required"
        value={actionRequired}
        valueClassName="text-amber-600"
        hint="Needs user attention"
        icon={<BadgeAlert className="h-5 w-5" />}
      />
    </section>
  );
}
