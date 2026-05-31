export default function RightSidebar({ email }: { email: string }) {
  return (
    <div className="fixed bottom-0 right-10 z-10 hidden md:flex flex-col items-center">
      <a
        href={`mailto:${email}`}
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-slate)",
          writingMode: "vertical-rl",
          letterSpacing: "0.12em",
        }}
        className="text-xs no-underline transition-all duration-200 hover:-translate-y-1 hover:[color:var(--color-green)]"
      >
        {email}
      </a>
      {/* vertical line */}
      <div style={{ backgroundColor: "var(--color-slate)" }} className="w-px h-24 mt-5" />
    </div>
  );
}