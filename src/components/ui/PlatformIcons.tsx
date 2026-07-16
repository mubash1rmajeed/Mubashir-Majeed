import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Official-style wordmarks matching brand guidelines */

export function UpworkWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline text-[22px] font-bold leading-none tracking-tight ${className}`}
      aria-label="Upwork"
    >
      <span className="text-[#14A800]">up</span>
      <span className="text-[#1F1F1F]">work</span>
    </span>
  );
}

export function FiverrWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline text-[22px] font-bold leading-none tracking-tight text-[#1DBF73] ${className}`}
      aria-label="Fiverr"
    >
      fiverr<span className="text-[#1DBF73]">.</span>
    </span>
  );
}

export function FreelancerWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Freelancer"
    >
      {/* Origami hummingbird mark */}
      <svg
        viewBox="0 0 48 48"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
      >
        <path
          fill="#29B2FE"
          d="M38.2 14.6c-3.5 1.1-7.8 4.8-9.6 8.6-.5 1.1-.8 2.1-.8 2.9 0 .5.1 1 .3 1.4-3.8-1.8-8.1-2.3-12.2-.9-5.8 2-10.1 7-11.3 12.9-.2.9.7 1.6 1.5 1.1 4.6-2.9 9.4-3.7 13.9-2.5 3.1.8 5.9 2.4 8.1 4.6.6.6 1.7.2 1.8-.7.4-3.7 2.2-7.2 5.1-9.7 3.2-2.8 7-4.1 7-4.1s-2.5-.7-6.5-1.9c0 0 3.8-4.6 6.5-6.9.8-.7.2-2-.7-2-2 0-4 .6-6.1 1.9z"
        />
        <path
          fill="#29B2FE"
          d="M28.2 26.1c1.1 1.7 1.4 3.6 1.1 5.5-.1.7.6 1.2 1.2.8 2.9-1.7 4.9-4.5 5.4-7.7.1-.7-.6-1.2-1.2-.9-2.3.7-4.5 1.3-6.5 2.3z"
        />
      </svg>
      <span className="text-[18px] font-semibold italic leading-none tracking-tight text-[#333333]">
        freelancer
      </span>
    </span>
  );
}

export function LinkedInWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label="LinkedIn"
    >
      <span className="text-[20px] font-semibold leading-none tracking-tight text-[#0A66C2]">
        Linked
      </span>
      <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-[#0A66C2] text-[11px] font-bold leading-none text-white">
        in
      </span>
    </span>
  );
}

/* Keep icon exports for any other use */
export function UpworkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.27-1.25-1.878-2.176-4.14-2.723-6.036h-2.203v7.557c0 1.07-.87 1.94-1.94 1.94s-1.94-.87-1.94-1.94V3.252H2.04v7.557c0 2.273 1.85 4.125 4.124 4.125 2.274 0 4.125-1.852 4.125-4.125v-1.27c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.247l1.202-5.628c1.041.671 2.24 1.078 3.52 1.078 2.912 0 5.278-2.366 5.278-5.277 0-2.913-2.366-5.278-5.278-5.278z" />
    </svg>
  );
}

export function FiverrIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.004 15.838a.695.695 0 0 0-.005-.115c-.005-.054-.015-.108-.03-.16l-2.378-7.07a2.83 2.83 0 0 0-2.658-1.94h-.592a.696.696 0 0 1-.696-.696V5.13a2.829 2.829 0 0 0-2.828-2.828H9.087A2.829 2.829 0 0 0 6.26 5.13v.727a.696.696 0 0 1-.696.696H5.027a2.83 2.83 0 0 0-2.658 1.94L.003 15.563a.696.696 0 0 0 .66.917h1.983c.32 0 .602-.218.681-.528l1.84-7.206a.348.348 0 0 1 .34-.26h.543a.348.348 0 0 1 .348.348v10.435A2.829 2.829 0 0 0 8.227 22h7.546a2.829 2.829 0 0 0 2.828-2.828V8.834a.348.348 0 0 1 .348-.348h.543a.348.348 0 0 1 .34.26l1.84 7.206a.696.696 0 0 0 .681.528h1.983a.696.696 0 0 0 .68-.642zM9.087 3.478h5.826a1.304 1.304 0 0 1 1.304 1.304v.727H7.783v-.727a1.304 1.304 0 0 1 1.304-1.304z" />
    </svg>
  );
}

export function FreelancerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.096 3.078 8.205 12.256l5.891 9.178 5.891-9.178L14.096 3.078zM5.514 19.986 0 12.256l5.514-7.73 5.514 7.73-5.514 7.73z" />
    </svg>
  );
}

export function LinkedInBrandIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
