import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollTop from "@/components/layout/ScrollTop";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: ".com — Portfolio de sites web",
  description:
    "Découvrez une collection curatée de sites web exceptionnels, des portfolios créatifs aux projets innovants.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={`${inter.className} bg-light`}>
        <div className="flex flex-col min-h-dvh">
          <Header />
          {children}
          <ScrollTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
