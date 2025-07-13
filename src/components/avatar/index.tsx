import AvatarV2 from "@/components/avatar/avatar-v2";
import AvatarV1 from "@/components/avatar/avatar-v1";

export default function AvatarComponent({ className }: { className?: string }) {
  const avatars = [AvatarV1, AvatarV2];
  const SelectedAvatar = avatars[0];
  return <SelectedAvatar className={className} />;
}
