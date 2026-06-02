"use client";

import { useState } from "react";

const experiences = [
  {
    company: "MangosOrange",
    title: "Full Stack Developer Intern",
    duration: "July 2025 - fev 2026",
    points: [
      "Developed and maintained MangosOrange Group Website, a multi-sector Indian conglomerate specializing in corporate staffing, vocational training, IT consulting, and catering services.",
      "Implemented a responsive and user-friendly interface for the application using Tailwind CSS",
      "Collaborated with a team of developers and designers to ensure the application met business requirements and was delivered on time",
    ]
  },
  {
    company: "Gennext It",
    title: "Software Engineer",
    duration: "Feb 2026 - Present",
    points: [
      "Currently working at GenNext IT, contributing to the development and maintenance of modern web and mobile applications.",
      "Developing responsive and scalable frontend interfaces using technologies such as React, Next.js, Typescript, and Tailwind CSS to enhance user experience and performance.",
      "Building cross-platform mobile applications using React Native and Expo Go, focusing on performance, responsive design, and seamless user interactions.",
      "Collaborating with developers, designers, and project managers to deliver scalable solutions aligned with business requirements and timelines.",
      "Integrating APIs, optimizing application performance, and contributing to feature development, debugging, and UI/UX enhancements across web and mobile platforms."
    ]
  }
  // {
  //   company: "Upstatement",
  //   title: "Lead Engineer",
  //   duration: "May 2018 — Present",
  //   points: [
  //     "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
  //     "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
  //     "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
  //     "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
  //   ],
  // },
  // {
  //   company: "Apple",
  //   title: "UI Engineer",
  //   duration: "July 2017 — May 2018",
  //   points: [
  //     "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
  //     "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal APIs",
  //     "Independently built a tool for generating admins for App Store product pages",
  //   ],
  // },
  // {
  //   company: "Scout Studio",
  //   title: "Developer",
  //   duration: "Jan 2016 — May 2017",
  //   points: [
  //     "Worked with a team of student designers and engineers to build web and mobile products for real-world clients",
  //     "Collaborated with designers and other developers to create elegant solutions for complex problems",
  //   ],
  // },
  // {
  //   company: "Starry",
  //   title: "Software Engineer Co-op",
  //   duration: "July 2015 — Dec 2015",
  //   points: [
  //     "Engineered and maintained major features of Starry's customer-facing web app using React.js",
  //     "Proposed and implemented scalable solutions to issues identified with cloud services and server-side APIs",
  //   ],
  // },
  // {
  //   company: "MullenLowe",
  //   title: "Creative Technologist",
  //   duration: "June 2014 — July 2015",
  //   points: [
  //     "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, and jQuery",
  //     "Proposed and executed designs for interactive components and animations",
  //   ],
  // },
];

export default function ExperienceSection() {
  const [active, setActive] = useState(experiences.length - 1);

  return (
    <section>

      {/* ── Heading ── */}
      <h2
        style={{ fontFamily: "var(--font-mono)" }}
        className="flex items-center gap-4 text-2xl font-semibold text-heading mb-12 whitespace-nowrap"
      >
        <span style={{ color: "var(--color-accent)" }} className="text-xl">02.</span>
        Where I&apos;ve Worked
        <span className="block w-full max-w-xs h-px bg-surface-highlight ml-4" />
      </h2>

      {/* ── Tab layout ── */}
      <div className="flex gap-0 md:flex-row flex-col">

        {/* Company tabs — left */}
        <div className="flex md:flex-col flex-row overflow-x-auto md:overflow-visible border-l-0 md:border-l-2 border-b-2 md:border-b-0 border-surface-highlight min-w-40">
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "var(--font-mono)",
                color: active === i ? "var(--color-accent)" : "var(--color-muted)",
                borderColor: active === i ? "var(--color-accent)" : "transparent",
                backgroundColor: active === i ? "var(--color-surface)" : "transparent",
              }}
              className="text-sm px-5 py-3 text-left whitespace-nowrap border-l-0 md:border-l-2 border-b-2 md:border-b-0 ml-0 md:-ml-0.5 -mb-0.5 md:mb-0 transition-all duration-200 hover:bg-surface hover:text-accent cursor-pointer"
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content — right */}
        <div className="flex-1 pl-0 md:pl-10 pt-6 md:pt-0">
          <h3
            style={{ color: "var(--color-heading)" }}
            className="text-xl font-semibold mb-1"
          >
            {experiences[active].title}{" "}
            <span style={{ color: "var(--color-accent)" }}>
              @ {experiences[active].company}
            </span>
          </h3>

          <p
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
            className="text-sm mb-6"
          >
            {experiences[active].duration}
          </p>

          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {experiences[active].points.map((point, i) => (
              <li
                key={i}
                style={{ color: "var(--color-primary)" }}
                className="flex gap-3 text-base leading-relaxed"
              >
                <span style={{ color: "var(--color-accent)" }} className="mt-1 shrink-0 text-xs">▶</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
