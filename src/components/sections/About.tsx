"use client";

import Image from "next/image";
import {
  ArrowRight,
  FolderKanban,
  Users,
  Code2,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aboutStats,
  coreCompetencies,
  platforms,
  siteConfig,
} from "@/lib/data";
import {
  UpworkWordmark,
  FiverrWordmark,
  LinkedInWordmark,
} from "@/components/ui/PlatformIcons";

const iconMap = {
  folder: FolderKanban,
  users: Users,
  code: Code2,
  clock: Clock,
};

const platformLogos = {
  Upwork: UpworkWordmark,
  Fiverr: FiverrWordmark,
  LinkedIn: LinkedInWordmark,
};

export function About() {
  return (
    <section id="about" className="section-padding bg-background-alt" aria-labelledby="about-heading">
      <div className="container-section">
        <FadeIn>
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                Get To Know{" "}
                <span className="text-primary">Me Better</span>
              </>
            }
            description="A passionate developer who loves turning ideas into reality with AI-powered precision"
          />
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left" className="relative mx-auto w-full max-w-md">
            <div className="relative rotate-[-3deg] overflow-hidden rounded-2xl border border-card-border bg-white p-3 shadow-soft transition-transform hover:rotate-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-accent-soft">
                <Image
                  src="/images/profile.jpg"
                  alt={`${siteConfig.name} working as a full stack developer`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-[center_15%]"
                />
              </div>
              {/* Orange accent corner */}
              <div
                className="pointer-events-none absolute inset-3 rounded-xl ring-2 ring-primary/20"
                aria-hidden="true"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 rounded-2xl border border-card-border bg-white px-4 py-3 shadow-card sm:right-4">
              <p className="text-2xl font-extrabold text-primary">
                {siteConfig.stats.yearsExp}
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                Year Exp
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <h3
                id="about-heading"
                className="text-2xl font-extrabold text-foreground md:text-3xl"
              >
                I Build{" "}
                <span className="text-primary">Digital Experiences</span> With
                AI-Powered Precision
              </h3>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I&apos;m {siteConfig.name.split(" ")[0]}, a Full Stack Developer
                who builds modern websites, applications, and browser extensions
                using cutting-edge tools — including AI coding assistants like
                Cursor AI and Claude.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                From clean UI design to robust backend architecture, I handle
                end-to-end delivery with care. AI accelerates my workflow; craft
                and attention to detail keep the quality high.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <h4 className="mt-8 text-sm font-bold uppercase tracking-wider text-foreground">
                Core Competencies
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {coreCompetencies.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-card-border bg-white px-3 py-1.5 text-sm font-medium text-foreground shadow-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="#contact"
                  variant="primary"
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  Let&apos;s Work Together
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat, i) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-card-border bg-white p-6 shadow-soft transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-2xl font-extrabold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-foreground">
              Trusted By Clients From
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I&apos;ve had the privilege to work with clients across these
              platforms
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {platforms.map((platform) => {
                const Logo =
                  platformLogos[platform.name as keyof typeof platformLogos];
                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-16 items-center justify-center rounded-2xl border border-[#E8E8E8] bg-[#F5F5F5] px-6 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-soft sm:px-8"
                  >
                    {Logo && <Logo />}
                  </a>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
