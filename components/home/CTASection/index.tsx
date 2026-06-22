import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import FadeInView from "@/components/ui/FadeInView";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding bg-primary text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <FadeInView>
            <h2 className="section-title !text-white">
              Ready to Transform Your Business?
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-lg text-white/80 mb-8">
              Let&apos;s discuss how we can help you achieve continuous
              improvement and sustainable growth.
            </p>
          </FadeInView>
          <FadeInView delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="btn bg-white text-primary hover:bg-white/90 group inline-flex">
                  Schedule a Consultation
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
              <Link href="/services">
                <span className="btn btn-outline inline-flex">
                  View Our Solutions
                </span>
              </Link>
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
