import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export function CustomPostHogProvider({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const POSTHOG_KEY = siteConfig?.customFields?.posthogApiKey;
  const POSTHOG_HOST = siteConfig?.customFields?.posthogHost;

  if (typeof window !== "undefined" && POSTHOG_KEY) {
    if (!posthog.___initialized) {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
      });
      posthog.___initialized = true;
    }
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
