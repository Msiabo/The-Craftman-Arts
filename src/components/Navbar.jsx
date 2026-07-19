import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import assets from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            <img
              src={assets.logo}
              alt="Craftman Arts logo"
              className="h-14 w-14 rounded-full object-contain transition duration-300 group-hover:scale-105"
            />

            <div>
              <h1 className="font-serif text-2xl font-bold leading-none tracking-wide text-stone-900">
                THE CRAFTMAN
              </h1>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Arts
              </p>

              <p className="mt-1 hidden text-xs italic text-stone-500 sm:block">
                Handcrafted with purpose
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-semibold transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-amber-700 after:transition-all after:duration-300 ${
                      isActive
                        ? "text-amber-800 after:w-full"
                        : "text-stone-600 after:w-0 hover:text-amber-800 hover:after:w-full"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

           
          </ul>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-2xl text-stone-800 transition hover:bg-stone-100 lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[600px] border-t border-stone-200" : "max-h-0"
        }`}
      >
        <div className="bg-white px-5 py-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mb-1 block rounded-lg px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-amber-50 text-amber-800"
                    : "text-stone-700 hover:bg-stone-100 hover:text-amber-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;