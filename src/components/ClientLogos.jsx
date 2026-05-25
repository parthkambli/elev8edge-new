// import logo from "../assets/logos/logo-4.svg";
// import logo1 from "../assets/logos/logo-1.svg";
// import logo2 from "../assets/logos/logo-2.svg";
// import logo3 from "../assets/logos/logo-3.svg";
// import logo5 from "../assets/logos/logo-5.svg";

// function ClientLogos() {
//   const logos = [logo, logo1, logo2, logo3, logo5];

//   return (
//     <section className="bg-black px-5 py-24 md:px-10">
//       <div className="grid gap-5 md:grid-cols-5">
//         {logos.map((item, index) => (
//           <div
//             key={index}
//             className="flex h-[220px] items-center justify-center rounded-md border border-white/20 bg-black transition-all duration-500 hover:border-white/50 hover:bg-white/[0.03]"
//           >
//             <img src={item} alt="" className="w-[180px] object-contain opacity-90" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ClientLogos;


import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyImage from "./ui/LazyImage";

import logo from "../assets/logos/sai.png";
import logo1 from "../assets/logos/gajikaa.png";
import logo2 from "../assets/logos/masterAca.png";
import logo3 from "../assets/logos/maaKali.png";
import logo5 from "../assets/logos/giftCoin.png";

gsap.registerPlugin(ScrollTrigger);

function ClientLogos() {
  const logos = [logo, logo1, logo2, logo3, logo5];

  useEffect(() => {
    gsap.fromTo(
      ".client-logo-card",
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".client-logo-section",
          start: "top 82%",
        },
      }
    );
    

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
   <section className="client-logo-section overflow-hidden bg-black px-4 pt-12 pb-2 md:px-10 md:py-24">

      {/* HEADING */}
      <div className="mb-10 md:mb-14">

        <div className="mb-4 flex items-center gap-3 md:mb-5">

          <span className="h-3 w-3 rounded-full bg-[#d9fbff] shadow-[0_0_0_5px_rgba(217,251,255,0.2)] md:h-4 md:w-4" />

          <p className="text-sm font-medium uppercase tracking-[0.14em] text-white md:text-2xl">
            Trusted By
          </p>

        </div>

        <h2 className="text-[14vw] font-black uppercase leading-[0.86] tracking-[-0.08em] text-white md:text-[6vw]">

          Brands We
          <br />

          <span className="text-[#d9fbff]">
            Worked With
          </span>

        </h2>

      </div>

      {/* MOBILE AUTO SCROLL / DESKTOP GRID */}
      <div className="relative overflow-hidden">

        <div
          className="
            client-marquee
            flex
            w-max
            gap-4

            md:grid
            md:w-full
            md:grid-cols-5
            md:gap-6
          "
        >

          {(window.innerWidth < 768
  ? [...logos, ...logos]
  : logos
).map((item, index) => (

            <div
              key={index}
              className="
                client-logo-card
                flex
                h-[110px]
                min-w-[220px]
                items-center
                justify-center
                rounded-[16px]
                border
                border-white/10
                bg-black
                p-[1px]
                transition-all
                duration-500
                hover:border-white/30

                md:h-[130px]
                md:min-w-0
                md:rounded-[18px]
              "
            >

              {/* INNER CARD */}
              <div
                className="
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  rounded-[15px]
                  bg-white
                  px-4

                  md:rounded-[17px]
                "
              >

                <LazyImage
                  src={item}
                  alt=""
                  className="
                    h-[62px]
                    w-auto
                    object-contain
                    opacity-95

                    sm:h-[72px]

                    md:h-[110px]
                  "
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ClientLogos;