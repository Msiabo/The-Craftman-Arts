import React from "react";

const CategoryFilter = ({
  categories,
  activeCategory,
  onChange,
}) => {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-4">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => {
              console.log("Clicked:", category);
              onChange(category);
            }}
            className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
              active
                ? "bg-amber-600 text-white shadow-xl scale-105"
                : "bg-stone-100 text-stone-700 hover:bg-stone-900 hover:text-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;