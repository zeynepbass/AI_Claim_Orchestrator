import { BadgeAlert } from "lucide-react";

function HeroStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export default function DashboardHero({ claim, actionRequired }) {
  return (
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
              <HeroStat label="Claim File No" value={claim.fileNo} />
              <HeroStat
                label="Estimated Time"
                value={claim.estimatedRemainingTime}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-linear-to-br from-amber-50 to-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <BadgeAlert className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Action Required
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Complete the next required step to continue the claim process.
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
  );
}
