import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionCTA from "@/components/ui/SectionCTA";

interface ServicePageLayoutProps {
  breadcrumbItems: Array<{ label: string; href?: string }>;
  title: string;
  description: string;
  children: React.ReactNode;
  cta?: {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
  };
}

export default function ServicePageLayout({
  breadcrumbItems,
  title,
  description,
  children,
  cta,
}: ServicePageLayoutProps) {
  return (
    <main>
      <PageHero
        breadcrumbItems={breadcrumbItems}
        title={title}
        description={description}
      />
      {children}
      {cta && (
        <SectionCTA
          title={cta.title}
          description={cta.description}
          buttonText={cta.buttonText}
          buttonHref={cta.buttonHref}
        />
      )}
    </main>
  );
}

export { Container };
