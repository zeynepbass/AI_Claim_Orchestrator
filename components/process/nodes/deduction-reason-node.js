import { BadgeAlert, ReceiptText } from "lucide-react";
import InfoTile from "@/components/common/info-tile";
import ExplainButton from "@/components/process/explain-button";
import NodeHeading from "@/components/process/node-heading";
import TimelineNode from "@/components/process/timeline-node";

export default function DeductionReasonNode({ item, index, isLast }) {
  const deductions = [
    { label: "Occupational deduction", value: item.occupationalDeduction },
    { label: "Appreciation deduction", value: item.appreciationDeduction },
    { label: "Policy deductible", value: item.policyDeductible },
    { label: "Non-damage amount", value: item.nonDamageAmount },
  ];

  return (
    <TimelineNode status={item.status} index={index} isLast={isLast}>
      <div className="rounded-3xl border border-amber-200 bg-linear-to-br from-amber-50 to-white p-5 shadow-sm">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <NodeHeading
                icon={ReceiptText}
                iconClassName="bg-amber-100 text-amber-700"
                item={item}
              />

              <p className="text-sm leading-7 text-slate-600">
                This step lists the deduction categories that may affect the
                final claim amount. A required document is currently missing, so
                the process cannot move forward yet.
              </p>
            </div>

            <div className="flex shrink-0">
              <ExplainButton item={item} />
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <BadgeAlert className="mt-0.5 h-5 w-5 text-amber-700" />
              <div>
                <p className="text-sm font-semibold text-amber-800">
                  Action Required
                </p>
                <p className="mt-1 text-sm text-amber-700">
                  {item.actionRequired}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {deductions.map(({ label, value }) => (
              <InfoTile key={label} label={label} value={value} />
            ))}
          </div>
        </div>
      </div>
    </TimelineNode>
  );
}
