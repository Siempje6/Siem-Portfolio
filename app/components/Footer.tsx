"use client";

import Link from "next/link";
import { footerData } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-[#f5f2eb] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-20 pb-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        {footerData.columns.map((column) => (
          <div key={column.title}>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6b6b5e] font-medium">
              {column.title}
            </span>
            <nav className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => {
                const classes =
                  "text-sm text-[#2a2a2a] hover:text-[#3b6b5e] transition-colors";

                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes}
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link href={link.href} className={classes} key={link.label}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#d5d0c7]" />

      <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 order-2 md:order-1">
          {footerData.legal.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b5e] hover:text-[#2a2a2a] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="text-center order-1 md:order-2">
          <span
            className="block text-xl font-bold text-[#2a2a2a] tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {footerData.brand.name}
            {footerData.brand.trademark && (
              <sup className="text-[8px] align-super">®</sup>
            )}
          </span>
          <span className="block text-[9px] tracking-[0.25em] uppercase text-[#6b6b5e] mt-0.5">
            {footerData.brand.subtitle}
          </span>
          <p className="text-[10px] text-[#6b6b5e] mt-2 uppercase tracking-widest">
            {footerData.brand.copyright}
          </p>
        </div>
        <div className="order-3">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b5e] hover:text-[#2a2a2a] transition-colors">
            {footerData.brand.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
