const painPoints = [
  "You are posting on Facebook and Instagram but still not getting enough serious inquiries.",
  "You are boosting posts but not seeing the kind of sales that make the spend worth it.",
  "You are not sure what strategy to use, what to test next, or what is actually blocking growth.",
  "You are getting random leads, but not enough of the right customers for your business.",
  "You are still depending mostly on referrals or word of mouth because digital marketing feels confusing.",
  "You are trying to figure out ads, content, landing pages, and follow-up at the same time.",
];

export default function Problem() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-[0_22px_56px_rgba(34,58,14,0.06)] lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">
              Built For Nepal-Based Business Owners
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              If your ads feel expensive, confusing, or inconsistent, you are not alone.
            </h2>
            <p className="mt-6 text-base leading-8 text-[var(--muted)]">
              Many business owners in Nepal are trying hard to grow online, but they still feel stuck between random leads,
              weak follow-up, rising ad costs, and campaigns that never seem stable for long.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              This free consultation is where we slow things down, look at what is really happening in your Meta Ads, and
              turn the confusion into a clearer growth plan you can actually use.
            </p>
          </div>

          <div className="grid gap-4">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-5 shadow-[0_10px_30px_rgba(34,58,14,0.04)]"
              >
                <p className="text-base leading-8 text-[var(--foreground)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
