import { useRef, useState } from "react";
import textImage from "../assets/images/text.png";

function Hero() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const toggleVideo = () => {
        if (!videoRef.current) return;

        playing ? videoRef.current.pause() : videoRef.current.play();
        setPlaying(!playing);
    };

    return (
       <section className="relative h-screen w-full overflow-hidden rounded-[18px] md:rounded-none">
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

  <div className="absolute inset-0 bg-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-black/70" />

  <button
    onClick={toggleVideo}
    className="absolute right-6 top-28 z-30 hidden text-sm font-bold text-white md:block"
  >
    {playing ? "Pause" : "Play"}
  </button>

  <div className="relative z-10 flex h-full flex-col px-5 pt-[190px] md:h-[calc(100vh-96px)] md:justify-center md:px-24 md:pt-0">
    <p className="z-20 text-[12px] font-bold tracking-wide text-white md:absolute md:left-24 md:top-[29%] md:text-sm">
      POWERED BY CREATIVITY
    </p>

    <div className="mt-5 flex w-full justify-center md:absolute md:bottom-[10%] md:left-1/2 md:mt-0 md:-translate-x-1/2">
      <img
        src={textImage}
        alt="Creative Studio"
        className="w-[95vw] object-contain md:w-[88vw]"
      />
    </div>

    <p className="mt-28 max-w-[330px] self-end text-right text-[16px] font-bold leading-[1.25] text-white md:absolute md:-bottom-15 md:right-20 md:mt-0 md:max-w-sm md:text-center md:text-lg">
      We transform ideas into fully-realized design experiences — from UI/UX
      and illustration to development — creating work that elevates brands.
    </p>

    
  </div>

  <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-b from-transparent to-black" />

  
  

</section>
    );
}

export default Hero;































//  import { useRef, useState } from "react";
// import textImage from "../assets/images/text.png";

// function Hero() {
//   const videoRef = useRef(null);
//   const [playing, setPlaying] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleVideo = () => {
//     if (!videoRef.current) return;

//     playing
//       ? videoRef.current.pause()
//       : videoRef.current.play();

//     setPlaying(!playing);
//   };

//   const handleScroll = (id) => {
//     setMenuOpen(false);

//     const section = document.getElementById(id);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <>
//       <section
//         id="home"
//         className="relative h-screen w-full overflow-hidden rounded-[18px] md:rounded-none"
//       >
//         {/* VIDEO */}
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover"
//         >
//           <source src="/videos/hero.mp4" type="video/mp4" />
//         </video>

//         {/* OVERLAY */}
//         <div className="absolute inset-0 bg-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-black/70" />

//         {/* TOP BAR */}
//         <div className="absolute left-80 top-15 z-40 flex w-full items-center justify-between px-5 py-5 md:px-12">
          

//           {/* DESKTOP BUTTON */}
//           <button className="hidden items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-bold text-black md:flex">
//             LET&apos;S TALK

//             <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-white">
//               →
//             </span>
//           </button>

//           {/* MOBILE MENU */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="grid h-12 w-12 place-items-center rounded-xl bg-white text-2xl text-black md:hidden"
//           >
//             ☰
//           </button>
//         </div>

//         {/* PAUSE BUTTON */}
//         <button
//           onClick={toggleVideo}
//           className="absolute right-6 top-28 z-30 hidden text-sm font-bold text-white md:block"
//         >
//           {playing ? "Pause" : "Play"}
//         </button>

//         {/* CONTENT */}
//         <div className="relative z-10 flex h-full flex-col px-5 pt-[190px] md:h-[calc(100vh-96px)] md:justify-center md:px-24 md:pt-0">
//           <p className="z-20 text-[12px] font-bold tracking-wide text-white md:absolute md:left-24 md:top-[29%] md:text-sm">
//             POWERED BY CREATIVITY
//           </p>

//           {/* BIG TEXT */}
//           <div className="mt-5 flex w-full justify-center md:absolute md:bottom-[10%] md:left-1/2 md:mt-0 md:-translate-x-1/2">
//             <img
//               src={textImage}
//               alt="Creative Studio"
//               className="w-[95vw] object-contain md:w-[88vw]"
//             />
//           </div>

//           {/* DESCRIPTION */}
//           <p className="mt-28 max-w-[330px] self-end text-right text-[16px] font-bold leading-[1.25] text-white md:absolute md:-bottom-15 md:right-20 md:mt-0 md:max-w-sm md:text-center md:text-lg">
//             We transform ideas into fully-realized design experiences — from
//             UI/UX and illustration to development — creating work that elevates
//             brands.
//           </p>

         
          
//         </div>

//         {/* BOTTOM FADE */}
//         <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-b from-transparent to-black" />
//       </section>

//       {/* MOBILE MENU FULLSCREEN */}
//       <div
//         className={`fixed inset-0 z-[999] flex flex-col bg-[#efefef] transition-all duration-500 ${
//           menuOpen
//             ? "pointer-events-auto opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//       >
//         {/* CLOSE */}
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="mt-24 text-center text-5xl font-light text-black"
//         >
//           ×
//         </button>

//         {/* MENU LINKS */}
//         <div className="mt-16 flex flex-col items-center gap-10 text-[54px] font-medium uppercase leading-none text-black">
//           <button onClick={() => handleScroll("home")}>
//             HOME
//           </button>

//           <button onClick={() => handleScroll("about")}>
//             ABOUT
//           </button>

//           <button onClick={() => handleScroll("services")}>
//             SERVICE
//           </button>

//           <button onClick={() => handleScroll("projects")}>
//             PROJECT
//           </button>
//         </div>

//         {/* BOTTOM BUTTON */}
        
//       </div>
//     </>
//   );
// }

// export default Hero;









