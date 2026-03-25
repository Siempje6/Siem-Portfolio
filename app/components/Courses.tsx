"use client";

import { useState } from "react";
import Image from "next/image";

const courses = [
  {
    name: "North Ground",
    par: 72,
    yards: 6800,
    image: "/images/course1.png",
    thumbnail: "/images/course1.png",
  },
  {
    name: "South Meadow",
    par: 72,
    yards: "6,850",
    image: "/images/course2.jpg",
    thumbnail: "/images/course2.jpg",
  },
  {
    name: "West Links",
    par: 70,
    yards: "6,180",
    image: "/images/course3.webp",
    thumbnail: "/images/course3.webp",
  },
];

export default function Courses() {
  const [active, setActive] = useState(0);
  const course = courses[active];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f5f2eb]">

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .rotate-text {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>

      {/* Achtergrond foto */}
      <Image
        src={course.image}
        alt={course.name}
        fill
        className="object-cover"
        priority
      />

      {/* Kaart */}
      <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
        <div className="bg-[#f5f2eb]/95 w-full max-w-[750px] h-[140px] flex items-stretch">

          {/* Links: label + naam */}
          <div className="flex flex-col justify-between py-5 pl-8 flex-1">
            <span
              className="text-[10px] uppercase tracking-[0.25em] text-[#6b6b5e]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Courses
            </span>
            <h3
              className="text-[32px] font-normal text-[#2a2a2a] -mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {course.name}
            </h3>
          </div>

          {/* Midden: thumbnail */}
          <div className="relative w-[200px] self-center mx-4">
            <div className="relative w-full h-[90px]">
              <Image
                src={course.thumbnail}
                alt={`${course.name} hole`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Rechts: navigatie + par/yards */}
          <div className="flex flex-col justify-between py-5 pr-8 items-end">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActive(active === 0 ? courses.length - 1 : active - 1)}
                className="text-[#6b6b5e] hover:text-[#2a2a2a] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                onClick={() => setActive(active === courses.length - 1 ? 0 : active + 1)}
                className="text-[#6b6b5e] hover:text-[#2a2a2a] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </button>
            </div>
            <div className="text-right">
              <p
                className="text-[14px] text-[#2a2a2a]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Par {course.par}
              </p>
              <p
                className="text-[13px] text-[#6b6b5e]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {course.yards} yards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* View More draaiende badge */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="relative w-[80px] h-[80px]">
          <svg
            className="rotate-text w-full h-full"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text
              fill="white"
              fontSize="11"
              fontWeight="500"
              letterSpacing="4"
              textAnchor="start"
            >
              <textPath href="#circlePath">
                VIEW MORE • VIEW MORE •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2l12 11.5-5.5 1.2 3.3 6.8-2.5 1.2-3.3-6.8L7 19V2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}