import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PERSONAL_DATA } from "@/data/personal";
import { cn } from "@/lib/utils";

export default function AvatarV8({ className }: { className?: string }) {
  return (
    <Avatar className={cn("rounded-bl-3xl", className)}>
      <AvatarImage
        loading="lazy"
        src={PERSONAL_DATA.githubAvatar || PERSONAL_DATA.avatar}
        alt={PERSONAL_DATA.nickname}
      ></AvatarImage>
      <AvatarFallback className="text-3xl">{PERSONAL_DATA.nickname.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}
