import { PERSONAL_DATA } from "@/data/personal";
import Link from "next/link";

export default function AboutV2() {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">About me</h2>
      <p className="text-muted-foreground font-mono text-sm leading-6">{PERSONAL_DATA.descriptionRaw}</p>
    </div>
  );
}
