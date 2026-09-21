import { BadgeDollarSign, Landmark } from "lucide-react";
import InfoTile from "@/components/common/info-tile";
import ExplainButton from "@/components/process/explain-button";
import NodeHeading from "@/components/process/node-heading";
import TimelineNode from "@/components/process/timeline-node";

const TILE_CLASS = "bg-slate-50 shadow-none";

export default function PaymentInformationNode({ item, index, isLast }) {
  return (
    <TimelineNode status={item.status} index={index} isLast={isLast}>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <NodeHeading
                icon={BadgeDollarSign}
                iconClassName="bg-emerald-50 text-emerald-700"
                item={item}
              />

              <p className="text-sm leading-7 text-slate-600">
                This section contains the prepared payment details for the
                claim. The transfer is still pending and will continue after
                previous steps are finalized.
              </p>
            </div>

            <div className="flex shrink-0">
              <ExplainButton item={item} />
            </div>
          </div>

          <div className="grid gap-4">
            <InfoTile
              label="Payment amount"
              value={item.paymentAmount}
              className={`border border-slate-200 ${TILE_CLASS}`}
              valueClassName="mt-2 text-2xl font-bold"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <InfoTile
                label="Paid to"
                value={item.paidTo}
                className={TILE_CLASS}
              />
              <InfoTile label="Note" value={item.note} className={TILE_CLASS} />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-start gap-3">
                <Landmark className="mt-0.5 h-4 w-4 text-slate-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    IBAN
                  </p>
                  <p className="mt-1 break-all text-sm font-semibold text-slate-900">
                    {item.iban}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TimelineNode>
  );
}
