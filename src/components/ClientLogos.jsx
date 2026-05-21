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

import logo from "../assets/logos/logo-4.svg";
import logo1 from "../assets/logos/logo-1.svg";
import logo2 from "../assets/logos/logo-2.svg";
import logo3 from "../assets/logos/logo-3.svg";
import logo5 from "../assets/logos/logo-5.svg";

gsap.registerPlugin(ScrollTrigger);

function ClientLogos() {
  const logos = [logo, logo1, logo2, logo3, logo5];

  useEffect(() => {
    gsap.fromTo(
      ".client-logo-card",
      {
        y: 80,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".client-logo-section",
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="client-logo-section bg-black px-5 py-24 md:px-10">
      <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible">
        {logos.map((item, index) => (
          <div
            key={index}
            className="client-logo-card flex h-[220px] min-w-[340px] items-center justify-center rounded-md border border-white/20 bg-black transition-all duration-500 hover:border-white/50 hover:bg-white/[0.03] md:min-w-0"
          >
            <img
              src={item}
              alt=""
              className="w-[180px] object-contain opacity-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientLogos;