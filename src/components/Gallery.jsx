import { useState } from "react";
import useScrollAnimation from "../utils/useScrollAnimation";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "pro-1.jpg",
  "pro-2.jpg",
  "pro-3.jpg",
  "pro-4.jpg",
  "pro-5.jpg",
  "pro-6.jpg",
  "pro-7.jpg",
  "pro-8.jpg",
  "pro-9.jpg",
  "pro-10.jpg",
  "pro-11.jpg",
  "pro-12.jpg",
];

export default function Gallery() {
  const gridRef = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse into moments, classrooms, and activities at Aniyath
            Educational Institution
          </p>
        </div>

        {/* GALLERY GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up"
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={`/images/projects/${img}`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-3xl font-bold">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={`/images/projects/${galleryImages[activeIndex]}`}
            alt="Gallery Preview"
            className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
          />

          <button
            onClick={next}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
