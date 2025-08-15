import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PERSONAL_DATA } from "@/data/personal";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AvatarComponent({ className }: { className?: string }) {
  return (
    <Avatar className={cn("rounded-xl", className)}>
      <AvatarImage
        loading="lazy"
        src={PERSONAL_DATA.githubAvatar || PERSONAL_DATA.avatar}
        alt={PERSONAL_DATA.nickname}
      ></AvatarImage>
      <AvatarFallback className="overflow-hidden rounded-xl text-3xl">
        {/* Image as a fallback because Image component support caching and blur-hash */}
        <Image
          src={PERSONAL_DATA.githubAvatar || PERSONAL_DATA.avatar}
          alt={PERSONAL_DATA.nickname}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL="e6EfTi00~qM{_3_3-;xu4n9F00M{j[IUM{~qD%9F-;xu%MofRjxuD%"
          className="h-full w-full object-cover"
          priority
        />
      </AvatarFallback>
    </Avatar>
  );
}
