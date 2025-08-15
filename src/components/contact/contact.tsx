"use client";

import Social from "@/components/socials/social";

export default function Contact() {
  return (
    <div className="mb-2">
      <h2 className="font-semibold">Get in touch</h2>
      <p className="text-muted-foreground leading-6">
        Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.
      </p>
      <div className="mb-2">
        <Social />
      </div>
    </div>
  );
}
