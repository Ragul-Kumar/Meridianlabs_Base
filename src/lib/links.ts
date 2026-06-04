// Base-aware link helper for GitHub Pages project subpath deploys.
// import.meta.env.BASE_URL is e.g. "/Meridianlabs_Base/" in prod, "/" in dev.
const base = import.meta.env.BASE_URL;

export function withBase(path = "/"): string {
  // Leave external / mailto / pure-anchor links untouched.
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const trimmed = base.replace(/\/$/, "");
  return trimmed + (path.startsWith("/") ? path : `/${path}`);
}
