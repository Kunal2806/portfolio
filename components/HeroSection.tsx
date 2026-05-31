export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center ">

      {/* Greeting */}
      <p
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", animationDelay: "100ms" }}
        className="text-md ml-1 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        Hi, my name is
      </p>

      {/* Name */}
      <h1
        style={{ color: "var(--color-heading)", animationDelay: "200ms" }}
        className="text-[clamp(40px,8vw,80px)] font-bold leading-tight opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        Kunal Goswami.
      </h1>

      {/* Tagline */}
      <h2
        style={{ color: "var(--color-muted)", animationDelay: "300ms" }}
        className="text-[clamp(20px,6vw,60px)] font-bold leading-tight m-0 mb-8 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        I build for the web & mobile.      
      </h2>

      {/* Description */}
      <p
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-sans)", animationDelay: "400ms" }}
        className="max-w-xl text-[clamp(14px,2vw,18px)] leading-relaxed mb-12 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        This portfolio showcases products, experiments, and solutions inspired by problems I&apos;ve encountered and decided to solve through technology. Along the way, I have shared my experiences and insights through my writing on {""}
        <a
          href="#"
          style={{ color: "var(--color-accent)" }}
          className="no-underline relative group "
        >
          {"<Blogs />"}
          <span
            style={{ backgroundColor: "var(--color-accent)" }}
            className="absolute bottom-px left-0 w-0 h-px transition-all duration-200 group-hover:w-full"
          />
        </a>
        .
      </p>

      {/* CTA */}
      <a
        href="#projects"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-accent)",
          border: "1px solid var(--color-accent)",
          borderRadius: "4px",
          animationDelay: "500ms",
        }}
        className="inline-flex items-center justify-center w-fit px-7 py-4 text-sm tracking-wide no-underline bg-transparent transition-colors duration-200 hover:bg-[rgba(100,255,218,0.08)] opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        Check out my work!
      </a>

      {/* Keyframe */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}