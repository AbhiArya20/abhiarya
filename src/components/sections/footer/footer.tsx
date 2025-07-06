import { PERSONAL_DATA } from "@/data/personal";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 text-xs">
          <span>
            Designed &amp; Made with <span className="bg-muted-foreground bg-clip-text text-transparent">❤️</span>
          </span>
          <span className="text-muted-foreground">{`@ ${year} ${PERSONAL_DATA.nickname}. All rights reserved.`}</span>
          <span className="text-muted-foreground">
            Missing something?{" "}
            <Link
              className="text-white/90 hover:text-blue-500 hover:underline"
              target="_blank"
              rel="noopener"
              href={PERSONAL_DATA.portfolio}
            >
              Old Portfolio?
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
