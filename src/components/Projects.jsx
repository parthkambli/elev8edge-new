// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import project1 from "../assets/images/service-6.png";
// import project2 from "../assets/images/service-7.png";
// import project3 from "../assets/images/service-8.png";
// import project4 from "../assets/images/service-9.png";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     title: "Colletre - Collage Dashboard",
//     image: project1,
//     tags: ["Branding", "Website"],
//     desc: "A modern agency site crafted to highlight luxury, innovation, and award-winning marketing expertise.",
//   },
//   {
//     title: "Indoma Furniture - Website",
//     image: project2,
//     tags: ["Branding", "Website"],
//     desc: "A premium visual website experience with strong identity and smooth storytelling.",
//   },
//   {
//     title: "Nova Studio - Mobile App",
//     image: project3,
//     tags: ["Apps", "UI/UX"],
//     desc: "A clean app interface designed for smooth interaction and strong digital presence.",
//   },
//   {
//     title: "Motion Lab - Creative System",
//     image: project4,
//     tags: ["3D", "Design"],
//     desc: "A bold creative system with immersive visuals and high-impact brand motion.",
//   },
// ];

// function Projects() {
//   useEffect(() => {
//     gsap.utils.toArray(".project-card").forEach((card) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 160,
//           scale: 0.96,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           scale: 1,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 90%",
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section id="projects" className="bg-black px-5 py-24 text-white">
//       <div className="mb-20 text-center">
//         <div className="mb-6 flex items-center justify-center gap-3">
//           <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />
//           <p className="text-xl font-medium uppercase">OUR WORK</p>
//         </div>

//         <h2 className="project-heading text-[9vw] font-black uppercase leading-[0.82] tracking-[-0.06em]">
//           2025 - <span className="text-[#d9fbff]">FEATURED</span>
//           <br />
//           PROJECT
//         </h2>
//       </div>

//       <div className="relative">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="project-card sticky top-[70px] mb-14 overflow-hidden rounded-[28px] bg-[#f2f2f2] p-8 text-black md:p-10"
//             style={{
//               zIndex: projects.length + index,
//             }}
//           >
//             <div className="grid gap-10 md:grid-cols-[38%_62%]">
//               <div className="flex flex-col justify-between">
//                 <div>
//                   <div className="mb-5 flex gap-3">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="rounded-full border border-black px-5 py-2 text-lg"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <h3 className="text-[4vw] font-black leading-[0.9] tracking-[-0.05em]">
//                     {project.title}
//                   </h3>
//                 </div>

//                 <p className="mt-20 max-w-md text-[26px] leading-tight">
//                   {project.desc}
//                 </p>
//               </div>

//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="h-[520px] w-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;


















// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import project1 from "../assets/images/service-6.png";
// import project2 from "../assets/images/service-7.png";
// import project3 from "../assets/images/service-8.png";
// import project4 from "../assets/images/service-9.png";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     title: "Colletre - Collage Dashboard",
//     image: project1,
//     tags: ["Branding", "Website"],
//     desc: "A modern agency site crafted to highlight luxury, innovation, and award-winning marketing expertise.",
//   },
//   {
//     title: "Indoma Furniture - Website",
//     image: project2,
//     tags: ["Branding", "Website"],
//     desc: "A premium visual website experience with strong identity and smooth storytelling.",
//   },
//   {
//     title: "Nova Studio - Mobile App",
//     image: project3,
//     tags: ["Apps", "UI/UX"],
//     desc: "A clean app interface designed for smooth interaction and strong digital presence.",
//   },
//   {
//     title: "Motion Lab - Creative System",
//     image: project4,
//     tags: ["3D", "Design"],
//     desc: "A bold creative system with immersive visuals and high-impact brand motion.",
//   },
// ];

// function Projects() {
//   const stackRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const cards = cardRefs.current;

//     gsap.set(cards, {
//       yPercent: 0,
//     });

