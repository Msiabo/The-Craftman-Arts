import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCouch,
  FaHammer,
  FaHome,
  FaPencilRuler,
  FaTools,
  FaWrench,
  FaUsers,
  FaAward,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

const Services = () => {
  const stats = [
    {
      number: "250+",
      label: "Projects Completed",
      icon: <FaBuilding />,
    },
    {
      number: "12+",
      label: "Years Experience",
      icon: <FaAward />,
    },
    {
      number: "98%",
      label: "Satisfied Clients",
      icon: <FaUsers />,
    },
    {
      number: "100%",
      label: "Quality Guaranteed",
      icon: <FaShieldAlt />,
    },
  ];

  const services = [
    {
      icon: <FaCouch />,
      title: "Custom Furniture",
      text:
        "Handcrafted furniture designed to complement your home while maximizing comfort and functionality.",
      items: [
        "Dining Tables",
        "Coffee Tables",
        "Bedroom Furniture",
        "Office Furniture",
      ],
    },

    {
      icon: <FaHome />,
      title: "Fitted Kitchens",
      text:
        "Modern kitchens designed with quality finishes, clever storage and timeless style.",
      items: [
        "Kitchen Cupboards",
        "Kitchen Islands",
        "Pantries",
        "Countertops",
      ],
    },

    {
      icon: <FaHome />,
      title: "Built-in Wardrobes",
      text:
        "Beautiful built-in wardrobes customized for your space and storage needs.",
      items: [
        "Sliding Wardrobes",
        "Walk-in Closets",
        "Bedroom Cupboards",
        "Storage Solutions",
      ],
    },

    {
      icon: <FaHammer />,
      title: "TV Units",
      text:
        "Luxury entertainment centres and feature walls that become the focal point of your living room.",
      items: [
        "Floating TV Units",
        "Feature Walls",
        "Shelving",
        "LED Designs",
      ],
    },

    {
      icon: <FaTools />,
      title: "Upholstery",
      text:
        "Premium upholstery solutions for residential, commercial and automotive interiors.",
      items: [
        "Couches",
        "Dining Chairs",
        "Headboards",
        "Vehicle Seats",
      ],
    },

    {
      icon: <FaPencilRuler />,
      title: "Rhino Board Ceilings",
      text:
        "Decorative ceilings that transform interiors into elegant modern spaces.",
      items: [
        "Bulkheads",
        "Suspended Ceilings",
        "Cornices",
        "LED Lighting",
      ],
    },

    {
      icon: <FaWrench />,
      title: "Aluminium Windows & Doors",
      text:
        "Durable aluminium installations for homes, offices and commercial buildings.",
      items: [
        "Sliding Doors",
        "Windows",
        "Shopfronts",
        "Folding Doors",
      ],
    },

    {
      icon: <FaHammer />,
      title: "Commercial Fit-outs",
      text:
        "Professional interior solutions for offices, restaurants, retail stores and commercial spaces.",
      items: [
        "Reception Counters",
        "Display Units",
        "Office Desks",
        "Storage Systems",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      text:
        "We discuss your vision, budget and measurements before planning your project.",
    },
    {
      number: "02",
      title: "Design",
      text:
        "Our team prepares layouts and design concepts tailored specifically for your space.",
    },
    {
      number: "03",
      title: "Manufacturing",
      text:
        "Every item is handcrafted using quality materials and expert workmanship.",
    },
    {
      number: "04",
      title: "Installation",
      text:
        "Professional installation with meticulous finishing and attention to detail.",
    },
  ];

  const reasons = [
    "Premium Quality Materials",
    "Experienced Craftsmen",
    "Custom Designs",
    "Affordable Pricing",
    "Professional Installation",
    "Guaranteed Workmanship",
  ];

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-stone-950 py-32">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-stone-900 to-black opacity-95" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="inline-flex rounded-full bg-amber-500/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Premium Carpentry & Interior Solutions
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Crafted To
            <span className="block text-amber-400">
              Transform Your Space
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            We design, manufacture and install premium kitchens,
            wardrobes, TV units, upholstery, ceilings,
            aluminium products and custom furniture that combine
            beauty, durability and exceptional craftsmanship.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Request Free Quote
              <FaArrowRight />
            </Link>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-stone-900"
            >
              View Portfolio
            </Link>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="bg-stone-900 py-20">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="group rounded-3xl border border-stone-700 bg-stone-800 p-8 text-center transition duration-500 hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-3xl text-white transition duration-500 group-hover:rotate-6 group-hover:scale-110">

                {stat.icon}

              </div>

              <h2 className="mt-6 text-5xl font-bold text-white">

                {stat.number}

              </h2>

              <p className="mt-3 text-stone-300">

                {stat.label}

              </p>

            </div>

          ))}

        </div>

      </section>
            {/* ================= SERVICES ================= */}

      <section className="bg-gradient-to-b from-white via-stone-50 to-white py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Our Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-stone-900 md:text-5xl">
              Complete Interior & Carpentry Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              From custom furniture and fitted kitchens to upholstery,
              ceilings and aluminium installations, we deliver
              craftsmanship that combines functionality, elegance and
              long-lasting quality.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {services.map((service) => (

              <article
                key={service.title}
                className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-stone-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-amber-500
                hover:shadow-2xl
                "
              >

                <div
                  className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-amber-500
                  to-amber-700
                  text-3xl
                  text-white
                  transition
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                  "
                >

                  {service.icon}

                </div>

                <h3 className="mt-8 text-2xl font-bold text-stone-900">

                  {service.title}

                </h3>

                <p className="mt-4 leading-8 text-stone-600">

                  {service.text}

                </p>

                <ul className="mt-8 space-y-3">

                  {service.items.map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-3 text-stone-700"
                    >

                      <FaCheckCircle className="text-amber-600" />

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

                <div className="mt-10">

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-amber-700 transition hover:gap-4"
                  >

                    Learn More

                    <FaArrowRight />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-stone-900 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                Why Choose Us
              </span>

              <h2 className="mt-6 text-5xl font-bold text-white">
                Built Around Quality,
                <span className="block text-amber-400">
                  Designed Around You
                </span>
              </h2>

              <p className="mt-8 text-lg leading-9 text-stone-300">
                Every project we undertake is approached with precision,
                creativity and professionalism. From concept to installation,
                we focus on delivering spaces that are functional, elegant
                and built to last.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                {reasons.map((reason) => (

                  <div
                    key={reason}
                    className="flex items-center gap-4 rounded-2xl border border-stone-700 bg-stone-800 p-5 transition hover:border-amber-500"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white">

                      <FaCheckCircle />

                    </div>

                    <span className="font-medium text-white">

                      {reason}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-[40px] bg-gradient-to-br from-amber-500 to-amber-700 p-12 shadow-2xl">

              <h3 className="text-4xl font-bold text-white">

                Excellence in Every Detail

              </h3>

              <p className="mt-8 text-lg leading-9 text-amber-100">

                Whether you're renovating your home, fitting out a new
                office or upgrading your commercial space, our experienced
                craftsmen combine premium materials with outstanding
                workmanship to produce results that exceed expectations.

              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <FaCheckCircle className="text-2xl text-white" />

                  <span className="text-lg text-white">
                    Residential & Commercial Projects
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaCheckCircle className="text-2xl text-white" />

                  <span className="text-lg text-white">
                    Professional Installation
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaCheckCircle className="text-2xl text-white" />

                  <span className="text-lg text-white">
                    Premium Materials
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaCheckCircle className="text-2xl text-white" />

                  <span className="text-lg text-white">
                    Satisfaction Guaranteed
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Why Choose Us
              </span>

              <h2 className="mt-6 text-4xl font-bold text-stone-900 md:text-5xl">
                Quality craftsmanship backed by experience.
              </h2>

              <p className="mt-6 text-lg leading-8 text-stone-600">
                We combine skilled craftsmanship, premium materials and
                attention to detail to deliver furniture and interior
                solutions that are beautiful, functional and built to last.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Professional workmanship",
                  "Premium quality materials",
                  "Affordable pricing",
                  "Free quotations",
                  "Residential & commercial projects",
                  "On-time project delivery",
                  "Custom-built solutions",
                  "Excellent after-sales support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <FaCheckCircle className="text-amber-700" />
                    </div>

                    <span className="text-lg font-medium text-stone-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[40px] bg-gradient-to-br from-stone-900 via-stone-800 to-black p-10 text-white shadow-2xl">
              <span className="rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                Our Promise
              </span>

              <h3 className="mt-8 text-4xl font-bold">
                Excellence in every project.
              </h3>

              <p className="mt-6 leading-8 text-stone-300">
                Whether you're renovating a kitchen, installing fitted
                wardrobes, upholstering furniture or transforming an office,
                our experienced team delivers professional results from start
                to finish.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h4 className="text-4xl font-bold text-amber-400">
                    100%
                  </h4>

                  <p className="mt-2 text-sm text-stone-300">
                    Custom Designs
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h4 className="text-4xl font-bold text-amber-400">
                    500+
                  </h4>

                  <p className="mt-2 text-sm text-stone-300">
                    Projects Completed
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h4 className="text-4xl font-bold text-amber-400">
                    10+
                  </h4>

                  <p className="mt-2 text-sm text-stone-300">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h4 className="text-4xl font-bold text-amber-400">
                    ★★★★★
                  </h4>

                  <p className="mt-2 text-sm text-stone-300">
                    Customer Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden bg-amber-600 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_40%)]"></div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur">
            Let's Build Something Amazing
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Ready to transform your home or business?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-amber-100">
            Contact our team today for a free consultation and quotation.
            Together we'll create furniture and interiors that perfectly fit
            your space, lifestyle and budget.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-stone-900 px-10 py-5 text-lg font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Request Free Quote
              <FaArrowRight />
            </Link>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-white px-10 py-5 text-lg font-bold text-white transition duration-300 hover:bg-white hover:text-stone-900"
            >
              View Portfolio
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
