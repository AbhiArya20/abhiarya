import { PERSONAL_DATA } from "@/data/personal";

export default function AboutV3() {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">About me</h2>
      <p className="text-muted-foreground font-mono leading-6">{PERSONAL_DATA.descriptionHtml}</p>
    </div>
  );
}
