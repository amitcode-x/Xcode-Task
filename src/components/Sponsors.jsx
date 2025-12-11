export default function Sponsors() {
  return (
    <section id="sponsors" className="border-b border-white/10">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Why Sponsor?
          </h2>
          <p className="mb-4 text-sm text-slate-200 sm:text-base">
            The Middle East Proptech Innovation Summit 2023 is a focused
            platform for solution providers to engage with decision makers from
            leading property developers, management companies and brokerage
            houses.
          </p>
          <p className="text-sm text-slate-200 sm:text-base">
            Differentiate your offerings, showcase innovation and position your
            brand at the center of the region&apos;s Proptech conversation.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <h3 className="mb-2 text-base font-semibold">
              Demonstrate Thought Leadership
            </h3>
            <p>
              Deliver a standalone presentation or moderate a panel discussion
              in front of a pre-qualified audience of senior decision makers.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <h3 className="mb-2 text-base font-semibold">
              Network &amp; Generate Leads
            </h3>
            <p>
              Connect with executives selected based on seniority, budgets and
              appetite for digital transformation, maximizing ROI from your
              participation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <h3 className="mb-2 text-base font-semibold">Brand Positioning</h3>
            <p>
              Establish, strengthen and re-position your brand among business
              owners and technology leaders realigning their Proptech
              strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
