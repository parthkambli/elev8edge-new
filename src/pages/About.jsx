// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// import Navbar from "../components/Navbar";
// import AboutCarousel from "../components/AboutCarousel";
// import Journey from "../components/Journey";
// import Footer from "../components/Footer";
// import AboutTestimonial from "../components/AboutTestimonial";

// const AboutUs = () => {
//   const titleRef = useRef(null);
//   const textRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(titleRef.current, {
//       y: 140,
//       opacity: 0,
//       duration: 1.3,
//       ease: "power4.out",
//     });

//     gsap.from(textRef.current, {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//       delay: 0.3,
//       ease: "power3.out",
//     });
//   });

//   return (
//     <>
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="relative h-screen overflow-hidden bg-black text-white">

//         {/* BACKGROUND VIDEO */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover object-center"
//         >
//           <source src="/videos/about-hero.mp4" type="video/mp4" />
//         </video>

//         {/* OVERLAY */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

//         {/* CONTENT */}
//         <div className="relative z-10 flex h-full flex-col justify-between px-8 pb-10 pt-44 md:px-14">

//           {/* TOP RIGHT TEXT */}
//           <div className="flex justify-end pt-10">

//             <p
//               ref={textRef}
//               className="max-w-[620px] text-right text-[20px] font-medium leading-[1.6]"
//             >
//               Discover who we are — a creative studio passionate about
//               crafting bold brands, immersive experiences, and innovative
//               design expert solutions.
//             </p>

//           </div>

//           {/* BOTTOM SECTION */}
//           <div className="flex items-end justify-between pb-4">

//             {/* HUGE TITLE */}
//             <h1
//               ref={titleRef}
//               className="text-[13vw] font-[900] uppercase leading-[0.82] tracking-[-0.09em] md:text-[8vw]"
//             >
//               ABOUT
//               <br />
//               NOMORE STD
//             </h1>

//             {/* SCROLL TEXT */}
//             <p className="mb-1 hidden text-lg md:block">
//               (Scroll down)
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* IMAGE MARQUEE */}
//       <AboutCarousel />

//       <Journey />

//       <AboutTestimonial/>
//       <Footer/>
//     </>
//   );
// };

// export default AboutUs;


import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navbar";
import AboutCarousel from "../components/AboutCarousel";
import Journey from "../components/Journey";
import Footer from "../components/Footer";
import AboutTestimonial from "../components/AboutTestimonial";

const AboutUs = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      y: 0,
      duration: 1.2,
      ease: "power4.out",
    })

      .to(
        textRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.9"
      )

      .to(
        scrollRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7"
      );
  });

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden bg-black text-white">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col justify-between px-7 pb-10 pt-40 md:px-14">

          {/* TOP TEXT */}
          <div className="flex justify-end overflow-hidden">

            <p
              ref={textRef}
              className="max-w-[640px] translate-y-full text-right text-[18px] font-medium leading-[1.7] text-white/90 md:text-[20px]"
            >
              Discover who we are — a creative studio passionate about
              crafting bold brands, immersive experiences, and innovative
              design expert solutions.
            </p>

          </div>

          {/* BOTTOM */}
          <div className="flex items-end justify-between">

            {/* TITLE */}
            <div className="overflow-hidden">

              <h1
                ref={titleRef}
                className="translate-y-full text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.09em] md:text-[8vw]"
              >
                ABOUT
                <br />
                NOMORE STD
              </h1>

            </div>

            {/* SCROLL */}
            <div className="overflow-hidden">

              <p
                ref={scrollRef}
                className="hidden translate-y-full text-lg text-white/70 md:block"
              >
                (Scroll down)
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MARQUEE */}
      <AboutCarousel />

      {/* JOURNEY */}
      <Journey />

      {/* TESTIMONIAL */}
      <div className="relative z-20 -mt-32">
        <AboutTestimonial />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;