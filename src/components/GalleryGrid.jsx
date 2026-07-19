import React from "react";
import ProjectCard from "./ProjectCard";

const GalleryGrid = ({ projects, onProjectClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50 to-white py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-100 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-stone-200 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mb-16 flex flex-col gap-8 border-b border-stone-200 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-700">
              Our Portfolio
            </span>

            <h2 className="mt-6 text-4xl font-bold text-stone-900 md:text-5xl">
              Crafted With Passion,
              <span className="block text-amber-600">
                Built To Last.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Explore a collection of bespoke kitchens, wardrobes,
              upholstery, TV units, custom furniture and interior
              solutions completed for our residential and commercial
              clients.
            </p>
          </div>

          {/* Stats */}

          <div className="flex flex-wrap gap-5">
            <div className="rounded-3xl border border-stone-200 bg-white px-8 py-6 shadow-lg">
              <p className="text-sm uppercase tracking-wider text-stone-500">
                Projects
              </p>

              <h3 className="mt-2 text-5xl font-bold text-amber-600">
                {projects.length}
              </h3>
            </div>

            <div className="rounded-3xl bg-stone-900 px-8 py-6 text-white shadow-lg">
              <p className="text-sm uppercase tracking-wider text-stone-400">
                Quality
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Premium Finish
              </h3>
            </div>
          </div>
        </div>

        {/* Result Badge */}

        {projects.length > 0 && (
          <div className="mb-10 flex justify-center">
            <span className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg">
              Showing {projects.length} Project
              {projects.length > 1 && "s"}
            </span>
          </div>
        )}

        {/* Empty State */}

        {projects.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white px-10 py-24 text-center shadow-xl">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl">
              🪵
            </div>

            <h3 className="mt-8 text-3xl font-bold text-stone-900">
              No Projects Found
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-stone-600">
              We haven't uploaded projects for this category yet.
              Please browse another category to discover more of our
              work.
            </p>
          </div>
        ) : (
          <>
            {/* Grid */}

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.id || index}
                  className="animate-fadeIn"
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <ProjectCard
                    project={project}
                    featured={project.featured}
                    number={String(index + 1).padStart(2, "0")}
                    onClick={onProjectClick}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Text */}

            <div className="mt-20 text-center">
              <div className="mx-auto h-px w-32 bg-amber-400" />

              <p className="mt-8 text-lg text-stone-600">
                Every project is handcrafted using premium materials,
                skilled workmanship and meticulous attention to detail.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;