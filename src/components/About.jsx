// import { useEffect, useRef } from "react";
// import chrome from "../assets/images/chrome.png";
// import cri from "../assets/images/cri.png";

// function About() {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       if (imageRef.current) {
//         imageRef.current.style.transform = `
//           translate(-50%, -50%) translateY(${scrollY * -0.12}px)
//         `;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//    <section
//   id="about"
//   className="relative flex min-h-screen flex-col items-center overflow-hidden bg-black px-5 py-20 text-center"
// >
//   {/* BACKGROUND IMAGE */}
//   <img
//     src={cri}
//     alt=""
//     className="absolute inset-0 h-full w-full object-cover"
//   />

//   {/* DARK OVERLAY */}
//   <div className="absolute inset-0 bg-black/70" />

//   {/* CIRCLES */}
//   <div className="absolute left-[-180px] top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full border border-white/10" />
  
//   <div className="absolute right-[-180px] top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full border border-white/10" />

//   {/* TOP TEXT */}
//   <p className="relative z-10 mb-8 flex items-center gap-3 text-sm font-bold tracking-widest">
//     <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />
//     ABOUT US
//   </p>

//   {/* HEADING */}
//   <h2 className="relative z-10 max-w-6xl text-[13vw] font-black leading-[0.9] tracking-[-0.06em] md:text-[6vw]">
//     POWERING BRANDS
//     <br />
//     WITH IMAGINATION
//     <br />
//     BOLD IMPACT
//   </h2>

//   {/* FLOATING IMAGE */}
//   <img
//     ref={imageRef}
//     src={chrome}
//     alt=""
//     className="absolute left-3/5 top-[100%] z-20 w-[280px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out md:left-[41%] md:w-[500px]"
//   />

//   {/* DESCRIPTION */}
//   <p className="relative z-30 mt-44 max-w-5xl text-lg font-bold leading-snug text-white/90 md:mt-56 md:text-2xl">
//     We came together with a single vision — to create experiences that
//     inspire and designs that leave a lasting impression. What started as a
//     small group of passionate creatives has grown into an award-winning
//     agency.
//   </p>
// </section>
//   );
// }

// export default About;

























// import { useEffect, useRef } from "react";
// import chrome from "../assets/images/chrome.png";
// import cri from "../assets/images/cri.png";

// function About() {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       if (imageRef.current) {
//         imageRef.current.style.transform = `
//           translate(-50%, -50%) translateY(${scrollY * -0.12}px)
//         `;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       id="about"
//       className="relative flex min-h-screen flex-col items-center overflow-hidden  px-4 py-16 text-center sm:px-6 md:px-10 md:py-24"
//     >
//       {/* BACKGROUND IMAGE */}
//       <img
//         src={cri}
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* CIRCLES */}
//       {/* <div className="absolute left-[-300px] top-1/2 hidden h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-white/10 md:block xl:h-[850px] xl:w-[850px]" />

//       <div className="absolute right-[-300px] top-1/2 hidden h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-white/10 md:block xl:h-[850px] xl:w-[850px]" /> */}

//       {/* TOP TEXT */}
//       <p className="relative z-10 mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] sm:text-xs md:mb-8 md:text-sm">
//         <span className="h-3 w-3 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)] md:h-4 md:w-4" />
//         ABOUT US
//       </p>

//       {/* HEADING */}
//       <h2 className="relative z-10 max-w-7xl text-[14vw] font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-[11vw] md:text-[8vw] lg:text-[6vw]">
//         POWERING BRANDS
//         <br />
//         WITH IMAGINATION
//         <br />
//         BOLD IMPACT
//       </h2>

//       {/* FLOATING IMAGE */}
//       <img
//         ref={imageRef}
//         src={chrome}
//         alt=""
//         className="absolute left-1/2 top-[78%] z-20 w-[180px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out sm:top-[82%] sm:w-[240px] md:left-[60%] md:top-[98%] md:w-[380px] lg:w-[500px]"
//       />

//       {/* DESCRIPTION */}
//       <p className="relative z-30 mt-40 max-w-5xl px-2 text-base font-bold leading-[1.6] text-white/90 sm:mt-52 sm:text-lg md:mt-64 md:px-0 md:text-2xl">
//         We came together with a single vision — to create experiences that
//         inspire and designs that leave a lasting impression. What started as a
//         small group of passionate creatives has grown into an award-winning
//         agency.
//       </p>
//     </section>
//   );
// }

// export default About;





























// import { useEffect, useRef } from "react";
// import chrome from "../assets/images/chrome.png";
// import cri from "../assets/images/cri.png";


