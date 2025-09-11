
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Code splitting: ленивая загрузка страниц
const Index = lazy(() => import("./pages/Index"));
const Hatches = lazy(() => import("./pages/Hatches"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Projects = lazy(() => import("./pages/Projects"));
const FrequencyConverters = lazy(() => import("./pages/FrequencyConverters"));
const Aisi = lazy(() => import("./pages/Aisi"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hatches" element={<Hatches />} />
            <Route path="/aisi" element={<Aisi />} />
            <Route path="/preobrazovateli-chastotyi" element={<FrequencyConverters />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;