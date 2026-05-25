import xIcon from "../assets/logos/x.svg";
import instaIcon from "../assets/logos/instagram.svg";
import facebookIcon from "../assets/logos/facebook.svg";
import youtubeIcon from "../assets/logos/youtube.svg";
import { Link } from "react-router-dom";

// import threadIcon from "../assets/logos/thread.svg";

function Footer() {
  return (
    <footer className="bg-black px-3 pb-3 pt-24 md:min-h-screen">
  <div className="flex min-h-[calc(100vh-108px)] flex-col rounded-[18px] bg-[#f3f3f3] px-6 py-6 text-black md:px-10 md:py-8">


        {/* TOP */}
        <div className="grid grid-cols-1 gap-10 border-b border-black/10 pb-8 md:grid-cols-2">

          {/* PHONE */}
          <div>

            <p className="text-[20px] font-semibold text-black/45">
              Call Today :
            </p>

            <a
              href="tel:+625237351221"
              className="mt-2 inline-block text-[20px] font-semibold"
            >
               +91 7738788775
            </a>

          </div>

          {/* EMAIL */}
          {/* <div className="md:text-center">

            <p className="text-[20px] font-semibold text-black/45">
              Email :
            </p>

            <a
              href="mailto:hello.nomore@gmail.com"
              className="mt-2 inline-block text-[20px] font-semibold"
            >
              hello.nomore@gmail.com
            </a>

          </div> */}

          {/* Email */}
          <div className="md:text-right">

            <p className="text-[20px] font-semibold text-black/45">
              Email :
            </p>

            <a
              href="mailto:support-nomore@gmail.com"
              className="mt-2 inline-block text-[20px] font-semibold"
            >
               info@elev8edge.com
            </a>

          </div>

        </div>

        {/* CENTER */}
       <div className="flex flex-1 top-40px items-center justify-center border-b border-black/10">

        <a
          href="/contact"
          className="text-center text-[14vw] font-semibold uppercase leading-[0.9] tracking-[-0.07em] transition-transform duration-500 hover:scale-[1.02]"
        >
          LET’S-TALK
        </a>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-8 pt-8 md:flex-row">

          {/* LEFT */}
          <div className="flex flex-wrap items-center gap-6 text-[18px] font-medium">

            <p>
              Designed by <span className="text-black/45">Elev8edge</span>
            </p>

            <p>
              Powered by <span className="text-black/45">Elev8edge</span>
            </p>

          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-5">

            {/* X / TWITTER */}
            <a
              href="https://x.com/ElevatedgeM"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <img
                src={xIcon}
                alt="X"
                className="h-7 w-7 object-contain"
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/elev8edge.official?igsh=MTAwbGI2bDh3MDVtOA=="
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <img
                src={instaIcon}
                alt="Instagram"
                className="h-7 w-7 object-contain"
              />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/profile.php?id=61582908012391"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="h-7 w-7 object-contain"
              />
            </a>

            {/* YOUTUBE */}
            <a
              href="https://youtube.com/@elev8edgeofficial?si=0PFQpDz53ewE-Nq1"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="h-7 w-7 object-contain"
              />
            </a>

          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap items-center gap-6 text-[18px] text-black/55">

            <Link to="/terms-conditions">
              Terms & Conditions
            </Link>

            <Link to="/privacy-policy">
              Privacy policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;