"use client";

import Image from "next/image";
import { NavBar } from "@/components/navbar";
import { SplitText } from "@/components/split-text";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { useState } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "eggs", "chicken"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <NavBar />

      {/* Page Header */}
      <section className="relative w-full overflow-hidden bg-green-950 pt-36 pb-32 md:pt-44 md:pb-40">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/harvest.jpg"
            alt="Farm Harvest"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-green-950/80 via-green-950/60 to-green-950/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
           <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg flex flex-col justify-center items-center">
             <SplitText text="Our Products" delay={50} />
           </h1>
           <p className="mx-auto max-w-[800px] text-lg text-green-100/80 md:text-xl font-medium leading-relaxed drop-shadow-md">
             Discover our selection of premium, sustainably-raised poultry
             products. From fresh eggs to premium meat, we have something for
             everyone.
           </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 md:py-32 bg-slate-50 flex-1 relative overflow-hidden">
        <div className="absolute top-0 left-0 -ml-32 -mt-32 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 capitalize shadow-sm ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-green-600/30 ring-2 ring-green-600 ring-offset-2 hover:bg-green-700 hover:shadow-lg"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-green-300 hover:text-green-700 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group hover:-translate-y-2 transition-transform duration-300">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 text-xl font-medium">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
