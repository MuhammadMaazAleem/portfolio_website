import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Maaz Aleem — MERN Stack Developer & ML Enthusiast",
  description:
    "Portfolio of Muhammad Maaz Aleem — a MERN Stack Developer, ML Enthusiast, and co-founder of a freelance software agency based in Islamabad, Pakistan.",
  keywords: [
    "Muhammad Maaz Aleem",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Machine Learning",
    "Next.js Developer",
    "Islamabad",
    "Pakistan",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Muhammad Maaz Aleem" }],
  creator: "Muhammad Maaz Aleem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadmaazaleem.dev",
    title: "Muhammad Maaz Aleem — MERN Stack Developer",
    description:
      "Building impactful web experiences at the intersection of design and engineering.",
    siteName: "Muhammad Maaz Aleem Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Maaz Aleem — MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Maaz Aleem — MERN Stack Developer",
    description: "Building impactful web experiences at the intersection of design and engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ background: "#0A0E1A" }}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
