import Container from "@/components/ui/Container";
import FadeInView from "@/components/ui/FadeInView";

const STATS = [
  { number: "200K+", label: "Active Users" },
  { number: "95%", label: "Client Retention" },
  { number: "100+", label: "Years of Cumulative Experience" },
  { number: "25%+", label: "Return On Investment" },
];

export default function StatsSection() {
  return (
    <section className="bg-primary text-white py-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <FadeInView
              key={stat.label}
              delay={index * 0.2}
              className="text-center group"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
