import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Otso Poultry Farm",
  description:
    "Explore photos from Otso Poultry Farm - our animals, farm landscapes, and daily operations.",
  openGraph: {
    title: "Gallery | Otso Poultry Farm",
    description: "See our farm, animals, and operations in action.",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
