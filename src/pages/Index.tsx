import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ProfileSection />
      <ExperienceSection />
      <BlogSection />
    </main>
  );
};

export default Index;
