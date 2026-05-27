import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  // HERO ANIMATION REFS
const mobileTitleRef = useRef(null);
const mobileTextRef = useRef(null);

const desktopTitleRef = useRef(null);
const desktopTextRef = useRef(null);

const labelRef = useRef(null);
const buttonRef = useRef(null);

useGSAP(() => {

  const tl = gsap.timeline();

  tl.to(labelRef.current, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
  })

  // MOBILE
  if (window.innerWidth < 768) {

    tl.to(
      mobileTitleRef.current,
      {
        y: 0,
        duration: 1.1,
        ease: "power4.out",
      },
      "-=0.3"
    )

    .to(
      mobileTextRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    )

    .to(
      buttonRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.7"
    );

  }

  // DESKTOP
  else {

    tl.to(
      desktopTitleRef.current,
      {
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.3"
    )

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
      buttonRef.current,
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

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden rounded-[18px] md:rounded-none">

    {/* VIDEO */}
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/hero-poster.webp"
      className="absolute inset-0 h-full w-full object-cover"
    >
      {/* Mobile Video */}
      <source
        src="/videos/heroMob.mp4"
        type="video/mp4"
        media="(max-width: 767px)"
      />

      {/* Desktop Video */}
      <source
        src="/videos/hero.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
    </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/30 md:to-black/70" />

      {/* PAUSE BUTTON */}
      <button
        onClick={toggleVideo}
        className="absolute right-4 top-24 z-30 hidden text-sm font-bold text-white md:block lg:right-8"
      >
        {playing ? "Pause" : "Play"}
      </button>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col px-5 pb-10 pt-32 sm:px-8 md:px-16 md:pb-14 lg:px-24">

        {/* TOP LABEL */}
        <div className="overflow-hidden">
          {/* <p className="inline-block px-2 py-1 text-[11px] font-bold tracking-wide text-white sm:text-xs md:bg-transparent md:px-0 md:py-0 md:text-sm">
            POWERED BY CREATIVITY
          </p> */}
          <p
  ref={labelRef}
            className="
              inline-block rounded-full
              px-3 py-1.5
              text-[11px] font-bold tracking-[0.15em] text-white
              sm:text-xs md:text-sm
              backdrop-blur-sm
              border border-white/20
              translate-y-full opacity-0
            "
            style={{ background: "rgba(255,255,255,0.10)" }}
          >
            POWERED BY CREATIVITY
          </p>
        </div>



        {/* MAIN TITLE */}
      <div className="mt-10 flex flex-1 overflow-hidden">
        <h1
  ref={window.innerWidth < 768 ? mobileTitleRef : desktopTitleRef}
            className="
              font-[Anton]
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
              text-left
              text-[19vw]
              sm:text-[17vw]
              md:text-[12vw]
              lg:text-[10vw]
              xl:text-[9vw]
              select-none
              translate-y-full
            "
            style={{
              background:
                "linear-gradient(90deg, #d8f4ff 0%, #ffffff 35%, #ff7b6b 70%, #d8f4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(255,255,255,0.08)",
            }}
          >
            DIGITAL GROWTH
            <br />
            AGENCY
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="relative z-40 mb-24 flex flex-col items-end overflow-hidden md:mb-0">
          <p
  ref={window.innerWidth < 768 ? mobileTextRef : desktopTextRef}
  className="max-w-[320px] text-right text-sm font-bold leading-[1.3] text-white sm:text-base md:max-w-[380px] md:text-lg pb-4 translate-y-full opacity-0">
            We transform ideas into scalable digital experiences — from content and design to performance marketing — built to grow your brand.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white py-2 pl-4 pr-1.5 text-xs font-bold text-black transition-all duration-300 hover:scale-[1.02] md:gap-3 md:pl-5 md:pr-2 md:text-sm ml-8"
          >
            GET STARTED
            <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1 md:h-9 md:w-9">
              ➜
            </span>
          </Link>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 z-0 h-40 w-full bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}

export default Hero;









// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";

// function Hero() {
//   const videoRef = useRef(null);
//   const [playing, setPlaying] = useState(true);

//   const toggleVideo = () => {
//     if (!videoRef.current) return;
//     if (playing) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setPlaying(!playing);
//   };

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden rounded-[18px] md:rounded-none">

//       {/* VIDEO */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         poster="/images/hero-poster.webp"
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         {/* Mobile Video */}
//         <source
//           src="/videos/heroMob.mp4"
//           type="video/mp4"
//           media="(max-width: 767px)"
//         />
//         {/* Desktop Video */}
//         <source
//           src="/videos/hero.mp4"
//           type="video/mp4"
//           media="(min-width: 768px)"
//         />
//       </video>

//       {/* ── OVERLAY LAYER 1 — radial vignette from edges ── */}
//       <div
//         className="absolute inset-0 z-[1]"
//         style={{
//           background:
//             "radial-gradient(ellipse at top left, rgba(0,0,0,0.55) 0%, transparent 60%), " +
//             "radial-gradient(ellipse at bottom right, rgba(0,0,0,0.60) 0%, transparent 55%)",
//         }}
//       />

//       {/* ── OVERLAY LAYER 2 — directional gradient (mobile: bottom-heavy; desktop: left-to-right) ── */}
//       <div
//         className="absolute inset-0 z-[2]
//           bg-gradient-to-b from-black/30 via-transparent to-black/75
//           md:bg-none"
//         style={{
//           background: undefined,
//         }}
//       >
//         {/* Desktop directional overlay via inline style so media query wins */}
//         <div
//           className="hidden md:block absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(105deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.65) 100%)",
//           }}
//         />
//       </div>

//       {/* ── OVERLAY LAYER 3 — bottom fade to black ── */}
//       <div className="absolute bottom-0 left-0 z-[3] h-48 w-full bg-gradient-to-b from-transparent to-black" />

//       {/* PAUSE BUTTON */}
//       <button
//         onClick={toggleVideo}
//         className="absolute right-4 top-24 z-30 hidden text-sm font-bold text-white/80 hover:text-white transition-colors md:block lg:right-8"
//       >
//         {playing ? "Pause" : "Play"}
//       </button>

//       {/* CONTENT */}
//       <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-10 pt-32 sm:px-8 md:px-16 md:pb-14 lg:px-24">

//         {/* TOP LABEL — frosted pill for instant legibility on any background */}
//         <div>
//           <p
//             className="
//               inline-block rounded-full
//               px-3 py-1.5
//               text-[11px] font-bold tracking-[0.15em] text-white
//               sm:text-xs md:text-sm
//               backdrop-blur-sm
//               border border-white/20
//             "
//             style={{ background: "rgba(255,255,255,0.10)" }}
//           >
//             POWERED BY CREATIVITY
//           </p>
//         </div>

//         {/* MAIN TITLE */}
//         <div className="flex flex-1 items-center">
//           <h1
//             className="
//               font-[Anton]
//               uppercase
//               leading-[0.82]
//               tracking-[-0.06em]
//               text-left
//               text-[19vw]
//               sm:text-[17vw]
//               md:text-[12vw]
//               lg:text-[10vw]
//               xl:text-[9vw]
//               select-none
//             "
//             style={{
//               background:
//                 "linear-gradient(90deg, #a8e8ff 0%, #ffffff 30%, #ff7b6b 65%, #ffe0db 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               // Multi-layer shadow: near white glow + distant spread for depth
//               filter:
//                 "drop-shadow(0 2px 24px rgba(255,255,255,0.18)) drop-shadow(0 0 2px rgba(255,255,255,0.35))",
//             }}
//           >
//             DIGITAL GROWTH
//             <br />
//             AGENCY
//           </h1>
//         </div>

//         {/* DESCRIPTION */}
//         <div className="relative z-40 flex flex-col items-end">
//           <p
//             className="max-w-[320px] text-right text-sm font-bold leading-[1.3] text-white sm:text-base md:max-w-[380px] md:text-lg pb-4"
//             style={{
//               textShadow:
//                 "0 1px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.6)",
//             }}
//           >
//             We transform ideas into scalable digital experiences — from content
//             and design to performance marketing — built to grow your brand.
//           </p>

//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white py-2 pl-4 pr-1.5 text-xs font-bold text-black transition-all duration-300 hover:scale-[1.02] md:gap-3 md:pl-5 md:pr-2 md:text-sm ml-8"
//           >
//             GET STARTED
//             <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1 md:h-9 md:w-9">
//               ➜
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;