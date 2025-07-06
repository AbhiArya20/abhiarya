"use client";

import PageErrorComponent from "@/components/error/error";

export default function Error() {
  return <PageErrorComponent status={500} message="We’re sorry, something went wrong on our end." btn="Go Home" />;
}
