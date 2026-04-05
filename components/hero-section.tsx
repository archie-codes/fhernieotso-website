import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Learn More",
  ctaLink = "/about",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
      )}
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-accent font-semibold mb-6 drop-shadow-md">
            {subtitle}
          </p>

          {/* Description */}
          {description && (
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 text-balance drop-shadow-md">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ctaLink}>
              <Button size="lg" className="w-full sm:w-auto">
                {ctaText}
              </Button>
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
