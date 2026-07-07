import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlassNavbar } from "@/components/ui/GlassNavbar";
import { Footer } from "@/components/ui/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Cllero — The Future of Gym Intelligence",
  description:
    "AI-driven volumetric gym management platform. Unify member experience, skeletal posture form analysis, 3D bio-digital twins, and automated sales outreach.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-600`}>
        <NextTopLoader
          color="#00D1FF"
          height={2.5}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #00D1FF,0 0 5px #00D1FF"
        />
        <GlassNavbar />
        <main className="flex-grow pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
