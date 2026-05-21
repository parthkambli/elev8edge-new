import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const team = [
  {
    name: "SOMANSHU VERMA",
    role: "DIRECTOR & CO FOUNDER",
    image: "/images/team1.jpg",
  },
  {
    name: "PRAVIN ZINJURDE",
    role: "DIRECTOR & CO FOUNDER",
    image: "/images/team2.jpg",
  },
  {
    name: "EVA PROMISE NAIGAGA",
    role: "DIRECTOR (UGANDA) & HEAD OF OPERATION",
    image: "/images/team3.jpg",
  },
];

function TeamSection() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current = cardsRef.current.filter(Boolean);

    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    gsap.from(cardsRef.current, {
      y: 140,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
    });
  });

  return (
    <section className="relative overflow-hidden bg-black px-7 pb-28 pt-8 text-white md:px-14">

      {/* HEADING */}
      <div className="mb-24 overflow-hidden text-center">

        <h2
          ref={titleRef}
          className="translate-y-40 text-[15vw] font-black uppercase leading-[0.82] tracking-[-0.09em] opacity-0 md:text-[8vw]"
        >
          <span className="text-[#d9fbff]">
            PEOPLE
          </span>{" "}
          BEHIND
          <br />
          ELEV8EDGE
        </h2>

      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

        {team.map((member, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`
              group w-full md:w-[31%]
              ${index === 1 ? "md:mt-32" : ""}
              ${index === 2 ? "md:mt-14" : ""}
            `}
          >

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[22px] bg-[#111]">

              <img
                src={member.image}
                alt={member.name}
                className="h-[620px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

            </div>

            {/* INFO */}
            <div className="mt-5 flex items-center justify-between">

              <h3 className="text-[24px] font-semibold">
                {member.name}
              </h3>

              <p className="text-[20px] text-white/40">
                {member.role}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TeamSection;