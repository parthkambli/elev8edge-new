import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navbar";
import AboutTestimonial from "../components/AboutTestimonial";
import Footer from "../components/Footer";

function Contact() {
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {

    // CONTACT TITLE REVEAL
    gsap.to(titleRef.current, {
      y: "0%",
      duration: 1.45,
      delay: 0.1,
      ease: "power4.out",
    });

    // LEFT INFO
    gsap.from(leftRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      delay: 0.35,
      ease: "power3.out",
    });

    // FORM
    gsap.from(formRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.45,
      ease: "power3.out",
    });

  });

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">

        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/contact.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CONTENT */}
       <div className="relative z-10 grid min-h-screen grid-cols-1 px-8 pb-14 pt-36 md:grid-cols-[0.78fr_1.22fr] md:px-10">
   {/* LEFT SIDE */}
<div className="flex flex-col">

  {/* TITLE */}
  <div className="overflow-hidden">

    <h1
      ref={titleRef}
      className="translate-y-[100%] text-[16vw] font-black uppercase leading-[0.82] tracking-[-0.09em] will-change-transform md:text-[120px]"
    >
      CONTACT
    </h1>

  </div>

  {/* CONTACT INFO */}
  <div
    ref={leftRef}
    className="mt-10 space-y-10"
  >

    {/* PHONE */}
    <div>

      <p className="text-[20px] font-semibold text-white/45">
        Call Today :
      </p>

      <p className="mt-2 text-[22px] font-semibold tracking-[-0.02em]">
        +62 523 735 1221
      </p>

    </div>

    {/* EMAIL */}
    <div>

      <p className="text-[20px] font-semibold text-white/45">
        Email :
      </p>

      <p className="mt-2 text-[22px] font-semibold tracking-[-0.02em]">
        hello.nomore@gmail.com
      </p>

    </div>

    {/* ADMIN */}
    <div>

      <p className="text-[20px] font-semibold text-white/45">
        Admin :
      </p>

      <p className="mt-2 text-[22px] font-semibold tracking-[-0.02em]">
        support-nomore@gmail.com
      </p>

    </div>

  </div>

</div>

          {/* RIGHT SIDE */}
          <div
            ref={formRef}
            className="flex justify-end pt-8 md:pt-10"
          >

            <form className="w-full max-w-[580px] space-y-10">

              {/* NAME */}
              <div>

                <label className="text-[20px] font-semibold tracking-[-0.02em]">
                  Name<span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  className="mt-8 w-full border-b border-white/25 bg-transparent pb-5 text-[18px] outline-none placeholder:text-white/30"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-[20px] font-semibold tracking-[-0.02em]">
                  E-mail<span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  className="mt-8 w-full border-b border-white/25 bg-transparent pb-5 text-[18px] outline-none placeholder:text-white/30"
                />

              </div>

              {/* PROJECT */}
              <div>

                <label className="text-[20px] font-semibold tracking-[-0.02em]">
                  Tell us about your project
                </label>

                <textarea
                  rows="6"
                  className="mt-8 w-full resize-none border-b border-white/25 bg-transparent text-[18px] outline-none"
                />

              </div>

              {/* SERVICE */}
              <div>

                <label className="text-[20px] font-semibold tracking-[-0.02em]">
                  Service:
                </label>

                <select className="mt-8 w-full border-b border-white/25 bg-transparent pb-5 text-[18px] text-white outline-none">

                  <option className="bg-black">
                    Select one...
                  </option>

                  <option className="bg-black">
                    Branding
                  </option>

                  <option className="bg-black">
                    UI/UX Design
                  </option>

                  <option className="bg-black">
                    Development
                  </option>

                </select>

              </div>

              {/* BUDGET */}
              <div>

                <label className="text-[20px] font-semibold tracking-[-0.02em]">
                  Budget
                </label>

                <select className="mt-8 w-full border-b border-white/25 bg-transparent pb-5 text-[18px] text-white outline-none">

                  <option className="bg-black">
                    Select one...
                  </option>

                  <option className="bg-black">
                    $1k - $5k
                  </option>

                  <option className="bg-black">
                    $5k - $10k
                  </option>

                  <option className="bg-black">
                    $10k+
                  </option>

                </select>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-8 h-[50px] w-full rounded-full bg-white text-[15px] font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:scale-[1.01]"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}
     <div className="relative z-20 -mt-24">
  <AboutTestimonial />
</div>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Contact;