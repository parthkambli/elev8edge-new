


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LazyImage from "./ui/LazyImage";

// import project1 from "../assets/images/service-6.png";
// import project2 from "../assets/images/service-7.png";
// import project3 from "../assets/images/service-8.png";
// import project4 from "../assets/images/service-9.png";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     title: "SAI REALTOR",
//     image: project1,
//     tags: ["Branding", "Website"],
//     desc: "Delivered 95% high-quality real estate leads, resulting in the successful sale of 4 major projects in Navi Mumbai using performance-driven strategies.",
//   },
//   {
//     title: "MAA KALI VASTU JYOTI",
//     image: project2,
//     tags: ["Branding", "Website"],
//     desc: "From website to social media — we turned their entire digital presence into a system that drives real leads across India.",
//   },
//   {
//     title: "THE MASTER ACADEMY",
//     image: project3,
//     tags: ["Apps", "UI/UX"],
//     desc: "From a high-performing website to multi-platform marketing — we built a digital ecosystem that drives engagement and brand growth.",
//   },
//   {
//     title: "GIFTCOIN",
//     image: project4,
//     tags: ["3D", "Design"],
//     desc: "Built a customized, high-engagement website and executed multi-platform marketing strategies across social media, YouTube, and Telegram to drive brand growth and engagement.",
//   },
// ];

// function Projects() {
//   const stackRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const cards = cardRefs.current;

//     gsap.set(cards.slice(1), {
//       yPercent: 100,
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: stackRef.current,
//         start: "top top",
//         end: `+=${projects.length * 900}`,
//         scrub: 1,
//         pin: true,
//       },
//     });

//     cards.slice(1).forEach((card) => {
//       tl.to(card, {
//         yPercent: 0,
//         duration: 1,
//         ease: "power2.out",
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section id="projects" className="bg-black px-5 py-24 text-white">
      
//       {/* HEADING */}
//       <div className="mb-20 text-center">

//         <div className="mb-6 flex items-center justify-center gap-3">
//           <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />

//           <p className="text-xl font-medium uppercase">
//             OUR WORK
//           </p>
//         </div>

//         <h2 className="text-[12vw] font-black uppercase leading-[0.82] tracking-[-0.06em]">
//           <span className="text-[#d9fbff]">
//             Growth
//           </span>

//           <br />

//           spotlight
//         </h2>

//       </div>

//       {/* STACK CARDS */}
//       <div
//         ref={stackRef}
//         className="relative h-screen overflow-hidden"
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardRefs.current[index] = el)}
//             className="absolute inset-0 flex items-center justify-center"
//             style={{
//               zIndex: index + 1,
//             }}
//           >
//             {/* CARD */}
//             <div className="h-[82vh] w-full overflow-hidden rounded-[26px] bg-[#f2f2f2] p-6 text-black md:p-7">

//               <div className="grid h-full gap-6 md:grid-cols-[42%_58%]">

//                 {/* LEFT SIDE */}
//                 <div className="flex h-full flex-col justify-between px-5 py-4">

//                   {/* TOP */}
//                   <div>

//                     <div className="mb-4 flex flex-wrap gap-3">

//                       {project.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="rounded-full border border-black px-4 py-1 text-[15px]"
//                         >
//                           {tag}
//                         </span>
//                       ))}

//                     </div>

//                     <h3
//   className="
//     max-w-full

//     text-[13vw]
//     font-black
//     uppercase
//     leading-[0.9]
//     tracking-[-0.08em]
//     text-black

//     sm:text-[10vw]

//     md:max-w-[520px]
//     md:text-[4.2vw]
//   "
// >
//                       {project.title}
//                     </h3>

//                   </div>

//                   {/* BOTTOM */}
//                   <div className="pb-3">

//                     <p className="max-w-[430px] text-[18px] leading-[1.42] tracking-[-0.03em] text-black md:text-[22px]">
//                       {project.desc}
//                     </p>

//                   </div>

//                 </div>

//                 {/* IMAGE */}
//                 <div className="h-full overflow-hidden rounded-[18px]">

//                   <LazyImage
//                     src={project.image}
//                     alt={project.title}
//                     className="h-full w-full object-cover"
//                   />

//                 </div>

//               </div>

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
import LazyImage from "./ui/LazyImage";

