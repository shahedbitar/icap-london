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
import InTheMedia from "./pages/InTheMedia";
import PeopleAndStories from "./pages/PeopleAndStories";
import History from "./pages/History";
import Autobiographies from "./pages/Autobiographies";
import Documentary from "./pages/Documentary";
import ImmigrantExperience from "./pages/ImmigrantExperience";
import Beginnings from "./pages/Beginnings";
import Contributions from "./pages/Contributions";
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
            <Route path="/media/in-the-media" element={<InTheMedia />} />
            <Route path="/people-and-their-stories" element={<PeopleAndStories />} />
            <Route path="/people-and-their-stories/history" element={<History />} />
            <Route path="/people-and-their-stories/autobiographies" element={<Autobiographies />} />
            <Route path="/people-and-their-stories/history/documentary" element={<Documentary />} />
            <Route path="/people-and-their-stories/history/immigrant-experience" element={<ImmigrantExperience />} />
            <Route path="/people-and-their-stories/history/beginnings" element={<Beginnings />} />
            <Route path="/people-and-their-stories/history/contributions" element={<Contributions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
