"use client";

import Image from "next/image";
import { NavBar } from "@/components/navbar";
import { SplitText } from "@/components/split-text";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, ThermometerSnowflake, Clock, MapPin } from "lucide-react";

export default function LogisticsPage() {
  const features = [
    {
      title: "Live Poultry Transport",
      description:
        "Specialized, ventilated transport fleet ensuring the highest humane standards and minimum stress for live birds during transit.",
      icon: (
        <Truck className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
    {
      title: "Cold Chain Distribution",
      description:
        "State-of-the-art refrigerated trucks keeping eggs and processed poultry at the exact optimal temperatures from the farm completely to your door.",
      icon: (
        <ThermometerSnowflake className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
    {
      title: "Rapid Delivery Timing",
      description:
        "Calculated logistical routes that guarantee farm-to-table delivery within 24 hours of harvest, preserving maximum freshness.",
      icon: (
        <Clock className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
    {
      title: "Nationwide Operations",
      description:
        "Scaling across the entire country with centralized hubs to meet both local grocer demands and massive wholesale enterprise orders.",
      icon: (
        <MapPin className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col font-sans">
      <NavBar />

      {/* Page Header */}
      <section className="relative w-full overflow-hidden bg-green-950 pt-36 pb-32 md:pt-44 md:pb-40">
        <div className="absolute inset-0 z-0 opacity-80">
          <Image
            src="/images/logistics-header.png"
            alt="Logistics Transport Truck"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-green-950/80 via-green-950/60 to-green-950/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg flex flex-col justify-center items-center">
            <SplitText text="Fhernie Logistics" delay={35} />
          </h1>
          <p className="mx-auto max-w-[800px] text-lg text-green-100/80 md:text-xl font-medium leading-relaxed drop-shadow-md">
            The powerhouse sister-company behind Otso Farm. We provide rapid,
            world-class transport ensuring that our premium poultry arrives
            seamlessly and freshly at your exact location.
          </p>
        </div>
      </section>

      {/* Fleet & Capabilities Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-950 mb-6">
              Our Advanced Fleet
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Handling millions of units a year requires heavy-duty logistics.
              Fhernie Logistics is equipped with a highly specialized fleet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 transition-all duration-300 bg-white border border-green-50 shadow-lg shadow-green-900/5 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-green-950 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base font-medium">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farm to Table Synergy */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative aspect-square md:aspect-4/3 min-h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 border-8 border-slate-50 rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/warehouse-distribution.png"
                alt="Logistics Distribution Logistics"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-800 font-bold text-sm tracking-wide mb-2 uppercase">
                The Alliance Advantage
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-green-950 leading-tight">
                Why Sister Companies Work Better.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                By uniting Otso's farming expertise directly with Fhernie
                Logistics' distribution network, we completely eliminate
                standard supply chain bottlenecks.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Complete oversight of the supply chain",
                  "Direct farm-to-warehouse loading",
                  "Lower costs passed directly to consumers",
                  "Unmatched product traceability",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-slate-800 font-medium bg-green-50/50 p-4 rounded-2xl border border-green-100/50"
                  >
                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 mr-4">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
