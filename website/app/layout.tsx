import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MudRox",
  description: "A long-term passion project to create the most satisfying buddy to drive.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={`${montserrat.variable} ${orbitron.variable}`}>{children}</body>
    </html>
  );
}
