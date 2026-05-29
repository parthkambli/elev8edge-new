










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
        <div className="grid grid-cols-1 gap-8 border-b border-black/10 pb-8 text-center md:grid-cols-2 md:text-left">

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
          <div className="text-center md:text-right">

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
        <div className="flex flex-1 items-center justify-center border-b border-black/10">

          <a
            href="/contact"
            className="
              text-center
              uppercase
              font-semibold
              leading-[0.82]
              tracking-[-0.08em]
              text-[20vw]
              sm:text-[18vw]
              md:text-[120px]
              lg:text-[250px]
              break-words
              font-['Inter']
              transition-transform
              duration-500
              hover:scale-[1.01]
            "
            style={{
              fontVariationSettings: '"slnt" 0',
            }}
          >
            LET’S-TALK
          </a>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-10 pt-8 text-center md:flex-row md:text-left">

          {/* LEFT */}
          <div className="flex flex-col items-center gap-3 text-center text-[16px] font-medium md:flex-row md:gap-6 md:text-left md:text-[18px]">

            <p>
              Designed by <span className="text-black/45">Elev8edge</span>
            </p>

            <p>
              Powered by <span className="text-black/45">Elev8edge</span>
            </p>

          </div>

          {/* SOCIALS */}
          <div className="flex items-center justify-center gap-5">

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
          <div className="flex flex-col items-center justify-center gap-3 text-center text-[16px] text-black/55 md:flex-row md:gap-6 md:text-left md:text-[18px]">

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