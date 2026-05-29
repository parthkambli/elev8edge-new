// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { services } from "../data/services";

// import LazyImage from "./ui/LazyImage";

// gsap.registerPlugin(ScrollTrigger);

// function Services() {
//   useEffect(() => {
//     const cards = gsap.utils.toArray(".service-card");

//     cards.forEach((card) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 120,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 88%",
//           },
//         }
//       );
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-black px-4 py-16 text-white md:px-8 md:py-24">

//       {/* TOP HEADING */}
//       <div className="mb-14 md:mb-20">

//         {/* SMALL LABEL */}
//         <div className="mb-5 flex items-center gap-3 md:mb-6 md:gap-4">

//           <div className="h-3 w-3 rounded-full bg-[#d9fbff]" />

//           <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 md:text-sm">
//             SERVICE
//           </p>

//         </div>

//         {/* HUGE TITLE */}
//         <h2 className="
//           max-w-[1200px]
//           text-[10vw]
//           font-[900]
//           uppercase
//           leading-[0.86]
//           tracking-[-0.09em]

//           md:text-[7.3vw]
//         ">

//           FULL-SERVICE
//           <br />

//           <span className="text-[#d9fbff]">
//             CREATIVE DIGITAL
//           </span>

//           <br />

//           MARKETING AGENCY

//         </h2>

//       </div>

//       {/* SERVICE CARDS */}
//       <div className="relative">

//         {services.map((service, index) => (

//           <div
//             key={index}
//             className="
//               service-card
//               sticky
//               top-[70px]
//               mb-4
//               overflow-hidden
//               rounded-[24px]
//               border
//               border-black/5
//               bg-[#ececec]
//               px-4
//               py-5
//               text-black
//               shadow-[0_20px_80px_rgba(0,0,0,0.45)]

//               md:top-[90px]
//               md:grid
//               md:min-h-[100px]
//               md:grid-cols-[1.2fr_280px_0.9fr]
//               md:items-center
//               md:gap-10
//               md:rounded-[34px]
//               md:px-8
//               md:py-3
//             "
//             style={{
//               zIndex: services.length - index,
//             }}
//           >

//             {/* MOBILE LAYOUT */}
//             <div className="md:hidden">

//               {/* NUMBER + TITLE */}
//               <div className="mb-5 flex items-start gap-4">

//                 <span className="pt-1 text-[22px] font-black text-[#ff5c39]">
//                   {service.number}
//                 </span>

//                 <h3 className="text-[12vw] font-[900] leading-[0.9] tracking-[-0.07em]">
//                   {service.title}
//                 </h3>

//               </div>

//               {/* IMAGE */}
//               <div className="mb-5 overflow-hidden rounded-[18px]">

//                 <LazyImage
//                   src={service.image}
//                   alt={service.title}
//                   className="
//                     aspect-[1.15/1]
//                     w-full
//                     object-cover
//                     object-center
//                   "
//                 />

//               </div>

//               {/* DESC */}
//               <p className="text-[15px] leading-[1.45] tracking-[-0.02em] text-black/85">
//                 {service.desc}
//               </p>

//             </div>

//             {/* DESKTOP LAYOUT */}
//             <>

//               {/* LEFT */}
//               <div className="hidden md:flex md:items-start md:gap-8">

//                 <span className="pt-2 text-[38px] font-black text-[#ff5c39]">
//                   {service.number}
//                 </span>

//                 <h3 className="text-[3.6vw] font-[900] leading-[0.88] tracking-[-0.07em]">
//                   {service.title}
//                 </h3>

//               </div>

//               {/* IMAGE */}
//               <div className="hidden md:flex md:justify-center">

//                 <div className="overflow-hidden">

//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="
//                       h-[230px]
//                       w-[250px]
//                       object-cover
//                       object-center
//                     "
//                   />

//                 </div>

//               </div>

//               {/* RIGHT TEXT */}
//               <div className="hidden md:block md:max-w-[330px]">

//                 <p className="text-[18px] leading-[1.35] tracking-[-0.02em] text-black/85">
//                   {service.desc}
//                 </p>

//               </div>

//             </>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// }

// export default Services;









import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { services } from "../data/services";

