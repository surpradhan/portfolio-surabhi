import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FlowField from "@/components/FlowField";
import TopographicBackground from "@/components/TopographicBackground";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Surabhi Pradhan - Building things that think",
  description:
    "Protocol builder and AI engineer designing open infrastructure for the agent ecosystem, benchmarking what actually works, and shipping tools that run without the cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {/* Ambient layer — topographic texture + warm glows */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

          {/* Flow field — base layer, 750 particles tracing terrain currents */}
          <FlowField />
          {/* Topographic rings — structural layer on top of the flow */}
          <TopographicBackground />

          {/* Warm amber glow — hero focal point */}
          <div
            className="absolute rounded-full"
            style={{
              top: "5%",
              left: "5%",
              width: "650px",
              height: "650px",
              background:
                "radial-gradient(circle, rgba(200,150,90,0.07) 0%, transparent 70%)",
            }}
          />
          {/* Cooler deep amber — bottom right */}
          <div
            className="absolute rounded-full"
            style={{
              bottom: "0%",
              right: "5%",
              width: "480px",
              height: "480px",
              background:
                "radial-gradient(circle, rgba(180,120,60,0.05) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* All page content sits above the ambient layer */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
