// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import service2 from "../assets/images/service-2.png";

// gsap.registerPlugin(ScrollTrigger);

// function Achievement() {
//   const sectionRef = useRef(null);

//  useEffect(() => {
//   const ctx = gsap.context(() => {
//     gsap.to(".floating-text", {
//       yPercent: -25,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 1.5,
//       },
//     });

//     gsap.from(".achievement-title", {
//       y: 180,
//       opacity: 0,
//       duration: 1.4,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//       },
//     });

//     gsap.from(".impact-title", {
//       x: 250,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: ".impact-title",
//         start: "top 85%",
//       },
//     });

//     gsap.utils.toArray(".stats-box").forEach((box, i) => {
//       gsap.from(box, {
//         y: 140,
//         opacity: 0,
//         duration: 1.2,
//         delay: i * 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: box,
//           start: "top 90%",
//         },
//       });
//     });

//     gsap.to(".achievement-image", {
//       scale: 1.15,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//       },
//     });
//   }, sectionRef);

//   return () => ctx.revert();
// }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-[170vh] overflow-hidden bg-black text-white"
//     >
//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0 overflow-hidden">
//         <img
//           src={service2}
//           alt=""
//           className="achievement-image h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/35" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-20 px-8 py-24 md:px-16">
//         {/* TOP */}
//         <div className="mb-8 flex items-center gap-3">
//           <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.25)]" />
//           <p className="text-xl font-bold uppercase">Achievement</p>
//         </div>

//         {/* MAIN TITLE */}
//         <div className="achievement-title floating-text">
//           <h2 className="text-[9vw] font-black uppercase leading-[0.82] tracking-[-0.07em]">
//             BEYOND INFLUENCE
//           </h2>

//           <p className="mt-6 max-w-xl text-[1.35rem] font-semibold leading-tight">
//             Influence goes beyond aesthetics; it shifts perception, inspires
//             conversation, and sets new standards. We help brands express clarity
//             and emotion.
//           </p>
//         </div>

//         {/* SECOND TITLE */}
//         <div className="impact-title floating-text mt-40">
//           <h3 className="text-right text-[8vw] font-black uppercase leading-[0.82] tracking-[-0.07em]">
//             AND IMPACT
//           </h3>

//           <p className="ml-auto mt-6 max-w-2xl text-right text-[1.35rem] font-semibold leading-tight">
//             Where creativity meets consequence, effectively transforming ideas
//             into actionable plans and strategy into sustainable growth
//             opportunities.
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="mt-52 grid gap-32 md:grid-cols-3">
//           <div className="stats-box floating-text ">
//             <h4 className="text-[7vw] font-black leading-none">200+</h4>

//             <p className="mt-8 max-w-xs text-[1.35rem] font-semibold leading-tight">
//               projects redefining visual experiences
//             </p>
//           </div>

//           <div className="stats-box mt-36">
//             <h4 className="text-[7vw] font-black leading-none">30+</h4>

//             <p className="mt-8 max-w-xs text-[1.35rem] font-semibold leading-tight">
//               Industries impacted through innovative design
//             </p>
//           </div>

//           <div className="stats-box mt-72">
//             <h4 className="text-[7vw] font-black leading-none">12</h4>

//             <p className="mt-8 max-w-xs text-[1.35rem] font-semibold leading-tight">
//               Years of design expertise shaping visual language
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Achievement;





























//updates by aadi 

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import service2 from "../assets/images/service-2.png";

gsap.registerPlugin(ScrollTrigger);

function Achievement() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only parallax on desktop
      if (window.innerWidth >= 768) {
        gsap.to(".floating-text", {
          yPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      gsap.from(".achievement-title", {
        y: 180,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".impact-title", {
        x: window.innerWidth < 768 ? 80 : 250,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".impact-title",
          start: "top 85%",
        },
      });

      gsap.utils.toArray(".stats-box").forEach((box, i) => {
        gsap.from(box, {
          y: 140,
          opacity: 0,
          duration: 1.2,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 90%",
          },
        });
      });

      gsap.to(".achievement-image", {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black text-white"
      style={{ minHeight: "120vh" }}
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={service2} alt="" className="achievement-image h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 px-5 py-20 md:px-16 md:py-24">

        {/* TOP LABEL */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.25)] md:h-4 md:w-4" />
          <p className="text-base font-bold uppercase md:text-xl">Achievement</p>
        </div>

        {/* MAIN TITLE */}
        <div className="achievement-title">
          <h2 className="text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.07em] md:text-[9vw]">
            BEYOND INFLUENCE
          </h2>
          <p className="mt-4 max-w-xl text-base font-semibold leading-tight md:mt-6 md:text-[1.35rem]">
            Influence goes beyond aesthetics; it shifts perception, inspires
            conversation, and sets new standards. We help brands express clarity
            and emotion.
          </p>
        </div>

        {/* SECOND TITLE */}
        <div className="impact-title mt-16 md:mt-40">
          <h3 className="text-right text-[11vw] font-black uppercase leading-[0.82] tracking-[-0.07em] md:text-[8vw]">
            AND IMPACT
          </h3>
          <p className="ml-auto mt-4 max-w-2xl text-right text-base font-semibold leading-tight md:mt-6 md:text-[1.35rem]">
            Where creativity meets consequence, effectively transforming ideas
            into actionable plans and strategy into sustainable growth
            opportunities.
          </p>
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-12 md:mt-52 md:grid-cols-3 md:gap-32">
          <div className="stats-box">
            <h4 className="text-[18vw] font-black leading-none md:text-[7vw]">200+</h4>
            <p className="mt-4 max-w-xs text-base font-semibold leading-tight md:mt-8 md:text-[1.35rem]">
              projects redefining visual experiences
            </p>
          </div>

          <div className="stats-box md:mt-36">
            <h4 className="text-[18vw] font-black leading-none md:text-[7vw]">30+</h4>
            <p className="mt-4 max-w-xs text-base font-semibold leading-tight md:mt-8 md:text-[1.35rem]">
              Industries impacted through innovative design
            </p>
          </div>

          <div className="stats-box md:mt-72">
            <h4 className="text-[18vw] font-black leading-none md:text-[7vw]">12</h4>
            <p className="mt-4 max-w-xs text-base font-semibold leading-tight md:mt-8 md:text-[1.35rem]">
              Years of design expertise shaping visual language
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;