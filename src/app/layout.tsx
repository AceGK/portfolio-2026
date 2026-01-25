import type { Metadata } from "next";
import { Geist, Geist_Mono, UnifrakturMaguntia, Grenze_Gotisch } from "next/font/google";
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
  title: "Ace - Software Engineer",
  description: "Portfolio of Ace, a software engineer specializing in full-stack web development and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${oldEnglish.variable}`}>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}