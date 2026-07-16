"use client";

import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { faqs, pricingPlans } from "@/lib/data";

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id="pricing"
      className="section-padding bg-background-alt"
      aria-labelledby="pricing-heading"
    >
      <div className="container-section">
        <FadeIn>
          <SectionHeading
            eyebrow="Pricing Plans"
            title={
              <>
                Choose Your <span className="text-primary">Package</span>
              </>
            }
            description="Flexible pricing options to suit projects of all sizes"
          />
        </FadeIn>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft transition-all md:p-8 ${
                  plan.popular
                    ? "scale-[1.02] border-primary shadow-card lg:scale-105"
                    : "border-card-border hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center gap-2 text-sm"
                    >
                      {feature.included ? (
                        <Check
                          className="h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                      ) : (
                        <X
                          className="h-4 w-4 shrink-0 text-gray-300"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground line-through"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={plan.popular ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="mb-6 text-center text-xl font-bold text-foreground">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-card-border bg-white"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                    >
                      {faq.question}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <div className="mt-12">
          <CtaBanner
            title="Ready to Start Your Project?"
            description="Let's discuss your requirements and find the perfect solution"
            primaryLabel="Get Free Consultation"
          />
        </div>
      </div>
    </section>
  );
}
