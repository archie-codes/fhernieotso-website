"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/logistics", label: "Logistics" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isTransparent = !isScrolled;
  const isGreen = isScrolled;

  // Determine styles strictly based on state
  const textClass = isTransparent || isGreen ? "text-white" : "text-foreground";
  const hoverClass =
    isTransparent || isGreen ? "hover:text-green-200" : "hover:text-primary";
  const borderClass = isGreen
    ? "border-transparent"
    : isTransparent
      ? "border-transparent"
      : "border-border";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${borderClass} ${
          !isGreen && !isTransparent ? "bg-background shadow-sm" : ""
        }`}
      >
        {/* Smooth Gradient Crossfade Overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-r from-green-600 to-green-700 shadow-md backdrop-blur-md transition-opacity duration-500 ${
            isGreen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? "h-16" : "h-20"}`}
          >
            {/* Logo */}
            <Link href="/" className={`flex items-center gap-3 ${textClass}`}>
              {/* Logo Image */}
              <div className="shrink-0 transition-transform hover:scale-105 duration-300">
                <Image
                  src="/logo.png"
                  alt="FhernieOtso Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-xl leading-none tracking-tight hidden sm:block">
                  Fhernie
                  <span
                    className={
                      isTransparent || isGreen
                        ? "text-green-300"
                        : "text-primary"
                    }
                  >
                    Otso
                  </span>
                </span>
                <span
                  className={`text-[9px] uppercase tracking-widest font-bold mt-1 hidden sm:block opacity-90 ${isTransparent || isGreen ? "text-white" : "text-muted-foreground"}`}
                >
                  Logistics & Poultry
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative ${textClass} ${hoverClass} transition-colors font-medium text-sm py-1 group`}
                  >
                    {link.label}
                    {/* Animated Underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-current transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Admin Link */}
            {/* <div className="hidden md:flex gap-4">
              <Link href="/admin">
                <Button
                  variant={isTransparent || isGreen ? "outline" : "outline"}
                  size="sm"
                  className={`transition-colors duration-500 ${isTransparent || isGreen ? "bg-transparent text-white border-white hover:bg-white hover:text-green-700" : ""}`}
                >
                  Admin
                </Button>
              </Link>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors duration-500 ${textClass}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className={`md:hidden border-t py-4 space-y-2 transition-colors duration-500 ${
                isTransparent || isGreen
                  ? "border-green-600 bg-linear-to-r from-green-600 to-green-700"
                  : "border-border bg-background"
              } absolute left-0 right-0 px-4 shadow-xl`}
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? isTransparent || isGreen
                          ? "bg-green-600 text-white font-semibold"
                          : "bg-muted text-foreground font-semibold"
                        : isTransparent || isGreen
                          ? "text-white hover:bg-green-600"
                          : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* <Link
                href="/admin"
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isTransparent || isGreen
                    ? "text-white hover:bg-green-600"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link> */}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
