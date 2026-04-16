"use client";

import SummaryCard from "@/components/summary/summary-card";
import ProcessList from "@/components/process/process-list";
import AiExplainSheet from "@/components/ai/ai-explain-sheet";
import UploadDocumentBox from "@/components/ai/upload-document-box";

import { useClaimData } from "@/features/claim/hooks/use-claim-data";
import {
  getRequiredAction,
  getClaimProgress,
} from "@/features/claim/utils/claim-helpers";

import {
  Activity,
  BadgeAlert,
  Clock3,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const { data, isLoading, isError } = useClaimData();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50 p-4 md:p-8">
        <div className="mx-auto max-w-7xl animate-pulse space-y-5">
          <div className="h-10 w-72 rounded-xl bg-slate-200" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-32 rounded-2xl bg-white shadow-sm"
              />
            ))}
          </div>

          <div className="h-28 rounded-2xl bg-white shadow-sm" />

          <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
            <div className="h-[600px] rounded-2xl bg-white shadow-sm" />
            <div className="h-[420px] rounded-2xl bg-white shadow-sm" />
          </div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-slate-50 p-4 md:p-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
          Claim dashboard could not be loaded.
        </div>
      </main>
    );
  }

  const actionRequired = getRequiredAction(data.processDetails);
  const progress = getClaimProgress(data.processDetails);

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
   
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                <b>Mio</b>
                AI Powered Claim Experience
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  AI Claim Orchestrator
                </h1>

                <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                  Track your insurance claim progress, understand each step with
                  AI support, and complete required actions from a modern
                  responsive dashboard.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-medium text-slate-500">
                    Claim File No
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {data.fileNo}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-medium text-slate-500">
                    Estimated Time
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {data.estimatedRemainingTime}
                  </p>
                </div>
              </div>
            </div>

     
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <BadgeAlert className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Action Required
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Complete the next required step to continue the claim
                    process.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-amber-200 bg-white p-4">
                <p className="text-sm font-semibold text-amber-700">
                  {actionRequired}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 md:px-8 md:py-8">

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="File Number"
            value={data.fileNo}
            hint="Unique claim reference"
            icon={<FileText className="h-5 w-5" />}
          />

          <SummaryCard
            title="Current Status"
            value={data.currentStatus}
            hint="Live process overview"
            icon={<Activity className="h-5 w-5" />}
          />

          <SummaryCard
            title="Estimated Time"
            value={data.estimatedRemainingTime}
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
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500">
        Claim Progress
      </p>

      <p className="mt-1 text-3xl font-bold text-slate-900">
        {progress}%
      </p>
    </div>

    <div className="text-left md:text-right">
      <p className="text-sm font-medium text-slate-900">
        {data.processDetails.length} steps tracked
      </p>

      <p className="text-xs text-slate-500">
        Based on completed and reported stages
      </p>
    </div>
  </div>

  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
    <div
      className="h-full rounded-full bg-slate-900 transition-all duration-500"
      style={{ width: `${progress}%` }}
    />
  </div>
</section>


        <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Claim Process Timeline
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Review each completed, active, and pending claim step.
                </p>
              </div>

              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {data.processDetails.length} steps
              </div>
            </div>

            <ProcessList items={data.processDetails} />
          </div>

  
          <div className="space-y-6">
            <UploadDocumentBox />

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Quick Overview
              </h3>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Current Phase
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    File Review
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Remaining Time
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {data.estimatedRemainingTime}
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
                    Next Action
                  </p>

                  <p className="mt-1 text-sm font-semibold text-amber-800">
                    {actionRequired}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AiExplainSheet />
    </main>
  );
}