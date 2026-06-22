import Link from "next/link";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionCTA from "@/components/ui/SectionCTA";
import {
  FEATURED_CASE_STUDIES,
  INSIGHTS_INDUSTRIES,
} from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights | CBS",
  description:
    "Discover our latest case studies and industry insights across various sectors.",
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        title="Industry Insights & Case Studies"
        description="Explore our success stories and industry expertise across various sectors in Oman and the GCC region."
      />

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Featured Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_CASE_STUDIES.map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="text-sm font-medium text-primary mb-2">
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted mb-4">{study.description}</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/insights/case-studies"
              className="inline-flex items-center text-primary font-medium hover:opacity-80 transition-opacity"
            >
              View All Case Studies
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {INSIGHTS_INDUSTRIES.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-muted mb-4">{industry.description}</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <SectionCTA
        title="Want to Learn More?"
        description="Contact us to discuss how our solutions can benefit your organization."
        buttonText="Get in Touch"
      />
    </main>
  );
}
