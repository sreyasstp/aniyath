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
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ✅ GLOBAL HASH SCROLL SUPPORT (/#contact) */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  /* ✅ HOME PAGE SCROLL */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <Routes>
      {/* HOME */}
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
            <Footer scrollToSection={scrollToSection} />
          </div>
        }
      />

      {/* ABOUT */}
      <Route path="/about" element={<AboutPage />} />

      {/* COURSES */}
      <Route path="/courses" element={<CoursesPage />} />

      {/* CONTACT */}
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
