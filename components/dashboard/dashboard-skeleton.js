const SUMMARY_PLACEHOLDERS = [1, 2, 3, 4];

export default function DashboardSkeleton() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-5">
        <div className="h-10 w-72 rounded-xl bg-slate-200" />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SUMMARY_PLACEHOLDERS.map((item) => (
            <div key={item} className="h-32 rounded-2xl bg-white shadow-sm" />
          ))}
        </div>

        <div className="h-28 rounded-2xl bg-white shadow-sm" />

        <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="h-150 rounded-2xl bg-white shadow-sm" />
          <div className="h-105 rounded-2xl bg-white shadow-sm" />
        </div>
      </div>
    </main>
  );
}
