import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="absolute inset-0 flex w-full flex-1 flex-col items-center justify-center p-4 text-center"
      role="alert"
      aria-label="not-found"
    >
      <h1 className="text-7xl font-extrabold sm:text-9xl">{404}</h1>
      <p className="text-muted-foreground mt-2 mb-6 text-lg">Hmm, we looked everywhere — but that page isn’t here.</p>
      <Link href="/" passHref>
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/80 flex items-center justify-center gap-2"
          aria-label="go-to-home"
        >
          <span>
            Go Home <ArrowRight />
          </span>
        </Button>
      </Link>
    </section>
  );
}
