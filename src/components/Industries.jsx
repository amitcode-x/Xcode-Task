export default function Industries() {
  const items = [
    "Property Developers",
    "Property Management",
    "Real Estate Consultants",
    "Community Management",
    "Brokerage Houses",
    "Investors & VCs",
  ];

  return (
    <section id="industries" className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12">
        <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
          Industries Covered
        </h2>
        <p className="mb-5 text-sm text-slate-200 sm:text-base">
          A diverse ecosystem across the real estate and investment value chain.
        </p>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-slate-100 shadow-sm sm:text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
