import { Menu, X, Phone, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ isMenuOpen, setIsMenuOpen, scrollToSection }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", type: "scroll", id: "home" },
    { label: "About", type: "route", path: "/about" },
    { label: "Courses", type: "scroll", id: "courses" },
    { label: "Gallery", type: "scroll", id: "gallery" },
    { label: "Contact", type: "scroll", id: "contact" }, // ✅ ADDED
  ];


  const handleNavClick = (item) => {
    if (item.type === "route") {
      navigate(item.path);
      setIsMenuOpen(false);
      return;
    }

    // Scroll type
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(item.id), 100);
    } else {
      scrollToSection(item.id);
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* TOP INFO BAR */}
      <div className="hidden md:block bg-white border-b text-sm">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-gray-600">
          <span>
            Aniyath Educational Institution, Pirayiri, Palakkad
          </span>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 94479 23249
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> aniyathedu@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <div
              onClick={() => handleNavClick({ type: "scroll", id: "home" })}
              className="cursor-pointer"
            >
              <img
                src="/images/logo.png"
                alt="Aniyath Educational Institution"
                className="h-14 w-auto"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 font-semibold text-[15px]">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-[#f5a623] transition"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick({ type: "scroll", id: "contact" })}
                className="ml-2 bg-primary text-white px-6 py-2 rounded hover:bg-primaryHover transition font-semibold"
              >
                Contact Us
              </button>

            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left font-semibold text-gray-700"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                navigate("/about");
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#048683] text-white px-6 py-3 rounded hover:bg-[#036b5f] transition font-semibold"
            >
              About Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
