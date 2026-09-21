"use client";

import { TriangleAlert } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useClaimStore } from "@/features/claim/store/claim-store";
import { generateAiExplanation } from "@/features/claim/utils/claim-helpers";

export default function AiExplainSheet() {
  const selectedNode = useClaimStore((state) => state.selectedNode);
  const isAiSheetOpen = useClaimStore((state) => state.isAiSheetOpen);
  const setIsAiSheetOpen = useClaimStore((state) => state.setIsAiSheetOpen);

  return (
    <Sheet open={isAiSheetOpen} onOpenChange={setIsAiSheetOpen}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
            <b>Mio</b>
          </div>

          <SheetTitle className="text-left text-xl">AI Explanation</SheetTitle>
          <SheetDescription className="text-left">
            {selectedNode?.title || "Claim step details"}
          </SheetDescription>
        </SheetHeader>

        <div className="m-2 mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm leading-7 text-slate-700">
              {generateAiExplanation(selectedNode)}
            </p>
          </div>

          {selectedNode?.actionRequired && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <TriangleAlert className="mt-0.5 h-4 w-4 text-amber-700" />
                <div>
                  <p className="text-sm font-semibold text-amber-800">
                    Action Required
                  </p>
                  <p className="mt-1 text-sm text-amber-700">
                    {selectedNode.actionRequired}
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedNode && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Current step
              </p>
              <p className="mt-2 text-sm font-medium text-slate-900">
                {selectedNode.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Status: {selectedNode.status}
              </p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
