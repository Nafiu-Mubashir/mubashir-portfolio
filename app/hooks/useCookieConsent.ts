"use client";

// hooks/useCookieConsent.ts
// Thin React wrapper around lib/consent.ts.
// Reads initial state from localStorage and re-renders when consent changes.

import { useState, useCallback, useEffect } from "react";
import {
  ConsentState,
  getConsent,
  onConsentUpdated,
  acceptAllCookies,
  rejectNonEssentialCookies,
  savePreferences,
} from "../utils/consent";

export type ConsentStatus = "granted" | "denied" | "pending";

function deriveStatus(state: ConsentState | null): ConsentStatus {
  if (!state) return "pending";
  return state.analytics ? "granted" : "denied";
}

export function useCookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(() =>
    deriveStatus(getConsent()),
  );

  useEffect(() => {
    // Sync if another tab or component updates consent
    const unsubscribe = onConsentUpdated((state: ConsentState) => {
      setStatus(deriveStatus(state));
    });
    return unsubscribe;
  }, []);

  const accept = useCallback(() => {
    acceptAllCookies();
    setStatus("granted");
  }, []);

  const decline = useCallback(() => {
    rejectNonEssentialCookies();
    setStatus("denied");
  }, []);

  const savePrefs = useCallback((prefs: Omit<ConsentState, "necessary">) => {
    savePreferences(prefs);
    setStatus(deriveStatus({ necessary: true, ...prefs }));
  }, []);

  const reset = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("ag_cookie_consent");
    }
    setStatus("pending");
  }, []);

  return { status, accept, decline, savePrefs, reset };
}