//     gsap.set(cards.slice(1), {
//       yPercent: 100,
//     });

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: stackRef.current,
//           start: "top top",
//           end: `+=${(projects.length - 1) * 1000}`,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       cards.slice(1).forEach((card) => {
//         tl.to(card, {
//           yPercent: 0,
//           ease: "none",
//         });
//       });
//     }, stackRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="projects" className="bg-black px-5 py-24 text-white">
//       <div className="mb-20 text-center">
//         <div className="mb-6 flex items-center justify-center gap-3">
//           <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />
//           <p className="text-xl font-medium uppercase">OUR WORK</p>
//         </div>

//         <h2 className="project-heading text-[9vw] font-black uppercase leading-[0.82] tracking-[-0.06em]">
//           2025 - <span className="text-[#d9fbff]">FEATURED</span>
//           <br />
//           PROJECT
//         </h2>
//       </div>

//       <div ref={stackRef} className="relative h-[calc(100vh-90px)] overflow-hidden">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardRefs.current[index] = el)}
//             className="project-card absolute inset-0 overflow-hidden rounded-[28px] bg-[#f2f2f2] p-8 text-black md:p-10"
//             style={{
//               zIndex: index + 1,
//             }}
//           >
//             <div className="grid h-full gap-10 md:grid-cols-[38%_62%]">
//               <div className="flex h-full flex-col justify-between">
//                 <div>
//                   <div className="mb-5 flex gap-3">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="rounded-full border border-black px-5 py-2 text-lg"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <h3 className="text-[4vw] font-black leading-[0.9] tracking-[-0.05em]">
//                     {project.title}
//                   </h3>
//                 </div>

//                 <p className="max-w-md text-[26px] leading-tight">
//                   {project.desc}
//                 </p>
//               </div>

//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;





import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project1 from "../assets/images/service-6.png";
import project2 from "../assets/images/service-7.png";
import project3 from "../assets/images/service-8.png";
import project4 from "../assets/images/service-9.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Colletre - Collage Dashboard",
    image: project1,
    tags: ["Branding", "Website"],
    desc: "A modern agency site crafted to highlight luxury, innovation, and award-winning marketing expertise.",
  },
  {
    title: "Indoma Furniture - Website",
    image: project2,
    tags: ["Branding", "Website"],
    desc: "A premium visual website experience with strong identity and smooth storytelling.",
  },
  {
    title: "Nova Studio - Mobile App",
    image: project3,
    tags: ["Apps", "UI/UX"],
    desc: "A clean app interface designed for smooth interaction and strong digital presence.",
  },
  {
    title: "Motion Lab - Creative System",
    image: project4,
    tags: ["3D", "Design"],
    desc: "A bold creative system with immersive visuals and high-impact brand motion.",
  },
];

function Projects() {
  const stackRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    gsap.set(cards.slice(1), {
      yPercent: 100,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top top",
        end: `+=${projects.length * 900}`,
        scrub: 1,
        pin: true,
      },
    });

    cards.slice(1).forEach((card) => {
      tl.to(card, {
        yPercent: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="bg-black px-5 py-24 text-white">
      <div className="mb-20 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />
          <p className="text-xl font-medium uppercase">OUR WORK</p>
        </div>

        <h2 className="text-[9vw] font-black uppercase leading-[0.82] tracking-[-0.06em]">
          2025 - <span className="text-[#d9fbff]">FEATURED</span>
          <br />
          PROJECT
        </h2>
      </div>

      <div
        ref={stackRef}
        className="relative h-screen overflow-hidden"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              zIndex: index + 1,
            }}
          >
            <div className="h-[82vh] w-full overflow-hidden rounded-[32px] bg-[#f2f2f2] p-8 text-black md:p-10">
              <div className="grid h-full gap-10 md:grid-cols-[38%_62%]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-5 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black px-5 py-2 text-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-[4vw] font-black leading-[0.9] tracking-[-0.05em]">
                      {project.title}
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-md text-[26px] leading-tight">
                      {project.desc}
                    </p>

                    <button className="mt-8 flex items-center gap-4 rounded-full bg-black py-2 pl-5 pr-2 text-lg font-bold text-white">
                      VIEW PROJECT
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;