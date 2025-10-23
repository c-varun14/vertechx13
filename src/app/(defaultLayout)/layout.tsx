import "../globals.css";
import { Suspense } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/vertechx/Footer";
import { Toaster } from "@/components/ui/sonner";
import { NextAuthProvider } from "@/components/NextAuthProvider";

import LoadingSpinner from "@/components/LoadingSpinner";

import PixelGridBackground from "@/components/vertechx/PixelGridBackground";

import { Analytics } from "@vercel/analytics/next";
import Cursor from "@/components/Cursor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VertechX 13.0",
  description:
    "This year, VertechX introduces Pixelate a journey through the unexpected intersections between expectation and reality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen w-screen bg-[#0f131d] text-white cursor-none overflow-x-hidden scroll-smooth">
        <PixelGridBackground />
        <Suspense fallback={<LoadingSpinner />}>
          <NextAuthProvider>
            <Navbar />
            {children}
            <Toaster richColors />
            <Cursor />
          </NextAuthProvider>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
