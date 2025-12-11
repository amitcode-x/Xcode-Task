const points = [
  "Gain knowledge and insights from top industry leaders and global experts.",
  "Network with peers in a solution-oriented environment.",
  "Discuss significant partnerships and collaborations with key stakeholders.",
  "Deep dive into real-time case studies and practical implementations.",
  "Build ecosystem collaborations to address the latest challenges.",
];

export default function WhyAttend() {
  return (
    <section id="why-attend" className="border-b border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Why Attend?
          </h2>
          <p className="mb-4 text-sm text-slate-200 sm:text-base">
            Discover emerging trends in digital transformation of the real
            estate industry, explore innovative Proptech solutions and learn how
            to turn technology into tangible business value.
          </p>
          <p className="text-sm text-slate-200 sm:text-base">
            The summit combines presentations, panel discussions and
            peer-to-peer networking to help you design and execute a
            future-ready Proptech roadmap.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-sm"
            >
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-lg text-sky-400">
                •
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