import project1 from "../assets/images/service-6.png";
import project2 from "../assets/images/service-7.png";
import project3 from "../assets/images/service-8.png";
import project4 from "../assets/images/service-9.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SAI REALTOR",
    image: project1,
    tags: ["Lead Generation Campaigns", "Website"],
    desc: "Delivered 95% high-quality real estate leads, resulting in the successful sale of 4 major projects in Navi Mumbai using performance-driven strategies.",
  },
  {
    title: "MAA KALI VASTU JYOTISH",
    image: project2,
    tags: ["Landing Page", "Website"],
    desc: "From website to social media — we turned their entire digital presence into a system that drives real leads across India.",
  },
  {
    title: "THE MASTER ACADEMY",
    image: project3,
    tags: ["Landing Page", "UI/UX"],
    desc: "From a high-performing website to multi-platform marketing — we built a digital ecosystem that drives engagement and brand growth.",
  },
  {
    title: "GIFTCOIN",
    image: project4,
    tags: ["Conversion-Focused Layouts", "Website"],
    desc: "Built a customized, high-engagement website and executed multi-platform marketing strategies across social media, YouTube, and Telegram to drive brand growth and engagement.",
  },
];

// Scale reduction per stack level (e.g. 0.04 = 4% smaller per layer)
const STACK_SCALE_STEP = 0.08;

function Projects() {
  const stackRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    // All cards start at default position / scale
    gsap.set(cards, { yPercent: 0, scale: 1, y: 0, transformOrigin: "center center" });

    // Cards 1..n start off-screen below
    gsap.set(cards.slice(1), { yPercent: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top top",
        end: `+=${projects.length * 900}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // For each incoming card (index 1, 2, 3 …)
    cards.slice(1).forEach((incomingCard, i) => {
      // i=0 → card[1] sliding in; i=1 → card[2] sliding in; etc.

      // 1. Slide the incoming card up into view
      tl.to(
        incomingCard,
        {
          yPercent: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        // Each transition starts 1 unit after the previous ends
        i
      );

      // 2. Push every already-visible card further back in the deck
      //    card[0..i] are the ones currently showing; after this step
      //    they each get one level deeper.
      cards.slice(0, i + 1).forEach((prevCard, j) => {
        // depth = how many cards are now on top of prevCard after this step
        const depth = i + 1 - j;
        tl.to(
          prevCard,
          {
            scale: 1 - depth * STACK_SCALE_STEP,
            duration: 1,
            ease: "power2.inOut",
          },
          // Run at the same time as the incoming slide
          i
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="bg-black px-5  text-white">

      {/* HEADING */}
      <div className="mb-8 text-center">

        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />
          <p className="text-xl font-medium uppercase">OUR WORK</p>
        </div>

        <h2 className="text-[14vw] font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-[10vw]">
          <span className="text-[#d9fbff]">Growth</span>
          <br />
          spotlight
        </h2>

      </div>

      {/* STACK CARDS */}
      <div
        ref={stackRef}
        className="relative h-screen overflow-visible"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            {/* CARD */}
            <div className="h-[82vh] w-full overflow-hidden rounded-[26px] bg-[#f2f2f2] p-6 text-black md:p-7">

              <div className="grid h-full gap-0 md:grid-cols-[42%_58%]">

                {/* LEFT SIDE */}
                <div className="flex h-full flex-col justify-between px-5 py-4">

                  {/* TOP */}
                  <div>
                    {/* <div className="mb-4 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black px-4 py-1 text-[15px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}
                    <div className="mb-4 flex flex-wrap gap-2 md:gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black px-4 py-1 text-[14px] md:text-[15px] whitespace-nowrap flex-shrink-0"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3
                      className="
                        max-w-full
                        text-[13vw]
                        font-bold
                        uppercase
                        leading-[0.9]
                        tracking-[-0.08em]
                        text-black
                        sm:text-[10vw]
                        md:max-w-[520px]
                        md:text-[4.2vw]
                        mb-4
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* BOTTOM */}
                  <div className="pb-3">
                    <p className="max-w-[430px] text-[18px] leading-[1.42] tracking-[-0.03em] text-black md:text-[22px]">
                      {project.desc}
                    </p>
                  </div>

                </div>

                {/* IMAGE */}
                <div className="h-full overflow-hidden rounded-[18px]">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;