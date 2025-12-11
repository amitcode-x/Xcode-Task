export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Register Your Interest
          </h2>
          <p className="mb-4 text-sm text-slate-200 sm:text-base">
            Ready to innovate and join the ranks of industry thought leaders?
            Share your details and our team will connect with you regarding
            registration, sponsorship or speaking opportunities.
          </p>
          <p className="mb-2 text-sm text-slate-200 sm:text-base">
            You can also reach us directly at:
          </p>
          <div className="space-y-1 text-sm">
            <p>
              Phone: <span className="font-semibold">+91 98765 43210</span>
            </p>
            <p>
              Email: <span className="font-semibold">abdc@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "This is a demo form for the assignment. In a real project, this would submit data to a backend."
              );
            }}
            className="space-y-4 text-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-slate-200">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-sky-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-slate-200">Company</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-sky-400"
                  placeholder="Your organization"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-slate-200">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-sky-400"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-slate-200">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-sky-400"
                  placeholder="+971..."
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-slate-200">
                I am interested in
              </label>
              <select className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-sky-400">
                <option>Attending as a delegate</option>
                <option>Sponsorship opportunities</option>
                <option>Speaking opportunities</option>
                <option>Exhibiting / showcasing solutions</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-slate-200">
                Message (optional)
              </label>
              <textarea
                rows="3"
                className="w-full resize-none rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-sky-400"
                placeholder="Share any specific interests or questions..."
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition-transform hover:scale-105 hover:bg-sky-400"
            >
              Submit Interest
            </button>
            <p className="mt-2 text-[11px] text-slate-300">
              * This is a demo website built as part of a technical assessment.
              Form submissions are not stored.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
