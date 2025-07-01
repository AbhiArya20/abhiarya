import FadeDown from "@/components/animation/fade-down";
import EducationV1 from "@/components/sections/education/education-v1";

export default function Education() {
  const education = [EducationV1];
  const randomIndex = Math.floor(Math.random() * education.length);
  const RandomEducation = education[randomIndex];
  return (
    <FadeDown>
      <RandomEducation />
    </FadeDown>
  );
}
