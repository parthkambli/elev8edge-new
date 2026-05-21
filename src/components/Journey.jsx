// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// function Journey() {
//   const sectionRef = useRef(null);
//   const leftRef = useRef(null);

//   useGSAP(() => {

//   // TEXT COMES UP FROM BOTTOM
//   gsap.fromTo(
//     leftRef.current,
//     {
//       y: 300,
//       opacity: 0,
//     },
//     {
//       y: 0,
//       opacity: 1,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 85%",
//         end: "top 30%",
//         scrub: 1.5,
//       },
//     }
//   );

//   // THEN STICKS TO TOP
//   ScrollTrigger.create({
//     trigger: sectionRef.current,
//     start: "top top",
//     end: "bottom bottom",
//     pin: leftRef.current,
//     pinSpacing: false,
//   });

// });


//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-[320vh]overflow-hidden bg-black text-white"
//     >

//       {/* BACKGROUND IMAGE */}
//       <img
//         src="/images/girl.jpg"
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover object-center grayscale brightness-[0.85] contrast-[1.1] opacity-90"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/35" />

//       {/* CONTENT */}
//       <div className="relative z-10 grid  grid-cols-[1fr_1.2fr] gap-20 px-8 py-24 md:px-16">

//         {/* LEFT SIDE */}
//         <div
//           ref={leftRef}
//           className="flex h-screen flex-col justify-start pt-28"
//         >

//           <div className="mb-8 flex items-center gap-4">
//             <div className="h-3 w-4 rounded-full bg-[#d9fbff]" />

//             <p className="text-xl font-medium uppercase tracking-wide">
//               WHAT WE HAVE DONE
//             </p>
//           </div>

//           <h2 className="text-[7vw] font-[900] uppercase leading-[0.9] tracking-[-0.06em]">
//             OUR
//             <br />
//             <span className="text-[#d9fbff]">
//               JOURNEY
//             </span>
//             <br />
//             SO FAR
//           </h2>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex flex-col gap-56 pt-20">

//           <div>
//             <h3 className="text-[9vw] font-[900] leading-none">
//               2013
//             </h3>

//             <p className="mt-4 text-3xl leading-relaxed text-white/90">
//               The year we founded the company
//             </p>
//           </div>

//           <div>
//             <h3 className="text-[9vw] font-[900] leading-none">
//               6
//             </h3>

//             <p className="mt-4 text-3xl leading-relaxed text-white/90">
//               Years of design expertise
//             </p>
//           </div>

//           <div>
//             <h3 className="text-[9vw] font-[900] leading-none">
//               23
//             </h3>

//             <p className="mt-4 text-3xl leading-relaxed text-white/90">
//               Industries impacted through innovative design
//             </p>
//           </div>

//           <div>
//             <h3 className="text-[9vw] font-[900] leading-none">
//               200
//             </h3>

//             <p className="mt-4 text-3xl leading-relaxed text-white/90">
//               Global collaborations bringing ideas to life
//             </p>
//           </div>

//           <div>
//             <h3 className="text-[9vw] font-[900] leading-none">
//               23
//             </h3>

//             <p className="mt-4 text-3xl leading-relaxed text-white/90">
//               Digital experiences launched across platforms
//             </p>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Journey;








// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// function Journey() {
//   const sectionRef = useRef(null);
//   const leftRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardsRef = useRef([]);

//   useGSAP(() => {
//     cardsRef.current = cardsRef.current.filter(Boolean);

//     // LEFT TITLE ANIMATION
//     gsap.to(titleRef.current, {
//       y: 0,
//       opacity: 1,
//       duration: 1.2,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 75%",
//       },
//     });

//     // RIGHT ITEMS
//     gsap.from(cardsRef.current, {
//       y: 120,
//       opacity: 0,
//       duration: 1.1,
//       stagger: 0.18,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 65%",
//       },
//     });

