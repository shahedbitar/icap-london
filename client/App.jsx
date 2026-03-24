import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import LocalPublications from "./pages/LocalPublications";
import AbruzzoCanada from "./pages/AbruzzoCanada";
import CorreirePeligno from "./pages/CorreirePeligno";
import VallePeligna from "./pages/VallePeligna";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/local-publications" element={<LocalPublications />} />
            <Route path="/media/local-publications/abruzzo-canada" element={<AbruzzoCanada />} />
            <Route path="/media/local-publications/corriere-peligno" element={<CorreirePeligno />} />
            <Route path="/media/local-publications/valle-peligna" element={<VallePeligna />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
