type BenefitsProps = {
  title: string;
  benefits: string[];
};

export default function Benefits({ title, benefits }: BenefitsProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">
            What You Will Walk Away With
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit}
              className="rounded-[1.75rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_40px_rgba(34,58,14,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-lg font-semibold text-[var(--brand-deep)]">
                {index + 1}
              </div>
              <p className="mt-5 text-base leading-8 text-[var(--foreground)]">{benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
