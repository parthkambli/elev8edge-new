import xIcon from "../assets/logos/x.svg";
import instaIcon from "../assets/logos/instagram.svg";
import linkedinIcon from "../assets/logos/linkedin.svg";
import threadIcon from "../assets/logos/thread.svg";

function Footer() {
  return (
    <footer className="bg-black px-3 pb-3 pt-24 md:min-h-screen">
  <div className="flex min-h-[calc(100vh-108px)] flex-col rounded-[18px] bg-[#f3f3f3] px-6 py-6 text-black md:px-10 md:py-8">


        {/* TOP */}
        <div className="grid grid-cols-1 gap-10 border-b border-black/10 pb-8 md:grid-cols-3">

          {/* PHONE */}
          <div>

            <p className="text-[20px] font-semibold text-black/45">
              Call Today :
            </p>

            <a
              href="tel:+625237351221"
              className="mt-2 inline-block text-[20px] font-semibold"
            >
              +62 523 735 1221
            </a>

          </div>

          {/* EMAIL */}
          <div className="md:text-center">

            <p className="text-[20px] font-semibold text-black/45">
              Email :
            </p>

            <a
              href="mailto:hello.nomore@gmail.com"
              className="mt-2 inline-block text-[20px] font-semibold"
            >
              hello.nomore@gmail.com
            </a>

          </div>

          {/* ADMIN */}
          <div className="md:text-right">

            <p className="text-[20px] font-semibold text-black/45">
              Admin :
            </p>

            <a
              href="mailto:support-nomore@gmail.com"
              className="mt-2 inline-block text-[20px] font-semibold"
            >
              support-nomore@gmail.com
            </a>

          </div>

        </div>

        {/* CENTER */}
       <div className="flex flex-1 top-40px items-center justify-center border-b border-black/10">

          <a
            href="/contact"
            className="text-center text-[14vw] font-black uppercase leading-none tracking-[-0.08em] transition-transform duration-500 hover:scale-[1.02]"
          >
            LET’S-TALK
          </a>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-8 pt-8 md:flex-row">

          {/* LEFT */}
          <div className="flex flex-wrap items-center gap-6 text-[18px] font-medium">

            <p>
              Designed by <span className="text-black/45">Vektora</span>
            </p>

            <p>
              Powered by <span className="text-black/45">Webflow</span>
            </p>

          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-5">

            {/* X */}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <img
                src={xIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <img
                src={instaIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />
            </a>

            {/* LINKEDIN */}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <img
                src={linkedinIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />
            </a>

            {/* THREAD */}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              <img
                src={threadIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />
            </a>

          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap items-center gap-6 text-[18px] text-black/55">

            <a href="/">
              Style guide
            </a>

            <a href="/">
              Licenses
            </a>

            <a href="/">
              Changelog
            </a>

            <a href="/">
              404
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;