// app/page.tsx

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="home" className="pt-20">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
    </main>
  );
}