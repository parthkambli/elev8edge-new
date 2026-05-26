
















import React, { useState, useRef, useEffect } from "react";


import serviceVideo from "../../public/videos/service.mp4";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyImage from "../components/ui/LazyImage";

import service1 from "../assets/Our Services/Content Creation.jpg";
import service2 from "../assets/Our Services/Social Media.jpg";
import service3 from "../assets/Our Services/Website Development.jpg";
import service4 from "../assets/Our Services/Brand Building.jpg";
import service5 from "../assets/Our Services/Performance Marketing.jpg";
import Footer from "../components/Footer";
import AboutTestimonial from "../components/AboutTestimonial";

import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Content Creation",
    image: service1,
    tags: [
      "Creative Designing",
      "Content Strategy",
      "Brand Storytelling ",
      "Ad Creatives Product Shoots",
    ],
    desc: `We create & shoot engaging, platform-driven content that captures attention and builds brand presence.

           From reels and creatives to strategic storytelling, our content is designed to increase engagement, visibility, and conversions.
`,
  },
  {
    title: "Social Media Growth",
    image: service2,
    tags: [
      "Organic Growth",
      "Audience Engagement",
      "Content Planning",
      "Community Building",
      "Trend-Based Content",
      "Performance Analytics",
      "Brand Awareness",
    ],
    desc: `We help brands grow their online presence through strategic content, audience engagement, and performance-driven campaigns.
           
    From increasing reach to generating quality leads, we build social media strategies designed for consistent growth and real impact.
`,
  },
  {
    title: "Website Development ",
    image: service3,
    tags: ["Custom Website Development", "Landing Pages", "UI/UX Design", "Conversion-Focused Layouts", "Maintenance & Support"],
    desc: `We build high-performing, user-friendly websites designed to elevate brand presence and drive conversions.
          
    From landing pages to full-scale business websites, we create fast, responsive, and growth-focused digital experiences.
`,
  },
  {
    title: "Brand Building",
    image: service4,
    tags: [
      "Brand Strategy",
      "Brand Positioning",
      "Creative Direction",
      "Content Identity",
      "Market Research",
      "Brand Consistency",
    ],
    desc: `We help brands create a strong digital identity that stands out, connects with the right audience, and builds long-term trust.
           
    From positioning and messaging to creative direction, we craft brands designed for recognition, impact, and growth.
`,
  },
  {
    title: "Performance Marketing ",
    image: service5,
    tags: [
      "Meta Ads Google Ads",
      "Retention Marketing",
      "Lead Generation Campaigns",
      "Audience Targeting",
      "ROI-Focused Scaling",
    ],
    desc: `We create data-driven marketing campaigns focused on generating leads, increasing conversions, and maximizing ROI.
           
    From Meta and Google Ads to funnel optimization, we help brands scale through performance-focused strategies.
`,
  },
];

