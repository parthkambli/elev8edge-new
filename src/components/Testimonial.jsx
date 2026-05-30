import React from "react";
import LazyImage from "./ui/LazyImage";        

function Testimonial() {
  return (
    <section className="bg-black px-4 py-14 text-white md:px-10 md:py-24">

      {/* TITLE */}
      <div className="mb-10 flex items-center gap-3 md:mb-12">
        <p className="text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.07em] md:text-[9vw]">
          OUR FOUNDERS
        </p>
      </div>

      {/* ================= FIRST CARD (Left Side) ================= */}
      <div className="relative mb-10 overflow-hidden rounded-[20px] md:mb-14">

        {/* IMAGE */}
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/founderPravin.jpg" />
          <LazyImage
            src="/images/person1.jpg"
            alt="Pravin Zinjurde"
            className="
  h-[320px]
  w-full
  object-cover
  object-center

  sm:h-[420px]

  md:h-[620px]
"
          />
        </picture>

        {/* MOBILE CONTENT */}
        <div className="bg-black px-5 py-7 md:hidden">
          <div className="mb-6 text-center">
            <h4 className="text-[30px] font-bold leading-none">Pravin Zinjurde</h4>
            <p className="mt-3 text-[12px] uppercase tracking-[0.24em] text-white/50">
              DIRECTOR & CO FOUNDER
            </p>
          </div>

          <p className="text-[14px] leading-[1.8] text-white/92 text-justify">
            With 8+ years of experience in the digital space, Pravin has helped brands grow through strategic digital marketing and strong project management. He has successfully managed multiple clients and contributed to scaling brands to ₹1Cr+ monthly revenue through result-driven execution and team leadership.
            <br /><br />
            Pravin founded Elev8Edge with a vision to help brands build a powerful digital presence and achieve scalable growth through performance-driven marketing.
          </p>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-black md:via-black/88 md:to-transparent" />

        {/* DESKTOP CONTENT - LEFT */}
        <div className="absolute inset-0 z-10 hidden md:flex md:flex-col md:justify-end md:w-[62%] md:p-14 p-5 md:justify-between">
          <div className="hidden md:block">
            <h4 className="text-[42px] font-bold">Pravin Zinjurde</h4>
            <p className="mb-4 text-[20px] uppercase tracking-[0.12em] text-white/45">
              DIRECTOR & CO FOUNDER
            </p>
          </div>

          <div>
            <p className="max-w-[900px] text-[15px] leading-[1.55] tracking-[-0.01em] md:text-[22px]">
              With 8+ years of experience in the digital space, Pravin has helped brands grow through strategic digital marketing and strong project management. He has successfully managed multiple clients and contributed to scaling brands to ₹1Cr+ monthly revenue through result-driven execution and team leadership.
              <br /><br />
              Pravin founded Elev8Edge with a vision to help brands build a powerful digital presence and achieve scalable growth through performance-driven marketing.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECOND CARD (Right Side) ================= */}
      <div className="relative overflow-hidden rounded-[20px]">

        {/* IMAGE */}
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/foundersomanshu.jpg" />
          <LazyImage
            src="/images/person2.png"
            alt="Somanshu Verma"
            className="
  h-[320px]
  w-full
  object-cover
  object-center

  sm:h-[420px]

  md:h-[620px]
"
          />
        </picture>

        {/* MOBILE CONTENT */}
        <div className="bg-black px-5 py-7 text-center md:hidden">
          <div className="mb-6">
            <h4 className="text-[30px] font-bold leading-none">Somanshu Verma</h4>
            <p className="mt-3 text-[12px] uppercase tracking-[0.24em] text-white/50">
              DIRECTOR & CO FOUNDER
            </p>
          </div>

          <p className="text-[14px] leading-[1.8] text-white/92 text-justify">
            With 7+ years of experience in international sales and marketing, Somanshu has helped brands grow across global markets including Africa, Oman, Dubai, and India. His expertise lies in client relations, strategic growth, and delivering result-driven business expansion.
            <br /><br />
            Somanshu co-founded Elev8Edge with a vision to help brands scale globally through performance-focused marketing.
          </p>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 hidden md:block md:bg-gradient-to-l md:from-black md:via-black/88 md:to-transparent" />

        {/* DESKTOP CONTENT - RIGHT (Fixed) */}
        <div className="absolute inset-0 z-10 hidden md:flex md:flex-col md:justify-end md:w-[62%] md:p-14 md:right-0 md:text-right p-5 md:justify-between md:left-auto">
          <div className="hidden md:block">
            <h4 className="text-[42px] font-bold">Somanshu Verma</h4>
            <p className="mb-4 text-[20px] uppercase tracking-[0.12em] text-white/45">
              DIRECTOR & CO FOUNDER
            </p>
          </div>

          <div>
            <p className="md:ml-auto max-w-[900px] text-[15px] leading-[1.55] tracking-[-0.01em] md:text-[22px]">
              With 7+ years of experience in international sales and marketing, Somanshu has helped brands grow across global markets including Africa, Oman, Dubai, and India. His expertise lies in client relations, strategic growth, and delivering result-driven business expansion.
              <br /><br />
              Somanshu co-founded Elev8Edge with a vision to help brands scale globally through performance-focused marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
















// import React from "react";
// import LazyImage from "./ui/LazyImage";        

// function Testimonial() {
//   return (
//     <section className="bg-black px-4 py-14 text-white md:px-10 md:py-24">

//       {/* TITLE */}
//       <div className="mb-10 flex items-center gap-3 md:mb-12">
//         <p className="text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.07em] md:text-[9vw]">
//           OUR FOUNDERSs
//         </p>
//       </div>

//       {/* ================= FIRST CARD ================= */}
//       <div className="relative mb-10 overflow-hidden rounded-[20px] md:mb-14">

//         {/* IMAGE */}
//         <picture>
//           {/* MOBILE IMAGE */}
//           <source
//             media="(max-width: 767px)"
//             srcSet="/images/team1.jpg"
//           />

//           {/* DESKTOP IMAGE */}
//           <LazyImage
//             src="/images/person1.jpg"
//             alt=""
//             className="
//               h-[520px]      /* Reduced from 760px */
//               w-full
//               object-cover
//               object-center

//               md:h-[620px]
//             "
//           />
//         </picture>

//         {/* MOBILE CONTENT */}
//         <div className="bg-black px-5 py-7 md:hidden">
//           <div className="mb-6 text-center">
//             <h4 className="text-[30px] font-bold leading-none">
//               Pravin Zinjurde
//             </h4>
//             <p className="mt-3 text-[12px] uppercase tracking-[0.24em] text-white/50">
//               Founder & Director
//             </p>
//           </div>

//           <p className="text-[14px] leading-[1.8] text-white/92 text-justify">
//               With 8+ years of experience in the digital space, Pravin has helped brands grow through strategic digital marketing and strong project management. He has successfully managed multiple clients and contributed to scaling brands to ₹1Cr+ monthly revenue through result-driven execution and team leadership.
//               <br /><br />
//               Pravin founded Elev8Edge with a vision to help brands build a powerful digital presence and achieve scalable growth through performance-driven marketing.
//             </p>
//         </div>

//         {/* OVERLAY */}
//         <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-black md:via-black/88 md:to-transparent" />

//         {/* CONTENT */}
//         <div className="absolute inset-0 z-10 hidden md:flex md:flex-col md:justify-end md:w-[62%] md:p-14 md:pr-0 p-5  md:justify-between">
//           {/* DESKTOP NAME */}
//           <div className="hidden md:block">
//             <h4 className="text-[42px] font-bold">
//               Pravin Zinjurde
//             </h4>
//             <p className="mb-4 text-[20px] uppercase tracking-[0.12em] text-white/45">
//               Founder & Director
//             </p>
//           </div>

//           {/* DESCRIPTION */}
//           <div>
//             <p className="max-w-[900px] text-[12px] leading-[1.2] tracking-[-0.01em] sm:text-[15px] md:text-[22px] md:leading-[1.55]">
//               With 8+ years of experience in the digital space, Pravin has helped brands grow through strategic digital marketing and strong project management. He has successfully managed multiple clients and contributed to scaling brands to ₹1Cr+ monthly revenue through result-driven execution and team leadership.
//               <br /><br />
//               Pravin founded Elev8Edge with a vision to help brands build a powerful digital presence and achieve scalable growth through performance-driven marketing.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ================= SECOND CARD ================= */}
//       <div className="relative overflow-hidden rounded-[20px]">

//         {/* IMAGE */}
//         <picture>

//           {/* MOBILE IMAGE */}
//           <source
//             media="(max-width: 767px)"
//             srcSet="/images/team2.jpg"
//           />

//           {/* DESKTOP IMAGE */}
//           <LazyImage
//             src="/images/person2.jpg"
//             alt=""
//             className="
//               h-[760px]
//               w-full
//               object-cover
//               object-center

//               md:h-[620px]
//             "
//           />

//         </picture>
//         {/* MOBILE CONTENT */}
// <div className="bg-black px-5 py-7 text-center md:hidden">

//   <div className="mb-6">

//     <h4 className="text-[30px] font-bold leading-none">
//       Somanshu Verma
//     </h4>

//     <p className="mt-3 text-[12px] uppercase tracking-[0.24em] text-white/50">
//       Founder & Director
//     </p>

//   </div>

//   <p className="text-[14px] leading-[1.8] text-white/92">
//     With 7+ years of experience in international sales and marketing, Somanshu has helped brands grow across global markets including Africa, Oman, Dubai, and India. His expertise lies in client relations, strategic growth, and delivering result-driven business expansion.
//     <br />
//     <br />
//     Somanshu founded Elev8Edge with a vision to help brands scale globally through performance-focused marketing.
//   </p>

// </div>

//         {/* OVERLAY */}
//         <div
//   className="
//     absolute
//     inset-0
//     hidden

//     md:block
//     md:bg-gradient-to-l
//     md:from-black
//     md:via-black/88
//     md:to-transparent
//   "
// />

//         {/* CONTENT */}
//         <div
//           className="absolute inset-0 z-10 hidden md:flex md:flex-col md:justify-end md:w-[62%] md:p-14

//             flex
//             flex-col
//             justify-end

//             p-5

//             md:left-auto
//             md:right-0
//             md:w-[62%]
//             md:justify-between
//             md:p-14
//             md:text-right
//           "
//         >

//           {/* MOBILE NAME */}
//           <div className="mb-8 flex flex-col items-center text-center md:hidden">

//             <h4 className="text-[32px] font-bold leading-none">
//               Somanshu Verma
//             </h4>

//             <p className="mt-3 text-[12px] uppercase tracking-[0.25em] text-white/55">
//               Founder & Director
//             </p>

//           </div>

//           {/* DESKTOP NAME */}
//           <div className="hidden md:block">

//             <h4 className="text-[42px] font-bold">
//               Somanshu Verma
//             </h4>

//             <p className="mb-4 text-[20px] uppercase tracking-[0.12em] text-white/45">
//               Founder & Director
//             </p>

//           </div>

//           {/* DESCRIPTION */}
//           <div>

//             <p
//               className="
//                 md:ml-auto
//                 max-w-[900px]

//                 text-[14px]
//                 leading-[1.75]
//                 tracking-[-0.01em]

//                 sm:text-[15px]

//                 md:text-[22px]
//                 md:leading-[1.55]
//               "
//             >

//           With 7+ years of experience in international sales and marketing, Somanshu has helped brands grow across global markets including Africa, Oman, Dubai, and India. His expertise lies in client relations, strategic growth, and delivering result-driven business expansion.
//           <br />
//           <br />
//           Somanshu founded Elev8Edge with a vision to help brands scale globally through performance-focused marketing.
//         </p>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Testimonial;