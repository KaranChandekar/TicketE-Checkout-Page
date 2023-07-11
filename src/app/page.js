import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import QuestionnaireSection from "../components/QuestionnaireSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto md:px-10 px-6">
        <Navbar />
        <HeroSection />
        <QuestionnaireSection />
        <FeatureSection />
      </main>
      <Footer />
    </>
  );
}
