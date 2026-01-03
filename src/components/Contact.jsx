import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import useScrollAnimation from "../utils/useScrollAnimation";

export default function Contact() {
  const headerRef = useScrollAnimation();
  const infoRef = useScrollAnimation(150);
  const formRef = useScrollAnimation(300);

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-gradient-to-b from-white to-lightBg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="text-center mb-16 max-w-3xl mx-auto animate-fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            We’re here to help. Reach out to Aniyath Educational Institution
            anytime.
          </p>
        </div>

        {/* CONTACT INFO CARDS */}
        <div
          ref={infoRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-left"
        >
          <InfoCard
            icon={MapPin}
            title="Our Location"
            lines={[
              "Aniyath House",
              "Pirayiri Post",
              "Palakkad, Kerala",
              "PIN: 678004",
            ]}
          />

          <InfoCard
            icon={Phone}
            title="Contact Us"
            lines={[
              "Mobile: +91 7909165133",
              "Mobile: +91 94479 23249",
            ]}
          />

          <InfoCard
            icon={Mail}
            title="Write Some Words"
            lines={["aniyathedu@gmail.com"]}
          />
        </div>

        {/* WHATSAPP + MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
          {/* QUICK ENQUIRY */}
          <div
            ref={formRef}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 flex flex-col justify-center animate-left"
          >
            <h3 className="text-3xl font-bold text-primary mb-4">
              Quick Enquiry
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions about courses, batches, or admissions?  
              Send us a WhatsApp message and get quick assistance from our team.
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917909165133?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="22"
                height="22"
                fill="currentColor"
              >
                <path d="M16 2C8.28 2 2 8.02 2 15.44c0 2.62.77 5.05 2.1 7.13L2 30l7.74-2.02A14.3 14.3 0 0 0 16 28c7.72 0 14-6.02 14-13.44C30 8.02 23.72 2 16 2zm0 24c-2.14 0-4.22-.56-6.03-1.63l-.43-.25-4.6 1.2 1.23-4.42-.28-.45A11.6 11.6 0 0 1 4 15.44C4 9.2 9.38 4 16 4s12 5.2 12 11.44C28 20.8 22.62 26 16 26z"/>
              </svg>
              Message on WhatsApp
            </a>

            {/* Call Button */}
            <a
              href="tel:+917909165133"
              className="flex items-center justify-center gap-3 border border-primary py-3 rounded-xl font-semibold text-primary hover:bg-lightBg transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <iframe
              title="Aniyath Educational Institution Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5343687645977!2d76.62453811404752!3d10.7703238622532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8721ba9b4282f%3A0xa79b211c2e455033!2sAniyath+Educational+Institution!5e0!3m2!1sen!2sin!4v1522042587783"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href="https://maps.google.com/maps/dir//Aniyath+Educational+Institution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-white py-4 font-semibold hover:bg-primaryHover transition"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* INFO CARD */
function InfoCard({ icon: Icon, title, lines }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center space-y-3">
      <Icon size={32} className="mx-auto text-accent" />
      <h4 className="text-xl font-semibold text-primary">{title}</h4>
      {lines.map((line, index) => (
        <p key={index} className="text-gray-600">
          {line}
        </p>
      ))}
    </div>
  );
}
