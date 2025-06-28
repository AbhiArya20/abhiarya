import SocialV1 from "@/components/socials/social-v1";

export default function SocialComponent() {
  const socials = [SocialV1];
  const randomIndex = Math.floor(Math.random() * socials.length);
  const RandomHeader = socials[randomIndex];
  return <RandomHeader />;
}