// function About() {
//   const imageRef = useRef(null);
//   const titleRef = useRef(null);

//   useEffect(() => {
//   const handleScroll = () => {
//     if (window.innerWidth < 768) return;

//     const scrollY = window.scrollY;

//     if (imageRef.current) {
//       imageRef.current.style.transform = `
//         translate(-50%, -50%) translateY(${scrollY * -0.12}px)
//       `;
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   handleScroll();

//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   return (
//     <section
//       id="about"
//       className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-16 text-center sm:px-6 md:px-10 md:py-24"
//     >
//       {/* BACKGROUND IMAGE */}
//       <img
//         src={cri}
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* TOP TEXT */}
//       <p className="relative z-10 mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] sm:text-xs md:mb-8 md:text-sm">
//         <span className="h-3 w-3 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)] md:h-4 md:w-4" />
//         ABOUT US
//       </p>

//       {/* HEADING */}
//       <h2 className="relative z-10 max-w-7xl text-[13vw] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[11vw] md:text-[8vw] lg:text-[6vw]">
//         POWERING BRANDS
//         <br />
//         WITH IMAGINATION
//         <br />
//         BOLD IMPACT
//       </h2>

//      {/* FLOATING IMAGE */}
// <img
//   ref={imageRef}
//   src={chrome}
//   alt=""
//   className="
//     absolute 
//     left-40%
//     top-[45%] 
//     z-20 
//     w-[180px] 
//     -translate-x-1/2 
//     -translate-y-1/2 
//     transition-transform 
//     duration-700 
//     ease-out

//     sm:top-[60%]
//     sm:w-[230px]

//     md:left-1/2
//     md:top-[78%]
//     md:w-[430px]

//     lg:top-[100%]
//     lg:left-[60%]
//     lg:w-[520px]
//   "
// />

// {/* DESCRIPTION */}
// <p
//   className="
//     relative 
//     z-30 
//     mt-[220px] 
//     max-w-[320px] 
//     text-center 
//     text-[15px] 
//     font-bold 
//     leading-[1.7] 
//     text-white/90

//     sm:mt-[260px]
//     sm:max-w-[420px]
//     sm:text-lg

//     md:mt-[340px]
//     md:max-w-5xl
//     md:text-2xl
//   "
// >
//   We came together with a single vision — to create experiences that
//   inspire and designs that leave a lasting impression. What started as a
//   small group of passionate creatives has grown into an award-winning
//   agency.
// </p>
//     </section>
//   );
// }

// export default About;

























import chrome from "../assets/images/chrome.png";
import cri from "../assets/images/cri.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    titleRef.current,
    {
      y: 180,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
        once: true,
      },
    }
  );

  const handleScroll = () => {
    if (window.innerWidth < 768) return;

    const scrollY = window.scrollY;

    if (imageRef.current) {
      imageRef.current.style.transform = `
        translate(-50%, -50%) translateY(${scrollY * -0.12}px)
      `;
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-16 text-center sm:px-6 md:px-10 md:py-24"
    >
      <img
        src={cri}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <p className="relative z-10 mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] sm:text-xs md:mb-8 md:text-sm">
        <span className="h-3 w-3 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)] md:h-4 md:w-4" />
        ABOUT US
      </p>

     <div className="overflow-hidden">
  <h2
    ref={titleRef}
    className="relative z-10 max-w-7xl text-[13vw] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[11vw] md:text-[8vw] lg:text-[6vw]"
  >
    POWERING BRANDS
    <br />
    WITH IMAGINATION
    <br />
    BOLD IMPACT
  </h2>
</div>

      <img
        ref={imageRef}
        src={chrome}
        alt=""
        className="
          absolute
          left-1/2
          top-[45%]
          z-20
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          transition-transform
          duration-700
          ease-out

          sm:top-[60%]
          sm:w-[230px]

          md:left-1/2
          md:top-[78%]
          md:w-[430px]

          lg:left-[60%]
          lg:top-[100%]
          lg:w-[520px]
        "
      />

      <p
        className="
          relative
          z-30
          mt-[220px]
          max-w-[320px]
          text-center
          text-[15px]
          font-bold
          leading-[1.7]
          text-white/90

          sm:mt-[260px]
          sm:max-w-[420px]
          sm:text-lg

          md:mt-[340px]
          md:max-w-5xl
          md:text-2xl
        "
      >
        We came together with a single vision — to create experiences that
        inspire and designs that leave a lasting impression. What started as a
        small group of passionate creatives has grown into an award-winning
        agency.
      </p>
    </section>
  );
}

export default About;