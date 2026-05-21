// import React from "react";
// import serviceVideo from "../../public/videos/Dimond.mp4";
// import React from "react";
// import project1 from "../assets/images/service-5.png";
// import project2 from "../assets/images/service-6.png";
// import project3 from "../assets/images/service-7.png";
// import project4 from "../assets/images/service-8.png";

// const projects = [
//   {
//     title: "Colletre - Collage Dashboard",
//     category: "Branding",
//     image: project1,
//   },
//   {
//     title: "Indoma Furniture - Website",
//     category: "Branding",
//     image: project2,
//   },
//   {
//     title: "Nova Studio - Mobile App",
//     category: "UI/UX",
//     image: project3,
//   },
//   {
//     title: "Creative Landing Page",
//     category: "Website",
//     image: project4,
//   },
// ];


// const ProjectsHero = () => {
//     return (
//         <section className="relative min-h-screen overflow-hidden bg-black text-white">

//             {/* VIDEO */}
//             <video
//                 className="absolute inset-0 h-full w-full object-cover"
//                 src={serviceVideo}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//             />

//             {/* OVERLAY */}
//             <div className="absolute inset-0 bg-black/25" />

//             {/* CONTENT */}
//             <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 md:px-12">

//                 {/* TOP TEXT */}
//                 <div className="flex justify-end">
//                     <p className="mt-40 max-w-[430px] text-right text-[20px] font-medium leading-[1.5]">
//                         Highlighting our recent projects and partnerships that emphasize
//                         creativity, innovation, and meaningful design across various
//                         industries
//                     </p>
//                 </div>

//                 {/* BOTTOM */}
//                 <div className="flex items-end justify-between">

//                     {/* LEFT HEADING */}
//                     <h1
//                         className="text-[9vw] uppercase leading-[0.82] tracking-[-0.08em] text-white"
//                         style={{ fontFamily: "Anton" }}
//                     >
//                         2025 - Featured
//                         <br />
//                         Project
//                     </h1>

//                     {/* RIGHT SCROLL */}
//                     <p className="mb-3 text-xl font-medium">(Scroll down)</p>
//                 </div>
//             </div>


//         </section>


// const ProjectList = () => {
//   return (
//     <section className="bg-black px-6 py-20 text-white md:px-10">
//       <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//         {projects.map((item, index) => (
//           <div key={index} className="group cursor-pointer">
//             <div className="h-[520px] w-full overflow-hidden bg-black">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//               />
//             </div>

//             <h2 className="mt-6 text-2xl font-bold">
//               {item.title}
//             </h2>

//             <p className="mt-3 text-2xl text-gray-400">
//               {item.category}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

        
       
//     );
// };

// export default ProjectsHero;








































import React from "react";
import serviceVideo from "../../public/videos/Dimond.mp4";

import project1 from "../assets/images/service-5.png";
import project2 from "../assets/images/service-6.png";
import project3 from "../assets/images/service-7.png";
import project4 from "../assets/images/service-8.png";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Colletre - Collage Dashboard",
    category: "Branding",
    image: project1,
  },
  {
    title: "Indoma Furniture - Website",
    category: "Branding",
    image: project2,
  },
  {
    title: "Nova Studio - Mobile App",
    category: "UI/UX",
    image: project3,
  },
  {
    title: "Creative Landing Page",
    category: "Website",
    image: project4,
  },
];

const ProjectsHero = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={serviceVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/25" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 md:px-12">
          {/* TOP TEXT */}
          <div className="flex justify-end">
            <p className="mt-40 max-w-[430px] text-right text-[20px] font-medium leading-[1.5]">
              Highlighting our recent projects and partnerships that emphasize
              creativity, innovation, and meaningful design across various
              industries
            </p>
          </div>

          {/* BOTTOM */}
          <div className="flex items-end justify-between">
            {/* LEFT HEADING */}
            <h1
              className="text-[9vw] uppercase leading-[0.82] tracking-[-0.08em] text-white"
              style={{ fontFamily: "Anton" }}
            >
              2025 - Featured
              <br />
              Project
            </h1>

            {/* RIGHT SCROLL */}
            <p className="mb-3 text-xl font-medium">(Scroll down)</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white md:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="h-[520px] w-full overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-130"
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-3 text-2xl text-gray-400">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  );
};



export default ProjectsHero;