import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: ReactNode;
}

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref = "#contact",
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-accent-soft px-6 py-10 text-center md:px-12 md:py-12">
        <div
          className="gradient-blob -right-10 -top-10 h-40 w-40 bg-primary/20 opacity-60"
          aria-hidden="true"
        />
        <div
          className="gradient-blob -bottom-10 -left-10 h-40 w-40 bg-primary/15 opacity-50"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <h3 className="text-2xl font-extrabold text-foreground md:text-3xl">
            {title}
          </h3>
          {description && (
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              {description}
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={primaryHref}
              variant="primary"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="secondary"
                {...(secondaryHref.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
