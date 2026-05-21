function LocationSection() {
  return (
    <section className="bg-black px-6 py-28 text-white md:px-14">

      {/* TOP HEADING */}
      <div className="mb-20">

        <div className="mb-5 flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-[#d9fbff]" />

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/70">
            FIND US HERE
          </p>
        </div>

        <h2 className="text-[13vw] font-[900] uppercase leading-[0.85] tracking-[-0.08em] md:text-[6vw]">
          OUR
          <span className="text-[#d9fbff]"> LOCATIONS</span>
        </h2>

      </div>

      {/* LOCATIONS */}
      <div className="grid gap-14 md:grid-cols-2">

        {/* INDIA */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">

          {/* MAP */}
          <div className="h-[420px] w-full overflow-hidden">

            <iframe
              title="India Office"
              src="https://www.google.com/maps?q=Vedant+Ayush,+Sector+23,+Ulwe,+Maharashtra+410206&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="h-full w-full grayscale invert"
            />

          </div>

          {/* CONTENT */}
          <div className="p-8">

            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#d9fbff]">
              INDIA OFFICE
            </p>

            <p className="max-w-[500px] text-[28px] font-semibold leading-[1.3] tracking-[-0.03em]">
              Vedant Ayush, Flat 101, Plot 120, Sector 23,
              Ulwe, Maharashtra 410206
            </p>

            <a
              href="https://maps.google.com/?q=Vedant+Ayush,+Sector+23,+Ulwe,+Maharashtra+410206"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-white/70 transition-all duration-300 hover:text-white"
            >
              Open Google Maps
              <span className="text-[#d9fbff]">↗</span>
            </a>

          </div>

        </div>

        {/* UGANDA */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">

          {/* MAP */}
          <div className="h-[420px] w-full overflow-hidden">

            <iframe
              title="Uganda Office"
              src="https://www.google.com/maps?q=Willdee’s+Plaza,+Baita,+Entebbe,+Uganda&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="h-full w-full grayscale invert"
            />

          </div>

          {/* CONTENT */}
          <div className="p-8">

            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#d9fbff]">
              UGANDA OFFICE
            </p>

            <p className="max-w-[500px] text-[28px] font-semibold leading-[1.3] tracking-[-0.03em]">
              Shop No. MM 48, Willdee’s Plaza,
              Baita, Entebbe, Uganda
            </p>

            <p className="mt-5 text-xl text-white/70">
              +256 780921275
            </p>

            <a
              href="https://maps.google.com/?q=Willdee’s+Plaza,+Baita,+Entebbe,+Uganda"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-white/70 transition-all duration-300 hover:text-white"
            >
              Open Google Maps
              <span className="text-[#d9fbff]">↗</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LocationSection;