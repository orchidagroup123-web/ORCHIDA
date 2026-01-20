import { Layout } from "@/components/Layout";
import { HeroSection } from "./Home/HeroSection";
import { HierarchicalSectorsSection } from "./Home/HierarchicalSectorsSection";
import { StatsSection } from "./Home/StatsSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <HierarchicalSectorsSection />
      <StatsSection />
    </Layout>
  );
}
