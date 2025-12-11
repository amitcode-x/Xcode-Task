export default function WhoMeet() {
  return (
    <section id="who-meet" className="border-b border-white/10">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Who Will You Meet?
          </h2>
          <p className="mb-6 text-sm text-slate-200 sm:text-base">
            Connect with senior decision-makers driving Proptech adoption across
            the region.
          </p>
          <ul className="space-y-3 text-sm text-slate-200 sm:text-base">
            <li>• CEOs / Managing Directors</li>
            <li>• CTOs, CIOs & Heads of Technology Innovation</li>
            <li>• Heads of Property Management</li>
            <li>• Heads of Sales & Marketing</li>
            <li>• Heads of Investments</li>
            <li>• Heads of Facility Management</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 text-base font-semibold">
            Industries Represented
          </h3>
          <ul className="grid grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {[
              "Property Developers",
              "Property Management Companies",
              "Real Estate Consultants",
              "Community Management Companies",
              "Real Estate Brokers",
              "Investors & Venture Capital Firms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
