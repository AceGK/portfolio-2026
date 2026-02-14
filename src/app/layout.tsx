import type { Metadata } from "next";
import { Geist, Geist_Mono, Grenze_Gotisch } from "next/font/google";
import { Footer } from "@/components/ui/Footer";
import "@/styles/globals.scss";
import "@/styles/_variables.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oldEnglish = Grenze_Gotisch({
  variable: "--font-old-english",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ace",
  description:
    "Full-stack web developer specializing in React, Next.js, and TypeScript.",

  icons: {
    icon: [
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oldEnglish.variable}`}
      >
        <div className="page">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
