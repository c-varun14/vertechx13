import "../globals.css";
import { Suspense } from "react";
import Navbar from "@/components/vertechx/Navbar";
import Footer from "@/components/vertechx/Footer";
import { Toaster } from "@/components/ui/sonner";
import { NextAuthProvider } from "@/components/NextAuthProvider";

import LoadingSpinner from "@/components/LoadingSpinner";

import PixelGridBackground from "@/components/vertechx/PixelGridBackground";

import { Analytics } from "@vercel/analytics/next";

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
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="google-site-verification" content="J6bmXYd7nEffrLpEsna74MU6K223Ci3otNvLqfT-ewE" />
      </head>
      <body className="relative min-h-screen w-screen bg-[#0f131d] text-white overflow-x-hidden scroll-smooth pt-32">
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
