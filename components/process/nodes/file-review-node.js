import { Clock3, SearchCheck } from "lucide-react";
import InfoTile from "@/components/common/info-tile";
import ExplainButton from "@/components/process/explain-button";
import NodeHeading from "@/components/process/node-heading";
import TimelineNode from "@/components/process/timeline-node";

export default function FileReviewNode({ item, index, isLast }) {
  return (
    <TimelineNode status={item.status} index={index} isLast={isLast}>
      <div className="rounded-3xl border border-blue-200 bg-linear-to-br from-blue-50 to-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <NodeHeading
              icon={SearchCheck}
              iconClassName="bg-blue-100 text-blue-700"
              item={item}
            />

            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Your claim file is actively being reviewed by the insurance team.
              Submitted documents and case details are being validated before
              the next operational step.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <InfoTile
                label="Review referral date"
                value={item.reviewReferralDate}
              />
              <InfoTile
                label="Expected completion"
                value={item.reviewCompletionDate}
              />
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-blue-200 bg-white px-4 py-3 text-sm text-blue-700">
              <Clock3 className="h-4 w-4" />
              This is the current active stage of the claim.
            </div>
          </div>

          <div className="flex shrink-0">
            <ExplainButton item={item} variant="default" />
          </div>
        </div>
      </div>
    </TimelineNode>
  );
}
