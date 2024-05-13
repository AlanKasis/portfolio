import type { Metadata } from "next";
import { Inter, Sen } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Providers from "@/components/providers";
import R3fAnimatedBackground from "@/components/r3f-animated-background";
import Image from "next/image";
import Script from "next/script";
import ScrollIndicator from "@/components/scroll-indicator";
import { Suspense } from "react";
import Loading from "@/components/loading";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const sen = Sen({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Alan Kasis | Creative Developer",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${sen.className}`}>
          <Header />
          <div className="container">{children}</div>
          <Suspense fallback={<Loading />}>
            <R3fAnimatedBackground />
            <ScrollIndicator />
          </Suspense>
          <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
        </body>
      </Providers>
    </html>
  );
}
