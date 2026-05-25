import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

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
        <source src="/videos/hero.mp4" type="video/mp4" />
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
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-10 pt-32 sm:px-8 md:px-16 md:pb-14 lg:px-24">

        {/* TOP LABEL */}
        <div>
          <p className="inline-block bg-blue-700/80 px-2 py-1 text-[11px] font-bold tracking-wide text-white sm:text-xs md:bg-transparent md:px-0 md:py-0 md:text-sm">
            POWERED BY CREATIVITY
          </p>
        </div>

        {/* MAIN TITLE */}
        <div className="flex flex-1 items-center">
          <h1
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
        <div className="relative z-40 flex flex-col items-end">
          <p className="max-w-[320px] text-right text-sm font-bold leading-[1.3] text-white sm:text-base md:max-w-[380px] md:text-lg pb-4">
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
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//       </video>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/30 md:to-black/70" />

//       {/* PAUSE BUTTON */}
//       <button
//         onClick={toggleVideo}
//         className="absolute right-4 top-24 z-30 hidden text-sm font-bold text-white md:block lg:right-8"
//       >
//         {playing ? "Pause" : "Play"}
//       </button>

//       {/* CONTENT */}
//       <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-10 pt-32 sm:px-8 md:px-16 md:pb-14 lg:px-24">
        
//         {/* TOP LABEL */}
//         <div>
//           <p className="inline-block bg-blue-700/80 px-2 py-1 text-[11px] font-bold tracking-wide text-white sm:text-xs md:bg-transparent md:px-0 md:py-0 md:text-sm">
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
//                 "linear-gradient(90deg, #d8f4ff 0%, #ffffff 35%, #ff7b6b 70%, #d8f4ff 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               textShadow: "0 0 30px rgba(255,255,255,0.08)",
//             }}
//           >
//             DIGITAL GROWTH
//             <br />
//             AGENCY
//           </h1>
//         </div>

//       {/* DESCRIPTION */}
//       <div className="relative z-40 flex flex-col items-end">
//         <p className="max-w-[320px] text-right text-sm font-bold leading-[1.3] text-white sm:text-base md:max-w-[380px] md:text-lg pb-4">
//           We transform ideas into fully-realized design experiences — from
//           UI/UX and illustration to development — creating work that elevates
//           brands.
//         </p>

//         <Link
//           to="/contact"
//           className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white py-2 pl-4 pr-1.5 text-xs font-bold text-black transition-all duration-300 hover:scale-[1.02] md:gap-3 md:pl-5 md:pr-2 md:text-sm ml-8"
//         >
//           GET STARTED
//           <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1 md:h-9 md:w-9">
//             ➜
//           </span>
//         </Link>
//       </div>
        
//       </div>

//       {/* BOTTOM FADE */}
//       <div className="absolute bottom-0 left-0 z-0 h-40 w-full bg-gradient-to-b from-transparent to-black" />
//     </section>
//   );
// }

// export default Hero;
























