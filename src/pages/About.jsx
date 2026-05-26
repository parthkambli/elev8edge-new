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
import TeamSection from "../components/TeamSection";
import LocationSection from "../components/LocationSection";

const AboutUs = () => {

  // MOBILE REFS
  const mobileTitleRef = useRef(null);
  const mobileTextRef = useRef(null);

  // DESKTOP REFS
  const desktopTitleRef = useRef(null);
  const desktopTextRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {

    // MOBILE ANIMATION
    if (window.innerWidth < 768) {

      const tl = gsap.timeline();

      tl.to(mobileTitleRef.current, {
        y: 0,
        duration: 1.1,
        ease: "power4.out",
      })

      .to(
        mobileTextRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      );

    }

    // DESKTOP ANIMATION
    else {

      const tl = gsap.timeline();

      tl.to(desktopTitleRef.current, {
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      })

      .to(
        desktopTextRef.current,
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

    }

  });

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">

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
        <div className="relative z-10 min-h-screen px-6 py-8 md:px-12">

          {/* ================= MOBILE ================= */}
          <div className="flex min-h-screen flex-col md:hidden">

            {/* TOP HEADING */}
            <div className="pt-44 overflow-hidden">

              <h1
                ref={mobileTitleRef}
                className="
                  translate-y-full
                  text-[11vw]
                  font-black
                  uppercase
                  leading-[0.82]
                  tracking-[-0.07em]
                "
              >
                ABOUT
                <br />
                ELEV8EDGE
              </h1>

            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-auto pb-50 overflow-hidden">

              <p
                ref={mobileTextRef}
                className="
                  ml-auto
                  max-w-[300px]
                  translate-y-full
                  text-right
                  text-[15px]
                  font-medium
                  leading-[1.45]
                  text-white/90
                  opacity-0
                "
              >
                Discover Elev8Edge — a growth-driven digital agency
                passionate about building powerful brands,
                high-performing campaigns, and impactful digital
                experiences.
              </p>

            </div>

          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:block">

            {/* RIGHT PARA */}
            <div className="absolute right-12 top-[38%] overflow-hidden">

              <p
                ref={desktopTextRef}
                className="
                  max-w-[430px]
                  translate-y-full
                  text-right
                  text-[20px]
                  font-medium
                  leading-[1.5]
                  text-white/90
                  opacity-0
                "
              >
                Discover Elev8Edge — a growth-driven digital agency
                passionate about building powerful brands,
                high-performing campaigns, and impactful digital
                experiences.
              </p>

            </div>

            {/* BOTTOM LEFT HEADING */}
            <div className="absolute bottom-10 left-12 overflow-hidden">

              <h1
                ref={desktopTitleRef}
                className="
                  translate-y-full
                  text-[7.2vw]
                  font-black
                  uppercase
                  leading-[0.82]
                  tracking-[-0.07em]
                "
              >
                ABOUT
                <br />
                ELEV8EDGE
              </h1>

            </div>

            {/* SCROLL */}
            <div className="absolute bottom-12 right-12 overflow-hidden">

              <p
                ref={scrollRef}
                className="
                  translate-y-full
                  text-[18px]
                  text-white/70
                  opacity-0
                "
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

      {/* TEAM */}
      <TeamSection />

      {/* LOCATION */}
      <LocationSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default AboutUs;