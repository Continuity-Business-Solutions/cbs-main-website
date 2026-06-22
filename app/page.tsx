import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

const ServicesSection = dynamic(
  () => import("@/components/home/ServicesSection"),
  { loading: () => <SectionPlaceholder /> }
);
const WhyUsSection = dynamic(
  () => import("@/components/home/WhyUsSection"),
  { loading: () => <SectionPlaceholder /> }
);
const StatsSection = dynamic(
  () => import("@/components/home/StatsSection"),
  { loading: () => <SectionPlaceholder /> }
);
const ClientsSection = dynamic(
  () => import("@/components/home/clients"),
  { loading: () => <SectionPlaceholder /> }
);
const CTASection = dynamic(() => import("@/components/home/CTASection"), {
  loading: () => <SectionPlaceholder />,
});
const PartnersSection = dynamic(
  () => import("@/components/home/PartnersSection"),
  { loading: () => <SectionPlaceholder /> }
);

function SectionPlaceholder() {
  return <div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />;
}

export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <HeroSection />
      </section>

      <section className="bg-gray-50 py-2">
        <ServicesSection />
      </section>

      <section className="bg-white py-8">
        <WhyUsSection />
      </section>

      <section className="bg-gray-50 py-8">
        <StatsSection />
      </section>

      <section className="bg-white py-24">
        <ClientsSection />
      </section>

      <section className="bg-white pb-24">
        <CTASection />
      </section>

      <section className="bg-gray-50 py-8">
        <PartnersSection />
      </section>
    </main>
  );
}
