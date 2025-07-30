"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          I N S T I T U T E
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-blue-500">Home</Link>
          <Link href="#about" className="hover:text-blue-500">About</Link>
          <Link href="#teacher" className="hover:text-blue-500">Our Teachers</Link>
          <Link href="#courses" className="hover:text-blue-500">Courses</Link>
          <Link href="#reviews" className="hover:text-blue-500">Reviews</Link>
          <Link href="#contact" className="hover:text-blue-500">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <a href="tel:+6522441100" className="text-sm text-gray-600">
            <i className="fa fa-phone mr-1"></i> +65 2244 1100
          </a>
        </div>
      </div>
    </header>
  );
}
