const topics = [
  "Big Data collection and analysis of property data",
  "AI and cloud-based software to streamline administration tasks",
  "Virtual Reality tools to enhance the property viewing experience",
  "Automated property and facilities management",
  "Blockchain-powered real estate transactions",
  "IoT ‘smart’ devices and sensors for efficient property maintenance",
  "Online platforms and chatbots to elevate customer experience",
  "Crowdfunding as an alternate source of property funding",
  "Innovative mobile applications for tenants and landlords",
  "Impact of cryptocurrency on the real estate sector",
];

export default function Topics() {
  return (
    <section id="topics" className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
          Topic Highlights
        </h2>
        <p className="mb-6 text-sm text-slate-200 sm:text-base">
          Explore real-world case studies, implementations and technologies
          reshaping Proptech across the Middle East.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <div
              key={topic}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
