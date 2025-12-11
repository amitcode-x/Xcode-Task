import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10"
    >
      {/* Background Image (Parallax Effect Simulation) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      {/* Soft vignette for focus */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

      {/* Floating Glow Decorations (Animated) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 right-10 h-[28rem] w-[28rem] rounded-full bg-emerald-400/25 blur-[90px] animate-pulse-slow" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">

        {/* LEFT CONTENT */}
        <div className="animate-fade-up">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-sky-400">
            23rd – 24th May 2023 • Dubai, UAE
          </p>

          <h1 className="mb-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl drop-shadow-lg">
            Middle East{" "}
            <span className="text-sky-400">Proptech Innovation</span> Summit
            2023
          </h1>

          <p className="mb-6 max-w-md text-sm text-slate-200 sm:text-base">
            Embracing Proptech to drive innovation in Real Estate and unlock the
            next era of digital, data-driven property management in Dubai and
            beyond.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/40 transition-transform hover:scale-105 hover:bg-sky-400"
            >
              Register Your Interest
            </a>

            <a
              href="#about"
              className="text-sm text-slate-200 hover:text-sky-400"
            >
              View Event Overview →
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-300 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              2 days of networking & insights
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              C-level decision makers
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Tech, Real Estate & Investment leaders
            </div>
          </div>
        </div>

        {/* RIGHT SNAPSHOT CARD */}
        <div className="animate-fade-up animation-delay-200 md:justify-self-end">
          <div className="ml-auto max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-sky-400">
              Snapshot
            </p>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Dubai&apos;s Proptech Moment
            </h2>

            <p className="mb-4 text-sm text-slate-200">
              Dubai recorded over{" "}
              <span className="font-semibold">84,196</span> real estate
              transactions in 2021 worth almost{" "}
              <span className="font-semibold">AED 300 billion</span> — the
              highest ever. Q2 2022 recorded{" "}
              <span className="font-semibold">45.86%</span> volume growth and{" "}
              <span className="font-semibold">61.56%</span> value surge.
            </p>

            <p className="mb-4 text-sm text-slate-200">
              The summit unites global and regional leaders exploring how AI,
              blockchain, automation and IoT are redefining property
              development, investment and management.
            </p>

            <ul className="space-y-1 text-sm text-slate-200">
              <li>• 2 days of high-impact sessions</li>
              <li>• 20+ thought leaders and innovators</li>
              <li>• Delegates from across the globe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
