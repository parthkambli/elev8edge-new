import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    video: "/videos/mastervdo.mp4",
    project: "THE MASTER ACADEMY",
    name: "MRS ASHWINI",
  },

  // {
  //   video: "/videos/client2.mp4",
  //   project: "MAA KALI VASTU JYOTISH",
  //   name: "MR AMULYA CHANDRA PANDYA",
  // },

  {
    video: "/videos/saivdo.mp4",
    project: "SAI REALTOR",
    name: "MR ATUL MISHRA",
  },

  {
    video: "/videos/feverishvdo.mp4",
    project: "FEVERISH FASHION",
    name: "MR AVINASH",
  },
];

function TrustedClients() {

  useEffect(() => {

    gsap.fromTo(
      ".trusted-card",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trusted-section",
          start: "top 82%",
        },
      }
    );

  }, []);

  return (
    <section className="trusted-section overflow-hidden bg-black px-5 py-24 text-white md:px-10">

      {/* TOP */}
      <div className="mb-16">

        <div className="mb-5 flex items-center gap-3">

          <span className="h-4 w-4 rounded-full bg-[#d9fbff] shadow-[0_0_0_6px_rgba(217,251,255,0.2)]" />

          <p className="text-lg font-medium uppercase md:text-2xl">
            TRUSTED BY CLIENTS
          </p>

        </div>

        <h2 className="text-[13vw] font-black uppercase leading-[0.84] tracking-[-0.08em] md:text-[6vw]">

          REAL PEOPLE.
          <br />

          <span className="text-[#d9fbff]">
            REAL RESULTS.
          </span>

        </h2>

      </div>

      {/* CARDS */}
      <div className="grid gap-8 md:grid-cols-2">

        {clients.map((item, index) => (

          <div
            key={index}
            className="trusted-card group"
          >

            {/* VIDEO */}
            <div className="overflow-hidden rounded-[24px] bg-[#111]">

              <video
  src={item.video}
  playsInline
  preload="metadata"
  className="
    h-[420px]
    w-full
    object-cover
    transition-transform
    duration-700
    group-hover:scale-[1.03]
  "
  onMouseEnter={(e) => {
    e.target.currentTime = 0;
    e.target.muted = false;
    e.target.play();
  }}
  onMouseLeave={(e) => {
    e.target.pause();
    e.target.currentTime = 0;
  }}
/>

            </div>

            {/* CONTENT */}
            <div className="mt-5 flex flex-col gap-2">

              <h3 className="text-[28px] font-black uppercase leading-[1] tracking-[-0.05em] md:text-[2vw]">
                {item.project}
              </h3>

              <p className="text-[15px] uppercase tracking-[0.18em] text-white/45 md:text-[16px]">
                {item.name}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TrustedClients;