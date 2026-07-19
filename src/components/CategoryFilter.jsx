import React from "react";
import categories from "../data/categories";

const CategoryFilter = ({
  activeCategory,
  setActiveCategory,
  totalProjects,
}) => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-stone-900">
            Explore Our Work
          </h2>

          <p className="mt-4 text-stone-600">
            Select a service below to view completed projects.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-amber-600 text-white shadow-xl"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-900 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 font-semibold text-amber-800">
            Showing {totalProjects} Projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;