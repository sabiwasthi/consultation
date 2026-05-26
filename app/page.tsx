import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

const benefits = [
  "Find out why your current marketing is not bringing enough customers",
  "Get a customized Meta Ads strategy for your business",
  "Learn how to attract better quality leads",
  "Understand what changes can improve your sales",
  "Get a simple growth direction without confusion",
];

const process = [
  "Fill out the booking form",
  "Join the 1:1 consultation call",
  "Receive a customized marketing strategy for your business",
];

export default function Home() {
  return (
    <main>
      <Hero
        headline="Turn Unpredictable Sales Into a Clear Customer Growth Plan"
        subheadline="Get a free 1:1 digital marketing consultation and discover what is stopping your business from getting more customers online."
        description="This consultation is for business owners who want more leads, more sales, and a better marketing strategy. You will get a customized growth strategy based on your business goals and current situation."
        ctaText="Book Free Consultation"
      />
      <Problem />
      <Benefits title="How You Benefit From This Consultation" benefits={benefits} process={process} />
      <Urgency />
      <CTAForm
        title="Book the Call"
        subtitle="Free 1:1 Consultation. Get a customized strategy designed for your business growth goals."
        ctaText="Book Free Consultation"
      />
    </main>
  );
}
