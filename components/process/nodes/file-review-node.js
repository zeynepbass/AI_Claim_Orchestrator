"use client";

import { Button } from "@/components/ui/button";
import { useClaimStore } from "@/features/claim/store/claim-store";
import {
  generateAiExplanation,
  getStatusBadgeClass,
  getStatusDotClass,
} from "@/features/claim/utils/claim-helpers";
import { Clock3, SearchCheck, Bot } from "lucide-react";

export default function FileReviewNode({ item, index, isLast }) {
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

      <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <SearchCheck className="h-5 w-5" />
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

            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Your claim file is actively being reviewed by the insurance team.
              Submitted documents and case details are being validated before the next operational step.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Review referral date
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {item.reviewReferralDate}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Expected completion
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {item.reviewCompletionDate}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-blue-200 bg-white px-4 py-3 text-sm text-blue-700">
              <Clock3 className="h-4 w-4" />
              This is the current active stage of the claim.
            </div>
          </div>

          <div className="flex shrink-0">
            <Button onClick={handleExplain} className="gap-2 rounded-xl">
              <Bot className="h-4 w-4" />
              Explain with AI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}