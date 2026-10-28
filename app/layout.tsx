import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cabas, les courses de la semaine qui tiennent dans un budget",
  description:
    "Dis-nous ton budget et combien vous êtes : Cabas prépare tes menus et ta liste de courses.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
