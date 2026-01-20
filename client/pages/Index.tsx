import { Layout } from "@/components/Layout";
import { HeroSection } from "./Home/HeroSection";
import { SectorsSection } from "./Home/SectorsSection";
import { StatsSection } from "./Home/StatsSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <div className="py-32 bg-orange-400 text-center">
        <h2 className="text-4xl font-bold text-white">TEST DIV - Should be orange</h2>
      </div>
      <SectorsSection />
      <StatsSection />
    </Layout>
  );
}
