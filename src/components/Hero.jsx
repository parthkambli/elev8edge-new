// import { useRef, useState } from "react";
// import textImage from "../assets/images/text.png";

// function Hero() {
//     const videoRef = useRef(null);
//     const [playing, setPlaying] = useState(true);

//     const toggleVideo = () => {
//         if (!videoRef.current) return;

//         playing ? videoRef.current.pause() : videoRef.current.play();
//         setPlaying(!playing);
//     };

//     return (
//        <section className="relative h-screen w-full overflow-hidden rounded-[18px] md:rounded-none">
//   <video
//     ref={videoRef}
//     autoPlay
//     muted
//     loop
//     playsInline
//     className="absolute inset-0 h-full w-full object-cover"
//   >
//     <source src="/videos/hero.mp4" type="video/mp4" />
//   </video>

//   <div className="absolute inset-0 bg-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-black/70" />

//   <button
//     onClick={toggleVideo}
//     className="absolute right-6 top-28 z-30 hidden text-sm font-bold text-white md:block"
//   >
//     {playing ? "Pause" : "Play"}
//   </button>

//   <div className="relative z-10 flex h-full flex-col px-5 pt-[190px] md:h-[calc(100vh-96px)] md:justify-center md:px-24 md:pt-0">
//     <p className="z-20 text-[12px] font-bold tracking-wide text-white md:absolute md:left-24 md:top-[29%] md:text-sm">
//       POWERED BY CREATIVITY
//     </p>

//     <div className="mt-5 flex w-full justify-center md:absolute md:bottom-[10%] md:left-1/2 md:mt-0 md:-translate-x-1/2">
//       <img
//         src={textImage}
//         alt="Creative Studio"
//         className="w-[95vw] object-contain md:w-[88vw]"
//       />
//     </div>

//     <p className="mt-28 max-w-[330px] self-end text-right text-[16px] font-bold leading-[1.25] text-white md:absolute md:-bottom-15 md:right-20 md:mt-0 md:max-w-sm md:text-center md:text-lg">
//       We transform ideas into fully-realized design experiences — from UI/UX
//       and illustration to development — creating work that elevates brands.
//     </p>

    
//   </div>

//   <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-b from-transparent to-black" />

  
  

// </section>
//     );
// }

// export default Hero;




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
        <div className="flex justify-end">
          <p className="max-w-[320px] text-right text-sm font-bold leading-[1.3] text-white sm:text-base md:max-w-[380px] md:text-lg">
            We transform ideas into fully-realized design experiences — from
            UI/UX and illustration to development — creating work that elevates
            brands.
          </p>
                    {/* <Link
                      to="/contact"
                      className="group flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-1.5 text-xs font-bold text-black transition-all duration-300 hover:scale-[1.02] md:gap-3 md:pl-5 md:pr-2 md:text-sm ml-8"
                    >
                      GET STARTED
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1 md:h-9 md:w-9">
                        ➜
                      </span>
                    </Link> */}
        </div>
        
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}

export default Hero;
























