import Image from "next/image";

type HeroProps = {
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
};

export default function Hero({
  headline,
  subheadline,
  description,
  ctaText,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-center lg:justify-start">
          <div className="rounded-full border border-[var(--border)] bg-white/90 px-5 py-3 shadow-[0_10px_30px_rgba(30,51,12,0.08)] backdrop-blur">
            <Image
              src="/logo.png"
              alt="Marketing by Sabi"
              width={220}
              height={80}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-deep)]">
              Free 1:1 Consultation
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              {subheadline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#booking-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-7 py-4 text-center text-base font-semibold text-white transition duration-200 hover:bg-[var(--brand-deep)]"
              >
                {ctaText}
              </a>
              <p className="text-sm text-[var(--muted)]">
                Designed for business owners who want more leads, more sales, and a better marketing strategy.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(95,140,45,0.18),_transparent_60%)]" />
            <div className="relative rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow)]">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(180deg,#fbfcf8_0%,#f1f4e6_100%)] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                  What You Get
                </p>
                <div className="mt-6 space-y-5">
                  {[
                    "A free 1:1 digital marketing consultation call",
                    "A customized growth strategy based on your business goals",
                    "Clear direction on what is stopping your business from getting more customers online",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-white px-4 py-4"
                    >
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm font-bold text-[var(--brand-deep)]">
                        ✓
                      </span>
                      <p className="text-sm leading-7 text-[var(--foreground)] sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
