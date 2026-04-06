import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Badstue Mannen — Norske badstuer av høy kvalitet",
  description:
    "Vi selger badstuer og tilbehør tilpasset norsk natur og klima. Finn din badstue og ta kontakt for et tilbud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={inter.variable}>
      <body>
        <AnnouncementBar />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
