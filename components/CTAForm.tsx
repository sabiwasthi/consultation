"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type CTAFormProps = {
  title: string;
  subtitle: string;
  ctaText: string;
};

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

export default function CTAForm({ title, subtitle, ctaText }: CTAFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (currentValues: FormValues) => {
    const nextErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!currentValues.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!currentValues.email.trim()) {
      nextErrors.email = "Active Email is required.";
    } else if (!emailRegex.test(currentValues.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!currentValues.whatsapp.trim()) nextErrors.whatsapp = "WhatsApp Number is required.";
    if (!currentValues.businessName.trim()) nextErrors.businessName = "Business Name is required.";

    return nextErrors;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.id as keyof FormValues;
    const { value } = event.target;
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
  };

  const inputStyles =
    "mt-2 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3.5 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(67,111,31,0.12)]";

  return (
    <section id="booking-form" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-[var(--shadow)] lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Booking Section</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-md text-base leading-8 text-[var(--muted)]">{subtitle}</p>
          </div>

          <form
            action="https://formsubmit.co/sabiwasthi@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-5"
          >
            <input type="hidden" name="_subject" value="New Consultation Request - Marketing by Sabi" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://127.0.0.1:3000/thank-you" />
            <div>
              <label htmlFor="fullName" className="text-sm font-medium text-[var(--foreground)]">
                Full Name
              </label>
              <input
                id="fullName"
                name="Full Name"
                type="text"
                value={values.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputStyles}
                required
              />
              {errors.fullName ? <p className="mt-2 text-sm text-red-600">{errors.fullName}</p> : null}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
                  Active Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter your active email"
                  className={inputStyles}
                  required
                />
                {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
              </div>

              <div>
                <label htmlFor="whatsapp" className="text-sm font-medium text-[var(--foreground)]">
                  WhatsApp Number
                </label>
                <input
                  id="whatsapp"
                  name="WhatsApp Number"
                  type="tel"
                  value={values.whatsapp}
                  onChange={handleChange}
                  placeholder="Enter your WhatsApp number"
                  className={inputStyles}
                  required
                />
                {errors.whatsapp ? <p className="mt-2 text-sm text-red-600">{errors.whatsapp}</p> : null}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="businessName" className="text-sm font-medium text-[var(--foreground)]">
                  Business Name
                </label>
                <input
                  id="businessName"
                  name="Business Name"
                  type="text"
                  value={values.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className={inputStyles}
                  required
                />
                {errors.businessName ? <p className="mt-2 text-sm text-red-600">{errors.businessName}</p> : null}
              </div>

              <div>
                <label htmlFor="website" className="text-sm font-medium text-[var(--foreground)]">
                  Website / Facebook URL
                </label>
                <input
                  id="website"
                  name="Website / Facebook URL"
                  type="url"
                  value={values.website}
                  onChange={handleChange}
                  placeholder="Optional"
                  className={inputStyles}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-[var(--foreground)]">
                Anything you want to say
              </label>
              <textarea
                id="message"
                name="Anything you want to say"
                rows={5}
                value={values.message}
                onChange={handleChange}
                placeholder="Share anything helpful about your goals or current marketing"
                className={`${inputStyles} resize-none`}
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[var(--muted)]">We respect your privacy. No spam.</p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-7 py-4 text-base font-semibold text-white transition duration-200 hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {submitting ? "Submitting..." : ctaText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
