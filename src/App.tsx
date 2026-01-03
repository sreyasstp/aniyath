import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ✅ HASH-BASED SCROLL (GLOBAL FIX) */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        // small delay ensures DOM is ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  /* ✅ NORMAL SCROLL (HOME PAGE USE) */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-neutral-50">
            <Navbar
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              scrollToSection={scrollToSection}
            />

            <Hero />
            <Courses />
            <Gallery />
            <Testimonials />
            <Contact />

            <Footer />
          </div>
        }
      />

      {/* ABOUT PAGE */}
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
