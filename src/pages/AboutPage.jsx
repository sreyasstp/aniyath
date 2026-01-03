import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Fixed Navbar */}
      <Navbar />

      {/* PAGE CONTENT OFFSET (Navbar + Top Bar = 120px) */}
      <main className="pt-[120px]">
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
