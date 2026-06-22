import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionCTA from "@/components/ui/SectionCTA";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries | CBS",
  description:
    "Industry-specific solutions tailored to meet unique business challenges across sectors.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        title="Industry Solutions"
        description="Specialized solutions tailored to meet the unique challenges and requirements of various industries, delivering value through innovation and expertise."
      />

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-6">
                Tailored Solutions for Every Industry
              </h2>
              <p className="text-muted mb-6">
                At CBS, we understand that different industries face unique
                challenges and requirements. Our team of experts develops
                specialized solutions that address these specific needs, helping
                businesses across various sectors thrive in an increasingly
                competitive landscape.
              </p>
              <p className="text-muted">
                From financial services to healthcare, retail to manufacturing,
                our industry-specific expertise allows us to deliver solutions
                that drive efficiency, enhance customer experience, and
                accelerate growth.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-heading mb-4">
                Our Industry Expertise
              </h3>
              <ul className="space-y-3">
                {INDUSTRIES.map((industry) => (
                  <li key={industry.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted">{industry.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={industry.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-2xl font-bold text-heading mb-4">
                  {industry.title}
                </h3>
                <p className="text-muted mb-6">{industry.description}</p>

                <h4 className="text-lg font-semibold text-heading mb-4">
                  Specialized Solutions:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {industry.subIndustries.map((subIndustry) => (
                    <div
                      key={subIndustry.name}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <h5 className="font-medium text-heading mb-2">
                        {subIndustry.name}
                      </h5>
                      <p className="text-sm text-muted">
                        {subIndustry.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SectionCTA
        title="Need a Customized Solution for Your Industry?"
        description="Contact our industry experts to discuss how our tailored solutions can address your specific business challenges and drive growth."
      />
    </main>
  );
}
