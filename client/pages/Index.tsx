import { Layout } from "@/components/Layout";
import { HeroSection } from "./Home/HeroSection";
import { SectorsPyramid } from "./Home/SectorsPyramid";
import { StatsSection } from "./Home/StatsSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <SectorsPyramid />
      <StatsSection />
    </Layout>
  );
}
