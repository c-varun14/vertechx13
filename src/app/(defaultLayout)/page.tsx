import HeroSection from "@/components/vertechx/HeroSection";
import VideoSection from "@/components/vertechx/VideoSection";
import InfoSection from "@/components/vertechx/InfoSection";
import HeadingSection from "@/components/vertechx/HeadingSection";
import CollegeInfoSection from "@/components/vertechx/CollegeInfoSection";
import ParadoxiaSection from "@/components/vertechx/Pixelate";
import GlimpseSection from "@/components/vertechx/GlimpseSection";
import Glimpinfo from "@/components/vertechx/GlimpseInfo";
import SponsorsSection from "@/components/vertechx/SponsorsSection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection />
      <HeadingSection />
      <VideoSection />
      <InfoSection />
      <CollegeInfoSection />
      <ParadoxiaSection />
      <Glimpinfo />
      <GlimpseSection />
      <SponsorsSection />
    </div>
  );
}
