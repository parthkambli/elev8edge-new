import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {services}  from "../data/services";

gsap.registerPlugin(ScrollTrigger);

function Services() {
    useEffect(() => {
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
          start: "top 90%",
        },
      }
    );
  });

  ScrollTrigger.refresh();

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  return (
    <section className="mb-8 bg-black px-4 py-10">
   <div className="relative overflow-x-auto px-4 pb-6 scrollbar-hide md:overflow-visible md:px-0">
  <div className="flex gap-5 md:block">
    {services.map((service, index) => (
      <div
        key={index}
        className="
          service-card
          flex
          min-w-[82vw]
          max-w-[82vw]
          flex-shrink-0
          flex-col
          rounded-[28px]
          bg-[#ececec]
          px-6
          py-7
          text-black
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]

          md:sticky
          md:top-[80px]
          md:mb-10
          md:min-h-[300px]
          md:max-w-none
          md:w-full
          md:flex-row
          md:items-center
          md:justify-between
          md:rounded-[40px]
          md:px-10
          md:py-12
        "
        style={{
          zIndex: services.length - index,
        }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
          <span className="text-2xl font-bold text-[#ff5c39] md:text-5xl">
            {service.number}
          </span>

          <h3 className="text-[10vw] font-black leading-[0.9] tracking-[-0.04em] text-black md:text-[5vw]">
            {service.title}
          </h3>
        </div>

        <img
          src={service.image}
          alt={service.title}
          className="my-6 h-[190px] w-full rounded-[14px] object-cover shadow-2xl md:my-0 md:h-[220px] md:w-[320px]"
        />

        <p className="max-w-full text-[16px] leading-[1.25] text-black md:max-w-[360px] md:text-[28px]">
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

export default Services;







// import React, { useState } from "react";
// import serviceVideo from "../../public/videos/service.mp4";



// import service6 from "../assets/images/service-6.png";
// import service7 from "../assets/images/service-7.png";
// import service8 from "../assets/images/service-8.png";
// import service9 from "../assets/images/service-9.png";

// const services = [
//   {
//     title: "BRANDING",
//     image: service7,
//     tags: ["Brand Strategy", "Visual Identity", "Guidelines", "Packaging", "Storytelling"],
//     desc: "We craft unique brand identities that tell a story, define personality, and create meaningful connections with audiences across every touchpoint.",
//   },
//   {
//     title: "UI / UX DESIGN",
//     image: service8,
//     tags: ["User Research", "Wireframing", "Prototyping", "Interface Design", "Usability Testing"],
//     desc: "We design intuitive and engaging interfaces, focusing on user-centered experiences that are both visually appealing and highly functional.",
//   },
//   {
//     title: "DEVELOPMENT",
//     image: service9,
//     tags: ["Frontend", "Backend", "Web Apps", "CMS", "Optimization"],
//     desc: "We build fast, responsive, and scalable digital products with clean code and smooth performance.",
//   },
//   {
//     title: "ILLUSTRATION",
//     image: service6,
//     tags: ["2D Art", "3D Visuals", "Motion", "Characters", "Creative Assets"],
//     desc: "We create bold illustrations and visuals that make brands feel alive across digital platforms.",
//   },
// ];

// const Services = () => {
//   const [activeImage, setActiveImage] = useState(null);

//   return (
//     <main className="bg-black text-white overflow-hidden">
//       <section className="relative min-h-screen overflow-hidden bg-black text-white">
//         <video
//           className="absolute inset-0 h-full w-full object-cover"
//           src={serviceVideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60" />

//         <div className="relative z-10 min-h-screen px-6 pt-36 md:px-12">
//           <p className="absolute right-8 top-[52%] max-w-[410px] text-center text-xl font-medium leading-snug md:right-16">
//             From branding and UI/UX to 2D/3D illustration and development, we
//             turn ideas into engaging, memorable experiences across every medium
//           </p>

//           <h1 className="absolute bottom-10 left-6 text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.07em] md:left-12 md:text-[8vw]">
//             SERVICE &
//             <br />
//             CAPABILITIES
//           </h1>

//           <p className="absolute bottom-8 right-8 text-base font-semibold md:right-16">
//             (Scroll down)
//           </p>
//         </div>
//       </section>

//       <section className="relative bg-black px-6 py-20 md:px-10">
//         <div className="mb-10 flex items-center gap-3 text-xl">
//           <span className="h-5 w-5 rounded-full border-4 border-gray-500 bg-[#d9fbff]" />
//           <span>SERVICE</span>
//         </div>

//         {services.map((item, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setActiveImage(item.image)}
//             onMouseLeave={() => setActiveImage(null)}
//             className="relative mb-8 flex min-h-[270px] cursor-pointer items-center justify-between overflow-visible rounded-xl bg-white px-10 py-10 text-black"
//           >
//             <div>
//               <h2 className="text-[5vw] font-black leading-none tracking-[-0.06em]">
//                 {item.title}
//               </h2>

//               <div className="mt-8 flex max-w-[520px] flex-wrap gap-3">
//                 {item.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="rounded-full border border-black px-5 py-1 text-lg"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <p className="max-w-[420px] text-2xl font-medium leading-tight">
//               {item.desc}
//             </p>

//             {activeImage === item.image && (
//               <img
//                 src={item.image}
//                 alt=""
//                 className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 object-cover"
//               />
//             )}
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// };

// export default Services;






