// types/gtag.d.ts
// Pure ambient declarations — no imports or exports.
// TypeScript picks this up globally across the entire project.

type GtagConsentParams = {
  analytics_storage?: "granted" | "denied";
  ad_storage?: "granted" | "denied";
};

type GtagArgs =
  | [command: "js", date: Date]
  | [command: "config", targetId: string, params?: Record<string, string>]
  | [command: "consent", action: "update", params: GtagConsentParams]
  | [command: "event", eventName: string, params?: Record<string, unknown>];

interface Window {
  gtag: (...args: GtagArgs) => void;
  dataLayer: GtagArgs[];
}