import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import service1 from "../assets/images/service-1.png";
import service6 from "../assets/images/service-6.png";
import service7 from "../assets/images/service-7.png";
import service8 from "../assets/images/service-8.png";
import service9 from "../assets/images/service-9.png";

gsap.registerPlugin(ScrollTrigger);

function Work() {
  const workSectionRef = useRef(null);
  const workImagesRef = useRef(null);
  const [workWord, setWorkWord] = useState("BRANDS");

  useEffect(() => {
    gsap.to(workImagesRef.current, {
      y: "-280vh",
      ease: "none",
      scrollTrigger: {
        trigger: workSectionRef.current,
        start: "top top",
        end: "+=3200",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          if (self.progress < 0.33) {
            setWorkWord("BRANDS");
          } else if (self.progress < 0.66) {
            setWorkWord("WEBSITE");
          } else {
            setWorkWord("APPS");
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="work"
      ref={workSectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <img
        src={service1}
        alt=""
        className="absolute left-1/2 top-1/2 z-[10] h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-100"
      />

      <div className="relative z-[30] flex h-full flex-col items-center justify-center px-5 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_20px_#d9fbff]" />
          <p className="text-lg font-medium tracking-wide md:text-[22px]">
            OUR WORK
          </p>
        </div>

        <h2 className="text-[13vw] font-black uppercase leading-[0.85] tracking-[-0.07em] text-white md:text-[8.8vw]">
          <span className="text-white">BUILDING</span>{" "}

          <span
            key={workWord}
            className="inline-block min-w-[45vw] text-left text-[#d9fbff] animate-word"
          >
            {workWord}
          </span>

          <br />
          WITH 100 PASSION &
          <br />
          BOLD DESIGN.
        </h2>
      </div>

      <div
        ref={workImagesRef}
        className="pointer-events-none absolute left-0 top-[100vh] z-[100] h-[380vh] w-full"
      >
        <img
          src={service6}
          alt=""
          className="absolute left-[2%] top-[0vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={service7}
          alt=""
          className="absolute right-[4%] top-[75vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={service8}
          alt=""
          className="absolute right-[18%] top-[150vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={service9}
          alt=""
          className="absolute left-[8%] top-[230vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />
      </div>
    </section>
  );
}

export default Work;