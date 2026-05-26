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
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo/logo.png";
import LazyImage from "./ui/LazyImage";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICE", path: "/services" },
    { name: "PROJECT", path: "/projects" },
  ];

  return (
    <div className="absolute left-0 top-0 z-50 w-full">

      {/* NAVBAR */}
      <nav className="relative z-20 flex h-20 items-center justify-between px-5 md:h-24 md:px-12">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <LazyImage
            src={logo}
            alt="Nomore Logo"
            className="h-16 w-auto object-contain md:h-20"
          />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden gap-10 md:flex">

          {navLinks.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              className={`
                text-sm
                font-bold
                uppercase
                transition-opacity
                duration-300
                hover:opacity-70

                ${
                  location.pathname === item.path
                    ? "text-[#d9fbff]"
                    : "text-white"
                }
              `}
            >
              {item.name}
            </Link>

          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DESKTOP BUTTON */}
          <Link
            to="/contact"
            className="
              hidden
              md:flex
              items-center
              gap-3
              rounded-full
              bg-white
              py-2
              pl-5
              pr-2
              text-sm
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >

            LET&apos;S TALK

            <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
              ➜
            </span>

          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >

            <span
              className={`
                block
                h-0.5
                w-6
                bg-white
                transition-all
                duration-300

                ${
                  menuOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                block
                h-0.5
                w-6
                bg-white
                transition-all
                duration-300

                ${
                  menuOpen
                    ? "opacity-0"
                    : ""
                }
              `}
            />

            <span
              className={`
                block
                h-0.5
                w-6
                bg-white
                transition-all
                duration-300

                ${
                  menuOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }
              `}
            />

          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          inset-0
          z-[100]
          flex
          flex-col
          items-center
          justify-center
          bg-[#f3f3f3]
          transition-all
          duration-500

          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMenuOpen(false)}
          className="
            absolute
            top-20
            text-5xl
            font-light
            text-black
          "
        >
          ×
        </button>

        {/* MENU LINKS */}
        <div className="flex flex-col items-center gap-8">

          {navLinks.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`
                text-[11vw]
                uppercase
                leading-[0.95]
                tracking-[-0.03em]
                transition-all
                duration-300

                ${
                  location.pathname === item.path
                    ? "font-black text-black"
                    : "font-normal text-black/45"
                }
              `}
            >
              {item.name}
            </Link>

          ))}

          {/* MOBILE BUTTON */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-3
              flex
              items-center
              gap-3
              rounded-full
              border
              border-black
              px-5
              py-2
              text-lg
              font-medium
              text-black
            "
          >

            LET’S TALK

            <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-white">
              →
            </span>

          </Link>

        </div>

      </div>

    </div>
  );
};

export default Navbar;