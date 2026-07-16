"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { projects, type Project } from "@/lib/data";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section-padding bg-background-alt"
      aria-labelledby="projects-heading"
    >
      <div className="container-section">
        <FadeIn>
          <SectionHeading
            eyebrow="My Work"
            title={
              <>
                Featured <span className="text-primary">Projects</span>
              </>
            }
            description={`${projects.length}+ live calculator apps, websites, and browser extensions shipped for clients worldwide`}
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={Math.min(i * 0.04, 0.4)}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-white shadow-soft transition-all hover:shadow-lg">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] block overflow-hidden bg-muted"
                  aria-label={`Open ${project.title} live site`}
                >
                  <ProjectThumbnail
                    title={project.title}
                    image={project.image}
                    liveUrl={project.liveUrl}
                    priority={i < 3}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground shadow-soft">
                    {project.category}
                  </span>
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
                    Visit Site
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </span>
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3 pt-5">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      Visit Site
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12">
          <CtaBanner
            title="Interested in My Work?"
            description="I have more projects in my portfolio. Let's discuss how I can help with your next project."
            primaryLabel="Let's Talk"
          />
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-muted">
              <ProjectThumbnail
                title={selected.title}
                image={selected.image}
                liveUrl={selected.liveUrl}
                className="object-cover object-top"
              />
            </div>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-primary">
              {selected.category}
            </span>
            <h3
              id="project-modal-title"
              className="mt-3 text-2xl font-extrabold text-foreground"
            >
              {selected.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{selected.description}</p>
            <p className="mt-3 break-all text-xs text-muted-foreground">
              {selected.liveUrl}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={selected.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
              >
                Visit Live Site
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full border-2 border-card-border px-5 py-2.5 text-sm font-semibold text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
