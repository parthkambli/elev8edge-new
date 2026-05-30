import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navbar";
// import AboutTestimonial from "../components/AboutTestimonial";
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
        +91 7738788775
      </p>

    </div>

    {/* EMAIL */}
    <div>

      <p className="text-[20px] font-semibold text-white/45">
        Email :
      </p>

      <p className="mt-2 text-[22px] font-semibold tracking-[-0.02em] mb-15">
        info@elev8edge.com
      </p>

    </div>

    {/* ADMIN */}
    {/* <div>

      <p className="text-[20px] font-semibold text-white/45">
        Admin :
      </p>

      <p className="mt-2 text-[22px] font-semibold tracking-[-0.02em]">
        support-nomore@gmail.com
      </p>

    </div> */}

  </div>

</div>

          {/* RIGHT SIDE */}
          <div
            ref={formRef}
            className="flex justify-end pt-8 md:pt-10"
          >

            <form className="w-full max-w-[580px] space-y-7 md:space-y-10">

  {/* FULL NAME */}
  <div>

    <label className="text-[17px] font-semibold tracking-[-0.02em] md:text-[20px]">
      Full Name<span className="text-red-500">*</span>
    </label>

    <input
      type="text"
      required
      placeholder="Enter your full name"
      className="
        mt-5
        w-full
        border-b
        border-white/25
        bg-transparent
        pb-4
        text-[16px]
        outline-none
        placeholder:text-white/30

        md:mt-8
        md:pb-5
        md:text-[18px]
      "
    />

  </div>

  {/* COMPANY NAME */}
  <div>

    <label className="text-[17px] font-semibold tracking-[-0.02em] md:text-[20px]">
      Company Name<span className="text-red-500">*</span>
    </label>

    <input
      type="text"
      required
      placeholder="Enter company name"
      className="
        mt-5
        w-full
        border-b
        border-white/25
        bg-transparent
        pb-4
        text-[16px]
        outline-none
        placeholder:text-white/30

        md:mt-8
        md:pb-5
        md:text-[18px]
      "
    />

  </div>

  {/* EMAIL */}
  <div>

    <label className="text-[17px] font-semibold tracking-[-0.02em] md:text-[20px]">
      E-mail<span className="text-red-500">*</span>
    </label>

    <input
      type="email"
      required
      placeholder="Enter your email"
      className="
        mt-5
        w-full
        border-b
        border-white/25
        bg-transparent
        pb-4
        text-[16px]
        outline-none
        placeholder:text-white/30

        md:mt-8
        md:pb-5
        md:text-[18px]
      "
    />

  </div>

  {/* PHONE NUMBER */}
  <div>

    <label className="text-[17px] font-semibold tracking-[-0.02em] md:text-[20px]">
      Phone Number<span className="text-red-500">*</span>
    </label>

    <input
      type="tel"
      required
      placeholder="Enter your phone number"
      className="
        mt-5
        w-full
        border-b
        border-white/25
        bg-transparent
        pb-4
        text-[16px]
        outline-none
        placeholder:text-white/30

        md:mt-8
        md:pb-5
        md:text-[18px]
      "
    />

  </div>

  {/* SERVICE */}
  <div>

    <label className="text-[17px] font-semibold tracking-[-0.02em] md:text-[20px]">
      Select Services<span className="text-red-500">*</span>
    </label>

    <select
      required
      defaultValue=""
      className="
        mt-5
        w-full
        border-b
        border-white/25
        bg-transparent
        pb-4
        text-[16px]
        text-white
        outline-none

        md:mt-8
        md:pb-5
        md:text-[18px]
      "
    >

      <option value="" disabled className="bg-black">
        Select a service
      </option>

      <option className="bg-black">
        SEO (Search Engine Optimization)
      </option>

      <option className="bg-black">
        PPC (Google & Meta Ads)
      </option>

      <option className="bg-black">
        Social Media Marketing
      </option>

      <option className="bg-black">
        Website Design & Development
      </option>

      <option className="bg-black">
        Brand Building & Strategy
      </option>

      <option className="bg-black">
        Digital Strategy & Consulting
      </option>

      <option className="bg-black">
        All Services
      </option>

    </select>

  </div>

  {/* MESSAGE */}
  <div>

    <label className="text-[17px] font-semibold tracking-[-0.02em] md:text-[20px]">
      Message / Project Details<span className="text-red-500">*</span>
    </label>

    <textarea
      rows="5"
      required
      placeholder="Tell us about your project, goals and timeline..."
      className="
        mt-5
        w-full
        resize-none
        border-b
        border-white/25
        bg-transparent
        pb-4
        text-[16px]
        outline-none
        placeholder:text-white/30

        md:mt-8
        md:pb-5
        md:text-[18px]
      "
    />

  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="
      mt-4
      h-[52px]
      w-full
      rounded-full
      bg-white
      text-[14px]
      font-semibold
      uppercase
      tracking-wide
      text-black
      transition-all
      duration-300
      hover:scale-[1.01]

      md:mt-8
      md:h-[58px]
      md:text-[15px]
    "
  >
    Submit
  </button>

</form>

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}
     <div className="relative z-20 -mt-24">
  {/* <AboutTestimonial /> */}
</div>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Contact;