export default function About() {
  return (
    <section id="about" className="border-b border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            About the Summit
          </h2>
          <p className="mb-4 text-sm text-slate-200 sm:text-base">
            Despite global headwinds, Dubai&apos;s real estate market continues
            to outperform other metropolises. High-net-worth individuals and
            overseas buyers are investing in high-end developments, while
            first-time buyers benefit from new freehold and visa reforms. This
            resilience positions Dubai as a global hub for business, tourism and
            innovation.
          </p>
          <p className="mb-4 text-sm text-slate-200 sm:text-base">
            Proptech, a fusion of property and technology, is transforming how
            real estate assets are managed and monetized. From predictive
            analytics and asset digitization to IoT-driven workplace management
            and performance dashboards, digital transformation is reshaping the
            sector.
          </p>
          <p className="text-sm text-slate-200 sm:text-base">
            The Middle East Proptech Innovation Summit 2023 offers a platform
            for the regional real estate community to explore this new era of
            Proptech — focusing on transparency of information, virtual
            viewings, AI-powered valuations, data-driven listings, blockchain
            transactions and more.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 text-base font-semibold">Key Objectives</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Understand Proptech impact across asset classes</li>
              <li>
                • Explore scalable digital strategies for real estate portfolios
              </li>
              <li>• Learn from case studies and peer best practices</li>
              <li>
                • Build connections with developers, investors and solution
                providers
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-sky-400/40 bg-sky-500/10 p-5">
            <h3 className="mb-2 text-base font-semibold">Event at a Glance</h3>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-100 sm:text-sm">
              <div>
                <p className="text-slate-300">Dates</p>
                <p className="font-semibold">23–24 May 2023</p>
              </div>
              <div>
                <p className="text-slate-300">Location</p>
                <p className="font-semibold">Dubai, UAE</p>
              </div>
              <div>
                <p className="text-slate-300">Format</p>
                <p className="font-semibold">In-person summit</p>
              </div>
              <div>
                <p className="text-slate-300">Website</p>
                <p className="font-semibold">www.dubaiproptech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
