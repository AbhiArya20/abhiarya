"use client";

import ErrorPage from "@/components/shared/error/error-page";

export default function Error() {
  return <ErrorPage status={500} message="We’re sorry, something went wrong on our end." btn="Go Home" />;
}
