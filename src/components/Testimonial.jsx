// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import service4 from "../assets/images/service-4.png";
// import service10 from "../assets/images/service-10.png";
// import service3 from "../assets/images/service-3.png";

// import logo from "../assets/logos/logo-4.svg";
// import logo1 from "../assets/logos/logo-1.svg";
// import logo2 from "../assets/logos/logo-2.svg";
// import logo3 from "../assets/logos/logo-3.svg";
// import logo5 from "../assets/logos/logo-5.svg";

// gsap.registerPlugin(ScrollTrigger);

// function Testimonial() {
//     const sectionRef = useRef(null);
//     const [activeImage, setActiveImage] = useState(service4);

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             gsap.from(".testimonial-text", {
//                 y: 120,
//                 opacity: 100,
//                 duration: 1.2,
//                 ease: "power4.out",
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top 75%",
//                 },
//             });

//             gsap.from(".testimonial-image", {
//                 scale: 1.2,
//                 opacity: 100,
//                 duration: 1.4,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: ".testimonial-image",
//                     start: "top 85%",
//                 },
//             });

//             gsap.from(".logo-box", {
//                 y: 80,
//                 opacity: 100,
//                 stagger: 0.12,
//                 duration: 1,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: ".logos-wrapper",
//                     start: "top 90%",
//                 },
//             });
//         }, sectionRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className="relative overflow-hidden bg-black px-8 py-24 text-white md:px-14"
//         >
//             <div className="mx-auto max-w-[1650px]">
//                 {/* MAIN SECTION */}
//                 <div className="grid items-center gap-0 lg:grid-cols-[0.92fr_1.08fr]">

//                     {/* LEFT */}
//                     <div className="testimonial-text relative z-10 pr-[-40px]">

//                         <h2 className="max-w-[820px] text-[4.2vw] font-medium leading-[1.04] tracking-[-0.06em] text-white">
//                             “Working with Nomore Studio was an absolute game-changer for
//                             our brand. Their creativity, attention to detail, and 100%
//                             passionate approach.”
//                         </h2>

//                         <div className="mt-20">
//                             <h4 className="text-[2rem] font-semibold">
//                                 Nakata Nicole
//                             </h4>

//                             <p className="mt-2 text-[1.5rem] text-white/55">
//                                 Marketing Director
//                             </p>
//                         </div>
//                     </div>

//                     {/* RIGHT IMAGE */}
//                     <div className="relative -ml-[750px] h-[750px] overflow-hidden rounded-[20px]">

//                         <img
//                             src={activeImage}
//                             alt=""
//                             className="testimonial-image h-full w-full object-cover transition-all duration-700"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
//                     </div>
//                 </div>

//               {/* LOGOS */}
// {/* LOGOS */}
// <div className="logos-wrapper mt-14 grid grid-cols-5 gap-5">
//   <div
//     onClick={() => setActiveImage(service4)}
//     className="logo-box group flex h-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
//   >
//     <img src={logo} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
//   </div>

//   <div
//     onClick={() => setActiveImage(service3)}
//     className="logo-box group flex h-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
//   >
//     <img src={logo1} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
//   </div>

//   <div
//     onClick={() => setActiveImage(service10)}
//     className="logo-box group flex  self-starth-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
//   >
//     <img src={logo2} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
//   </div>

//   <div
//     onClick={() => setActiveImage(service3)}
//     className="logo-box group self-start flex h-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
//   >
//     <img src={logo3} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
//   </div>

//   <div
//     onClick={() => setActiveImage(service10)}
//     className="logo-box group self-start flex h-[120px] cursor-pointer items-center justify-center rounded-[6px] border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:bg-[0]"
//   >
//     <img src={logo5} alt="" className="h-10 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
//   </div>
// </div>
//             </div>
//         </section>
//     );
// }

// export default Testimonial;












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



// function Testimonial() {
// const [active, setActive] = useState(0);

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
// export default Testimonial;




















import { useState } from "react";

import sisyphus from "../assets/logos/sisyphus.svg";
import layers from "../assets/logos/layers.svg";
import capsule from "../assets/logos/capsule.svg";
import lightbox from "../assets/logos/lightbox.svg";
import boltshift from "../assets/logos/boltshift.svg";

const testimonials = [
  {
    logo: sisyphus,
    text: "Collaborating with Nomore Studio was inspiring. They didn’t just follow our brief — they expanded it, offering new ideas for illustration, branding, and digital storytelling.",
    name: "Casey Lee",
    role: "Chief Operations Officer",
    image: "/images/person1.jpg",
  },
  {
    logo: layers,
    text: "Working with Nomore Studio was an absolute game-changer for our brand. Their creativity, attention to detail, and passionate approach transformed our vision into reality.",
    name: "Nakata Nicole",
    role: "Marketing Director",
    image: "/images/person2.jpg",
  },
  {
    logo: capsule,
    text: "Nomore Studio made our website redesign effortless. From detailed wireframes to polished UI/UX, they elevated our digital presence beyond expectations.",
    name: "Taylor Reed",
    role: "Creative Director",
    image: "/images/person3.jpg",
  },
  {
    logo: lightbox,
    text: "The team at Nomore Studio turned our concept into something tangible and exciting. Their 3D renderings, branding elements, and campaign visuals were not only eye-catching but...",
    name: "Jamie Parker",
    role: "Executive Chairman",
    image: "/images/person4.jpg",
  },
  {
    logo: boltshift,
    text: "Their blend of creativity and technical execution is unmatched. The final product captured our brand perfectly and exceeded expectations.",
    name: "Sophia Chen",
    role: "Product Lead",
    image: "/images/person5.jpg",
  },
];

function Testimonial() {
  const [active, setActive] = useState(3);

  return (
  <section className="relative bg-black px-4 py-16 text-white md:px-10 md:py-24">
  
  {/* TOP TITLE */}
  <div className="mb-8 flex items-center gap-3">
    <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />

    <p className="text-lg font-medium uppercase md:text-2xl">
      TESTIMONIAL
    </p>
  </div>

  {/* MAIN TESTIMONIAL */}
  <div className="relative overflow-hidden rounded-[12px] md:h-[540px]">

    {/* IMAGE SIDE */}
    <div className="relative h-[340px] w-full overflow-hidden md:absolute md:right-0 md:top-0 md:h-full md:w-[52%]">
      
      <img
        src={testimonials[active].image}
        alt=""
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
      />

      {/* IMAGE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
    </div>

    {/* CONTENT */}
    {/* <div className="relative z-10 flex h-full flex-col justify-between pt-8 md:max-w-[50%] md:py-10"> */}
    <div className="relative z-10 flex h-full flex-col pt-8 md:max-w-[50%] md:py-10">
      
      {/* <p className="max-w-[760px] text-[18px] font-medium leading-[1.15] tracking-[-0.04em] md:text-[48px] lg:text-[52px] xl:text-[56px]"> */}
     <p className="mb-12 max-w-[760px] text-[18px] font-medium leading-[1.15] tracking-[-0.04em] md:text-[38px] lg:text-[42px] xl:text-[46px]">
        {testimonials[active].text}
      </p>

      <div className="mt-auto">
        
        <h4 className="text-[22px] font-bold leading-none md:text-[34px]">
          {testimonials[active].name}
        </h4>

        <p className="mt-2 text-[14px] font-medium text-white/45 md:text-[18px]">
          {testimonials[active].role}
        </p>

      </div>
    </div>
  </div>

  {/* LOGOS */}
  <div className="mt-10 overflow-x-auto pb-4 scrollbar-hide md:mt-14">
    
    <div className="flex gap-5 md:grid md:grid-cols-5">
      
      {testimonials.map((item, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`flex h-[72px] min-w-[150px] items-center justify-center rounded-[6px] border border-white/10 transition-all duration-300 md:h-36 md:min-w-0 ${
            active === index
              ? "bg-white/20"
              : "bg-white/[0.08] hover:bg-white/[0.12]"
          }`}
        >
          <img
            src={item.logo}
            alt=""
            className="h-8 w-auto object-contain opacity-90 md:h-10"
          />
        </button>
      ))}

    </div>
  </div>
</section>
  );
}

export default Testimonial;