import { Layout } from "@/components/Layout";
import { HeroSection } from "./Home/HeroSection";
import { SectorsSection } from "./Home/SectorsSection";
import { StatsSection } from "./Home/StatsSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <SectorsSection />
      <StatsSection />
    </Layout>
  );
}
