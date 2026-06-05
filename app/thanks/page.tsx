import Image from "next/image";
import Link from "next/link";

const vimeoLink = "";
const whatsappLink = "";

export default function ThanksPage() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 text-center shadow-[var(--shadow)] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">Thank You</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
          Congratulations
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          Thank you for booking your spot for a free 1:1 consultation.
        </p>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faed_100%)] p-3 shadow-[0_16px_40px_rgba(34,58,14,0.08)]">
          <Image
            src="/thank-you-sabi.jpeg"
            alt="Thank you from Sabi"
            width={1548}
            height={1125}
            priority
            className="h-auto w-full rounded-[1.4rem] object-cover"
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink || "#"}
            target={whatsappLink ? "_blank" : undefined}
            rel={whatsappLink ? "noreferrer" : undefined}
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--brand)] px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-[var(--brand-deep)]"
          >
            Chat with me on WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex min-h-13 items-center justify-center rounded-full border border-[var(--border)] px-8 py-4 text-base font-semibold text-[var(--foreground)] transition duration-200 hover:bg-[var(--brand-soft)]"
          >
            Back to Landing Page
          </Link>
        </div>

        {!whatsappLink ? (
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Your WhatsApp chat link will be added here after you send it.
          </p>
        ) : null}
      </div>
    </main>
  );
}
