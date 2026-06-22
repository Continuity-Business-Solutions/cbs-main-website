"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Background polygons */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] transform translate-x-1/3 -translate-y-1/4">
          <div className="absolute w-full h-full bg-primary/5 clip-polygon-1" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] transform -translate-x-1/3 translate-y-1/4">
          <div className="absolute w-full h-full bg-primary/5 clip-polygon-3" />
        </div>
      </div>

      <Container className="relative z-30">
        <div className="flex flex-col lg:flex-row gap-8 items-center min-h-[700px]">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center min-h-[600px] pt-20 pb-20 lg:py-32 w-full lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                <span className="text-primary">Empowering</span>
                <br />
                <span className="text-gray-900">Businesses</span>
              </h1>
            </motion.div>

            <motion.p
              className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Helping organizations achieve continuous improvement through
              innovative technology solutions and strategic consulting.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-medium inline-flex items-center text-lg">
                  Get Started
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>

              <Link
                href="/services"
                className="group relative px-8 py-4 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
              >
                <div className="absolute inset-0 bg-gray-50" />
                <span className="relative text-gray-700 group-hover:text-primary font-medium inline-flex items-center text-lg">
                  Explore Services
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image inside animated polygon */}
          <div className="relative h-[400px] lg:h-[600px] w-full lg:w-1/2 flex items-center justify-center">
            <motion.div
              className="absolute w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-[90%] h-[90%] bg-gradient-to-br from-[#e3a1b6] to-[#8c1c4e] rounded-lg shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                <Image
                  src="/images/Untitled-1.png"
                  alt="Business transformation hero"
                  fill
                  priority
                  className="object-cover clip-polygon-hero"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Visual enhancements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>

                {/* Border glow */}
                <div className="absolute inset-0 border-4 border-white/10 clip-polygon-hero pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
