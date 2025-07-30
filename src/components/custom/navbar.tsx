"use client";

import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "courses", label: "Courses" },
  { id: "teacher", label: "Our Teachers" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-200 shadow p-1">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-indigo-500">
          I N S T I T U T E
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-indigo-500 transition-colors ${activeSection === id
                ? "text-indigo-600 font-semibold"
                : "text-gray-700"
                }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Phone link (desktop only) */}
        <div className="hidden md:block relative">
          <a
            href="tel:+6522441100"
            className="text-sm text-white pl-12 pr-4 py-2 rounded-md bg-indigo-500 inline-flex items-center relative"
          >
            <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-indigo-600 p-1.5 rounded-full">
              <Phone className="w-4 h-4 text-white" />
            </div>
            +91 9000 0000
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-indigo-600"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-50 shadow-inner">
          <nav className="flex flex-col items-start px-6 py-4 space-y-4">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-base transition-colors ${activeSection === id
                  ? "text-indigo-700 font-semibold"
                  : "text-gray-700"
                  }`}
              >
                {label}
              </a>
            ))}

            <a
              href="tel:+6522441100"
              className="mt-4 inline-flex items-center gap-2 text-indigo-600 text-sm"
            >
              <Phone className="w-4 h-4" />
              +91 9000 0000
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
