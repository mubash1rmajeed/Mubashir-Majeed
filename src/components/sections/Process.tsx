"use client";

import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { processSteps } from "@/lib/data";

const stepIcons = [Search, PenTool, Code2, Rocket];

export function Process() {
  return (
    <section id="process" className="section-padding" aria-labelledby="process-heading">
      <div className="container-section">
        <FadeIn>
          <SectionHeading
            eyebrow="How I Work"
            title={
              <>
                My <span className="text-primary">Development Process</span>
              </>
            }
            description="A structured approach to deliver on time and exceed expectations"
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-card-border bg-white p-6 shadow-soft transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-12">
          <CtaBanner
            title="Have a Project in Mind?"
            description="Let's discuss your requirements and bring your vision to life"
            primaryLabel="Start a Conversation"
          />
        </div>
      </div>
    </section>
  );
}
