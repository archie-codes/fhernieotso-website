import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otso Poultry Farm | Premium Sustainable Poultry Products",
  description:
    "Otso Poultry Farm delivers premium, sustainably-raised poultry products. Fresh eggs, chicken, turkey and more from our family farm.",
  generator: "v0.app",
  openGraph: {
    title: "Otso Poultry Farm | Premium Sustainable Poultry",
    description:
      "Discover premium poultry products from our family farm. Quality, sustainability, and tradition combined.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/logo.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.svg",
  },
};

import { ScrollToTop } from "@/components/scroll-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
