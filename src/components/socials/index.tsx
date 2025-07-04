import SocialV2 from "@/components/socials/social-v2";
import SocialV1 from "@/components/socials/social-v1";

export default function SocialComponent() {
  const socials = [SocialV1, SocialV2];
  const RandomSocial = socials[0];
  return <RandomSocial />;
}
