import Image from "next/image";

type HeroProps = {
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
};

export default function Hero({ headline, subheadline, description, ctaText }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(107,159,51,0.14),transparent_55%)]" />
      <div className="mx-auto max-w-5xl text-center">
        <div className="flex justify-center">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-white px-6 py-4 shadow-[0_16px_44px_rgba(34,58,14,0.08)]">
            <Image
              src="/logo.png"
              alt="Marketing by Sabi"
              width={280}
              height={90}
              priority
              className="h-16 w-auto sm:h-20"
            />
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.82)] px-6 py-10 shadow-[var(--shadow)] backdrop-blur sm:px-10 sm:py-14">
          <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-deep)]">
            Free 1:1 Meta Ads Consultation
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-[var(--brand-deep)] sm:text-2xl">
            {subheadline}
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href="#booking-form"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--brand)] px-8 py-4 text-center text-base font-semibold text-white transition duration-200 hover:bg-[var(--brand-deep)]"
            >
              {ctaText}
            </a>
            <p className="text-sm leading-7 text-[var(--muted)]">
              For Nepal-based business owners who want more qualified leads, better sales, and clearer Meta Ads direction.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Spot hidden issues in your current Facebook and Instagram ads",
              "Get practical recommendations you can act on right away",
              "Leave with a clearer plan to improve leads, sales, and return on ad spend",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--border)] bg-white/90 px-5 py-5 text-left shadow-[0_12px_32px_rgba(34,58,14,0.05)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm font-bold text-[var(--brand-deep)]">
                    +
                  </span>
                  <p className="text-sm leading-7 text-[var(--foreground)]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
