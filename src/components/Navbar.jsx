// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className="relative z-20 flex h-24 items-center justify-between px-6 md:px-12">
//                 <h2 className="text-2xl font-bold">Nomore ©</h2>

//                 <div className="hidden gap-10 text-sm font-bold md:flex">
//                     <a href="#home">HOME</a>
//                     <a href="/about">ABOUT</a>
//                     {/* <a href="#work">sed</a> */}
//                     <a href="#projects">PROJECTS</a>
//                 </div>

//                 <button className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-bold text-black">
//                     LET&apos;S TALK
//                     <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
//                         ➜
//                     </span>
//                 </button>
//             </nav>
//   )
// }

// export default Navbar








// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="absolute left-0 top-0 z-50 w-full">

//       {/* OPTIONAL OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/0" />

//       {/* NAVBAR */}
//       <nav className="relative z-20 flex h-24 items-center justify-between px-6 md:px-12">

//         {/* LOGO */}
//         <h2 className="text-2xl font-bold text-white">
//           Nomore ©
//         </h2>

//         {/* NAV LINKS */}
//         <div className="hidden gap-10 text-sm font-bold text-white md:flex">

//           <Link
//             to="/"
//             className="transition-opacity duration-300 hover:opacity-70"
//           >
//             HOME
//           </Link>

//           <Link
//             to="/about"
//             className="transition-opacity duration-300 hover:opacity-70"
//           >
//             ABOUT
//           </Link>

//           <Link
//             to="/services"
//             className="transition-opacity duration-300 hover:opacity-70"
//           >
//             SERVICES
//           </Link>

//           <Link
//             to="/projects"
//             className="transition-opacity duration-300 hover:opacity-70"
//           >
//             PROJECTS
//           </Link>

//         </div>

//         {/* LET'S TALK BUTTON */}
//         {/* <Link
//           to="/contact"
//           className="group flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02]"
//         >

//           LET&apos;S TALK

//           <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
//             ➜
//           </span>

//         </Link> */}



//        <Link
//   to="/contact"
//   className="
//     group
//     hidden
//     items-center
//     gap-3
//     rounded-full
//     bg-white
//     py-2
//     pl-5
//     pr-2
//     text-sm
//     font-bold
//     text-black
//     transition-all
//     duration-300
//     hover:scale-[1.02]

//     md:flex
//   "
// >
//   LET&apos;S TALK

//   <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
//     ➜
//   </span>
// </Link>

//       </nav>

//     </div>
//   );
// };

// export default Navbar;


















// updated by aadi
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute left-0 top-0 z-50 w-full">
      <nav className="relative z-20 flex h-20 items-center justify-between px-5 md:h-24 md:px-12">

        {/* LOGO */}
        <h2 className="text-xl font-bold text-white md:text-2xl">
          Nomore ©
        </h2>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden gap-10 text-sm font-bold text-white md:flex">
          <Link to="/" className="transition-opacity duration-300 hover:opacity-70">HOME</Link>
          <Link to="/about" className="transition-opacity duration-300 hover:opacity-70">ABOUT</Link>
          <Link to="/services" className="transition-opacity duration-300 hover:opacity-70">SERVICES</Link>
          <Link to="/projects" className="transition-opacity duration-300 hover:opacity-70">PROJECTS</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* LET'S TALK BUTTON */}
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-1.5 text-xs font-bold text-black transition-all duration-300 hover:scale-[1.02] md:gap-3 md:pl-5 md:pr-2 md:text-sm"
          >
            LET&apos;S TALK
            <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1 md:h-9 md:w-9">
              ➜
            </span>
          </Link>

          {/* HAMBURGER (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-0 top-20 z-40 w-full overflow-hidden bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-screen py-8" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-lg font-bold text-white">
          <Link to="/" onClick={() => setMenuOpen(false)} className="transition-opacity duration-300 hover:opacity-70">HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="transition-opacity duration-300 hover:opacity-70">ABOUT</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="transition-opacity duration-300 hover:opacity-70">SERVICES</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="transition-opacity duration-300 hover:opacity-70">PROJECTS</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;