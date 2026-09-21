"use client";

import AiExplainSheet from "@/components/ai/ai-explain-sheet";
import UploadDocumentBox from "@/components/ai/upload-document-box";
import DashboardError from "@/components/dashboard/dashboard-error";
import DashboardHero from "@/components/dashboard/dashboard-hero";
import DashboardSkeleton from "@/components/dashboard/dashboard-skeleton";
import ProgressCard from "@/components/dashboard/progress-card";
import QuickOverview from "@/components/dashboard/quick-overview";
import ProcessTimeline from "@/components/process/process-timeline";
import SummaryGrid from "@/components/summary/summary-grid";
import { useClaimData } from "@/features/claim/hooks/use-claim-data";
import {
  getClaimProgress,
  getCurrentPhase,
  getRequiredAction,
} from "@/features/claim/utils/claim-helpers";

export default function HomePage() {
  const { data, isLoading, isError } = useClaimData();

  if (isLoading) return <DashboardSkeleton />;
  if (isError) return <DashboardError />;

  const { processDetails } = data;
  const actionRequired = getRequiredAction(processDetails);
  const progress = getClaimProgress(processDetails);

  return (
    <main className="min-h-screen bg-slate-50">
      <DashboardHero claim={data} actionRequired={actionRequired} />

      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 md:px-8 md:py-8">
        <SummaryGrid claim={data} actionRequired={actionRequired} />
        <ProgressCard progress={progress} totalSteps={processDetails.length} />

        <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
          <ProcessTimeline items={processDetails} />

          <div className="space-y-6">
            <UploadDocumentBox />
            <QuickOverview
              currentPhase={getCurrentPhase(processDetails)}
              remainingTime={data.estimatedRemainingTime}
              nextAction={actionRequired}
            />
          </div>
        </section>
      </div>

      <AiExplainSheet />
    </main>
  );
}
