import Features from "@/components/custom/features";
import HeroSection from "@/components/custom/hero-section";
// import Tools from "@/components/custom/tools";

export default function Home() {
  return (
    <div className="mx-2 md:mx-5">
      < HeroSection />
      < Features />
      {/* < Tools /> */}
    </div>
  );
}