import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaAward, FaHammer, FaHeart } from "react-icons/fa";
import assets from "../assets/assets";

const HomeAbout = () => {
  const highlights = [
    {
      icon: <FaHammer />,
      title: "Skilled Craftsmanship",
      text: "Every detail is carefully measured, shaped, and finished by hand.",
    },
    {
      icon: <FaAward />,
      title: "Quality Materials",
      text: "We use durable, carefully selected materials made to last.",
    },
    {
      icon: <FaHeart />,
      title: "Made Around You",
      text: "Your ideas and your space guide every project we create.",
    },
  ];

  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src={assets.carpenter}
            alt="Craftsman creating a custom wooden furniture piece"
            className="h-[480px] w-full rounded-2xl object-cover shadow-xl"
          />

          <div className="absolute -bottom-7 -right-2 rounded-xl bg-amber-700 px-7 py-6 text-white shadow-lg sm:right-6">
            <p className="font-serif text-4xl font-bold">6+</p>
            <p className="mt-1 text-sm font-medium">Years of craftsmanship</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            About The Craftman Arts
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
            Turning quality wood into pieces you will love for years.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            At The Craftman Arts, we believe great carpentry is more than building
            furniture—it is about creating practical, beautiful spaces that feel
            truly yours.
          </p>

          <p className="mt-4 leading-relaxed text-stone-600">
            From custom cabinets and fitted kitchens to wooden tables, wardrobes,
            and unique furniture, we bring care, precision, and creativity to
            every project.
          </p>

          <div className="mt-8 space-y-5">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg text-amber-800">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-3 rounded-md bg-stone-900 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-800"
          >
            Discover Our Story
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;