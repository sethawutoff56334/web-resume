import Stage from "@/components/Stage";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import IntroSplash from "@/components/IntroSplash";

export default function Home() {
  return (
    <>
      <IntroSplash />
      <Stage labels={["Profile", "Experience", "Contact"]}>
        <ProfileSection index={0} />
        <ExperienceSection index={1} />
        <ContactSection index={2} />
      </Stage>
    </>
  );
}
