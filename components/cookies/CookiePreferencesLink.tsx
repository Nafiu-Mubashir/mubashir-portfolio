"use client";

import { useCookieConsent } from "@/app/hooks/useCookieConsent";

// import { useCookieConsent } from "@/hooks/useCookieConsent";

export default function CookiePreferencesLink() {
  const { reset } = useCookieConsent();

  return (
    <button
      onClick={reset}
      className="text-xs text-burgundy-deep/35 hover:text-burgundy-deep/60 transition-colors underline underline-offset-2"
    >
      Cookie preferences
    </button>
  );
}
