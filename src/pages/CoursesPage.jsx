import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed header */}
      <div className="pt-[120px]" />

      {/* Courses Section */}
      <Courses />

      {/* Footer */}
      <Footer />
    </div>
  );
}
