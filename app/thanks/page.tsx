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
          Wait... watch the video before you go
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          Before your consultation, please watch this short video so you know what to do next.
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

        <div className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,#f9fbf4_0%,#eef5e1_100%)] p-5 shadow-[0_14px_34px_rgba(34,58,14,0.05)] sm:p-7">
          <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white">
            {vimeoLink ? (
              <iframe
                src={vimeoLink}
                title="Consultation next steps video"
                allow="autoplay; fullscreen; picture-in-picture"
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-6 text-center">
                <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
                  Your Vimeo video link will go here as soon as you send it.
                </p>
              </div>
            )}
          </div>
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
