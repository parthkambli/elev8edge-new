import chrome from "../assets/images/chrome.png";
import cri from "../assets/images/cri.png";
import LazyImage from "./ui/LazyImage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    titleRef.current,
    { y: 180, opacity: 0 },
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

  // Entrance animation for chrome image
  gsap.fromTo(
    imageRef.current,
    { scale: 0.7, opacity: 0, rotate: -15 },
    {
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1.4,
      ease: "elastic.out(1, 0.6)",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        once: true,
      },
      delay: 0.3,
    }
  );

  // Scroll-driven parallax — scroll down = image moves up, scroll up = image moves down
  const section = sectionRef.current;
  const image = imageRef.current;

  const handleScroll = () => {
    if (!image || !section) return;

    const scrollY = window.scrollY;
    const sectionTop = section.getBoundingClientRect().top + scrollY;
    const relativeScroll = scrollY - sectionTop;

    // Negative multiplier: scroll down (positive relativeScroll) → image moves up (negative Y)
    const yOffset = relativeScroll * -0.25;

    gsap.set(image, { y: yOffset });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16 text-center sm:px-6 md:px-10 md:py-24"
    >
      {/* Background */}
      <LazyImage
        src={cri}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl">

        {/* ABOUT US Tag */}
        <p className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] sm:text-xs md:mb-8 md:text-sm">
          <span className="h-3 w-3 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)] md:h-4 md:w-4" />
          ABOUT US
        </p>

        {/* Stacked layout: h2 → chrome overlap → p */}
        <div className="relative flex flex-col items-center w-full">

          {/* Heading */}
          <div className="overflow-hidden relative z-0">
            <h2
              ref={titleRef}
              className="uppercase text-[13vw] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[11vw] md:text-[8vw] lg:text-[6vw]"
            >
              building Brands
              <br />
              Breaking Limits
              <br />
              Scaling Growth
            </h2>
          </div>

          {/* Chrome Image — centered, overlapping both h2 and p */}
          <div
            className="relative z-10 -mt-[8vw] -mb-[8vw]
                        sm:-mt-[7vw] sm:-mb-[7vw]
                        md:-mt-[6vw] md:-mb-[6vw]
                        lg:-mt-[5vw] lg:-mb-[5vw]"
          >
            <LazyImage
              ref={imageRef}
              src={chrome}
              alt=""
              className="w-[40vw] max-w-[260px]
                         sm:w-[36vw] sm:max-w-[320px]
                         md:w-[32vw] md:max-w-[400px]
                         lg:w-[28vw] lg:max-w-[460px]
                         xl:w-[24vw] xl:max-w-[500px]
                         mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Description */}
          <p
            className="relative z-0
                       max-w-[300px] sm:max-w-[420px] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
                       text-[14px] sm:text-[15px] md:text-lg lg:text-xl xl:text-2xl
                       leading-[1.7] text-white/90 font-bold"
          >
            Elev8Edge was built with one vision — to help brands grow, not just exist.
            From a small team of passionate marketers, we've grown into a results-driven
            agency turning ideas into high-performing digital experiences.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
















// import chrome from "../assets/images/chrome.png";
// import cri from "../assets/images/cri.png";
// import LazyImage from "./ui/LazyImage";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function About() {
//   const imageRef = useRef(null);
//   const titleRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       titleRef.current,
//       { y: 180, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 85%",
//           once: true,
//         },
//       }
//     );

//     const handleScroll = () => {
//       if (!imageRef.current) return;
//       const scrollY = window.scrollY;
//       imageRef.current.style.transform = `translateY(${scrollY * -0.22}px)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="about"
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16 text-center sm:px-6 md:px-10 md:py-24"
//     >
//       {/* Background */}
//       <LazyImage
//         src={cri}
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black/70" />

//       <div className="relative z-10 flex flex-col items-center w-full max-w-7xl">
        
//         {/* ABOUT US Tag */}
//         <p className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] sm:text-xs md:mb-8 md:text-sm">
//           <span className="h-3 w-3 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)] md:h-4 md:w-4" />
//           ABOUT US
//         </p>

//         {/* Heading */}
//         <div className="overflow-hidden">
//           <h2
//             ref={titleRef}
//             className="uppercase text-[13vw] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[11vw] md:text-[8vw] lg:text-[6vw]"
//           >
//             building Brands
//             <br />
//             Breaking Limits
//             <br />
//             Scaling Growth
//           </h2>
//         </div>

//         {/* Chrome Image - With Overlap */}
//         <div className="-mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24 mb-6">
//           <LazyImage
//             ref={imageRef}
//             src={chrome}
//             alt=""
//             className="w-[200px] sm:w-[280px] md:w-[380px] lg:w-[480px] xl:w-[520px] mx-auto 
//                        transition-transform duration-700 ease-out drop-shadow-2xl"
//           />
//         </div>

//         {/* Description - Slightly overlapped */}
//         <p className="max-w-[300px] sm:max-w-[400px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 
//                      text-[14px] sm:text-[15px] md:text-xl lg:text-2xl 
//                      leading-[1.7] text-white/90 font-bold -mt-6 sm:-mt-8 md:-mt-10">
//           Elev8Edge was built with one vision — to help brands grow, not just exist. 
//           From a small team of passionate marketers, we've grown into a results-driven 
//           agency turning ideas into high-performing digital experiences.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;