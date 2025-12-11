import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhoMeet from "./components/WhoMeet";
import Industries from "./components/Industries";
import WhyAttend from "./components/WhyAttend";
import Topics from "./components/Topics";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -right-10 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <WhoMeet />
        <Industries />
        <WhyAttend />
        <Topics />
        <Sponsors />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
