import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import service1 from "../assets/images/service-1.png";
import work1  from "../assets/work/1.jpg";
import work2  from "../assets/work/2.jpg";
import work3  from "../assets/work/3.jpg";
import work4  from "../assets/work/4.jpg";
import work5  from "../assets/work/5.jpg";
import work6  from "../assets/work/6.jpg";
import work7  from "../assets/work/7.jpg";
import work8  from "../assets/work/8.jpg";
import work9  from "../assets/work/9.jpg";
import work10 from "../assets/work/10.jpg";
import work11 from "../assets/work/11.jpg";
import work12 from "../assets/work/12.jpg";

gsap.registerPlugin(ScrollTrigger);

function Work() {
  const workSectionRef = useRef(null);
  const workImagesRef = useRef(null);
  const [workWord, setWorkWord] = useState("content");

  useEffect(() => {
    gsap.to(workImagesRef.current, {
      y: "-690vh",
      ease: "none",
      scrollTrigger: {
        trigger: workSectionRef.current,
        start: "top top",
        end: "+=8600",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          if (self.progress < 0.33) {
            setWorkWord("CONTENT");
          } else if (self.progress < 0.66) {
            setWorkWord("WEBSITE");
          } else {
            setWorkWord("PERFORMANCE");
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

        <h2 className="text-[13vw] font-black uppercase leading-[0.85] tracking-[-0.07em] text-white md:text-[6.8vw]">
          <span className="text-white">DELIVERING</span>{" "}

          <span
            key={workWord}
            className="inline-block min-w-[45vw] text-left text-[#d9fbff] animate-word"
          >
            {workWord}
          </span>

          <br />
          WITH PASSIONATE IDEAS & 
          <br />
          HIGH PERFORMANCE.
        </h2>
      </div>

      <div
        ref={workImagesRef}
        className="pointer-events-none absolute left-0 top-[100vh] z-[100] h-[760vh] w-full"
      >
       <img
          src={work1}
          alt=""
          className="absolute left-[2%] top-[0vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work2}
          alt=""
          className="absolute right-[4%] top-[55vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work3}
          alt=""
          className="absolute left-[15%] top-[110vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work4}
          alt=""
          className="absolute right-[12%] top-[165vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work5}
          alt=""
          className="absolute left-[6%] top-[220vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work6}
          alt=""
          className="absolute right-[18%] top-[275vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work7}
          alt=""
          className="absolute left-[20%] top-[330vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work8}
          alt=""
          className="absolute right-[8%] top-[385vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work9}
          alt=""
          className="absolute left-[10%] top-[440vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work10}
          alt=""
          className="absolute right-[5%] top-[495vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work11}
          alt=""
          className="absolute left-[18%] top-[550vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />

        <img
          src={work12}
          alt=""
          className="absolute right-[15%] top-[605vh] w-[180px] border-[6px] border-white object-cover md:w-[270px]"
        />
      </div>
    </section>
  );
}

export default Work;