"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { heroBadges, heroStats, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden section-padding pt-28 md:pt-36"
      aria-label="Hero"
    >
      {/* Soft gradient blobs */}
      <div
        className="gradient-blob -left-32 -top-20 h-80 w-80 bg-primary/20 opacity-60"
        aria-hidden="true"
      />
      <div
        className="gradient-blob -right-24 top-40 h-72 w-72 bg-orange-200/40 opacity-50"
        aria-hidden="true"
      />
      <div
        className="gradient-blob bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 bg-primary/10 opacity-40"
        aria-hidden="true"
      />

      <div className="container-section relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <FadeIn>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-white px-4 py-1.5 text-sm font-medium text-foreground shadow-soft">
                <span
                  className="relative flex h-2.5 w-2.5"
                  aria-hidden="true"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                {siteConfig.availability}
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Hi, I&apos;m{" "}
                <span className="mt-1 block text-primary">{siteConfig.name}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-4 text-lg font-medium text-foreground/80 md:text-xl">
                {siteConfig.role}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                I build modern, high-performance websites and browser
                extensions with AI-assisted development — shipping clean UI and
                production-ready products faster without cutting corners on
                quality.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  Get In Touch
                </Button>
                <Button href="#projects" variant="secondary" size="lg">
                  View Projects
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-6 sm:gap-10">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="min-w-[80px]">
                    <p className="text-2xl font-extrabold text-foreground md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right column — profile */}
          <FadeIn delay={0.2} direction="right" className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating badges */}
              <motion.div
                className="absolute -left-4 top-8 z-20 rounded-full border border-card-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft sm:-left-8 sm:px-4 sm:py-2 sm:text-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {heroBadges[0]}
                </span>
              </motion.div>

              <motion.div
                className="absolute -right-2 top-1/3 z-20 rounded-full border border-card-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft sm:-right-6 sm:px-4 sm:py-2 sm:text-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                {heroBadges[1]}
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border border-card-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft sm:bottom-4 sm:left-0 sm:translate-x-0 sm:px-4 sm:py-2 sm:text-sm"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                {heroBadges[2]}
              </motion.div>

              {/* Profile image with orange ring */}
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/40 to-primary/10 p-[3px] shadow-card">
                  <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-white bg-accent-soft">
                    <Image
                      src="/images/profile.jpg"
                      alt={`${siteConfig.name} — Full Stack Developer`}
                      fill
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                      className="object-cover object-[center_20%]"
                    />
                  </div>
                </div>
                {/* Soft orange glow behind photo */}
                <div
                  className="absolute -inset-4 -z-10 rounded-full bg-primary/25 blur-2xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={0.6} className="mt-16 flex justify-center md:mt-20">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown
                className="h-5 w-5 transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </motion.span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
