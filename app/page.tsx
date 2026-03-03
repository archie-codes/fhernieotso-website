import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-svh w-full overflow-hidden">
      {/* ── Full-bleed diagonal background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #1d4ed8 0%, #1e40af 30%, #065f46 65%, #047857 100%)",
        }}
      />

      {/* ── Decorative blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 sm:h-96 sm:w-96" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5 sm:h-80 sm:w-80" />
        <div className="absolute right-1/4 top-1/2 h-32 w-32 rounded-full bg-emerald-400/10" />
        {/* Red accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-400 via-red-500 to-red-400 opacity-70" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex min-h-svh flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 pt-7 sm:px-10 sm:pt-9 md:px-16">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm sm:h-10 sm:w-10 sm:rounded-[12px]">
              <Image
                src="/fhernieotso-logo.png"
                alt="Fhernieotso logo"
                width={36}
                height={36}
                className="h-7 w-7 rounded-lg object-contain sm:h-8 sm:w-8"
                priority
              />
            </div>
            <span className="text-sm font-bold tracking-tight text-white/90 sm:text-base">
              Fhernieotso
            </span>
          </div>

          {/* Live badge */}
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-xs">
              Coming Soon
            </span>
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-10 sm:py-20 md:px-16">
          {/* Logo card */}
          <div className="mb-10 inline-block rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:mb-12 sm:rounded-[24px] sm:p-4">
            <Image
              src="/fhernieotso-logo.png"
              alt="Fhernieotso Poultry Farm"
              width={120}
              height={120}
              className="h-20 w-20 rounded-xl object-contain sm:h-28 sm:w-28 sm:rounded-2xl md:h-32 md:w-32"
              priority
            />
          </div>

          {/* Eye-line */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-200 sm:mb-5 sm:text-sm">
            Fhernieotso Poultry Farm
          </p>

          {/* Big headline */}
          <h1 className="max-w-2xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Under
            <br />
            Development
          </h1>

          {/* Accent line */}
          <div className="my-6 flex items-center gap-3 sm:my-8">
            <div className="h-px w-12 bg-white/30 sm:w-16" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300 sm:text-base">
              Launching Soon
            </span>
            <div className="h-px w-12 bg-white/30 sm:w-16" />
          </div>

          {/* Sub text */}
          <p className="max-w-md text-sm leading-relaxed text-white/60 sm:max-w-lg sm:text-base">
            We&apos;re building a better digital home for fresh eggs, healthy
            chickens, and trusted farm updates. Stay tuned.
          </p>

          {/* Stats trio */}
          <div className="mt-12 grid grid-cols-3 gap-3 sm:mt-14 sm:gap-5 md:gap-8">
            {[
              { value: "18+", label: "Years", accent: "text-blue-300" },
              {
                value: "10K+",
                label: "Chickens / Mo",
                accent: "text-emerald-300",
              },
              { value: "100%", label: "Organic", accent: "text-red-300" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm sm:rounded-[18px] sm:px-7 sm:py-5">
                  <span
                    className={`text-2xl font-black tracking-tight sm:text-3xl md:text-4xl ${s.accent}`}
                  >
                    {s.value}
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50 sm:text-[11px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 pb-8 text-center sm:px-10 sm:pb-10">
          <p className="text-[11px] font-medium uppercase tracking-widest text-white/30 sm:text-xs">
            &copy; {new Date().getFullYear()} Fhernieotso Poultry Farm &mdash;
            All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
