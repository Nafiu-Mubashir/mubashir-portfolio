"use client";

// components/AnalyticsLoader.tsx
// Loads Google Analytics ONLY after the user accepts analytics cookies.
// Listens for the "consent-updated" CustomEvent dispatched by lib/consent.ts.
// GA is NEVER loaded on first render — consent must be explicitly granted first.
// If consent was previously granted (stored in localStorage), GA loads on mount.

import {
  getConsent,
  onConsentUpdated,
  type ConsentState,
} from "@/app/utils/consent";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function loadGA(): void {
  if (!GA_ID) return;
  if (document.getElementById("ga-script")) return; // already loaded

  // GA loader script
  const script = document.createElement("script");
  script.id = "ga-script";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // GA init
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: GtagArgs): void {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { page_path: window.location.pathname });
}

function suppressGA(): void {
  // If GA was already loaded (e.g. user revokes mid-session), disable collection
  if (!GA_ID) return;
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }
}

export default function AnalyticsLoader() {
  useEffect(() => {
    // On mount: check if user already consented in a previous session
    const existing = getConsent();
    if (existing?.analytics) {
      loadGA();
    }

    // Listen for future consent changes in this session
    const unsubscribe = onConsentUpdated((state: ConsentState) => {
      if (state.analytics) {
        loadGA();
      } else {
        suppressGA();
      }
    });

    return unsubscribe;
  }, []);

  // Renders nothing — side-effects only
  return null;
}
