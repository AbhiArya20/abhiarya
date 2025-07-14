import EducationV1 from "@/components/home/education/education-v1";
import FadeDown from "@/components/animation/fade-down";

export default function Education() {
  const education = [EducationV1];
  const SelectedEducation = education[0];
  return (
    <FadeDown>
      <SelectedEducation />
    </FadeDown>
  );
}
