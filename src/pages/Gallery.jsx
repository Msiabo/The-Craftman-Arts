import React, { useMemo, useState } from "react";

import galleryData from "../data/galleryData";
import categories from "../data/categories";

import { filterProjects } from "../utils/filterProjects";

import GalleryHero from "../components/GalleryHero";
import CategoryFilter from "../components/CategoryFilter";
import GalleryGrid from "../components/GalleryGrid";
import GalleryCTA from "../components/GalleryCTA";
import Lightbox from "../components/LightBox";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(
    () => filterProjects(galleryData, activeCategory),
    [activeCategory]
  );

  return (
    <main className="bg-stone-50">
      {/* ================= HERO ================= */}

      <GalleryHero />

      {/* ================= PORTFOLIO ================= */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
                Our Portfolio
              </span>

              <h2 className="mt-6 text-4xl font-bold text-stone-900 md:text-5xl">
                Explore Our Completed Projects
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-600">
                Browse our collection of custom kitchens, wardrobes,
                upholstery, TV units, aluminium work, ceilings,
                reception counters, bespoke furniture and many more
                professionally completed projects.
              </p>
            </div>

            {/* Stats */}

            <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Portfolio Size
              </p>

              <h3 className="mt-3 text-5xl font-bold text-stone-900">
                {galleryData.length}
              </h3>

              <p className="mt-2 text-stone-600">
                Completed Projects
              </p>
            </div>
          </div>

          {/* ================= FILTER ================= */}

          <div className="mt-16">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* ================= RESULTS ================= */}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-stone-200 bg-white px-6 py-5 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                {activeCategory === "All"
                  ? "All Projects"
                  : activeCategory}
              </h3>

              <p className="mt-1 text-stone-600">
                Showing{" "}
                <span className="font-bold text-amber-700">
                  {filteredProjects.length}
                </span>{" "}
                {filteredProjects.length === 1
                  ? "project"
                  : "projects"}
              </p>
            </div>

            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="rounded-xl bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                View All Projects
              </button>
            )}
          </div>

          {/* ================= GALLERY ================= */}

          <div className="mt-16">
            <GalleryGrid
              projects={filteredProjects}
              onProjectClick={setSelectedProject}
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <GalleryCTA />

      {/* ================= LIGHTBOX ================= */}

      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};

export default Gallery;