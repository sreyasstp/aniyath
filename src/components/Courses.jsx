import useScrollAnimation from "../utils/useScrollAnimation";

const courses = [
  {
    title: "Mathematics and Statistics Papers",
    image: "/images/services/service/1.jpg",
    time: "Morning / Evening",
    name: "BSC, MSC, MBA, MCA",
  },
  {
    title: "Engineering Mathematics",
    image: "/images/services/service/2.jpg",
    time: "Morning / Evening",
    name: "B-TECH, M-TECH",
  },
  {
    title: "Quantitative Aptitude for Competitive Examinations",
    image: "/images/services/service/3.jpg",
    time: "Morning / Evening",
    name: "UGC-NET, SET, CTET, MAT, CMAT, CAT, GATE, CET, IIT-JAM",
  },
  {
    title: "Plus Two Mathematics",
    image: "/images/services/service/4.jpg",
    time: "Morning / Evening",
    name: "CBSE & STATE",
  },
  {
    title: "Plus One Mathematics",
    image: "/images/services/service/5.jpg",
    time: "Morning / Evening",
    name: "CBSE & STATE",
  },
  {
    title: "STD 1st to Xth – All Subjects",
    image: "/images/services/service/6.jpg",
    time: "Morning / Evening",
    name: "CBSE & STATE (Separate Batches)",
  },
  {
    title: "Plus One Accountancy",
    image: "/images/services/service/7.jpg",
    time: "Morning / Evening",
    name: "CBSE & STATE",
  },
  {
    title: "Plus Two Accountancy",
    image: "/images/services/service/8.jpg",
    time: "Morning / Evening",
    name: "CBSE & STATE",
  },
  {
    title: "CA Foundation Course",
    image: "/images/services/service/9.jpg",
    time: "Morning / Evening",
    name: "Foundation Course",
  },
  {
    title: "Entrance Oriented Tuition",
    image: "/images/services/service/10.jpg",
    time: "Morning / Evening",
    name: "Entrance Oriented Tuition",
  },
  {
    title: "Regular Tuition",
    image: "/images/services/service/11.jpg",
    time: "Morning / Evening",
    name: "Regular Tuition",
  },
];

export default function Courses() {
  const headerRef = useScrollAnimation();

  return (
    <section
      id="courses"
      className="py-20 sm:py-24 bg-gradient-to-b from-white to-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="text-center mb-16 max-w-4xl mx-auto animate-fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Courses We Offer
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive coaching programs designed to support students at
            every academic level.
          </p>
        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => {
            const ref = useScrollAnimation(index * 100);

            return (
              <div
                key={index}
                ref={ref}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition animate-left"
              >
                <div className="overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-52 object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    {course.title}
                  </h3>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-semibold">Time:</span>{" "}
                      {course.time}
                    </p>
                    <p>
                      <span className="font-semibold">Course:</span>{" "}
                      {course.name}
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className="inline-block mt-4 text-[#8B5A5F] font-semibold hover:underline"
                  >
                    Contact for Fee Details →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
