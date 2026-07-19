import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCouch,
  FaDoorOpen,
  FaHammer,
  FaKitchenSet,
} from "react-icons/fa6";

const HomeServices = () => {
  const services = [
    {
      icon: <FaKitchenSet />,
      title: "Custom Kitchens",
      text: "Beautiful fitted kitchens, cabinets, countertops, and storage designed around your home.",
    },
    {
      icon: <FaCouch />,
      title: "Custom Furniture",
      text: "Handcrafted tables, TV stands, wardrobes, shelves, beds, and unique wooden furniture.",
    },
    {
      icon: <FaDoorOpen />,
      title: "Doors & Built-ins",
      text: "Durable wooden doors, fitted wardrobes, wall units, and practical storage solutions.",
    },
    {
      icon: <FaHammer />,
      title: "Repairs & Renovations",
      text: "Professional wood repairs, upgrades, installations, and renovations for your space.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            What We Do
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-stone-900 sm:text-5xl">
            Crafted for your home and your lifestyle.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            From a single custom piece to a complete home transformation, we
            create woodwork that is beautiful, functional, and built to last.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-stone-200 bg-stone-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-800 transition duration-300 group-hover:bg-amber-700 group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-stone-900">
                {service.title}
              </h3>

              <p className="mt-3 leading-relaxed text-stone-600">
                {service.text}
              </p>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-800 transition hover:gap-3"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl bg-stone-900 px-7 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-stone-300">
              Tell us what you need and we will prepare a tailored quote.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-md bg-amber-700 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-600"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;