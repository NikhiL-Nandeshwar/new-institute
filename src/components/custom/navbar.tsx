"use client";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-500">
          I N S T I T U T E
        </Link>

        <nav className="hidden md:flex space-x-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-indigo-500 transition-colors ${activeSection === id ? "text-indigo-600 font-semibold" : "text-gray-700"
                }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="tel:+6522441100" className="text-sm text-indigo-600">
            <i className="fa fa-phone mr-1 " ></i> +91 9000 0000
          </a>
        </div>
      </div>
    </header>
  );
}
