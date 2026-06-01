import Image from "next/image";

export default function AboutSection() {
  // const techStack = [
  //   "JavaScript (ES6+)", "TypeScript",
  //   "React",             "Next.js",
  //   "Node.js",           "Tailwind CSS",
  // ];

  return (
    <section id="about" className="py-24 ">

      {/* ── Heading ── */}
      <h2
        style={{ fontFamily: "var(--font-mono)" }}
        className="flex items-center gap-4 text-2xl font-semibold text-heading mb-12 whitespace-nowrap"
      >
        <span style={{ color: "var(--color-accent)" }} className="text-xl">01.</span>
        About Me
        {/* horizontal line */}
        <span className="block w-full max-w-xs h-px bg-muted ml-4" />
      </h2>

      {/* ── Content grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-start">

        {/* Left — text */}
        <div
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-sans)" }}
          className="flex flex-col gap-5 text-[clamp(14px,2vw,18px)] leading-relaxed"
        >
          <p>
           Hello! I&apos;m Kunal, a full-stack developer passionate about building products that solve real problems. My journey into software development began with curiosity and a desire to create things on the internet. What started as experimenting with HTML, CSS, and JavaScript gradually evolved into building complete web applications and exploring mobile development.
          </p>
          <p>
            Today, I work on modern{" "}
            <span  style={{ color: "var(--color-accent)" }} className="no-underline">
              web technologies
            </span>
            {" "}and {" "}
            <span  style={{ color: "var(--color-accent)" }} className="no-underline">
              mobile development
            </span>
            {/* , and{" "} */}
            {/* <a href="#" style={{ color: "var(--color-accent)" }} className="no-underline hover:underline">
              product teams
            </a> */}
            . while continuously improving my engineering skills. I enjoy understanding complex systems, refining user experiences, and turning ideas into practical products that people can use.
          </p>
          <p>
            Some of the projects you&apos;ll find here were inspired by challenges I faced personally, while others were built to explore new technologies.
          </p>

          {/* Tech stack grid */}
          {/* <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
            {techStack.map((tech) => (
              <li
                key={tech}
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-primary)" }}
                className="flex items-center gap-2 text-sm"
              >
                <span style={{ color: "var(--color-accent)" }}>▶</span>
                {tech}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Right — image */}
        <div className="relative group w-full max-w-xs mx-auto">

          {/* Green overlay on image */}
          <div className="relative rounded overflow-hidden">
            <div
              style={{ backgroundColor: "var(--color-accent)" }}
              className="absolute inset-0 opacity-40 group-hover:opacity-0 transition-opacity duration-300 z-10 rounded mix-blend-multiply"
            />
            <Image
              src="/profile.png"
              alt="Kunal Goswami"
              width={500}
              height={500} 
              className="grayscale group-hover:grayscale-0 transition-all duration-300 rounded block"
            />
          </div>

          {/* Corner border effect */}
          <div
            style={{ borderColor: "var(--color-accent)" }}
            className="absolute top-4 left-4 w-full h-full border-2 rounded -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
          />
        </div>

      </div>
    </section>
  );
}