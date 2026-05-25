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
//       {
//         y: 180,
//         opacity: 0,
//       },
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
//       if (window.innerWidth < 768) return;

//       const scrollY = window.scrollY;

//       if (imageRef.current) {
//         imageRef.current.style.transform = `
//           translate(-50%, -50%) translateY(${scrollY * -0.12}px)
//         `;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="about"
//       className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-16 text-center sm:px-6 md:px-10 md:py-24"
//     >
//       <LazyImage
//         src={cri}
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       <div className="absolute inset-0 bg-black/70" />

//       <p className="relative z-10 mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] sm:text-xs md:mb-8 md:text-sm">
//         <span className="h-3 w-3 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)] md:h-4 md:w-4" />
//         ABOUT US
//       </p>

//       <div className="overflow-hidden">
//         <h2
//           ref={titleRef}
//           className="relative z-10 max-w-7xl uppercase text-[13vw] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[11vw] md:text-[8vw] lg:text-[6vw]"
//         >
//           building Brands
//           <br />
//           Breaking Limits
//           <br />
//           Scaling Growth
//         </h2>
//       </div>

//       {/*
//         Centering strategy:
//           - `left-1/2` is ALWAYS set — never overridden at any breakpoint.
//           - `-translate-x-1/2 -translate-y-1/2` centers the image on that anchor on mobile.
//           - On md+ the scroll handler overrides with `translate(-50%, -50%) translateY(...)`,
//             which bakes -50%/-50% into the inline style, preserving centering during parallax.
//           - `lg:left-[60%]` has been removed — it was the root cause of off-center drift.
//           - `lg:top-[100%]` has been removed — it pushed the image off-screen on large screens.
//       */}
//       <LazyImage
//         ref={imageRef}
//         src={chrome}
//         alt=""
//         className="
//           absolute
          
//           -translate-x-1/2
//           -translate-y-1/2
//           z-20
//           transition-transform
//           duration-700
//           ease-out

//           left-[75%]
//           top-[82%]
//           w-[180px]

//           sm:left-[70%]
//           sm:top-[90%]
//           sm:w-[520px]
//         "
//       />

//       {/*
//         Paragraph margin-top is sized to always clear the bottom edge of the chrome image.
//         Image center is at ~52–78% of section height + half the image height.
//         mt values below are tuned per breakpoint to sit comfortably below the image.
//       */}
//       <p
//         className="
//           relative
//           z-30
//           mt-[120px]
//           max-w-[300px]
//           text-center
//           text-[14px]
//           font-bold
//           leading-[1.7]
//           text-white/90

//           sm:mt-[230px]
//           sm:max-w-[400px]
//           sm:text-[15px]

//           md:mt-[300px]
//           md:max-w-4xl
//           md:text-xl

//           lg:mt-[360px]
//           lg:max-w-5xl
//           lg:text-2xl

//           xl:mt-[420px]
//           xl:max-w-6xl
//         "
//       >
//         Elev8Edge was built with one vision — to help brands grow, not just exist. From a small team of passionate marketers, we’ve grown into a results-driven agency turning ideas into high-performing digital experiences.
//       </p>
//     </section>
//   );
// }

// export default About;





















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

    const handleScroll = () => {
      if (window.innerWidth < 768 || !imageRef.current) return;
      const scrollY = window.scrollY;
      imageRef.current.style.transform = `translateY(${scrollY * -0.08}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
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

        {/* Heading */}
        <div className="overflow-hidden">
          <h2
            ref={titleRef}
            className="uppercase text-[13vw] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[11vw] md:text-[8vw] lg:text-[6vw]"
          >
            building Brandsssss
            <br />
            Breaking Limits
            <br />
            Scaling Growth
          </h2>
        </div>

        {/* Chrome Image - With Overlap */}
        <div className="-mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24 mb-6">
          <LazyImage
            ref={imageRef}
            src={chrome}
            alt=""
            className="w-[200px] sm:w-[280px] md:w-[380px] lg:w-[480px] xl:w-[520px] mx-auto 
                       transition-transform duration-700 ease-out drop-shadow-2xl"
          />
        </div>

        {/* Description - Slightly overlapped */}
        <p className="max-w-[300px] sm:max-w-[400px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 
                     text-[14px] sm:text-[15px] md:text-xl lg:text-2xl 
                     leading-[1.7] text-white/90 font-bold -mt-6 sm:-mt-8 md:-mt-10">
          Elev8Edge was built with one vision — to help brands grow, not just exist. 
          From a small team of passionate marketers, we’ve grown into a results-driven 
          agency turning ideas into high-performing digital experiences.
        </p>
      </div>
    </section>
  );
}

export default About;