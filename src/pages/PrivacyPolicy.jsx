import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
            Privacy
            <br />
            Policy
          </h1>

          <p className="mt-10 max-w-[720px] text-lg leading-[1.8] text-white/70 md:text-2xl">
            This Privacy Policy explains how Elev8edge collects,
            uses, and protects your information when you use our
            website or services.
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
    title: "Information We Collect",
    content:
      `We may collect personal information such as your name, email address, phone number, and business details when you contact us or use our services.`,
  },
  {
    title: "How We Use Information",
    content:
      `Your information is used to provide services, communicate with you, improve our website experience, and deliver marketing or business-related updates.`,
  },
  {
    title: "Data Protection",
    content:
      `We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.`,
  },
  {
    title: "Cookies",
    content:
      `Our website may use cookies and analytics tools to improve user experience and monitor website performance.`,
  },
  {
    title: "Third Party Services",
    content:
      `We may use trusted third-party tools or platforms for analytics, communication, advertising, or payment processing.`,
  },
  {
    title: "Your Rights",
    content:
      `You may request access, correction, or deletion of your personal information by contacting us directly.`,
  },
  {
    title: "Policy Updates",
    content:
      `We may update this Privacy Policy periodically. Continued use of the website means you accept the updated policy.`,
  },
  {
    title: "Contact",
    content:
      `For privacy-related concerns, contact us at info@elev8edge.com`,
  },
];

export default PrivacyPolicy;