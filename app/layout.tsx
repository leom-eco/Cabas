import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const titre = "Cabas : tes courses de la semaine, dans ton budget";
const description =
  "Dis-nous ton budget et combien vous êtes. Cabas prépare tes menus et ta liste de courses par rayon, avec le total estimé.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabas-zeta.vercel.app"),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    url: "/",
    siteName: "Cabas",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6EE",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
