import { PERSONAL_DATA } from "@/data/personal";

export default function AboutV4() {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">About me</h2>
      <p className="text-muted-foreground leading-6">{PERSONAL_DATA.descriptionHtml}</p>
    </div>
  );
}
