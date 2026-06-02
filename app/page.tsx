import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

const benefits = [
  "A clearer picture of what is hurting your Meta Ads performance right now",
  "Actionable advice to improve your targeting, creatives, offer, and follow-up",
  "A better understanding of where your ad budget is being wasted",
  "Practical ideas to attract more serious leads instead of random inquiries",
  "A more confident direction for scaling leads, sales, and revenue",
  "Recommendations tailored to your business instead of generic marketing advice",
];

const steps = [
  "Fill up the form",
  "Receive an email with the appointment link",
  "Fill the appointment form",
  "Join the 1:1 consultation call",
  "Get your customized digital marketing plan for free",
];

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The consultation is completely free. The goal is to understand your current Meta Ads situation and give you useful guidance you can apply to your business.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "This consultation is for Nepal-based business owners who want more leads, customers, and sales but feel stuck with confusing or inconsistent digital marketing results.",
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will get a practical review of what may be holding your ads back, where the opportunities are, and what changes can help improve your advertising results.",
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The consultation is planned as a focused 1-hour conversation so there is enough time to understand your business and give you helpful next steps.",
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. If you only have a Facebook page or another business page, that is fine. The consultation is about understanding your business and your current marketing setup.",
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "After you submit the form, you will be redirected to the thank-you page and then contacted with the next steps for your appointment.",
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The goal of the call is to help you leave with clearer direction and practical recommendations tailored to your business goals and current challenges.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        headline="Turn Your Ad Budget Into Consistent Leads & Sales"
        subheadline="Get a free 1:1 consultation to uncover hidden issues in your Meta Ads, identify growth opportunities, and receive actionable recommendations tailored to your business."
        description="Every business deserves advertising that delivers real results. In this free 1:1 Meta Ads consultation, we&apos;ll review your current Facebook and Instagram advertising efforts, identify opportunities for improvement, and discuss proven strategies to generate more leads, sales, and revenue. Whether you&apos;re struggling with low-performing campaigns, high advertising costs, or inconsistent results, you&apos;ll receive practical recommendations tailored to your business goals."
        ctaText="Book your FREE call now"
      />
      <Problem />
      <Benefits title="Simple, useful clarity for your next Meta Ads move" benefits={benefits} />
      <Urgency steps={steps} />
      <FAQ items={faqs} />
      <CTAForm
        title="Book Your FREE 1:1 Consultation Call"
        subtitle="Fill up the form below and we&apos;ll contact you with the next steps."
      />
    </main>
  );
}
