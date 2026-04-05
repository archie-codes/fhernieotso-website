import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NavBar } from "@/components/navbar";
import { SplitText } from "@/components/split-text";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials, products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { FarmStats } from "@/components/farm-stats";
import { ArrowRight, Leaf, Heart, Zap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Otso Poultry Farm | Premium Sustainable Poultry Products",
  description:
    "Discover premium, sustainably-raised poultry products from Otso Poultry Farm. Fresh eggs, chicken, and more.",
  openGraph: {
    title: "Otso Poultry Farm | Premium Sustainable Poultry",
    description: "Premium poultry products from our family farm.",
    type: "website",
  },
};

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-green-950 pt-24 pb-12">
        <div className="absolute inset-0 z-0 opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full absolute inset-0"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-green-950/80 via-green-950/60 to-green-950/95" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-medium backdrop-blur-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Fhernie Logistics × Otso Dragon
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] drop-shadow-lg flex flex-col justify-center items-center">
            <SplitText
              text="Premium Poultry from Our Farm to Your Table"
              delay={50}
            />
          </h1>

          <p className="mx-auto max-w-[800px] text-lg text-green-100/80 md:text-xl font-medium leading-relaxed drop-shadow-md">
            At Otso Poultry Farm, we've been raising the highest quality poultry
            using sustainable farming methods since 2012. Every egg, every bird,
            crafted with care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Link href="/products">
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-green-500 hover:bg-green-400 text-green-950 rounded-full font-bold shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all"
              >
                Shop Fresh Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg rounded-full border-green-100/20 text-green-100 bg-white/5 hover:bg-green-800/50 backdrop-blur-sm font-semibold transition-all"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full relative py-16 md:py-24 bg-white z-20 px-4 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <FarmStats />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-green-600/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-950 mb-6">
              Why Choose Otso Farm?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are committed to excellence in every aspect of our farming
              process. Our difference isn't just in the taste, but the methods
              we use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 transition-all duration-300 bg-white group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <Leaf className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-green-950 mb-4">
                Sustainable Farming
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We use eco-friendly practices to ensure the health of our farm
                and the environment for generations to come.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 transition-all duration-300 bg-white group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <Heart className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-green-950 mb-4">
                Animal Welfare
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our birds roam freely in natural habitats with access to open
                pasture and proper care throughout their lives.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 transition-all duration-300 bg-white group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-green-950 mb-4">
                Premium Quality
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Every product meets our rigorous standards for taste, nutrition,
                and quality. Excellence in every single bite.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Farm Highlights Section */}
      <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-950 leading-tight">
                Raised with absolute care, <br />
                <span className="text-green-600">delivered with pride.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that happy, healthy chickens produce the best quality
                meat and eggs. That's why we've designed our entire operation
                around the wellbeing of our flock and the health of our land.
              </p>
              <ul className="space-y-6 pt-4">
                {[
                  "100% cage-free and pasture-raised environments",
                  "Strictly no antibiotics or added hormones ever",
                  "Sustainable and eco-friendly farming practices",
                  "Daily fresh collection, processing, and delivery",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-lg text-slate-800 font-medium bg-green-50/50 p-4 rounded-2xl border border-green-100/50"
                  >
                    <CheckCircle2 className="mr-4 h-7 w-7 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-block pt-6">
                <Button
                  variant="link"
                  className="text-green-600 hover:text-green-700 p-0 h-auto text-lg font-bold flex items-center group"
                >
                  Learn more about our standards
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-square md:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 border-10 border-slate-50 rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/pasture.jpg"
                alt="Happy chickens free-roaming in pasture"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-green-950 tracking-tight">
                Fresh from the farm
              </h2>
              <p className="text-xl text-slate-600 mt-4 leading-relaxed">
                Discover our selection of premium poultry products, prepared
                daily for the highest quality and freshness.
              </p>
            </div>
            <Link href="/products">
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 font-bold border-green-200 text-green-800 hover:bg-green-100 hover:text-green-900 group"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group flex">
                <div className="hover:-translate-y-2 transition-transform duration-300 w-full hover:shadow-xl rounded-xl">
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 md:py-32 bg-green-950 text-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-[500px] h-[500px] bg-green-800 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-[500px] h-[500px] bg-green-700 rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Trusted by our community
            </h2>
            <p className="text-xl text-green-200/80 leading-relaxed">
              Hear what local chefs, families, and businesses have to say about
              the quality of our produce and service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="hover:-translate-y-2 transition-transform duration-300 h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-linear-to-br from-green-50 to-white border-t border-green-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full blur-[120px] opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-green-950 mb-6 leading-tight">
            Ready to taste the difference?
          </h2>
          <p className="text-xl text-green-800/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Visit our farm store today or contact us for wholesale inquiries,
            bulk orders, and regular deliveries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-10 text-lg bg-green-600 hover:bg-green-500 text-white rounded-full font-bold shadow-xl shadow-green-600/30 hover:scale-105 transition-all w-full sm:w-auto"
              >
                Contact Us Now
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg rounded-full border-green-200 text-green-800 hover:bg-green-100 font-bold hover:scale-105 transition-all w-full sm:w-auto"
              >
                Shop Direct
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
