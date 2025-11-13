import type { Metadata } from "next";
import "@/app/globals.css";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Vertechx 13.0 event verification page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-screen antialiased min-h-screen relative overflow-x-hidden bg-contain bg-center bg-[url('/assets/AndroidBackground.png')] md:bg-[url('/assets/Background.png')] bg-fixed text-[#5F4A37] scroll-smooth`}
      >
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </body>
    </html>
  );
}
