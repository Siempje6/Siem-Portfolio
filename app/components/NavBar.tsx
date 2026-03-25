"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = `text-sm font-medium tracking-wide uppercase transition-colors ${
    scrolled
      ? "text-gray-700 hover:text-black"
      : "text-white hover:text-gray-200"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
      `}</style>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        <div className="hidden md:flex items-center gap-6 flex-1">
          <Link href="/" className={linkClass}>Home</Link>
          <Link href="/over-ons" className={linkClass}>About</Link>
          <Link href="/diensten" className={linkClass}>Work</Link>
        </div>

        <div className="flex-shrink-0 text-center">
          <Link href="/">
            <span
              className={`block font-bold text-2xl leading-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              GREENWARD
            </span>
            <span
              className={`block text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? "text-gray-500" : "text-white/70"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Est. 1897 — Golf Society
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <Link href="/contact" className={linkClass}>Contact</Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center gap-1.5 w-8 h-8"
            aria-label="Menu openen"
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-gray-800" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[1px]" : ""} `} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-gray-800" : "bg-white"
            } ${menuOpen ? "-rotate-45 translate-y-[-6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-20 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40">
            <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl font-medium tracking-wide uppercase hover:text-white/70 transition-colors scale-y-120"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Home
            </Link>
            <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl font-medium tracking-wide uppercase hover:text-white/70 transition-colors scale-y-120"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                About
            </Link>
            <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl font-medium tracking-wide uppercase hover:text-white/70 transition-colors scale-y-120"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Work
            </Link>
        </div>
      )}
    </header>
  );
}