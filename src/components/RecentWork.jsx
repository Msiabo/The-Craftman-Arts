import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaImages,
  FaHammer,
} from "react-icons/fa";

import galleryData from "../data/galleryData";
import categories from "../data/categories";

import ProjectCard from "./ProjectCard";
import Lightbox from "./LightBox";

const RecentWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? galleryData
        : galleryData.filter(
            (project) => project.category === activeCategory
          );

    return filtered.slice(0, 10);
  }, [activeCategory]);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white py-24">

        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-amber-200/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Header */}

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-700">

                <FaHammer />

                Recent Projects

              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-stone-900">

                Inspired Design.

                <span className="block text-amber-600">

                  Exceptional Craftsmanship.

                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-stone-600">

                Browse a selection of our latest kitchens,
                wardrobes, TV units, ceilings, upholstery,
                aluminium work and custom furniture.

              </p>

            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 rounded-xl bg-stone-900 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-amber-600"
            >
              Browse Portfolio

              <FaArrowRight />
            </Link>

          </div>

          {/* Categories */}

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300

                ${
                  activeCategory === category
                    ? "scale-105 bg-amber-600 text-white shadow-xl"
                    : "border border-stone-200 bg-white text-stone-700 shadow-sm hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700"
                }
                `}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Statistics */}

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg">

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-3xl font-bold text-stone-900">

                  {activeCategory}

                </h3>

                <p className="mt-2 text-stone-600">

                  Showing our latest completed projects.

                </p>

              </div>

              <div className="flex gap-6">

                <div className="rounded-2xl bg-stone-100 px-7 py-5">

                  <p className="text-sm uppercase tracking-widest text-stone-500">

                    Showing

                  </p>

                  <h4 className="mt-2 text-4xl font-bold text-amber-600">

                    {filteredProjects.length}

                  </h4>

                </div>

                <div className="rounded-2xl bg-amber-100 px-7 py-5">

                  <FaImages className="text-3xl text-amber-700" />

                </div>

              </div>

            </div>

          </div>

          {/* Projects */}

          {filteredProjects.length ? (

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {filteredProjects.map((project, index) => (

                <div
                  key={project.id}
                  className={index === 0 ? "xl:col-span-2" : ""}
                >

                  <ProjectCard
                    project={project}
                    featured={index === 0}
                    number={String(index + 1).padStart(2, "0")}
                    onClick={setSelectedProject}
                  />

                </div>

              ))}

              {galleryData.length > 10 && (

                <Link
                  to="/gallery"
                  className="group flex min-h-[340px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-amber-300 bg-amber-50 p-10 transition duration-300 hover:border-amber-600 hover:bg-amber-100"
                >

                  <div className="rounded-full bg-white p-6 shadow-lg">

                    <FaImages className="text-5xl text-amber-600" />

                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-stone-900">

                    View More Projects

                  </h3>

                  <p className="mt-3 text-center leading-7 text-stone-600">

                    Explore our complete portfolio featuring
                    kitchens, wardrobes, ceilings, upholstery,
                    custom furniture and much more.

                  </p>

                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-700">

                    Explore Portfolio

                    <FaArrowRight />

                  </span>

                </Link>

              )}

            </div>

          ) : (

            <div className="mt-20 rounded-3xl border border-dashed border-stone-300 bg-white px-8 py-24 text-center shadow-sm">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">

                <FaHammer className="text-5xl text-amber-700" />

              </div>

              <h3 className="mt-8 text-3xl font-bold text-stone-900">

                No Projects Found

              </h3>

              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-stone-600">

                We're currently adding more projects to this
                category. Explore another category or browse
                our complete portfolio.

              </p>

              <button
                onClick={() => setActiveCategory("All")}
                className="mt-10 rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
              >
                Browse All Projects
              </button>

            </div>

          )}
                    {/* Premium CTA */}

          <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-stone-900">

            {/* Background Decorations */}

            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative grid items-center gap-12 px-8 py-16 md:grid-cols-2 lg:px-16">

              {/* Left */}

              <div>

                <span className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white">

                  Crafted With Excellence

                </span>

                <h3 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">

                  Ready to Build Something
                  <span className="block text-amber-500">
                    Exceptional?
                  </span>

                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">

                  Whether you need a bespoke kitchen,
                  luxurious wardrobe, modern TV unit,
                  custom furniture, aluminium work,
                  upholstery or complete interior
                  solutions, we turn ideas into
                  beautifully crafted spaces.

                </p>

                {/* Features */}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-white/5 p-5 backdrop-blur">

                    <h4 className="font-bold text-white">
                      ✔ Premium Materials
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      Durable finishes with superior quality.
                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 p-5 backdrop-blur">

                    <h4 className="font-bold text-white">
                      ✔ Expert Craftsmanship
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      Skilled professionals with years of experience.
                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 p-5 backdrop-blur">

                    <h4 className="font-bold text-white">
                      ✔ Custom Designs
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      Tailored to suit your lifestyle and space.
                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 p-5 backdrop-blur">

                    <h4 className="font-bold text-white">
                      ✔ Professional Installation
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      Delivered and installed with precision.
                    </p>

                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="flex flex-col items-center justify-center rounded-3xl bg-white/5 p-10 backdrop-blur">

                <h4 className="text-center text-3xl font-bold text-white">

                  Let's Bring Your Vision
                  <span className="block text-amber-500">
                    To Life
                  </span>

                </h4>

                <p className="mt-5 max-w-md text-center leading-8 text-stone-300">

                  Get in touch today for a free consultation
                  and quotation. Our team is ready to design,
                  manufacture and install your next project.

                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-amber-700"
                  >
                    Request Quote

                    <FaArrowRight />
                  </Link>

                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-stone-900"
                  >
                    View Portfolio

                    <FaArrowRight />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Lightbox */}

      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </>
  );
};

export default RecentWork;