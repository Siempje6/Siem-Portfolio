"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function About() {
  const [offset, setOffset] = useState(0);


  return (
    <section className="relative p-20 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">


      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          <div
           
          >
            <span
              className="block text-sm uppercase tracking-[0.2em] text-gray-400 font-medium"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About us
            </span>

            <h2
              className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A legacy<br />built on<br />the green
            </h2>
          </div>

          {/* ──── RECHTS: Tekst ──── */}
          <div className="md:pt-12">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Greenward Golf Society has been the home of golfers who
              value tradition, sportsmanship and community for over a
              century. Our course, nestled among the rolling hills of
              the Dutch countryside, offers a unique experience for
              beginners and seasoned players alike.
            </p>
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              We believe golf is more than a sport — it is a way of
              life. Join us and discover for yourself why generations
              of golfers call Greenward their second home.
            </p>

            <Link
              href="/about"
              className="inline-block mt-8 text-sm uppercase tracking-[0.15em] font-medium text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}