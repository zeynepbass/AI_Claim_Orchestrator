"use client";

import { Button } from "@/components/ui/button";
import { useClaimStore } from "@/features/claim/store/claim-store";
import {
  generateAiExplanation,
  getStatusBadgeClass,
  getStatusDotClass,
} from "@/features/claim/utils/claim-helpers";
import { BadgeAlert, ReceiptText, Bot } from "lucide-react";

export default function DeductionReasonNode({ item, index, isLast }) {
  const { setSelectedNode, setAiExplanation, setIsAiSheetOpen } = useClaimStore();

  const handleExplain = () => {
    setSelectedNode(item);
    setAiExplanation(generateAiExplanation(item));
    setIsAiSheetOpen(true);
  };

  return (
    <div className="relative pl-10">
      {!isLast && (
        <div className="absolute left-[15px] top-9 h-[calc(100%-12px)] w-px bg-slate-200" />
      )}

      <div
        className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white ${getStatusDotClass(
          item.status
        )}`}
      >
        <span className="text-[11px] font-semibold text-white">{index + 1}</span>
      </div>

      <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <ReceiptText className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <span
                    className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getStatusBadgeClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-600">
                This step lists the deduction categories that may affect the final claim amount.
                A required document is currently missing, so the process cannot move forward yet.
              </p>
            </div>

            <div className="flex shrink-0">
              <Button onClick={handleExplain} variant="outline" className="gap-2 rounded-xl">
                <Bot className="h-4 w-4" />
                Explain with AI
              </Button>
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
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Occupational deduction
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {item.occupationalDeduction}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Appreciation deduction
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {item.appreciationDeduction}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Policy deductible
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {item.policyDeductible}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Non-damage amount
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {item.nonDamageAmount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}