"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Work",       href: "#work"       },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

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
          backgroundColor: scrolled
            ? "rgba(10,25,47,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled
            ? "0 10px 30px -10px rgba(2,12,27,0.7)"
            : "none",
          height: scrolled ? "64px" : "80px",
          transition: "all 0.3s ease",
        }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 animate-[fadeInDown_0.5s_ease_forwards]"
      >
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center opacity-100 hover:opacity-75 transition-opacity duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="42" height="42" fill="none">
            <polygon
              points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5"
              stroke="var(--color-green)"
              strokeWidth="5"
              fill="none"
            />
            <text
              x="50" y="73"
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="42"
              fill="var(--color-green)"
              fontWeight="400"
            >
              B
            </text>
          </svg>
        </Link>

        {/* ── Desktop nav ──────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          <ol className="flex items-center gap-1 list-none p-0 m-0">
            {navLinks.map(({ label, href }, i) => (
              <li key={label}>
                <a
                  href={href}
                  style={{ fontFamily: "var(--font-mono)" }}
                  className="text-[13px] no-underline px-3 py-2 transition-colors duration-200"
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-green)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-light-slate)")}
                >
                  <span style={{ color: "var(--color-green)", marginRight: "4px", fontSize: "12px" }}>
                    0{i + 1}.
                  </span>
                  <span style={{ color: "var(--color-light-slate)" }}>{label}</span>
                </a>
              </li>
            ))}
          </ol>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-green)",
              border: "1px solid var(--color-green)",
              borderRadius: "4px",
            }}
            className="text-[13px] px-4 py-2 no-underline whitespace-nowrap bg-transparent transition-colors duration-200 hover:bg-[rgba(100,255,218,0.08)]"
          >
            Resume
          </a>
        </nav>

        {/* ── Hamburger (mobile) ───────────────────────────── */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-[110]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            style={{ backgroundColor: "var(--color-green)" }}
            className={`block w-full h-[2px] rounded transition-transform duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            style={{ backgroundColor: "var(--color-green)" }}
            className={`block w-full h-[2px] rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            style={{ backgroundColor: "var(--color-green)" }}
            className={`block w-full h-[2px] rounded transition-transform duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </header>

      {/* ── Mobile fullscreen menu ──────────────────────────── */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "var(--color-light-navy)" }}
          className="fixed inset-0 z-[105] flex items-center justify-center animate-[fadeIn_0.2s_ease_forwards]"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col items-center gap-8">
            <ol className="flex flex-col items-center gap-6 list-none p-0 m-0 text-center">
              {navLinks.map(({ label, href }, i) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-light-slate)" }}
                    className="text-lg no-underline flex flex-col items-center gap-1 transition-colors duration-200 hover:text-[var(--color-green)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span style={{ color: "var(--color-green)", fontSize: "13px" }}>0{i + 1}.</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-green)",
                border: "1px solid var(--color-green)",
                borderRadius: "4px",
              }}
              className="text-sm px-6 py-3 no-underline bg-transparent hover:bg-[rgba(100,255,218,0.08)] transition-colors duration-200"
            >
              Resume
            </a>
          </nav>
        </div>
      )}

      {/* Keyframes */}
      <style>{`
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