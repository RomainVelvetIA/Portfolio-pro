import Header from "./components/Header";
import AccueilSection from "./components/sections/AccueilSection";
import AProposSection from "./components/sections/AProposSection";
import ProjetsSection from "./components/sections/ProjetsSection";
import ProcessusSection from "./components/sections/ProcessusSection";
import CompetencesSection from "./components/sections/CompetencesSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <AccueilSection />
      <AProposSection />
      <ProjetsSection />
      <ProcessusSection />
      <CompetencesSection />
      <ContactSection />
    </main>
  );
} 