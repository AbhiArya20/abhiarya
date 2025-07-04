import { PERSONAL_DATA } from "@/data/personal";

export default function AboutV2() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold">About me</h2>
      <p className="text-muted-foreground leading-6">{PERSONAL_DATA.descriptionRaw}</p>
    </div>
  );
}
