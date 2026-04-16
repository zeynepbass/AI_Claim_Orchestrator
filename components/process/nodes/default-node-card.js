"use client";

import { Button } from "@/components/ui/button";
import {
  formatKeyLabel,
  generateAiExplanation,
  getStatusBadgeClass,
  getStatusDotClass,
} from "@/features/claim/utils/claim-helpers";
import { useClaimStore } from "@/features/claim/store/claim-store";
import { Bot } from "lucide-react";

export default function DefaultNodeCard({ item, index, isLast }) {
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

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                {item.title}
              </h3>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusBadgeClass(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {Object.entries(item).map(([key, value]) => {
                if (key === "title" || key === "status") return null;

                return (
                  <div
                    key={key}
                    className="rounded-xl bg-slate-50 px-3 py-2 text-sm"
                  >
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {formatKeyLabel(key)}
                    </p>
                    <p className="mt-1 break-words font-medium text-slate-800">
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex shrink-0">
            <Button
              onClick={handleExplain}
              variant="outline"
              className="w-full gap-2 rounded-xl md:w-auto"
            >
              <Bot className="h-4 w-4" />
              Explain with AI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}