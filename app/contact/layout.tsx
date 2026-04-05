import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Otso Poultry Farm",
  description:
    "Get in touch with Otso Poultry Farm. We love hearing from our customers about our premium poultry products.",
  openGraph: {
    title: "Contact Us | Otso Poultry Farm",
    description:
      "Reach out to us with any questions about our products or services.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
