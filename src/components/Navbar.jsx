import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
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

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4"
            >
              <img
                src={assets.logo}
                alt="Craftman Arts"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-amber-500/30 transition duration-300 group-hover:scale-105 group-hover:ring-amber-500"
              />

              <div>
                <h1 className="font-serif text-2xl font-bold leading-none tracking-wide text-stone-900">
                  THE CRAFTMAN
                </h1>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
                  Arts
                </p>

                <p className="hidden text-xs italic text-stone-500 sm:block">
                  Handcrafted with Purpose
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}

            <ul className="hidden items-center gap-8 lg:flex">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative py-2 text-sm font-semibold transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-amber-600 after:transition-all after:duration-300 ${
                        isActive
                          ? "text-amber-700 after:w-full"
                          : "text-stone-700 after:w-0 hover:text-amber-700 hover:after:w-full"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

            
            </ul>

            {/* Mobile Button */}

            <button
              onClick={() => setOpen(!open)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-white text-xl text-stone-800 shadow transition-all duration-300 hover:border-amber-500 hover:bg-amber-600 hover:text-white lg:hidden"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Background */}

        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer */}

        <div
          className={`absolute top-0 left-0 right-0 overflow-hidden rounded-b-[35px] bg-stone-950 shadow-2xl transition-all duration-500 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-7 pb-10 pt-24">

            <div className="mb-10">
             

              <h2 className="mt-2 text-3xl font-bold text-white">
                Explore
              </h2>
            </div>

            <nav className="space-y-3">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-amber-600 text-white shadow-lg"
                        : "text-stone-300 hover:bg-stone-800 hover:text-white"
                    }`
                  }
                >
                  {link.name}

                  <FaArrowRight className="text-sm" />
                </NavLink>
              ))}
            </nav>

            {/* Contact */}

            <div className="mt-10 rounded-2xl border border-stone-800 bg-stone-900 p-6">

              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                Contact Us
              </p>

              <div className="mt-5 space-y-4">

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-600">
                    <FaPhoneAlt className="text-white" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-stone-400">
                      Phone
                    </p>

                    <p className="text-white">
                      +27 78 813 0424
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-600">
                    <FaEnvelope className="text-white" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-stone-400">
                      Email
                    </p>

                    <p className="text-white break-all">
                      Sbssibusiso@gmail.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}

            <div className="mt-8 text-center">
              <p className="text-sm text-stone-500">
                © {new Date().getFullYear()} The Craftman Arts
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;