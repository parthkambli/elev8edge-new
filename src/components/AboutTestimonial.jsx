// import { useState } from "react";

// import sisyphus from "../assets/logos/sisyphus.svg";
// import layers from "../assets/logos/layers.svg";
// import capsule from "../assets/logos/capsule.svg";
// import lightbox from "../assets/logos/lightbox.svg";
// import boltshift from "../assets/logos/boltshift.svg";

// const testimonials = [
//   {
//     logo: sisyphus,
//     text: "Collaborating with Nomore Studio was inspiring. They didn’t just follow our brief — they expanded it, offering new ideas for illustration, branding, and digital storytelling.",
//     name: "Casey Lee",
//     role: "Chief Operations Officer",
//     image: "/images/person1.jpg",
//   },

//   {
//     logo: layers,
//     text: "Working with Nomore Studio was an absolute game-changer for our brand. Their creativity, attention to detail, and passionate approach transformed our vision into reality.",
//     name: "Nakata Nicole",
//     role: "Marketing Director",
//     image: "/images/person2.jpg",
//   },

//   {
//     logo: capsule,
//     text: "Nomore Studio made our website redesign effortless. From detailed wireframes to polished UI/UX, they elevated our digital presence beyond expectations.",
//     name: "Taylor Reed",
//     role: "Creative Director",
//     image: "/images/person3.jpg",
//   },

//   {
//     logo: lightbox,
//     text: "The team at Nomore Studio turned our concept into something tangible and exciting. Every detail felt intentional and elevated our project to the next level.",
//     name: "Jamie Parker",
//     role: "Executive Chairman",
//     image: "/images/person4.jpg",
//   },

//   {
//     logo: boltshift,
//     text: "Their blend of creativity and technical execution is unmatched. The final product captured our brand perfectly and exceeded expectations.",
//     name: "Sophia Chen",
//     role: "Product Lead",
//     image: "/images/person5.jpg",
//   },
// ];

// function AboutTestimonial() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="relative -mt-1 px-8 py-28 text-white md:px-14">

//       {/* TOP CONTENT */}
//       <div className="grid grid-cols-[220px_1fr] gap-16">

//         {/* LEFT SIDE */}
//         <div className="border-r border-white/10 pr-10">

//           <div className="flex items-center gap-4">

//             <div className="h-4 w-4 rounded-full bg-[#d9fbff]" />

//             <p className="text-2xl font-medium uppercase tracking-wide">
//               TESTIMONIAL
//             </p>

//           </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div>

//           {/* QUOTE ICON */}
//           <div className="mb-10 text-[120px] font-black leading-none text-[#d9fbff]">
//             ”
//           </div>

//           {/* TESTIMONIAL TEXT */}
//           <p className="max-w-[1100px] text-[4vw] font-[400] leading-[1.2] tracking-[-0.05em] md:text-[3.1vw]">

//             {testimonials[active].text}

//           </p>

//           {/* PERSON */}
//           <div className="mt-16 flex items-center gap-5">

//             <img
//               src={testimonials[active].image}
//               alt=""
//               className="h-24 w-24 rounded-[14px] object-cover"
//             />

//             <div>

//               <h4 className="text-3xl font-semibold">
//                 {testimonials[active].name}
//               </h4>

//               <p className="mt-1 text-2xl text-white/45">
//                 {testimonials[active].role}
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* COMPANY CARDS */}
//       <div className="mt-24 grid grid-cols-5 gap-6">

//         {testimonials.map((item, index) => (

//           <button
//             key={index}
//             onClick={() => setActive(index)}
//             className={`group flex h-36 items-center justify-center rounded-[18px] border border-white/10 transition-all duration-300 ${
//               active === index
//                 ? "bg-white/20"
//                 : "bg-white/[0.06] hover:bg-white/[0.12]"
//             }`}
//           >

//             <img
//               src={item.logo}
//               alt=""
//               className="h-10 w-auto object-contain opacity-90 transition-all duration-300 group-hover:opacity-100"
//             />

//           </button>

//         ))}

//       </div>

//     </section>
//   );
// }

// export default AboutTestimonial;






















// updates by aadi 
import { useState, useRef } from "react";

import sisyphus from "../assets/logos/sisyphus.svg";
import layers from "../assets/logos/layers.svg";
import capsule from "../assets/logos/capsule.svg";
import lightbox from "../assets/logos/lightbox.svg";
import boltshift from "../assets/logos/boltshift.svg";