import LazyImage from "./ui/LazyImage";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ── Desktop: scroll-triggered fade-up animation ──────────────────────
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray(".service-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => {
      mm.revert();
    };
  }, []);

  // ── Mobile: slide to card index via GSAP ─────────────────────────────
  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(services.length - 1, index));
    setCurrent(clamped);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.parentElement.offsetWidth;
      gsap.to(sliderRef.current, {
        x: -clamped * cardWidth,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  };

  const handleTouchStart = (e) => {
  touchStartX.current = e.targetTouches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.current = e.targetTouches[0].clientX;
};

const handleTouchEnd = () => {
  const distance = touchStartX.current - touchEndX.current;

  // minimum swipe distance
  const threshold = 50;

  if (distance > threshold) {
    // swipe left → next slide
    goTo(current + 1);
  }

  if (distance < -threshold) {
    // swipe right → previous slide
    goTo(current - 1);
  }
};

  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white md:px-8 md:py-24">

      {/* TOP HEADING */}
      <div className="mb-14 md:mb-20">

        <div className="mb-5 flex items-center gap-3 md:mb-6 md:gap-4">
          <div className="h-3 w-3 rounded-full bg-[#d9fbff]" />
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 md:text-sm">
            SERVICE
          </p>
        </div>

        <h2 className="
          max-w-[1200px]
          text-[10vw]
          font-[900]
          uppercase
          leading-[0.86]
          tracking-[-0.09em]
          md:text-[7.3vw]
        ">
          FULL-SERVICE
          <br />
          <span className="text-[#d9fbff]">CREATIVE DIGITAL</span>
          <br />
          MARKETING AGENCY
        </h2>

      </div>

      {/* ── MOBILE SLIDER ─────────────────────────────────────────────── */}
      <div className="md:hidden">

        {/* Overflow window — clips all but the active card */}
        <div className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={sliderRef}
            className="flex"
            style={{ width: `${services.length * 100}%` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="px-1"
                style={{ width: `${100 / services.length}%` }}
              >
                {/* CARD */}
                <div className="overflow-hidden rounded-[24px] bg-[#ececec] px-5 py-6 text-black shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                  {/* NUMBER + TITLE */}
                  <div className="mb-5 flex items-start gap-4">
                    <span className="pt-1 text-[22px] font-black text-[#ff5c39]">
                      {service.number}
                    </span>
                    <h3 className="text-[10vw] md:text-[12vw] font-[900] leading-[0.9] tracking-[-0.07em]">
                      {service.title}
                    </h3>
                  </div>

                  {/* IMAGE */}
                  <div className="mb-5 overflow-hidden rounded-[18px]">
                    <LazyImage
                      src={service.image}
                      alt={service.title}
                      className="aspect-[1.15/1] w-full object-cover object-center"
                    />
                  </div>

                  {/* DESC */}
                  <p className="text-[15px] leading-[1.45] tracking-[-0.02em] text-black/85">
                    {service.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARROW BUTTONS */}
        <div className="flex items-center justify-center gap-3">

          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 disabled:opacity-30"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === services.length - 1}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 disabled:opacity-30"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

      </div>

      {/* ── DESKTOP STICKY STACK (unchanged) ──────────────────────────── */}
      <div className="relative hidden md:block">

        {services.map((service, index) => (
          <div
            key={index}
            className="
              service-card
              sticky
              top-[90px]
              mb-4
              overflow-hidden
              rounded-[34px]
              border
              border-black/5
              bg-[#ececec]
              px-8
              py-3
              text-black
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              grid
              min-h-[100px]
              grid-cols-[1.2fr_280px_0.9fr]
              items-center
              gap-10
            "
            style={{ zIndex: services.length - index }}
          >

            {/* LEFT */}
            <div className="flex items-start gap-8">
              <span className="pt-2 text-[38px] font-black text-[#ff5c39]">
                {service.number}
              </span>
              <h3 className="text-[3.6vw] font-[900] leading-[0.88] tracking-[-0.07em]">
                {service.title}
              </h3>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[230px] w-[250px] object-cover object-center"
                />
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-[330px]">
              <p className="text-[18px] leading-[1.35] tracking-[-0.02em] text-black/85">
                {service.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;