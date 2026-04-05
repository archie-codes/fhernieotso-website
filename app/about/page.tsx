import Image from "next/image";
import { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { SplitText } from "@/components/split-text";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { farmInfo } from "@/lib/data";
import { FarmStats } from "@/components/farm-stats";
import {
  CheckCircle2,
  Leaf,
  Heart,
  ShieldCheck,
  Lightbulb,
  Users,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Otso Poultry Farm | Our Story & Mission",
  description:
    "Learn about Otso Poultry Farm - our history, mission, and commitment to sustainable poultry farming since 2010.",
  openGraph: {
    title: "About Otso Poultry Farm",
    description:
      "Discover our story, values, and commitment to quality and sustainability.",
    type: "website",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Quality",
      description: "We never compromise on product quality and care.",
      icon: (
        <CheckCircle2 className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility in every decision.",
      icon: (
        <Leaf className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
    {
      title: "Transparency",
      description: "Open and honest relationships with our customers.",
      icon: (
        <ShieldCheck className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
    {
      title: "Innovation",
      description: "Continuously improving our farming methods.",
      icon: (
        <Lightbulb className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
    {
      title: "Tradition",
      description: "Honoring time-tested farming practices.",
      icon: (
        <Clock className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
    {
      title: "Community",
      description: "Supporting local economies and building relationships.",
      icon: (
        <Users className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <NavBar />

      {/* Page Header */}
      <section className="relative w-full overflow-hidden bg-green-950 pt-36 pb-32 md:pt-44 md:pb-40">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/pasture.jpg"
            alt="Otso Farm Pasture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-green-950/80 via-green-950/60 to-green-950/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg flex flex-col justify-center items-center">
            <SplitText text="About Otso Poultry Farm" delay={50} />
          </h1>
          <p className="mx-auto max-w-[800px] text-lg text-green-100/80 md:text-xl font-medium leading-relaxed drop-shadow-md">
            Discover the story behind our commitment to quality, sustainability,
            and animal welfare.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-green-600/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-950 leading-tight">
                Our Story
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium text-justify">
                {farmInfo.story}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                What started as a small family operation has grown into a
                respected regional producer. Yet our core values remain
                absolutely unchanged: raise the healthiest birds, use
                sustainable practices, and deliver premium products we're
                immensely proud of.
              </p>
            </div>
            <div className="relative aspect-square md:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 border-8 border-white -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/coop.jpg"
                alt="Otso Farm History"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-green-950 text-green-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-24 -ml-24 w-[500px] h-[500px] bg-green-800 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-[500px] h-[500px] bg-green-700 rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-10 bg-green-900/80 backdrop-blur-sm border-green-800/50 hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">
                Our Mission
              </h3>
              <p className="text-xl leading-relaxed text-green-100 font-medium text-justify">
                {farmInfo.mission}
              </p>
            </Card>
            <Card className="p-10 bg-white/5 backdrop-blur-sm border-green-100/10 hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">
                Our Vision
              </h3>
              <p className="text-xl leading-relaxed text-green-100 font-medium text-justify">
                To be the most trusted source for premium poultry products in
                the region, recognized for our unwavering commitment to animal
                welfare, environmental sustainability, and complete customer
                satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-950 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              The principles that guide our daily operations and long-term
              partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-1 hover:border-green-200 transition-all duration-300 bg-slate-50 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-green-950 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="w-full pb-24 md:pb-32 bg-white px-4 relative z-20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-950">
              By The Numbers
            </h2>
          </div>
          <div className="bg-slate-50 rounded-3xl border-8 border-slate-50 shadow-2xl shadow-green-900/10 overflow-hidden relative">
            <FarmStats />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
