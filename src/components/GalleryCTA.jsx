import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const GalleryCTA = () => {
  return (
    <section className="bg-amber-600 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl font-bold text-white">
          Ready to Start Your Project?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-100">
          Whether you need a fitted kitchen, wardrobe, custom furniture,
          upholstery or complete interior finishing, we're ready to help.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-stone-900 px-8 py-4 text-lg font-semibold text-white transition hover:bg-black"
        >
          Request Free Quote

          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default GalleryCTA;