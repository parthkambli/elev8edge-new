import React from "react";
import Footer from "../components/Footer";

const TermsConditions = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative border-b border-white/10 px-6 pb-16 pt-40 md:px-12">
        <div className="max-w-[1400px]">
          <p className="mb-6 text-lg font-medium text-white/60">
            Legal
          </p>

          <h1
            className="text-[16vw] uppercase leading-[0.82] tracking-[-0.08em] md:text-[9vw]"
            style={{ fontFamily: "Anton" }}
          >
            Terms &
            <br />
            Conditions
          </h1>

          <p className="mt-10 max-w-[720px] text-lg leading-[1.8] text-white/70 md:text-2xl">
            These Terms & Conditions govern your use of Elev8edge’s
            website, services, and digital experiences. By accessing
            this website, you agree to comply with these terms.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-[1100px] space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-12"
            >
              <h2 className="text-3xl font-black uppercase md:text-5xl">
                {section.title}
              </h2>

              <p className="mt-6 whitespace-pre-line text-lg leading-[1.9] text-white/70 md:text-xl">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

const sections = [
  {
    title: "Use Of Website",
    content:
      `You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.`,
  },
  {
    title: "Intellectual Property",
    content:
      `All content, branding, visuals, graphics, videos, and website assets are the intellectual property of Elev8edge unless otherwise stated. Unauthorized reproduction or distribution is prohibited.`,
  },
  {
    title: "Services",
    content:
      `Project timelines, deliverables, and pricing are agreed upon separately with each client. Elev8edge reserves the right to refuse or terminate services if misuse, abuse, or unethical activity is identified.`,
  },
  {
    title: "Third Party Links",
    content:
      `Our website may contain links to third-party platforms or services. We are not responsible for the content, policies, or practices of external websites.`,
  },
  {
    title: "Limitation Of Liability",
    content:
      `Elev8edge shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or services.`,
  },
  {
    title: "Changes To Terms",
    content:
      `We reserve the right to update or modify these Terms & Conditions at any time without prior notice.`,
  },
  {
    title: "Contact",
    content:
      `For any legal or business-related queries, contact us at info@elev8edge.com`,
  },
];

export default TermsConditions;