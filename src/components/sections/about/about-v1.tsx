import { PERSONAL_DATA } from "@/data/personal";

export default function AboutV1() {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">About me</h2>
      <p className="text-muted-foreground font-mono text-sm leading-6">{PERSONAL_DATA.descriptionRaw}</p>
    </div>
  );
}
