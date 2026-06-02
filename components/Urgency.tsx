type UrgencyProps = {
  steps: string[];
};

export default function Urgency({ steps }: UrgencyProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,#fdfef9_0%,#f3f8e9_100%)] p-8 shadow-[0_24px_60px_rgba(34,58,14,0.08)] lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">
            How The Free Consultation Works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            A simple process that gives you more clarity before you spend more on ads
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <article
              key={step}
              className="rounded-[1.75rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_32px_rgba(34,58,14,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)] text-lg font-semibold text-white">
                {index + 1}
              </div>
              <p className="mt-5 text-base leading-8 text-[var(--foreground)]">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
