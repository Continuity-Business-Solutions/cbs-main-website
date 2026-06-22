import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocationDot,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionCTA from "@/components/ui/SectionCTA";
import { OPEN_POSITIONS } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers | CBS",
  description:
    "Join our team at CBS and be part of transforming businesses in Oman.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        title="Join Our Team"
        description="Be part of a dynamic team dedicated to transforming businesses in Oman. Discover exciting opportunities to grow your career with us."
      />

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-heading mb-12">
            Open Positions
          </h2>
          <div className="grid gap-8">
            {OPEN_POSITIONS.map((position) => (
              <div
                key={position.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold text-heading mb-4 md:mb-0">
                    {position.title}
                  </h3>
                  <a
                    href="#apply"
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors text-center"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-muted">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center text-muted">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-muted">
                    <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
                    {position.salary}
                  </div>
                </div>

                <p className="text-muted mb-4">{position.description}</p>

                <div className="mt-4">
                  <h4 className="font-semibold text-heading mb-2">
                    Requirements:
                  </h4>
                  <ul className="list-disc list-inside text-muted">
                    {position.requirements.map((req) => (
                      <li key={req} className="mb-1">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="apply" className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-heading mb-8">Apply Now</h2>
            <p className="text-muted mb-6">
              Application submissions are coming soon. Email your resume to{" "}
              <a
                href="mailto:info@continuityoman.com"
                className="text-primary hover:underline"
              >
                info@continuityoman.com
              </a>{" "}
              in the meantime.
            </p>
          </div>
        </Container>
      </section>

      <SectionCTA
        title="Ready to Join CBS?"
        description="Reach out to learn more about career opportunities and our culture."
        buttonText="Contact Us"
      />
    </main>
  );
}
