const BOOKING_ORIGIN = "https://rolfing-106793.square.site";

/** Pathname (`/blog/rolfing-for-posture-folsom/`) → `blog-rolfing-for-posture-folsom`. Home is `home`. */
export function pageSlug(pathname: string): string {
  const trimmed = pathname.replace(/^\/+|\/+$/g, "");
  if (!trimmed) return "home";
  return trimmed.split("/").filter(Boolean).join("-");
}

/** Square booking link tagged so the appointment traces to a page or section. */
export function bookingUrl(content: string): string {
  const url = new URL(BOOKING_ORIGIN);
  url.searchParams.set("utm_source", "ryansrolfing.com");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", "booking");
  url.searchParams.set("utm_content", content);
  return url.toString();
}
