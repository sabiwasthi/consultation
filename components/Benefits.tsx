type BenefitsProps = {
  title: string;
  benefits: string[];
  process: string[];
};

export default function Benefits({ title, benefits, process }: BenefitsProps) {
  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Why Book This Call</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit}
              className="rounded-[1.75rem] border border-[var(--border)] bg-white p-6 shadow-[0_10px_35px_rgba(30,51,12,0.05)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm font-semibold text-[var(--brand-deep)]">
                0{index + 1}
              </span>
              <p className="mt-5 text-base leading-8 text-[var(--foreground)]">{benefit}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,#ffffff_0%,#f6f8ee_100%)] p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Process of This Consultation
            </p>
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">A simple 3-step path to your customized strategy</h3>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {process.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-[var(--border)] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Step {index + 1}</p>
                <p className="mt-4 text-base leading-7 text-[var(--foreground)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
