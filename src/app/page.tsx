"use client";

import Social from "@/components/socials/social";
import { PERSONAL_DATA } from "@/data/personal";
import * as React from "react";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <Social />
      <p>{PERSONAL_DATA.about}</p>
    </div>
  );
}
