import React from "react";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaSearchPlus,
} from "react-icons/fa";

const ProjectCard = ({
  project,
  featured = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick(project);
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
      className={`group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-300 ${
        featured ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            featured ? "h-[500px]" : "h-80"
          }`}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

        {/* Zoom Icon */}

        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition duration-500 group-hover:bg-amber-600">
          <FaSearchPlus />
        </div>

        {/* Content */}

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <span className="inline-block rounded-full bg-amber-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            {project.category}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white">
            {project.title}
          </h3>

          {project.description && (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-200">
              {project.description}
            </p>
          )}

          {project.location && (
            <div className="mt-3 flex items-center gap-2 text-sm text-stone-200">
              <FaMapMarkerAlt className="text-amber-400" />
              {project.location}
            </div>
          )}

          <div className="mt-6 inline-flex items-center gap-3 font-semibold text-white transition group-hover:text-amber-300">
            View Project
            <FaArrowRight />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;