import React from "react";
import { FaTimes } from "react-icons/fa";

const Lightbox = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-red-500 hover:text-white"
        >
          <FaTimes />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="max-h-[75vh] w-full object-contain bg-stone-900"
        />

        <div className="space-y-4 p-8">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            {project.category}
          </span>

          <h2 className="text-4xl font-bold">
            {project.title}
          </h2>

          <p className="leading-8 text-stone-600">
            Professionally designed and manufactured using premium materials
            with exceptional attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;