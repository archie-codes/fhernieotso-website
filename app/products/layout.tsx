import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Otso Poultry Farm",
  description:
    "Browse our selection of premium poultry products including eggs, chicken, turkey, and more.",
  openGraph: {
    title: "Products | Otso Poultry Farm",
    description:
      "Shop our premium poultry products - fresh eggs, premium chicken, turkey, and more.",
    type: "website",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
