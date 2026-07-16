import { siteConfig } from "@/lib/data";
import { orbitron } from "@/lib/fonts";

interface BrandNameProps {
  className?: string;
  /** White text for dark footer backgrounds */
  onDark?: boolean;
}

export function BrandName({ className = "", onDark = false }: BrandNameProps) {
  return (
    <span
      className={`${orbitron.className} text-[15px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 sm:text-base ${
        onDark
          ? "text-white hover:text-primary"
          : "text-foreground hover:text-primary"
      } ${className}`}
    >
      {siteConfig.name}
    </span>
  );
}
