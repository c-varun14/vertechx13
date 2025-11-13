import type { Metadata } from "next";
import "@/app/globals.css";
// import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Vertchx 13.0",
  description: "This is the home page of the Vertechx 13.0 fest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-screen antialiased min-h-screen relative overflow-x-hidden bg-contain bg-center bg-[url('/assets/AndroidBackground.png')] md:bg-[url('/assets/Background.png')] bg-fixed scroll-smooth`}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <NextAuthProvider>
            {children}
            <Toaster richColors />
          </NextAuthProvider>
          {/* <Footer /> */}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
