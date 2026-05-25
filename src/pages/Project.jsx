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
import serviceVideo from "../../public/videos/projectHero.mp4";
import LazyImage from "../components/ui/LazyImage";

import project1 from "../assets/Our Projects/1.jpg";
import project2 from "../assets/Our Projects/2.jpg";
import project3 from "../assets/Our Projects/3.jpg";
import project4 from "../assets/Our Projects/4.jpg";
import project5 from "../assets/Our Projects/5.jpg";
import project6 from "../assets/Our Projects/6.jpg";
import Footer from "../components/Footer";
import ClientVdo from "../components/ClientVdo"

const projects = [
  {
    title: "THE MASTER ACADEMY",
    // category: "Branding",
    image: project1,
  },
  {
    title: "MAA KALI VASTU JYOTISH",
    // category: "Branding",
    image: project4,
  },
  {
    title: "SAI REALTOR",
    // category: "UI/UX",
    image: project2,
  },
  {
    title: "GIFTCOIN",
    // category: "Website",
    image: project3,
  },
  {
    title: "FEVERISH FASHION",
    // category: "Website",
    image: project5,
  },
  {
    title: "ULWE’S KITCHEN",
    // category: "Website",
    image: project6,
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
              Showcasing our recent projects and collaborations focused on growth, creativity, and impactful digital experiences across industries.
            </p>
          </div>

          {/* BOTTOM */}
          <div className="flex items-end justify-between">
            {/* LEFT HEADING */}
            <h1
              className="text-[9vw] uppercase leading-[0.82] tracking-[-0.08em] text-white"
              style={{ fontFamily: "Anton" }}
            >
              Impactful   
              <br />
              Collaborations
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
              <div
  className="
    h-[260px]
    w-full
    overflow-hidden
    bg-black

    sm:h-[340px]

    md:h-[520px]
  "
>
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-center">
                {item.title}
              </h2>

              <p className="mt-3 text-2xl text-gray-400">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ClientVdo/>
      <Footer/>
    </main>
  );
};



export default ProjectsHero;