const Services = () => {
  const [activeImage, setActiveImage] = useState(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const sliderRef = useRef(null);
  const workflowRef = useRef(null);

useEffect(() => {
  const slider = sliderRef.current;
  const workflow = workflowRef.current;

  if (!slider || !workflow) return;

  const ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        const totalMove = slider.scrollWidth - window.innerWidth + 40;

        gsap.to(slider, {
          x: -totalMove,
          ease: "none",
          scrollTrigger: {
            trigger: workflow,
            start: "top top",
            end: () => `+=${totalMove}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      },

      "(max-width: 767px)": function () {
        gsap.set(slider, {
          x: 0,
          clearProps: "transform",
        });
      },
    });
  }, workflow);

  return () => ctx.revert();
}, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover object-bottom"
          src={serviceVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60" />

        {/* CONTENT */}
<div className="relative z-10 min-h-screen px-6 py-8 md:px-12">

  {/* ================= MOBILE ================= */}
  <div className="flex min-h-screen flex-col md:hidden">

    {/* TOP HEADING */}
    <div className="pt-44">

      <h1
        className="
          text-[11vw]
          font-black
          uppercase
          leading-[0.82]
          tracking-[-0.07em]
        "
      >
        SERVICE &
        <br />
        CAPABILITIES
      </h1>

    </div>

    {/* BOTTOM TEXT */}
    <div className="mt-auto pb-50">

      <p
        className="
          ml-auto
          max-w-[300px]
          text-right
          text-[15px]
          font-medium
          leading-[1.45]
          text-white/90
        "
      >
        From strategy to execution — we create websites, content,
        and marketing systems designed to attract attention,
        generate leads, and scale brands.
      </p>

    </div>

  </div>

  {/* ================= DESKTOP ================= */}
  <div className="hidden md:block">

    {/* RIGHT PARA */}
    <div className="absolute right-12 top-[38%]">

      <p
        className="
          max-w-[430px]
          text-right
          text-[20px]
          font-medium
          leading-[1.5]
          text-white/90
        "
      >
        From strategy to execution — we create websites, content,
        and marketing systems designed to attract attention,
        generate leads, and scale brands.
      </p>

    </div>

    {/* BOTTOM LEFT HEADING */}
    <h1
      className="
        absolute
        bottom-10
        left-12

        max-w-[1000px]

        text-[7.2vw]
        font-black
        uppercase
        leading-[0.82]
        tracking-[-0.07em]
      "
    >
      SERVICE &
      <br />
      CAPABILITIES
    </h1>

    {/* SCROLL */}
    <p
      className="
        absolute
        bottom-12
        right-12
        text-[18px]
        text-white/70
      "
    >
      (Scroll down)
    </p>

  </div>

</div>
      </section>

      <section className="relative bg-black px-5 py-16 md:px-10 md:py-20">
  <div className="mb-10 flex items-center gap-3 text-base md:text-xl">
    <span className="h-4 w-4 rounded-full border-4 border-gray-500 bg-[#d9fbff] md:h-5 md:w-5" />
    <span>SERVICE</span>
  </div>

  {services.map((item, index) => (
    <div
      key={index}
      onMouseEnter={() => setActiveImage(item.image)}
      onMouseLeave={() => setActiveImage(null)}
      onMouseMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
      className="relative mb-6 flex cursor-pointer flex-col overflow-hidden rounded-[10px] bg-white px-4 py-6 text-black md:mb-8 md:min-h-[270px] md:flex-row md:items-center md:justify-between md:overflow-visible md:rounded-xl md:px-10 md:py-10"
    >
      <div>
        <h2 className="text-[11vw] font-black leading-none tracking-[-0.06em] md:text-[5vw]">
          {item.title}
        </h2>

        <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:max-w-[450px]">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black px-4 py-1 text-sm md:px-5 md:text-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-7 whitespace-pre-line text-left text-[16px] font-normal leading-[1.55] md:mt-0 md:max-w-[420px] md:text-2xl md:leading-[1.45]">
  {item.desc}
</p>

      <LazyImage
        src={item.image}
        alt={item.title}
        className="mt-8 h-[210px] w-full rounded-[6px] object-cover md:hidden"
      />
    </div>
  ))}

  {activeImage && (
    <LazyImage
      src={activeImage}
      alt=""
      className="pointer-events-none fixed z-[999] hidden h-[330px] w-[330px] object-cover md:block"
      style={{
        left: position.x - 165,
        top: position.y - 165,
      }}
    />
  )}
</section>



<section ref={workflowRef} className="overflow-hidden bg-black py-16 md:py-0">
  <div className="mb-10 px-5 md:px-10">
    <div className="mb-5 flex items-center gap-3">
      <span className="h-4 w-4 rounded-full border-4 border-gray-500 bg-[#d9fbff]" />
      <p className="text-base font-medium text-white md:text-xl">
        OUR WORKFLOW
      </p>
    </div>

    <h1 className="text-[13vw] font-black uppercase leading-none text-white md:text-[8vw]">
      WHAT <span className="text-[#d9fbff]">NEXT</span>
    </h1>
  </div>

        <div
          ref={sliderRef}
          className="flex flex-col gap-6 px-5 md:w-max md:flex-row md:items-start md:gap-16 md:pl-10 md:pr-[45vw]"
        >
          {/* CARD 1 - Original (Reference) */}
          <div className="min-h-[420px] rounded-[28px] bg-[#efefef] p-6 text-black md:h-[470px] md:w-[950px] md:shrink-0 md:rounded-[32px] md:p-8">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-black px-5 py-3 text-base font-bold text-white md:px-7 md:text-3xl">
                STEP
              </span>
              <span className="grid h-[48px] w-[48px] place-items-center rounded-full bg-black text-base font-bold text-white md:h-[60px] md:w-[60px] md:text-3xl">
                01
              </span>
            </div>

            <div className="mt-8 flex h-[300px] flex-col justify-between md:mt-10 md:h-auto md:flex-row md:items-start">
              <img
                src={icon1}
                alt="Step 1"
                className="w-[95px] self-end object-contain md:hidden"
              />

              <div>
                <h2 className="text-2xl font-black md:text-6xl">
                  STRATEGY CALL WITH US
                </h2>
                <p className="mt-6 max-w-[300px] text-base text-black/80 md:mt-4 md:max-w-[500px] md:text-xl">
                  Let’s build the next stage of your brand’s growth — together.
                </p>
              </div>

              <img
                src={icon1}
                alt="Step 1"
                className="hidden w-[220px] object-contain md:mt-6 md:block"
              />
            </div>
          </div>

          {/* CARD 2 - Now Consistent with Card 1 */}
          <div className="min-h-[420px] rounded-[28px] bg-[#efefef] p-6 text-black md:h-[470px] md:w-[950px] md:shrink-0 md:rounded-[32px] md:p-8">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-black px-5 py-3 text-base font-bold text-white md:px-7 md:text-3xl">
                STEP
              </span>
              <span className="grid h-[48px] w-[48px] place-items-center rounded-full bg-black text-base font-bold text-white md:h-[60px] md:w-[60px] md:text-3xl">
                02
              </span>
            </div>

            <div className=" flex h-[300px] flex-col justify-between md:mt-10 md:h-auto md:flex-row md:items-center">
              <img
                src={icon2}
                alt="Step 2"
                className="w-[95px] self-end object-contain md:hidden"
              />

              <div>
                <h2 className="text-2xl font-black md:text-6xl">
                  PERSONALISED GROWTH PLAN
                </h2>
                <p className="mt-6 max-w-[300px] text-base text-black/80 md:mt-4 md:max-w-[500px] md:text-xl">
                  We create data-driven strategies that align with your goals, engage your audience, and drive measurable results.
                </p>
              </div>

              <img
                src={icon2}
                alt="Step 2"
                className="hidden w-[220px] object-contain md:mt-6 md:block"
              />
            </div>
          </div>

          {/* CARD 3 - Now Consistent with Card 1 */}
          <div className="min-h-[420px] rounded-[28px] bg-[#efefef] p-6 text-black md:h-[470px] md:w-[950px] md:shrink-0 md:rounded-[32px] md:p-8">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-black px-5 py-3 text-base font-bold text-white md:px-7 md:text-3xl">
                STEP
              </span>
              <span className="grid h-[48px] w-[48px] place-items-center rounded-full bg-black text-base font-bold text-white md:h-[60px] md:w-[60px] md:text-3xl">
                03
              </span>
            </div>

            <div className="mt-8 flex h-[300px] flex-col justify-between md:mt-10 md:h-auto md:flex-row md:items-start">
              <img
                src={icon3}
                alt="Step 3"
                className="w-[95px] self-end object-contain md:hidden"
              />

              <div>
                <h2 className="text-2xl font-black md:text-6xl">
                  Design & Execution
                </h2>
                <p className="mt-6 max-w-[300px] text-base text-black/80 md:mt-4 md:max-w-[500px] md:text-xl">
                  We turn ideas into scalable digital experiences through clean design and seamless development.
                </p>
              </div>

              <img
                src={icon3}
                alt="Step 3"
                className="hidden w-[220px] object-contain md:mt-6 md:block"
              />
            </div>
          </div>

          {/* CARD 4 - Now Consistent with Card 1 */}
          <div className="min-h-[420px] rounded-[28px] bg-[#efefef] p-6 text-black md:h-[470px] md:w-[950px] md:shrink-0 md:rounded-[32px] md:p-8">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-black px-5 py-3 text-base font-bold text-white md:px-7 md:text-3xl">
                STEP
              </span>
              <span className="grid h-[48px] w-[48px] place-items-center rounded-full bg-black text-base font-bold text-white md:h-[60px] md:w-[60px] md:text-3xl">
                04
              </span>
            </div>

            <div className="mt-8 flex h-[300px] flex-col justify-between md:mt-10 md:h-auto md:flex-row md:items-start">
              <img
                src={icon4}
                alt="Step 4"
                className="w-[95px] self-end object-contain md:hidden"
              />

              <div>
                <h2 className="text-2xl font-black md:text-6xl">
                  Launch & Scale
                </h2>
                <p className="mt-6 max-w-[300px] text-base text-black/80 md:mt-4 md:max-w-[500px] md:text-xl">
                  From deployment to ongoing optimization, we help your brand grow, perform, and stay ahead digitally.
                </p>
              </div>

              <img
                src={icon4}
                alt="Step 4"
                className="hidden w-[220px] object-contain md:mt-6 md:block"
              />
            </div>
          </div>
        </div>
</section>




{/* <AboutTestimonial/> */}
<Footer/>
     
    </main>
  );
};

export default Services;