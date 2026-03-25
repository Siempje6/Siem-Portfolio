"use client";

export default function Hero() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >

      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-24 px-4">

        <h1
          className="text-5xl md:text-8xl font-bold text-white text-center leading-tight scale-y-140"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tradition on the tee
        </h1>

        <p className="mt-4 text-white/80 text-center text-base md:text-lg max-w-md leading-relaxed">
          Those who come here do so regularly. <br />
          Not for attention, but for the round itself.
        </p>

        {/* Scroll pijl */}
        <button
          onClick={handleScroll}
          className="mt-10 animate-bounce"
          aria-label="Scroll naar beneden"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}