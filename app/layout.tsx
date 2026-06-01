import type { Metadata } from "next";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Kunal Goswami",
  description: "Software engineer specializing in building exceptional digital experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-[80%] mx-auto">
        <Navbar />
        <LeftSidebar />
        <RightSidebar email="kunalgoswami.2806@gmail.com" />
        <main>{children}</main>
      </body>
    </html>
  );
}