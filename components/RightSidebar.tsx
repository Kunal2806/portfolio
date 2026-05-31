export default function RightSidebar({ email }: { email: string }) {
  return (
    <div className="fixed bottom-0 right-11 z-10 hidden md:flex flex-col items-center">
      <a
        href={`mailto:${email}`}
        style={{
          fontFamily: "var(--font-mono)",
          writingMode: "vertical-rl",
          letterSpacing: "0.12em",
        }}
        className="text-md no-underline transition-all duration-200 hover:-translate-y-1 
        text-muted hover:text-accent"
      >
        {email}
      </a>
      {/* vertical line */}
      <div style={{ backgroundColor: "var(--color-muted)" }} className="w-px h-24 mt-5" />
    </div>
  );
}