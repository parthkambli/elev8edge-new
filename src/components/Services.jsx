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
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white md:px-8 md:py-24">

      {/* TOP HEADING */}
      <div className="mb-14 md:mb-20">

        {/* SMALL LABEL */}
        <div className="mb-5 flex items-center gap-3 md:mb-6 md:gap-4">

          <div className="h-3 w-3 rounded-full bg-[#d9fbff]" />

          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 md:text-sm">
            SERVICE
          </p>

        </div>

        {/* HUGE TITLE */}
        <h2 className="
          max-w-[1200px]
          text-[15vw]
          font-[900]
          uppercase
          leading-[0.86]
          tracking-[-0.09em]

          md:text-[7.3vw]
        ">

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
              top-[70px]
              mb-4
              overflow-hidden
              rounded-[24px]
              border
              border-black/5
              bg-[#ececec]
              px-4
              py-5
              text-black
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]

              md:top-[90px]
              md:grid
              md:min-h-[100px]
              md:grid-cols-[1.2fr_280px_0.9fr]
              md:items-center
              md:gap-10
              md:rounded-[34px]
              md:px-8
              md:py-3
            "
            style={{
              zIndex: services.length - index,
            }}
          >

            {/* MOBILE LAYOUT */}
            <div className="md:hidden">

              {/* NUMBER + TITLE */}
              <div className="mb-5 flex items-start gap-4">

                <span className="pt-1 text-[22px] font-black text-[#ff5c39]">
                  {service.number}
                </span>

                <h3 className="text-[12vw] font-[900] leading-[0.9] tracking-[-0.07em]">
                  {service.title}
                </h3>

              </div>

              {/* IMAGE */}
              <div className="mb-5 overflow-hidden rounded-[18px]">

                <LazyImage
                  src={service.image}
                  alt={service.title}
                  className="
                    aspect-[1.15/1]
                    w-full
                    object-cover
                    object-center
                  "
                />

              </div>

              {/* DESC */}
              <p className="text-[15px] leading-[1.45] tracking-[-0.02em] text-black/85">
                {service.desc}
              </p>

            </div>

            {/* DESKTOP LAYOUT */}
            <>

              {/* LEFT */}
              <div className="hidden md:flex md:items-start md:gap-8">

                <span className="pt-2 text-[38px] font-black text-[#ff5c39]">
                  {service.number}
                </span>

                <h3 className="text-[3.6vw] font-[900] leading-[0.88] tracking-[-0.07em]">
                  {service.title}
                </h3>

              </div>

              {/* IMAGE */}
              <div className="hidden md:flex md:justify-center">

                <div className="overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-[230px]
                      w-[250px]
                      object-cover
                      object-center
                    "
                  />

                </div>

              </div>

              {/* RIGHT TEXT */}
              <div className="hidden md:block md:max-w-[330px]">

                <p className="text-[18px] leading-[1.35] tracking-[-0.02em] text-black/85">
                  {service.desc}
                </p>

              </div>

            </>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;