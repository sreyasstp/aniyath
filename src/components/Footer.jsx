import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.type === "route") {
      navigate(item.path);
    } else {
      navigate(`/#${item.id}`);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* ABOUT */}
          <div className="md:col-span-2">
            <img
              src="/images/logo.png"
              alt="Aniyath Educational Institution"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Aniyath Educational Institution was established in 1981 and has
              been a trusted center of academic excellence in Palakkad.
            </p>

            <p className="mt-4 text-gray-400">
              📍 Pirayiri, Palakkad – 678004
            </p>
            <p className="mt-2 text-gray-400">
              📞 +91 94479 23249<br />
              ✉️ aniyathedu@gmail.com
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>

            {[
              { label: "Home", id: "home" },
              { label: "About Us", type: "route", path: "/about" },
              { label: "Courses", id: "courses" },
              { label: "Gallery", id: "gallery" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item)}
                className="block hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* COURSES */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Our Courses
            </h4>
            <div className="space-y-2 text-gray-400">
              <div>Mathematics & Statistics</div>
              <div>Engineering Mathematics</div>
              <div>Plus One & Plus Two</div>
              <div>CA Foundation</div>
              <div>Competitive Coaching</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aniyath Educational Institution
        </div>
      </div>
    </footer>
  );
}
