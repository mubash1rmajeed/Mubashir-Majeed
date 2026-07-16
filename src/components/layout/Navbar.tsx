"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks } from "@/lib/data";
import { BrandName } from "@/components/ui/BrandName";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled
          ? "border-card-border bg-white/95 shadow-soft backdrop-blur-md"
          : "border-transparent bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav
        className="container-section flex h-16 items-center justify-between md:h-[4.5rem]"
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <Code2 className="h-4 w-4" aria-hidden="true" />
          </span>
          <BrandName />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent-soft hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex rounded-full p-2 text-foreground transition-colors hover:bg-accent-soft lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-black/40 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        id="mobile-menu"
        className={`fixed right-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-72 flex-col border-l border-card-border bg-white p-6 shadow-card transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}
