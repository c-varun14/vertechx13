import "../globals.css";
import { Suspense } from "react";
import Navbar from "@/components/vertechx/Navbar";
import Footer from "@/components/vertechx/Footer";
import { Toaster } from "@/components/ui/sonner";
import { NextAuthProvider } from "@/components/NextAuthProvider";

import LoadingSpinner from "@/components/LoadingSpinner";

import PixelGridBackground from "@/components/vertechx/PixelGridBackground";

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen w-screen bg-[#0f131d] text-white overflow-x-hidden scroll-smooth">
        <PixelGridBackground />
        <Suspense fallback={<LoadingSpinner />}>
          <NextAuthProvider>
            <Navbar />
            {children}
            <Toaster richColors />
            
          </NextAuthProvider>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
