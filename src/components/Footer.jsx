import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <h2 className="font-serif text-3xl font-bold text-white">THE 
              CRAFTMAN <span className="text-amber-500">ARTS</span>
            </h2>
          </Link>

          <p className="mt-4 max-w-sm leading-relaxed text-stone-400">
            Custom carpentry and handcrafted woodwork, designed with care and
            built to make your space feel like home.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our Facebook page"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white transition hover:bg-amber-700"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our Instagram page"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white transition hover:bg-amber-700"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/27788130424?text=Hello%20Craftman%20Arts!%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white transition hover:bg-amber-700"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>

          <ul className="mt-5 space-y-3">
            <li><Link to="/" className="transition hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className="transition hover:text-amber-400">About Us</Link></li>
            <li><Link to="/services" className="transition hover:text-amber-400">Our Services</Link></li>
            <li><Link to="/gallery" className="transition hover:text-amber-400">Gallery</Link></li>
            <li><Link to="/contact" className="transition hover:text-amber-400">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Our Services</h3>

          <ul className="mt-5 space-y-3">
            <li>Custom Furniture</li>
            <li>Fitted Kitchens</li>
            <li>Wardrobes & Cabinets</li>
            <li>Doors & Built-in Units</li>
            <li>Wood Repairs & Renovations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Contact Us</h3>

          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-amber-500" />
              <span>Mbombela ,Mpumalanga</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-500" />
              <a href="tel:+27788130424" className="transition hover:text-amber-400">
                +27 78 813 0424
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-500" />
              <a
                href="mailto:hello@craftmanarts.co.za"
                className="transition hover:text-amber-400"
              >
                Sbssibusio@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-center text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left">
          <p>© {year} Craftman Arts. All rights reserved.</p>

          <div className="flex justify-center gap-5">
            
            <Link to="/terms" className="transition hover:text-amber-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;