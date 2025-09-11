import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export function CustomPostHogProvider({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const POSTHOG_KEY =
    siteConfig?.customFields?.posthogApiKey ||
    process.env.REACT_APP_POSTHOG_API_KEY;
  const POSTHOG_HOST =
    siteConfig?.customFields?.posthogHost || process.env.REACT_APP_POSTHOG_HOST;
  console.log({ POSTHOG_KEY, POSTHOG_HOST });
  console.log('customFields', siteConfig.customFields);

  if (typeof window !== "undefined" && POSTHOG_KEY) {
    console.log("init posthog", { posthog, POSTHOG_KEY, POSTHOG_HOST });
    if (!posthog.___initialized) {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
      });
      posthog.___initialized = true;
    }
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
