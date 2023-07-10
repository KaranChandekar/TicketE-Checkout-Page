import HeroSection from "@/components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto sm:px-10 px-6">
      <Navbar />
      <HeroSection />
    </main>
  );
}
