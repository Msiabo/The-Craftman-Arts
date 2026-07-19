import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-stone-900">
      <img
        src={assets.heroImage}
        alt="Craftsman working on a custom wood project"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/25" />

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
            <span className="h-px w-10 bg-amber-400" />
            Custom carpentry & craftsmanship
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Built with skill.
            <span className="block text-amber-400">Made for your home.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-200">
            Craftman Arts creates beautiful, durable, and custom-made woodwork
            that brings warmth and character to every space.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Request a Free Quote
              <FaArrowRight />
            </Link>

            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-md border border-white/50 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-stone-900"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-stone-200">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-amber-400" />
              Custom Furniture
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-amber-400" />
              Kitchen Cabinets
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-amber-400" />
              Home Renovations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;