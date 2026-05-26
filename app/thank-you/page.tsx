import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 text-center shadow-[var(--shadow)] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Thank You</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Your consultation request has been received.
        </h1>
        <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
          Thank you for booking your free 1:1 consultation. We will review your details and contact you with the next
          step.
        </p>

        <div className="mt-10 grid gap-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 text-left">
          <h2 className="text-xl font-semibold">What happens next</h2>
          <p className="text-base leading-7 text-[var(--muted)]">
            1. We review your business details and current marketing situation.
          </p>
          <p className="text-base leading-7 text-[var(--muted)]">
            2. We contact you to confirm your 1:1 consultation call.
          </p>
          <p className="text-base leading-7 text-[var(--muted)]">
            3. You receive a customized marketing strategy for your business.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-7 py-4 text-base font-semibold text-white transition duration-200 hover:bg-[var(--brand-deep)]"
          >
            Continue on WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] px-7 py-4 text-base font-semibold text-[var(--foreground)] transition duration-200 hover:bg-[var(--brand-soft)]"
          >
            Back to Landing Page
          </Link>
        </div>
      </div>
    </main>
  );
}
