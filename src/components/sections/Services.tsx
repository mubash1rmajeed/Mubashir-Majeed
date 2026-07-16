"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layout, Server, Layers, Bot, Puzzle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

const icons = {
  layout: Layout,
  server: Server,
  layers: Layers,
  bot: Bot,
  puzzle: Puzzle,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-background-alt"
      aria-labelledby="services-heading"
    >
      <div className="container-section">
        <FadeIn>
          <SectionHeading
            eyebrow="What I Do"
            title={
              <>
                Services I <span className="text-primary">Offer</span>
              </>
            }
            description="End-to-end web development — websites, apps, and browser extensions, accelerated with AI"
          />
        </FadeIn>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const isFeatured = service.icon === "bot";
            const isLastOdd =
              services.length % 2 === 1 && index === services.length - 1;

            return (
              <motion.article
                key={service.title}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 24 }}
                className={`group flex h-full flex-col rounded-2xl border p-6 shadow-soft transition-colors sm:p-7 ${
                  isFeatured
                    ? "border-primary/25 bg-accent-soft/60"
                    : "border-card-border bg-white hover:border-primary/20"
                } ${
                  isLastOdd
                    ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-0.625rem)]"
                    : ""
                }`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                    isFeatured
                      ? "bg-primary text-white"
                      : "bg-accent-soft text-primary group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-extrabold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isFeatured
                          ? "bg-white text-primary shadow-soft"
                          : "bg-muted text-muted-foreground group-hover:bg-accent-soft group-hover:text-primary"
                      }`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-bold text-primary transition-all hover:gap-2.5"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
