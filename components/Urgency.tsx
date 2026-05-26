export default function Urgency() {
  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[rgba(67,111,31,0.18)] bg-[linear-gradient(135deg,rgba(67,111,31,0.12),rgba(255,255,255,0.95))] p-8 shadow-[0_18px_50px_rgba(30,51,12,0.08)] lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-deep)]">Limited Availability</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Consultation slots are limited so each strategy can stay customized and focused.
          </h2>
        </div>
        <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] lg:mt-0">
          If you want a clear growth direction without confusion, book your free consultation while slots are still open.
        </p>
      </div>
    </section>
  );
}
