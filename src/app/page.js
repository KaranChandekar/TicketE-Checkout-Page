import HeroSection from "@/components/HeroSection";
import Navbar from "../components/Navbar";
import QuestionnaireSection from "@/components/QuestionnaireSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto sm:px-10 px-6">
      <Navbar />
      <HeroSection />
      <QuestionnaireSection />
    </main>
  );
}
