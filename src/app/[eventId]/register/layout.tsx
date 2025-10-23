import type { Metadata } from "next";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
// import Cursor from "@/components/Cursor";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import PixelGridBackground from "@/components/vertechx/PixelGridBackground";

export const metadata: Metadata = {
  title: "Event Registration Page",
  description: "This is the Event Registration page of the Vertechx 13.0 fest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-screen antialiased relative overflow-x-hidden`}>
        <PixelGridBackground />
        <Suspense fallback={<LoadingSpinner />}>
          {children}
          <Toaster richColors />
          {/* <Cursor /> */}
        </Suspense>
      </body>
    </html>
  );
}
