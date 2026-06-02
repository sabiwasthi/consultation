"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Common questions before you book your call
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="rounded-[1.5rem] border border-[var(--border)] bg-white px-6 py-5 shadow-[0_14px_34px_rgba(34,58,14,0.05)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="text-lg font-semibold text-[var(--foreground)]">{item.question}</span>
                  <span className="text-2xl font-light text-[var(--brand)]">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen ? <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
