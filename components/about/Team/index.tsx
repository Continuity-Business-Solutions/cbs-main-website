"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import TeamMember from "@/components/management/TeamMember";

const TEAM_MEMBERS = [
  {
    firstName: "Mohammed",
    lastName: "Al-Balushi",
    position: "CEO",
    image: "/assets/team/member1.jpg",
    description: "Leading CBS with a vision for business transformation across Oman.",
  },
  {
    firstName: "Fatima",
    lastName: "Al-Harthy",
    position: "Head of Technology",
    image: "/assets/team/member2.jpg",
    description: "Driving technology innovation and digital transformation initiatives.",
  },
  {
    firstName: "Ahmed",
    lastName: "Al-Siyabi",
    position: "Head of Training",
    image: "/assets/team/member3.jpg",
    description: "Overseeing learning and development programs for corporate clients.",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold"
          >
            OUR TEAM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            Meet Our Leadership
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member) => (
            <TeamMember key={member.firstName} {...member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
