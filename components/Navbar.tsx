"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header
        style={{
          fontFamily: "var(--font-mono)",
          boxShadow: scrolled && !menuOpen ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none",
          height: scrolled && !menuOpen ? "64px" : "80px",
          transition: "all 0.3s ease",
        }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 animate-[fadeInDown_0.5s_ease_forwards] bg-background/75 backdrop-blur-md"
      >
        {/* ── Logo ── */}
        <Link href="/" aria-label="Home" className="flex items-center hover:opacity-75 transition-opacity duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="50" height="50" fill="none">
            <polygon
              points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5"
              stroke="var(--color-accent)"
              strokeWidth="3"
              fill="none"
            />
            <text
              x="50" y="73"
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="42"
              fill="var(--color-accent)"
              fontWeight="400"
            >
              KG
            </text>
          </svg>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          <ol className="flex items-center gap-1 list-none p-0 m-0">
            {navLinks.map(({ label, href }, i) => (
              <li key={label}>
                <a
                  href={href}
                  style={{ fontFamily: "var(--font-mono)" }}
                  className="text-[16px] no-underline px-3 py-2 transition-colors duration-200 text-primary hover:text-accent"
                >
                  <span style={{ color: "var(--color-accent)", marginRight: "4px", fontSize: "15px" }}>
                    0{i + 1}.
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ol>

          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/14X_pow3hJAyOoCl-7KlAHWh2Ig38r3Qt/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent)",
              borderRadius: "4px",
            }}
            className="text-[15px] px-4 py-2 no-underline whitespace-nowrap bg-transparent transition-colors duration-200 hover:bg-accent/10"
          >
            Resume
          </a>
        </nav>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-[110]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              style={{ backgroundColor: "var(--color-accent)" }}
              className={`block h-[2px] rounded transition-all duration-300 origin-center 
                ${n === 1 && menuOpen ? "translate-y-[7px] rotate-45 w-full" : ""}
                ${n === 2 && menuOpen ? "opacity-0" : ""}
                ${n === 3 && menuOpen ? "-translate-y-[7px] -rotate-45 w-full" : ""}
              `}
            />
          ))}
        </button>
      </header>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[105] flex animate-[fadeIn_0.2s_ease_forwards]"
          role="dialog"
          aria-modal="true"
          style={{ top: "80px" }}
        >
          {/* Blurred overlay — left 30% */}
          <div
            className="w-[30%] h-full backdrop-blur-2xl bg-surface/90"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu panel — right 70% */}
          <div
            style={{ backgroundColor: "var(--color-background)" }}
            className="w-[70%] h-full flex flex-col items-center justify-center gap-8 relativeanimate-[slideIn_0.9s_ease_forwards]"
          >
            <nav className="flex flex-col items-center gap-8">
              <ol className="flex flex-col items-center gap-6 list-none p-0 m-0 text-center">
                {navLinks.map(({ label, href }, i) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-primary)" }}
                      className="text-lg no-underline flex flex-col items-center gap-1 transition-colors duration-200 hover:[color:var(--color-accent)]"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span style={{ color: "var(--color-accent)", fontSize: "13px" }}>0{i + 1}.</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>

              <a
                href="https://drive.google.com/file/d/14X_pow3hJAyOoCl-7KlAHWh2Ig38r3Qt/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-accent)",
                  border: "1px solid var(--color-accent)",
                  borderRadius: "4px",
                }}
                className="text-lg px-6 py-3 no-underline bg-transparent transition-colors duration-200 hover:bg-accent/10"
              >
                Resume
              </a>
            </nav>
          </div>
        </div>
      )}
      {/* Keyframes */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}