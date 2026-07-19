import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaHammer,
  FaHandshake,
  FaRegLightbulb,
  FaRulerCombined,
  FaShieldAlt,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import assets from "../assets/assets";
import OurTeam from "../components/OurTeam";

const About = () => {


  const values = [
    {
      icon: <FaHammer />,
      title: "Craftsmanship",
      text: "We take pride in precise work, strong construction, and beautiful finishing.",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Creative Design",
      text: "Every piece is designed to suit your space, needs, and personal style.",
    },
    {
      icon: <FaUsers />,
      title: "Customer First",
      text: "We listen carefully, communicate clearly, and deliver work you can trust.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Made to Measure",
      text: "We plan every detail around your room, lifestyle, and practical requirements.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Built to Last",
      text: "We choose reliable materials and construction methods that stand up to daily use.",
    },
    {
      icon: <FaTools />,
      title: "Clean Installation",
      text: "Our team installs with care, leaves your space tidy, and checks the final details.",
    },
  ];

  const expertise = [
    "Custom furniture for homes and businesses",
    "Fitted kitchens, wardrobes, and storage",
    "Interior fit-outs, counters, and displays",
    "Doors, wall panelling, and detailed joinery",
  ];

  const process = [
    {
      number: "01",
      icon: <FaHandshake />,
      title: "Consultation",
      text: "We discuss your ideas, space, budget, and the result you have in mind.",
    },
    {
      number: "02",
      icon: <FaClipboardCheck />,
      title: "Design & Plan",
      text: "We refine the details, select materials, and provide a clear project plan.",
    },
    {
      number: "03",
      icon: <FaTools />,
      title: "Build & Install",
      text: "Our team creates and installs your project with care and attention to detail.",
    },
  ];

  return (
    <main>
      <section className="bg-stone-900 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            About The Craftman Arts
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-6xl">
            Crafted with care. Built to last.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
            We turn quality materials and thoughtful design into woodwork that
            brings lasting value to your home or business.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src={assets.carpenter}
              alt="Craftsman working in a warm wood interior"
              className="h-[460px] w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-2 rounded-xl bg-amber-700 px-7 py-5 text-white shadow-lg sm:right-6">
              <p className="font-serif text-3xl font-bold">6+ Years</p>
              <p className="mt-1 text-sm">Creating quality woodwork</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
              More than carpentry—work made with purpose.
            </h2>
            <p className="mt-6 leading-relaxed text-stone-600">
              The Craftman Arts was founded on a simple belief: every space deserves
              furniture and finishes that are practical, beautiful, and made to endure.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              We work with homeowners, businesses, and interior designers on
              projects of every size, from one custom table to a complete fitted kitchen.
            </p>

            <ul className="mt-7 space-y-3">
              {expertise.map((item) => (
                <li key={item} className="flex items-center gap-3 text-stone-700">
                  <FaCheckCircle className="shrink-0 text-amber-700" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-stone-900 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-800"
            >
              Start Your Project
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <OurTeam/>
      </section>

      

      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Why Choose Us
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-stone-900 sm:text-5xl">
              The values behind every project.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-800">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-stone-900">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Our Process
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-stone-900 sm:text-5xl">
              Simple, clear, and built around you.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {process.map((step) => (
              <article key={step.number} className="relative rounded-2xl bg-stone-50 p-8">
                <span className="absolute right-7 top-6 font-serif text-5xl font-bold text-stone-200">
                  {step.number}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-stone-900 text-2xl text-amber-400">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-stone-900">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Ready to create something special?
          </h2>
          <p className="mt-4 text-stone-300">
            Contact The Craftman Arts today to discuss your custom carpentry project.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition hover:bg-amber-600"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
