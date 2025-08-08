/* eslint-disable react/jsx-no-undef */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "results", label: "Result" },
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
    <header className="fixed top-0 left-0 w-full z-50 bg-stone-50 shadow">
      <div className="max-w-screen-xl mx-auto px-5 py-3 flex flex-wrap justify-between items-center gap-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-1 text-indigo-900 min-w-[150px]">
          <Image src="/ml.png" alt="Logo" width={55} height={55} />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold">MOHIM</span>
            <span className="text-xs font-semibold -mt-1">ACADEMY</span>
          </div>
        </Link>

        {/* Desktop Navigation and Phone */}
        <div className="hidden md:flex items-center gap-6 flex-wrap">
          <nav className="flex space-x-6">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-colors hover:text-yellow-600 ${activeSection === id ? "text-yellow-500 font-semibold" : "text-gray-700"
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* <a
            href="tel:+6522441100"
            className="text-sm text-white pl-12 pr-4 py-2 rounded-md bg-indigo-500 inline-flex items-center relative"
          >
            <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-indigo-600 p-1.5 rounded-full">
              <Phone className="w-4 h-4 text-white" />
            </div>
            +91 9000 0000
          </a> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-indigo-600 ml-auto"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="w-full md:hidden bg-indigo-50 shadow-inner mt-2 rounded-md">
            <nav className="flex flex-col items-start px-6 py-4 space-y-4">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-base transition-colors ${activeSection === id ? "text-indigo-700 font-semibold" : "text-gray-700"
                    }`}
                >
                  {label}
                </a>
              ))}

              {/* <a
                href="tel:+6522441100"
                className="mt-4 inline-flex items-center gap-2 text-indigo-600 text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 9000 0000
              </a> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
