"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  aboutStats,
  continuousLearning,
  education,
  experiences,
} from "@/lib/data";

type JourneyItem = {
  year: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
};

function JourneyCard({ item, delay = 0 }: { item: JourneyItem; delay?: number }) {
  return (
    <FadeIn delay={delay} className="h-full">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 350, damping: 24 }}
        className="group flex h-full flex-col rounded-2xl border border-card-border bg-white p-5 shadow-soft transition-colors hover:border-primary/25 sm:p-6"
      >
        <span className="inline-flex w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          {item.year}
        </span>
        <h4 className="mt-3 text-lg font-extrabold leading-snug text-foreground">
          {item.title}
        </h4>
        <p className="mt-1 text-sm font-semibold text-primary">{item.company}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </FadeIn>
  );
}

function ColumnHeader({
  icon: Icon,
  title,
}: {
  icon: typeof Briefcase;
  title: string;
}) {
  return (
    <div className="mb-5 flex min-h-[44px] items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-extrabold text-foreground">{title}</h3>
    </div>
  );
}

export function Experience() {
  const rowCount = Math.max(experiences.length, education.length);

  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="container-section">
        <FadeIn>
          <SectionHeading
            eyebrow="My Journey"
            title={
              <>
                Experience & <span className="text-primary">Education</span>
              </>
            }
            description="Professional journey and education that shaped my development career"
          />
        </FadeIn>

        <FadeIn>
          <div className="rounded-3xl border border-card-border bg-muted/30 p-5 sm:p-6 md:p-8">
            {/* Aligned column headers */}
            <div className="mb-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
              <ColumnHeader
                icon={Briefcase}
                title="Professional Experience"
              />
              <ColumnHeader icon={GraduationCap} title="Education" />
            </div>

            {/* Aligned card rows */}
            <div className="space-y-4">
              {Array.from({ length: rowCount }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid items-stretch gap-4 lg:grid-cols-2 lg:gap-8"
                >
                  {experiences[rowIndex] ? (
                    <JourneyCard
                      item={experiences[rowIndex]}
                      delay={rowIndex * 0.08}
                    />
                  ) : (
                    <div className="hidden lg:block" aria-hidden="true" />
                  )}
                  {education[rowIndex] ? (
                    <JourneyCard
                      item={education[rowIndex]}
                      delay={rowIndex * 0.08 + 0.04}
                    />
                  ) : (
                    <div className="hidden lg:block" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-6 rounded-2xl border border-card-border bg-white p-5 shadow-soft sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="font-extrabold text-foreground">
                  Continuous Learning
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Always staying updated with the latest technologies and best
                  practices.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 md:justify-end">
                {continuousLearning.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-muted px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <div className="mt-14">
          <h3 className="mb-6 text-center text-xl font-extrabold text-foreground">
            Key Achievements
          </h3>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {aboutStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-card-border bg-white px-4 py-6 text-center shadow-soft transition-shadow hover:shadow-lg">
                  <p className="text-3xl font-extrabold text-primary md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <CtaBanner
            title="Let's Build Something Amazing Together"
            description="Ready to start your next project? I'm here to help bring your ideas to life."
            primaryLabel="Get In Touch"
          />
        </div>
      </div>
    </section>
  );
}
