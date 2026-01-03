import useScrollAnimation from "../utils/useScrollAnimation";

export default function About() {
  const aboutRef = useScrollAnimation();
  const visionRef = useScrollAnimation(150);
  const missionRef = useScrollAnimation(300);

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-neutral-50 py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Aniyath
          </h2>
          <p className="text-xl text-gray-600">
            A legacy of academic excellence and dedicated mentoring since 1981
          </p>
        </div>

        {/* ABOUT CONTENT */}
        <div
          ref={aboutRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center animate-left"
        >
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">
                Aniyath Educational Institution
              </strong>{" "}
              was established in 1981. It is not just an institution, but a
              wealth of academic excellence with a proven record of tutoring.
            </p>

            <p>
              We provide friendly guidance blended with quality education,
              offering a complete solution in the field of education.
            </p>

            <p>
              With over <strong>38+ glorious years</strong> of academic service,
              Aniyath has consistently guided young minds towards successful
              careers.
            </p>

            <p>
              We create a classroom environment where students learn with open
              minds, trust, self-respect, and mutual respect for peers and
              faculty.
            </p>

            <p>
              Special focus is given to students facing difficulty in
              mathematics, helping them overcome fear and transform challenges
              into confidence.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/services/1.jpg"
              alt="Aniyath Classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* VISION */}
        <div
          ref={visionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center animate-left"
        >
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/services/2.jpg"
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2 space-y-5">
            <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aniyath was conceptualized nearly four decades ago with the vision
              of building a benchmark institution that delivers excellence in
              coaching and empowers students to pursue their dreams with
              confidence.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div
          ref={missionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center animate-left"
        >
          <div className="space-y-5">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              We adopt a unique and innovative approach to teaching that helps
              students connect deeply with the subjects they need to master.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Through personalized teaching and focused mentoring, we understand
              each student’s strengths and weaknesses at different learning
              stages.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our in-house developed curriculum, precise study materials, and
              structured session plans are continuously refined to engage,
              enrich, and empower students for academic success.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/services/3.jpg"
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
