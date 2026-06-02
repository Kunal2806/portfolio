// app/page.tsx

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="home" className="md:pt-20 py-20 pt-40">
        <HeroSection />
      </section>
      <section id="about" className="py-20">
        <AboutSection />
      </section>
      <section id="experience" className="py-20">
        <ExperienceSection />
      </section>
      <section id="contact" className="py-20">
        <ContactSection />
      </section>
    </main>
  );
}