//     // PIN LEFT SIDE
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "bottom bottom",
//       pin: leftRef.current,
//       pinSpacing: false,
//     });
//   });

//   const stats = [
//     {
//       number: "2013",
//       text: "The year we founded the company",
//     },
//     {
//       number: "6",
//       text: "Years of design expertise",
//     },
//     {
//       number: "23",
//       text: "Industries impacted through innovative design",
//     },
//     {
//       number: "200",
//       text: "Global collaborations bringing ideas to life",
//     },
//     {
//       number: "23",
//       text: "Digital experiences launched across platforms",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-black text-white"
//     >

//       {/* BG */}
//       <img
//         src="/images/girl.jpg"
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover grayscale"
//       />

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* CONTENT */}
//       <div className="relative z-10 grid min-h-[320vh] grid-cols-1 gap-20 px-7 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-14">

//         {/* LEFT */}
//         <div
//           ref={leftRef}
//           className="flex h-screen flex-col justify-start pt-24"
//         >

//           <div className="mb-10 flex items-center gap-4">

//             <div className="h-3 w-3 rounded-full bg-[#d9fbff]" />

//             <p className="text-[18px] uppercase tracking-wide text-white/90">
//               WHAT WE HAVE DONE
//             </p>

//           </div>

//           <div className="overflow-hidden">

//             <h2
//               ref={titleRef}
//               className="translate-y-40 text-[18vw] font-black uppercase leading-[0.84] tracking-[-0.08em] opacity-0 md:text-[7vw]"
//             >
//               OUR
//               <br />

//               <span className="text-[#d9fbff]">
//                 JOURNEY
//               </span>

//               <br />
//               SO FAR
//             </h2>

//           </div>

//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-col gap-52 pt-24">

//           {stats.map((item, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//             >

//               <h3 className="text-[18vw] font-black leading-none tracking-[-0.07em] md:text-[9vw]">
//                 {item.number}
//               </h3>

//               <p className="mt-5 max-w-[480px] text-[26px] leading-[1.5] text-white/90 md:text-[34px]">
//                 {item.text}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Journey;





















// updates by aadi 

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Journey() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current = cardsRef.current.filter(Boolean);
    const isMobile = window.innerWidth < 768;

    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.1,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%",
      },
    });

    // Only pin on desktop
    if (!isMobile) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
      });
    }
  });

  const stats = [
    { number: "2013", text: "The year we founded the company" },
    { number: "6", text: "Years of design expertise" },
    { number: "23", text: "Industries impacted through innovative design" },
    { number: "200", text: "Global collaborations bringing ideas to life" },
    { number: "23", text: "Digital experiences launched across platforms" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* BG */}
      <img src="/images/girl.jpg" alt="" className="absolute inset-0 h-full w-full object-cover grayscale" />
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 px-5 py-20 md:grid md:min-h-[320vh] md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-14 md:py-24">

        {/* LEFT — stacked on mobile, pinned on desktop */}
        <div ref={leftRef} className="mb-16 md:mb-0 md:flex md:h-screen md:flex-col md:justify-start md:pt-24">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-3 w-3 rounded-full bg-[#d9fbff]" />
            <p className="text-sm uppercase tracking-wide text-white/90 md:text-[18px]">WHAT WE HAVE DONE</p>
          </div>

          <div className="overflow-hidden">
            <h2
              ref={titleRef}
              className="translate-y-40 text-[20vw] font-black uppercase leading-[0.84] tracking-[-0.08em] opacity-0 md:text-[7vw]"
            >
              OUR
              <br />
              <span className="text-[#d9fbff]">JOURNEY</span>
              <br />
              SO FAR
            </h2>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-20 md:gap-52 md:pt-24">
          {stats.map((item, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <h3 className="text-[22vw] font-black leading-none tracking-[-0.07em] md:text-[9vw]">
                {item.number}
              </h3>
              <p className="mt-4 max-w-[480px] text-[18px] leading-[1.5] text-white/90 md:mt-5 md:text-[34px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;