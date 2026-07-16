export function getScreenshotUrl(liveUrl: string) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(liveUrl)}?w=1200`;
}

export function resolveProjectImage(image: string | undefined, liveUrl: string) {
  if (
    image &&
    !image.endsWith(".svg") &&
    !image.startsWith("/images/projects/")
  ) {
    return image;
  }
  return getScreenshotUrl(liveUrl);
}
