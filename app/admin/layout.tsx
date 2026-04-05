import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Otso Poultry Farm",
  description: "Admin dashboard for managing products and customer messages.",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
