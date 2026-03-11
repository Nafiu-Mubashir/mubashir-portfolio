"use client";

// components/CookieConsentBanner.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "@/app/hooks/useCookieConsent";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CookieConsentBanner() {
  const { status, accept, decline, savePrefs } = useCookieConsent();
  const [showPrefs, setShowPrefs] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  const handleSavePreferences = () => {
    savePrefs({ analytics: analyticsChecked });
  };
// https://drive.google.com/file/d/1ZqMT5l8yV_W9xlfRYNeNNjzUR6DUT5ZV/view?usp=sharing

  return (
    <AnimatePresence>
      {status === "pending" && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.45, delay: 1.2, ease }}
          className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div
            className="rounded-2xl border border-white/10 p-5 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.4)] relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(17,24,39,0.97) 0%, rgba(15,18,35,0.98) 100%)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-5 right-5 h-[1.5px] rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #9333ea, #3b82f6, transparent)",
              }}
            />

            {/* Close button */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss cookie banner"
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/10 transition-all duration-200"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 1l8 8M9 1L1 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {!showPrefs ? (
                /* ── DEFAULT VIEW ── */
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg" aria-hidden="true">
                      🍪
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white tracking-tight">
                        This site uses cookies
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                        We use cookies to improve your experience and for
                        analytics.{" "}
                        
                         
                        {/* <a  href="/privacy"
                          className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2 text-[10px]">
                          Privacy Policy
                        </a>{" "}
                        or{" "} */}
                        <span
                          onClick={() => setShowPrefs(true)}
                          className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2 text-[10px] cursor-pointer"
                        >
                          Manage preferences
                        </span>
                        .
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <button
                          onClick={accept}
                          className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
                          style={{
                            background:
                              "linear-gradient(to right, #9333ea, #3b82f6)",
                          }}
                        >
                          Accept all
                        </button>
                        <button
                          onClick={decline}
                          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* ── PREFERENCES VIEW ── */
                <motion.div
                  key="prefs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm font-bold text-white tracking-tight mb-4">
                    Manage preferences
                  </p>

                  {/* Necessary — always on */}
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Necessary
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">
                        Required for the site to function
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wide">
                      Always on
                    </span>
                  </div>

                  {/* Analytics — toggleable */}
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Analytics
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">
                        Google Analytics — helps improve the site
                      </p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={analyticsChecked}
                      onClick={() => setAnalyticsChecked((v) => !v)}
                      className="relative w-9 h-5 rounded-full border transition-all duration-200"
                      style={{
                        background: analyticsChecked
                          ? "linear-gradient(to right, #9333ea, #3b82f6)"
                          : "rgba(255,255,255,0.08)",
                        borderColor: analyticsChecked
                          ? "#9333ea"
                          : "rgba(255,255,255,0.15)",
                      }}
                    >
                      <span
                        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200 ${
                          analyticsChecked ? "left-4" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Save / Back */}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 rounded-full px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(to right, #9333ea, #3b82f6)",
                      }}
                    >
                      Save preferences
                    </button>
                    <button
                      onClick={() => setShowPrefs(false)}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
                    >
                      Back
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}