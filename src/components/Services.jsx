import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { services } from "../data/services";

import LazyImage from "./ui/LazyImage";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-8">

      {/* TOP HEADING */}
      <div className="mb-20">

        {/* SMALL LABEL */}
        <div className="mb-6 flex items-center gap-4">

          <div className="h-3 w-3 rounded-full bg-[#d9fbff]" />

          <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/70">
            SERVICE
          </p>

        </div>

        {/* HUGE TITLE */}
        <h2 className="max-w-[1200px] text-[16vw] font-[900] uppercase leading-[0.82] tracking-[-0.09em] md:text-[7.3vw]">

          FULL-SERVICE
          <br />

          <span className="text-[#d9fbff]">
            CREATIVE DIGITAL
          </span>

          <br />

          MARKETING AGENCY

        </h2>

      </div>

      {/* SERVICE CARDS */}
      <div className="relative">

        {services.map((service, index) => (

          <div
            key={index}
            className="
  service-card
  sticky
  top-[90px]
  mb-4
  grid
  rounded-[34px]
  border
  border-black/5
  bg-[#ececec]
  px-6
  py-7
  text-black
  shadow-[0_20px_80px_rgba(0,0,0,0.45)]

  md:min-h-[100px]
  md:grid-cols-[1.2fr_280px_0.9fr]
  md:items-center
  md:gap-10
  md:px-8
  md:py-2
"
            style={{
              zIndex: services.length - index,
            }}
          >

            {/* LEFT */}
            <div className="flex items-start gap-5 md:gap-8">

              <span className="pt-2 text-[26px] font-black text-[#ff5c39] md:text-[38px]">
                {service.number}
              </span>

              <h3 className="text-[13vw] font-[900] leading-[0.88] tracking-[-0.07em] md:text-[3.6vw]">
                {service.title}
              </h3>

            </div>

            {/* IMAGE */}
            <div className="flex justify-center">

              <div
                className="
                  w-full
                  overflow-hidden

                  md:w-[250px]
                  md:min-w-[250px]
                "
              >

                <LazyImage
                  src={service.image}
                  alt={service.title}
                  className="
                    aspect-square
                    w-full
                    object-cover
                    object-center
                  "
                />

              </div>

            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-[330px]">

              <p className="text-[17px] leading-[1.35] tracking-[-0.02em] text-black/85 md:text-[18px]">
                {service.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;