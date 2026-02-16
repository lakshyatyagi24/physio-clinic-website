"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-choose" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-primary/10 bg-background-light/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-4">
          {/* Logo */}
          <a className="flex items-center gap-2 group" href="#">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <span className="material-icons text-primary text-3xl">
                medical_services
              </span>
            </div>
            <span className="self-center text-2xl font-bold whitespace-nowrap text-slate-800 tracking-tight">
              HealRight
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <a
                key={l.label}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                href={l.href}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-slate-600 hover:text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-icons">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
            <a
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-primary border border-transparent rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-primary/20"
              href="#book"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-primary/10 pt-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                className="block text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-2"
                href={l.href}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              className="inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/20"
              href="#book"
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
