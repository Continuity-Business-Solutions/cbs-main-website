import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbItems: BreadcrumbItem[];
  title: string;
  description: string;
}

export default function PageHero({
  breadcrumbItems,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative py-20 bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
      <Container className="relative z-10">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl text-white/80">{description}</p>
        </div>
      </Container>
    </section>
  );
}
