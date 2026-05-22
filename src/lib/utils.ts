import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { MouseEvent } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Intercepts anchor clicks and force-scrolls to the target — fixes the browser
// no-op when the URL hash already matches. Bare "#" scrolls to top.
// Non-hash hrefs (tel:, mailto:, http:) fall through untouched.
export function smoothScrollToHash(e: MouseEvent, hash: string, delayMs = 0, offsetOverride?: number) {
  if (!hash.startsWith("#")) return;
  e.preventDefault();
  const doScroll = () => {
    if (hash === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(hash.slice(1));
    if (!el) return;
    let offset: number;
    if (offsetOverride !== undefined) {
      offset = offsetOverride;
    } else {
      // Read --nav-offset directly from the CSS variable and convert rem → px.
      const root = document.documentElement;
      const raw = getComputedStyle(root).getPropertyValue("--nav-offset").trim();
      offset = raw.endsWith("rem")
        ? parseFloat(raw) * parseFloat(getComputedStyle(root).fontSize)
        : parseFloat(raw) || 0;
    }
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
  };
  if (delayMs) setTimeout(doScroll, delayMs);
  else doScroll();
}
