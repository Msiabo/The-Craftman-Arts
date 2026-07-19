import React, { useMemo, useState } from "react";

import galleryData from "../data/galleryData";
import categories from "../data/categories";

import GalleryHero from "../components/GalleryHero";
import CategoryFilter from "../components/CategoryFilter";
import GalleryGrid from "../components/GalleryGrid";
import GalleryCTA from "../components/GalleryCTA";
import Lightbox from "../components/LightBox";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return galleryData;
    }

    return galleryData.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main>
      {/* Hero */}
      <GalleryHero />

      {/* Portfolio */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-stone-900">
              Explore Our Work
            </h2>

            <p className="mt-4 text-stone-600">
              Select a service below to browse completed projects.
            </p>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          {/* Counter */}
          <div className="mt-10 text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 font-semibold text-amber-800">
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>

          {/* Gallery Grid */}
          <GalleryGrid
            projects={filteredProjects}
            onProjectClick={setSelectedProject}
          />
        </div>
      </section>

      {/* CTA */}
      <GalleryCTA />

      {/* Lightbox */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};

export default Gallery;