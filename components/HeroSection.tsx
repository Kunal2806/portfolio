export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center min-h-screen px-36 max-w-5xl md:px-24 sm:px-6 pt-24">

      {/* Greeting */}
      <p
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-green)", animationDelay: "100ms" }}
        className="text-sm mb-5 ml-1 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        Hi, my name is
      </p>

      {/* Name */}
      <h1
        style={{ color: "var(--color-white-slate)", animationDelay: "200ms" }}
        className="text-[clamp(40px,8vw,80px)] font-semibold leading-tight m-0 mb-2 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        Kunal Goswami.
      </h1>

      {/* Tagline */}
      <h2
        style={{ color: "var(--color-slate)", animationDelay: "300ms" }}
        className="text-[clamp(30px,6vw,70px)] font-semibold leading-tight m-0 mb-8 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        I build things for the web.
      </h2>

      {/* Description */}
      <p
        style={{ color: "var(--color-slate)", fontFamily: "var(--font-sans)", animationDelay: "400ms" }}
        className="max-w-xl text-[clamp(14px,2vw,18px)] leading-relaxed mb-12 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
      >
        I&apos;m a software engineer specializing in building (and occasionally designing)
        exceptional digital experiences. Currently, I&apos;m focused on building accessible,
        human-centered products at{" "}
        <a
          href="#"
          style={{ color: "var(--color-green)" }}
          className="no-underline relative group"
        >
          Gennext It
          <span
            style={{ backgroundColor: "var(--color-green)" }}
            className="absolute bottom-[-1px] left-0 w-0 h-px transition-all duration-200 group-hover:w-full"
          />
        </a>
        .
      </p>

      {/* CTA */}
      <a
        href="#projects"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-green)",
          border: "1px solid var(--color-green)",
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