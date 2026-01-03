import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import useScrollAnimation from "../utils/useScrollAnimation";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/slides/3.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-200">
            Voices from our students who have grown with Aniyath Educational Institution
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const ref = useScrollAnimation(index * 180);

            return (
              <div
                key={index}
                ref={ref}
                className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-xl transition animate-card"
              >
                {/* STARS */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* QUOTE */}
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  “{testimonial.text}”
                </p>

                {/* AUTHOR */}
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
