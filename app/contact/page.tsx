"use client";

import { contactData } from "@/data/contact";
import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />

      <main>
        <section
          className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-end pb-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/40"/>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <span
                    className="block text-[11px] uppercase tracking-[0.25em] text-white/50 font-medium"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {contactData.hero.tag}
                </span>

                <h1 
                    className="mt-4 text-5xl md:text-7xl font-bold text-white leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {contactData.hero.title}
                </h1>

                <p
                    className="mt-6 text-white/60 text-base md:text-lg max-w-xl leading-relaxed"
                >
                    {contactData.hero.subtitle}
                </p>
            </div>
        </section>
      </main>
    </>
  );
}
