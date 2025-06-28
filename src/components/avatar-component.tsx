import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { DATA } from "@/data";

export default function AvatarComponent({ className }: { className?: string }) {
  return (
    <Avatar className={cn("size-14", className)}>
      <AvatarImage src={DATA.githubAvatar || DATA.avatar} alt={DATA.name}></AvatarImage>
      <AvatarFallback>{DATA.nickname.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}
