"use client";

import { useState } from "react";
import Image from "next/image";
import { getScreenshotUrl, resolveProjectImage } from "@/lib/project-image";

interface ProjectThumbnailProps {
  title: string;
  image?: string;
  liveUrl: string;
  className?: string;
  priority?: boolean;
}

export function ProjectThumbnail({
  title,
  image,
  liveUrl,
  className = "object-cover object-top transition-transform duration-500 group-hover:scale-105",
  priority = false,
}: ProjectThumbnailProps) {
  const fallback = getScreenshotUrl(liveUrl);
  const [src, setSrc] = useState(() => resolveProjectImage(image, liveUrl));

  return (
    <Image
      src={src}
      alt={`Screenshot of ${title}`}
      fill
      priority={priority}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={className}
      unoptimized={src.includes("mshots") || src.includes("opengraph-image")}
      onError={() => {
        if (src !== fallback) setSrc(fallback);
      }}
    />
  );
}
