"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Sparkles,
  Boxes,
  FileCode2,
  Wind,
  Server,
  Bot,
  Database,
  Braces,
  Puzzle,
  GitBranch,
  Cloud,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { skillHighlights, skills } from "@/lib/data";

const skillIcons = [
  Boxes,
  FileCode2,
  Wind,
  Server,
  Bot,
  Database,
  Cloud,
  Braces,
  Puzzle,
  GitBranch,
];

const highlightIcons = {
  code: Code2,
  zap: Zap,
  sparkles: Sparkles,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Skills() {
  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="container-section">
        <FadeIn>
          <SectionHeading
            eyebrow="Technical Expertise"
            title={
              <>
                Skills & <span className="text-primary">Technologies</span>
              </>
            }
            description="Modern tools I use to design, build, and ship production-ready web apps"
          />
        </FadeIn>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3"
        >
          {skills.map((skill, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="group flex cursor-default items-center gap-2.5 rounded-full border border-card-border bg-white px-4 py-2.5 shadow-soft transition-colors hover:border-primary/30 hover:bg-accent-soft sm:px-5 sm:py-3"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${skill.tint}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-foreground sm:text-base">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {skillHighlights.map((highlight, i) => {
            const Icon =
              highlightIcons[highlight.icon as keyof typeof highlightIcons];
            return (
              <FadeIn key={highlight.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 24 }}
                  className="h-full rounded-2xl border border-card-border bg-white p-6 shadow-soft"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-12">
          <CtaBanner
            title="Ready to Build Something Amazing?"
            description="Let's collaborate and bring your ideas to life with modern technologies"
            primaryLabel="Start a Project"
          />
        </div>
      </div>
    </section>
  );
}
