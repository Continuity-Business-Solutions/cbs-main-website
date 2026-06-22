import Link from "next/link";
import Container from "@/components/ui/Container";

interface SectionCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function SectionCTA({
  title,
  description,
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}: SectionCTAProps) {
  return (
    <section className="py-20 bg-primary text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">{title}</h2>
          <p className="text-white/80 mb-8">{description}</p>
          <Link
            href={buttonHref}
            className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors inline-block"
          >
            {buttonText}
          </Link>
        </div>
      </Container>
    </section>
  );
}
