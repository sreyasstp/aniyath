import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed header */}
      <div className="pt-[120px]" />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
