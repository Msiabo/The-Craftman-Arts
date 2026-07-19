import React from "react";

const GalleryHero = () => {
  return (
    <section className="relative overflow-hidden bg-stone-950 py-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-stone-900 to-black opacity-90" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
          Our Work
        </p>

        <h1 className="mt-5 text-5xl font-bold leading-tight text-white md:text-7xl">
          Craftsmanship
          <span className="block text-amber-400">
            You Can See.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-300">
          Browse our completed projects ranging from fitted kitchens,
          wardrobes, TV units, upholstery, ceilings, aluminium work,
          reception counters, custom furniture and much more.
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;