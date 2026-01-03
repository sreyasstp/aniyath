import { useEffect, useState } from "react";
import useParallax from "../utils/useParallax";
import useScrollAnimation from "../utils/useScrollAnimation";

const slides = [
  {
    image: "/images/slides/1.jpg",
    badge: "Since 1981",
    title: "WELCOME TO ANIYATH EDUCATIONAL INSTITUTION",
    subtitle:
      "Empowering minds through quality education and dedicated mentoring since 1981",
    primaryBtn: {
      text: "START A COURSE",
      link: "/courses",
    },
    secondaryBtn: {
      text: "ABOUT ANIYATH",
      link: "/about",
    },
  },
  {
    image: "/images/slides/2.jpg",
    badge: "Centre of Excellence",
    title: "ANIYATH – THE CENTRE OF SCIENCE & COMMERCE",
    subtitle:
      "Inspiring curiosity, building knowledge, and shaping successful futures",
    primaryBtn: {
      text: "COURSES OFFERED",
      link: "/courses",
    },
    secondaryBtn: {
      text: "CONTACT US",
      link: "/#contact",
    },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const bgRef = useParallax(0.25);
  const badgeRef = useScrollAnimation();
  const titleRef = useScrollAnimation(150);
  const textRef = useScrollAnimation(300);
  const btnRef = useScrollAnimation(450);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen pt-[120px] overflow-hidden">
      {/* PARALLAX BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center scale-110 will-change-transform transition-opacity duration-1000"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl text-white">

          {/* BADGE */}
          <div
            ref={badgeRef}
            className="inline-block mb-6 px-4 py-1 rounded-full border border-white/40 text-sm tracking-wide uppercase animate-fade-up"
          >
            {slide.badge}
          </div>

          {/* TITLE */}
          <h1
            ref={titleRef}
            className="
                        text-3xl
                        md:text-5xl
                        lg:text-6xl
                        font-bold
                        mb-6
                        leading-tight
                        animate-fade-up
                        drop-shadow-lg
                        md:whitespace-nowrap
                      "
          >
            {slide.title}
          </h1>


          {/* SUBTITLE */}
          <p
            ref={textRef}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed animate-fade-up"
          >
            {slide.subtitle}
          </p>

          {/* BUTTONS */}
          <div
            ref={btnRef}
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          >
            <a
              href={slide.primaryBtn.link}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full font-semibold shadow-lg"
            >
              {slide.primaryBtn.text}
            </a>

            <a
              href={slide.secondaryBtn.link}
              className="px-8 py-3 border border-white/80 hover:bg-white hover:text-black transition rounded-full font-semibold"
            >
              {slide.secondaryBtn.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
