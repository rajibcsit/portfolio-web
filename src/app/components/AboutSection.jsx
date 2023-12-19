"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className=" font-semibold"> Off-Page SEO </li>
        <li className="mt-2 font-semibold"> On-Page SEO </li>
        <li className="mt-2 font-semibold"> Organic Search </li>
        <li className="mt-2 font-semibold"> Yoast SEO Plugin </li>
        <li className="mt-2 font-semibold"> Keyword Research </li>
        <li className="mt-2 font-semibold"> Keyword Analysis </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="font-semibold">National University Of Bangladesh.</li>
        <span className="text-[12px] font-medium">Master&apos;s degree, ICT.</span>

        <li className="mt-3 font-semibold">Carmichael College Rangpur</li>
        <span className="text-[12px] font-medium">Master of Arts - MA, ICT.</span>

        <li className="mt-3 font-semibold">National University Bangladesh</li>
        <span className="text-[12px] font-medium">
          Bachelor&apos;s Degree, Islamic History & Culture.
        </span>

        <li className="mt-3 font-semibold">Shathibari Degree College,Rangpur.</li>
        <span className="text-[12px] font-medium">Higher Secondary Certificate - HSC.</span>

        <li className="mt-3 font-semibold">Panbazar D.M High High School.</li>
        <span className="text-[12px] font-medium">Secondary School Certificate - SSC.</span>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-[#F5F5FC]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about-img" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  mb-4">About Me</h2>
          <p className="text-sm lg:text-base">
            I'm Al-Hasan Sarkar, a Professional SEO Expert From Bangladesh. I provide you both
            On-Page and Off-Page SEO services with a special focus on Guest Posting, Link Building,
            Content & Social Media Marketing. I can be your "SEO Guy" to ensure instant rankings on
            Google and quick recovery from a penalty like Panda, Penguin, Hummingbird, and other
            issues. You believe in results, i.e. better engagement, more traffic, and higher
            conversion. I'm ready to take the challenge.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
