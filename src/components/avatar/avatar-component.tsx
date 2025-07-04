import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PERSONAL_DATA } from "@/data/personal";

export default function AvatarComponent({ className }: { className?: string }) {
  return (
    <Avatar className={className}>
      <AvatarImage src={PERSONAL_DATA.githubAvatar || PERSONAL_DATA.avatar} alt={PERSONAL_DATA.nickname}></AvatarImage>
      <AvatarFallback>{PERSONAL_DATA.nickname.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}
