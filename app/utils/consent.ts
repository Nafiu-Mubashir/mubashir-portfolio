// lib/consent.ts
// Single source of truth for consent state.
// Stores in localStorage under "ag_cookie_consent".
// Dispatches "consent-updated" CustomEvent whenever consent changes —
// AnalyticsLoader listens for this to fire or suppress GA.

export interface ConsentState {
  necessary: true;       // always true — cannot be toggled
  analytics: boolean;
}

const STORAGE_KEY = "nm_cookie_consent";
const EVENT_NAME  = "consent-updated";

/* ── READ ─────────────────────────────────────────────────────────── */

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed !== null &&
      typeof parsed === "object" &&
      "analytics" in parsed &&
      typeof (parsed as Record<string, unknown>).analytics === "boolean"
    ) {
      return { necessary: true, analytics: (parsed as { analytics: boolean }).analytics };
    }
    return null;
  } catch {
    return null;
  }
}

/* ── WRITE ────────────────────────────────────────────────────────── */

function persistAndDispatch(state: ConsentState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent<ConsentState>(EVENT_NAME, { detail: state }));
}

export function acceptAllCookies(): void {
  persistAndDispatch({ necessary: true, analytics: true });
}

export function rejectNonEssentialCookies(): void {
  persistAndDispatch({ necessary: true, analytics: false });
}

export function savePreferences(prefs: Omit<ConsentState, "necessary">): void {
  persistAndDispatch({ necessary: true, ...prefs });
}

/* ── SUBSCRIBE ────────────────────────────────────────────────────── */

export function onConsentUpdated(
  handler: (state: ConsentState) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  const listener = (e: Event): void => {
    const custom = e as CustomEvent<ConsentState>;
    handler(custom.detail);
  };

  window.addEventListener(EVENT_NAME, listener);
  return () => window.removeEventListener(EVENT_NAME, listener);
}