const testimonials = [
  {
    logo: sisyphus,
    label: "Sisyphus",
    text: "Collaborating with Nomore Studio was inspiring. They didn't just follow our brief — they expanded it, offering new ideas for illustration, branding, and digital storytelling.",
    name: "Casey Lee",
    role: "Chief Operations Officer",
    image: "/images/person1.jpg",
  },
  {
    logo: layers,
    label: "Layers",
    text: "Working with Nomore Studio was an absolute game-changer for our brand. Their creativity, attention to detail, and passionate approach transformed our vision into reality.",
    name: "Nakata Nicole",
    role: "Marketing Director",
    image: "/images/person2.jpg",
  },
  {
    logo: capsule,
    label: "Capsule",
    text: "Nomore Studio made our website redesign effortless. From detailed wireframes to polished UI/UX, they elevated our digital presence beyond expectations.",
    name: "Taylor Reed",
    role: "Creative Director",
    image: "/images/person3.jpg",
  },
  {
    logo: lightbox,
    label: "Lightbox",
    text: "The team at Nomore Studio turned our concept into something tangible and exciting. Every detail felt intentional and elevated our project to the next level.",
    name: "Jamie Parker",
    role: "Executive Chairman",
    image: "/images/person4.jpg",
  },
  {
    logo: boltshift,
    label: "Boltshift",
    text: "Their blend of creativity and technical execution is unmatched. The final product captured our brand perfectly and exceeded expectations.",
    name: "Sophia Chen",
    role: "Product Lead",
    image: "/images/person5.jpg",
  },
];

function AboutTestimonial() {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);

  const handleCardClick = (index) => {
    setActive(index);
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll(".logo-card-btn");
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <section className="relative -mt-1 px-5 py-16 text-white md:px-14 md:py-28">

      {/* TOP CONTENT */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-[220px_1fr] md:gap-16">

        {/* LEFT SIDE */}
        <div className="md:border-r md:border-white/10 md:pr-10">
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 rounded-full bg-[#d9fbff] md:h-4 md:w-4" />
            <p className="text-lg font-medium uppercase tracking-wide md:text-2xl">
              TESTIMONIAL
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* QUOTE ICON */}
          <div className="mb-6 text-[80px] font-black leading-none text-[#d9fbff] md:mb-10 md:text-[120px]">
            "
          </div>

          {/* TESTIMONIAL TEXT */}
          <p className="text-[7vw] font-[400] leading-[1.2] tracking-[-0.05em] sm:text-[5vw] md:text-[3.1vw]">
            {testimonials[active].text}
          </p>

          {/* PERSON */}
          <div className="mt-10 flex items-center gap-4 md:mt-16 md:gap-5">
            <img
              src={testimonials[active].image}
              alt=""
              className="h-14 w-14 rounded-[10px] object-cover md:h-24 md:w-24 md:rounded-[14px]"
            />
            <div>
              <h4 className="text-lg font-semibold md:text-3xl">
                {testimonials[active].name}
              </h4>
              <p className="mt-1 text-sm text-white/45 md:text-2xl">
                {testimonials[active].role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── COMPANY CARDS — MOBILE: horizontal swipe carousel ── */}
      <div
        ref={carouselRef}
        className="mt-10 flex gap-3 overflow-x-auto scroll-smooth sm:hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          paddingBottom: "4px",
        }}
      >
        <style>{`
          .carousel-hide-scroll::-webkit-scrollbar { display: none; }
        `}</style>

        {testimonials.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`logo-card-btn flex h-[80px] w-[42vw] flex-shrink-0 items-center justify-center gap-2 rounded-[14px] border border-white/10 transition-all duration-300 ${
              active === index
                ? "bg-white/20"
                : "bg-white/[0.06] hover:bg-white/[0.12]"
            }`}
          >
            <img
              src={item.logo}
              alt={item.label}
              className="h-5 w-auto object-contain opacity-90 transition-all duration-300"
            />
            <span className="text-xs font-semibold text-white/80">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* ── COMPANY CARDS — DESKTOP: 5-column grid ── */}
      <div className="mt-24 hidden grid-cols-5 gap-6 sm:grid">
        {testimonials.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`group flex h-36 items-center justify-center rounded-[18px] border border-white/10 transition-all duration-300 ${
              active === index
                ? "bg-white/20"
                : "bg-white/[0.06] hover:bg-white/[0.12]"
            }`}
          >
            <img
              src={item.logo}
              alt={item.label}
              className="h-10 w-auto object-contain opacity-90 transition-all duration-300 group-hover:opacity-100"
            />
          </button>
        ))}
      </div>

    </section>
  );
}

export default AboutTestimonial;