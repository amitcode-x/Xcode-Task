import { useState } from "react";
import logo from "../assets/proptech-logo.jpg"; // 👈 Logo import added here

const navItems = [
  { id: "about", label: "About" },
  { id: "who-meet", label: "Who Will You Meet" },
  { id: "industries", label: "Industries" },
  { id: "why-attend", label: "Why Attend" },
  { id: "topics", label: "Topics" },
  { id: "sponsors", label: "Why Sponsor" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

        {/* Logo / Title */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3"
        >
          {/* 🔵 Logo Image Added */}
          <img
            src={logo}
            alt="Proptech Logo"
            className="h-10 w-10 rounded-lg object-contain bg-white p-1 shadow-md"
          />

          <div className="text-left">
            <p className="text-[10px] uppercase tracking-[0.35em] text-sky-400">
              Middle East
            </p>
            <p className="text-sm font-semibold sm:text-base">
              Proptech Innovation Summit 2023
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-200 transition-colors hover:text-sky-400"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition-transform hover:scale-105 hover:bg-sky-400"
          >
            Register Now
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 md:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-[5px]">
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setOpen(false);
                }}
                className="py-1 text-left text-slate-200 hover:text-sky-400"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                setOpen(false);
              }}
              className="mt-2 inline-flex justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 hover:bg-sky-400"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
