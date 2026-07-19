import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "+27788130424";
  const whatsappNumber = "27788130424";
  const email = "Sbssibusio@gmail.com";
  const address = "Mataffin, Mbombela, 1200, South Africa";

  const whatsappMessage = encodeURIComponent(
    "Hello The Craftman Arts, I would like to discuss a project."
  );

  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      detail: phoneNumber,
      helper: "Mon–Sat, 8:00 AM–5:00 PM",
      href: `tel:${phoneNumber}`,
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: email,
      helper: "We'll respond within 24 hours",
      href: `mailto:${email}`,
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp Us",
      detail: "Chat with our team",
      helper: "Send us your ideas, photos, or measurements",
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Find Us",
      detail: address,
      helper: "Visits by appointment",
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-stone-900 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            Contact Us
          </p>

          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-6xl">
            Let's Bring Your Vision to Life
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
            Whether you're planning a custom kitchen, built-in wardrobes,
            bespoke furniture, ceilings, or a complete interior makeover, we're
            ready to help turn your ideas into reality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Get in Touch
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
              We'd Love to Hear About Your Project
            </h2>

            <p className="mt-6 leading-relaxed text-stone-600">
              Every great project starts with a conversation. Contact us today
              for a free consultation and let us help you design beautiful,
              functional spaces tailored to your needs.
            </p>

            {/* Contact Cards */}
            <div className="mt-9 space-y-5">
              {contactDetails.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.title === "Find Us" ? "_blank" : undefined}
                  rel={item.title === "Find Us" ? "noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-stone-200 p-5 transition-all duration-300 hover:border-amber-400 hover:bg-amber-50 hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl text-amber-700 transition group-hover:bg-amber-700 group-hover:text-white">
                    {item.icon}
                  </span>

                  <span>
                    <span className="block text-lg font-bold text-stone-900">
                      {item.title}
                    </span>

                    <span className="mt-1 block text-stone-700">
                      {item.detail}
                    </span>

                    <span className="mt-1 block text-sm text-stone-500">
                      {item.helper}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-10 rounded-2xl bg-stone-50 p-7 shadow-sm">
              <div className="flex items-center gap-3 text-stone-900">
                <FaClock className="text-xl text-amber-700" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>

              <div className="mt-5 space-y-2 text-stone-600">
                <p>
                  <strong>Monday - Friday:</strong> 8:00 AM – 5:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 8:00 AM – 5:00 PM
                </p>
                <p>
                  <strong>Sunday:</strong> 9:00 AM – 3:00 PM
                </p>
                <p className="pt-2">
                  Site visits and consultations are available by appointment.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-md">
              <iframe
                title="Craftman Arts location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address
                )}&output=embed`}
                className="h-[430px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* CTA */}
            <div className="mt-6 rounded-2xl bg-amber-700 p-8 text-white shadow-lg">
              <h2 className="font-serif text-3xl font-bold">
                Ready to Start?
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-amber-100">
                Send us a WhatsApp message, give us a call, or email us your
                ideas, measurements, or inspiration photos. We'd love to discuss
                your project and provide a free quotation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg bg-stone-900 px-6 py-3.5 font-semibold text-white transition hover:bg-black"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-3 rounded-lg border-2 border-white px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-amber-700"
                >
                  <FaEnvelope />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;