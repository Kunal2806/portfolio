export default function ContactSection() {
  return (
    <section id="contact">

      {/* ── Heading ── */}
      <h2
        style={{ fontFamily: "var(--font-mono)" }}
        className="flex items-center gap-4 text-2xl font-semibold text-heading mb-12 whitespace-nowrap"
      >
        <span style={{ color: "var(--color-accent)" }} className="text-xl">04.</span>
        Get In Touch
        <span className="block w-full max-w-xs h-px bg-surface-highlight ml-4" />
      </h2>

      {/* ── Content ── */}
      <div className="flex flex-col max-w-xl">

        <p
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-sans)" }}
          className="text-[clamp(14px,2vw,18px)] leading-relaxed mb-12"
        >
          We can collaborate on a project, have a chat about tech, or just say hi. My inbox is always open, and I&apos;ll do my best to get back to you!
        </p>

        <a
          href="mailto:kunalgoswami.2806@gmail.com"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-accent)",
            border: "1px solid var(--color-accent)",
            borderRadius: "4px",
          }}
          className="text-sm w-fit px-7 py-4 no-underline bg-transparent transition-colors duration-200 hover:bg-[rgba(100,255,218,0.08)]"
        >
          Say Hello
        </a>
      </div>

    </section>
  );
}