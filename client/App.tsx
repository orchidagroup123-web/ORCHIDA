import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Sectors from "./pages/Sectors";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import SectorDetail from "./pages/SectorDetail";
import NotFound from "./pages/NotFound";

declare global {
  interface Window {
    __ORCHIDA_APP_ROOT__?: Root;
  }
}

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/sector/:id" element={<SectorDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container #root not found");
}

let root = window.__ORCHIDA_APP_ROOT__;

if (!root) {
  root = createRoot(container);
  window.__ORCHIDA_APP_ROOT__ = root;
}

root.render(<App />);
