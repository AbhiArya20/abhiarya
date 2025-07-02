"use client";
import { ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ImageWithLoader({ className, ...rest }: ComponentProps<typeof Image>) {
  const [loading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "duration-700 ease-in-out",
        loading ? "scale-110 blur-xl grayscale" : "blur-0 scale-100 grayscale-0",
        className
      )}
      {...rest}
      onLoadingComplete={() => setTimeout(() => setLoading(false), 5000)}
    />
  );
}
