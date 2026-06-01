// app/page.tsx

import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="home" className="pt-20">
        <HeroSection />
      </section>
      <div id="about" className="h-screen"></div>
    </main>
  );
}