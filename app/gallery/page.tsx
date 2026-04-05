"use client";

import Image from "next/image";
import { NavBar } from "@/components/navbar";
import { SplitText } from "@/components/split-text";
import { Footer } from "@/components/footer";
import { galleryImages } from "@/lib/data";
import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <NavBar />

      {/* Page Header */}
      <section className="relative w-full overflow-hidden bg-green-950 pt-36 pb-32 md:pt-44 md:pb-40">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/coop.jpg"
            alt="Chicken Coop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-green-950/80 via-green-950/60 to-green-950/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg flex flex-col justify-center items-center">
            <SplitText text="Farm Gallery" delay={50} />
          </h1>
          <p className="mx-auto max-w-[800px] text-lg text-green-100/80 md:text-xl font-medium leading-relaxed drop-shadow-md">
            Take a visual tour of our beautiful farm, our happy animals, and our
            sustainable operations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 md:py-32 bg-slate-50 flex-1 relative overflow-hidden">
         <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-[100px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-white">
            <GalleryGrid images={galleryImages} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
