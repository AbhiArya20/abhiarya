import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string({ message: "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID must be a string." }).min(1, {
      message:
        "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID is required and cannot be empty. Please provide a valid Google Analytics tracking ID.",
    }),
    NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: z
      .string({ message: "NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID must be a string." })
      .min(1, {
        message:
          "NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID is required and cannot be empty. Please provide a valid Highlight project ID.",
      }),
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z
      .string({ message: "NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID must be a string." })
      .min(1, {
        message:
          "NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID is required and cannot be empty. Please provide a valid Google Tag Manager ID.",
      }),
  },

  runtimeEnv: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  },
});
